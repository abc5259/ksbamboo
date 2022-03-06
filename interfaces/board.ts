import Comment from "./comment";
import { Favorite } from "./favorite";
import { Like } from "./like";
import User from "./user";

export default interface IBoard {
  id: number;
  title: string;
  content: string;
  status: string;
  user: User;
  createdAt: Date;
  category: string;
  comments?: Comment[];
  likes?: Like[];
  favorites?: Favorite[];
}
