import IBoard from "../../../interfaces/board";
import Board from "../../molecules/Board/Board";

export interface IOrgAllBoardsProps {
  boards: IBoard[];
  isNotboards?: boolean;
}

const AllBoards = ({ boards, isNotboards }: IOrgAllBoardsProps) => {
  return (
    <>
      {!isNotboards ? (
        boards.map(board => {
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
              commentLength={board.comments?.length}
              likesLength={board.likes?.length}
            />
          );
        })
      ) : (
        <div>게시글이 존재하지 않습니다.</div>
      )}
    </>
  );
};

export default AllBoards;
