import Atom from "../../atoms";
import { StyledNotificationCard } from "./NotificationCardStyles";

export interface INotificationCardProps {}

const NotificationCard = (props: INotificationCardProps) => {
  return (
    <StyledNotificationCard>
      <div className="notification_info">
        <Atom.Avatar />
        <div className="notification_message">
          <Atom.Title fontWeight={500} fontSize="14px">
            유리님이 댓글을 남겼어요
          </Atom.Title>
          <p>무슨 게시글에 대한 댓글이에요</p>
        </div>
      </div>
      <Atom.Time createdAt={new Date()} />
    </StyledNotificationCard>
  );
};

export default NotificationCard;
