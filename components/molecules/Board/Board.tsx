import Link from "next/link";
import User from "../../../interfaces/user";
import Atom from "../../atoms";

import {
  Bottom,
  BoardWrapper,
  Content,
  Main,
  Title,
  Author,
  LikeWrapper,
  Time,
} from "./BoardStyles";

export interface IBoardProps {
  boardId: number;
  title: string;
  content: string;
  status: string;
  user: User;
}

const Board = ({ boardId, title, content, status, user }: IBoardProps) => {
  return (
    <Link href={`/board/${boardId}`}>
      <BoardWrapper>
        <Main>
          <Title>{title}</Title>
          <Content>{content}</Content>
          <Time>2021년 1월 19일 수</Time>
        </Main>
        <Bottom>
          <Author>
            By <span>{status === "PRIVATE" ? "익명" : user.username}</span>
          </Author>
          <div>{user.ksDepartment}</div>
          <LikeWrapper>
            <Atom.Like mr="8px" />
            <span>100</span>
          </LikeWrapper>
        </Bottom>
      </BoardWrapper>
    </Link>
  );
};

export default Board;
