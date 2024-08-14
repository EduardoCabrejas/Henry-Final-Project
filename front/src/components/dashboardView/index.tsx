import Image from "next/image";
import { RootState } from "@/redux/store";
import { useSelector } from "react-redux";


export const DashboardView: React.FC = () => {
    const nickname = useSelector((state: RootState) => state.user.user?.nickname)
    const friendsRequests = useSelector((state: RootState) => state.user.user?.receivedFriendRequests);

    const tour = useSelector((state: RootState) => state.user.user?.notifications);
    const notificationsTour = tour?.filter(notifications => notifications.state === true)
    const tournaments = tour?.filter(notifications => notifications.tournamentDate > new Date().toISOString())

    return (
        <div className="grid grid-cols-3">
            <div className="col-span-2">
                <h1 className="heading5 text-lightViolet">{`Hi ${nickname}!`}</h1>

                <div className="flex flex-col gap-2 m-4">
                    <p className="body text-white">{`you have ${tournaments?.length} tournaments incoming`}</p>
                    <p className="body text-white">{`you are in ${notificationsTour?.length} new tournaments`}</p>
                    <p className="body text-white">{`you have ${friendsRequests?.length} unanswered friend requests`}</p>
                </div>

            </div>
            <div className="w-64 h-64 border-lightViolet border-4 rounded-full overflow-hidden">
                <Image src={"/login.jpg"} alt="banner" width={500} height={500} className="w-full h-full object-cover" />
            </div>


        </div>
    )
}