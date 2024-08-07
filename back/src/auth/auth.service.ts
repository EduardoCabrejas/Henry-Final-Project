import {
	BadRequestException,
	Injectable,
	InternalServerErrorException,
	Logger,
	UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDto, SignInDto } from './dto/auth.user.Dto';
import { MailService } from 'mail/mail.service';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../../prisma/prisma.service';
import { MailTemplates } from 'mail/mail-templates';

@Injectable()
export class AuthService {
	private readonly logger = new Logger(AuthService.name);

	constructor(
		private readonly prisma: PrismaService,
		private readonly jwtService: JwtService,
		private readonly mailService: MailService,
	) { }

	async signUp(createUserDto: CreateUserDto) {
		const { email, nickname, tokenFirebase, birthdate } = createUserDto;

		const userExists = await this.prisma.user.findUnique({
			where: {
				email,
			},
		});
		if (userExists) {
			if (userExists.isBanned === true)
				throw new BadRequestException(
					`User with email: ${userExists.email} is banned`,
				);
			if (userExists.state === true && userExists.isBanned === false)
				throw new BadRequestException(
					`User with email: ${userExists.email} already exists`,
				);
		}

		const parsedBirthDate = new Date(birthdate);

		const user = await this.prisma.user.create({
			data: {
				email,
				nickname,
				tokenFirebase,
				birthdate: parsedBirthDate.toISOString(),
			},
		});

		const payload = { userId: user.id, email: user.email };
		const token = await this.jwtService.sign(payload);

		const mailOptions = MailTemplates.welcomeEmail(email, nickname);
		try {
			await this.mailService.sendMail(mailOptions);
			this.logger.log(`Welcome email sent to ${email}`);
		} catch (error) {
			this.logger.error(
				`Failed to send welcome email to ${email}`,
				error.stack,
			);
			throw new InternalServerErrorException(
				'Error sending welcome email',
			);
		}

		return {
			message: 'User created successfully',
			user,
			token,
		};
	}

	async signIn(signInDto: SignInDto) {
		const { email, tokenFirebase } = signInDto;


		this.logger.log(`Attempting to sign in user with email: ${email}`);

		const user = await this.prisma.user.findUnique({
			where: { email },
			include: {
				friends: true,
				sentFriendRequests: true,
				sentMessages: true,
				receivedMessages: true,
				globalChat: true,
				tournaments: true,
				organizedTournaments: true,
				teams: {
					include: {
						team: {
							include: {
								tournament: true,
							},
						},
					},
				},
			},
		});

		if (!user) {
			this.logger.warn(`User not found with email: ${email}`);
			throw new UnauthorizedException('Invalid credentials');
		}
		if (user.isBanned === true)
			throw new BadRequestException(
				`User with email: ${user.email} is banned`,
			);
		if (user.state === false) throw new BadRequestException(`User with email: ${user.email} does no exists`)


		const payload = { userId: user.id, email: user.email };
		const token = await this.jwtService.sign(payload);

		this.logger.log(`User signed in successfully with email: ${email}`);


		const singlePlayerTournaments = user.tournaments;
		const teamsTournaments = user.teams.map(
			(team) => team.team.tournament,
		);

		const userTournaments = [
			...singlePlayerTournaments,
			...teamsTournaments,
		];

		const {
			state,
			tournaments,
			isBanned,
			...userNotData
		} = user;

		return {
			message: 'User logged in successfully',
			...userNotData,
			tournaments: userTournaments,
			friends: user.friends,
			token
		};
	}
}
