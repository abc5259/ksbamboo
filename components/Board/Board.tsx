import { useRecoilValue } from "recoil";
import { boardsAtom } from "../../atom/atoms";
import {
  Bottom,
  BoardStyle,
  Content,
  Main,
  Title,
  Author,
  Like,
  LikeWrapper,
} from "./BoardStyles";

interface IBoardProps {
  boardId: number;
}

const Board = ({ boardId }: IBoardProps) => {
  const boards = useRecoilValue(boardsAtom);
  const board = boards.find(board => board.id === boardId);
  return (
    <BoardStyle>
      <Main>
        <Title>{board?.title}</Title>
        <Content>{board?.content}</Content>
      </Main>
      <Bottom>
        <Author>
          By{" "}
          <span>
            {board?.status === "익명" ? "익명" : board?.user.nickname}
          </span>
        </Author>
        <LikeWrapper>
          <Like viewBox="0 0 24 24">
            <path
              fill="currentColor"
              d="M18 1l-6 4-6-4-6 5v7l12 10 12-10v-7z"
            ></path>
          </Like>
          <span>100</span>
        </LikeWrapper>
      </Bottom>
    </BoardStyle>
  );
};

export default Board;
