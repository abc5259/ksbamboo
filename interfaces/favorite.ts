import IBoard from "./board";
import User from "./user";

export interface Favorite {
  id: number;
  user: User;
  board: IBoard;
}
