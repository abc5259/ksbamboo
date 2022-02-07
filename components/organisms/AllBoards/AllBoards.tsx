import IBoard from "../../../interfaces/board";
import Board from "../../molecules/Board/Board";
import { StyledAllBoards } from "./AllBoardsStyles";

export interface IOrgAllBoardsProps {
  boards: IBoard[];
}

const AllBoards = ({ boards }: IOrgAllBoardsProps) => {
  const reversBoard = [...boards].reverse();
  return (
    <StyledAllBoards>
      {boards.length > 0 ? (
        [...boards].reverse().map(board => {
          return (
            <Board
              key={board.id}
              boardId={board.id}
              title={board.title}
              content={board.content}
              status={board.status}
              user={board.user}
              category={board.category}
              createdAt={board.createdAt}
            />
          );
        })
      ) : (
        <div>게시글이 존재하지 않습니다.</div>
      )}
    </StyledAllBoards>
  );
};

export default AllBoards;
