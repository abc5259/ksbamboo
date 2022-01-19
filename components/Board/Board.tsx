import { useRecoilValue } from "recoil";
import { boardsAtom } from "../../atom/atoms";
import { BoardStyle } from "./BoardStyles";

interface IBoardProps {
  boardId: number;
}

const Board = ({ boardId }: IBoardProps) => {
  const boards = useRecoilValue(boardsAtom);
  const board = boards.find(board => board.id === boardId);
  return (
    <BoardStyle>
      <h1>{board?.title}</h1>
      <p>{board?.content}</p>
      <h3>{board?.user.nickname}</h3>
    </BoardStyle>
  );
};

export default Board;
