import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({
        origin: 'http://localhost:3000',
        methods: 'GET,POST,PUT,DELETE',
        allowedHeaders: 'Content-Type,Authorization',
    });

	const options = new DocumentBuilder()
		.setTitle('NestJs Api')
		.setDescription('Stream Games Tournaments Api')
		.setVersion('1.0.0')
		.addBearerAuth()
		.build();

	const document = SwaggerModule.createDocument(app, options);
	SwaggerModule.setup('api', app, document);
	await app.listen(3001);
}
bootstrap();
