import User from "./user";

export default interface Board {
  id: number;
  title: string;
  content: string;
  status: string;
  user: User;
}
