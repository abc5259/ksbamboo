import Link from "next/link";
import { INotification } from "../../../interfaces/notification";
import NotificationCard from "../../molecules/NotificationCard/NotificationCard";
import { StyledNotificationCards } from "./NotificationCardsStyles";

export interface INotificationCardsProps {
  notifications: INotification[];
}

const NotificationCards = ({ notifications }: INotificationCardsProps) => {
  return (
    <StyledNotificationCards>
      {notifications.map(notification => (
        <Link
          key={notification.id}
          href={`/board/${notification.comment.board.id}`}
        >
          <a>
            <NotificationCard
              boardTitle={notification.comment.board.title}
              commentMessage={notification.comment.content}
            />
          </a>
        </Link>
      ))}
    </StyledNotificationCards>
  );
};

export default NotificationCards;
