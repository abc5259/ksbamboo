import IBoard from "./board";

export default interface User {
  id: number;
  username: string;
  email: string;
  password: string;
  verified: boolean;
  ksDeparment: string;
  boards?: IBoard[];
}
