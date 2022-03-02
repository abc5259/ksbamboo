import IBoard from "./board";
import User from "./user";

export interface Like {
  id: number;
  user: User;
  board: IBoard;
}
