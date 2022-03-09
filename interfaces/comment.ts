import IBoard from "./board";
import User from "./user";

export default interface Comment {
  id: number;
  content: string;
  status: string;
  createdAt: Date;
  user: User;
  board: IBoard;
}
