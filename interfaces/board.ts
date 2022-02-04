import User from "./user";

export default interface IBoard {
  id: number;
  title: string;
  content: string;
  status: string;
  user: User;
}
