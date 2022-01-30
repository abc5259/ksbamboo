import Link from "next/link";
import { useRecoilValue } from "recoil";
import { boardsAtom } from "../../../atom/atoms";
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
}

const Board = ({ boardId }: IBoardProps) => {
  const boards = useRecoilValue(boardsAtom);
  const board = boards.find(board => board.id === boardId);
  return (
    <Link href={`/board/${boardId}`}>
      <BoardWrapper>
        <Main>
          <Title>{board?.title}</Title>
          <Content>{board?.content}</Content>
          <Time>2021년 1월 19일 수</Time>
        </Main>
        <Bottom>
          <Author>
            By{" "}
            <span>
              {board?.status === "익명" ? "익명" : board?.user.username}
            </span>
          </Author>
          <div>{board?.department}</div>
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
