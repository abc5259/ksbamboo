import IBoard from "../../../interfaces/board";
import Molecule from "../../molecules";
import BoardDetail from "../../molecules/BoardDetail/BoardDetail";
import { StyledBoardDetailAndComment } from "./BoardDetailAndCommentStyles";

export interface IBoardDetailAndCommentProps {
  board: IBoard;
  loginUserId: number;
}

const BoardDetailAndComment = ({
  board,
  loginUserId,
}: IBoardDetailAndCommentProps) => {
  return (
    <StyledBoardDetailAndComment>
      <BoardDetail
        boardId={board.id}
        title={board.title}
        content={board.content}
        status={board.status}
        category={board.category}
        createdAt={board.createdAt}
        user={board.user}
        myId={loginUserId}
        likes={board.likes}
      />
      <div className="commentWrapper">
        {board.comments?.map(comment => (
          <Molecule.Comment
            key={comment.id}
            content={comment.content}
            user={comment.user}
            status={comment.status}
            createdAt={comment.createdAt}
            myId={loginUserId}
            writerId={board.user.id}
            commentId={comment.id}
            boardId={board.id}
          />
        ))}
      </div>
      <Molecule.CommentForm boardId={board.id} />
    </StyledBoardDetailAndComment>
  );
};

export default BoardDetailAndComment;
