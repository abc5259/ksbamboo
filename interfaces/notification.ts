import Comment from "./comment";
import User from "./user";

export interface INotification {
  id: number;
  user: User;
  comment: Comment;
}
