import Atom from "../../atoms";
import { StyledNotificationCard } from "./NotificationCardStyles";

export interface INotificationCardProps {
  boardTitle: string;
  commentMessage: string;
  createAt: Date;
}

const NotificationCard = ({
  boardTitle,
  commentMessage,
  createAt,
}: INotificationCardProps) => {
  return (
    <StyledNotificationCard>
      <div className="notification_info">
        <Atom.Avatar />
        <div className="notification_message">
          <Atom.Title fontWeight={500} fontSize="14px">
            {boardTitle} 게시글에 댓글이 달렸어요
          </Atom.Title>
          <p>{commentMessage}</p>
        </div>
      </div>
      <Atom.Time createdAt={createAt} />
    </StyledNotificationCard>
  );
};

export default NotificationCard;
