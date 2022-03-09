import { useQuery } from "react-query";
import { getAllNotifications } from "../../apis/user";
import Atom from "../../components/atoms";
import HeaderLayout from "../../components/layouts/HeaderLayout/HeaderLayout";
import NotificationCards from "../../components/organisms/NotificationCards/NotificationCards";
import { INotification } from "../../interfaces/notification";

const Notification = () => {
  const { data: notifications } = useQuery<INotification[]>(
    "notifications",
    getAllNotifications
  );
  console.log(notifications);
  return (
    <HeaderLayout>
      <Atom.Tag>알림 목록</Atom.Tag>
      {!notifications ? (
        <div>로딩중...</div>
      ) : (
        <NotificationCards notifications={notifications} />
      )}
    </HeaderLayout>
  );
};

export default Notification;
