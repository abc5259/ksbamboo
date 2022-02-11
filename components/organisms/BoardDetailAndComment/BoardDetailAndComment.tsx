import IBoard from "../../../interfaces/board";
import Molecule from "../../molecules";
import { StyledBoardDetailAndComment } from "./BoardDetailAndCommentStyles";

export interface IBoardDetailAndCommentProps {
  board: IBoard;
  loginUserId: number;
  token: string;
}

const BoardDetailAndComment = ({
  board,
  loginUserId,
  token,
}: IBoardDetailAndCommentProps) => {
  return (
    <StyledBoardDetailAndComment>
      <Molecule.BoardDetail
        token={token}
        boardId={board.id}
        title={board.title}
        content={board.content}
        status={board.status}
        category={board.category}
        createdAt={board.createdAt}
        user={board.user}
        myId={loginUserId}
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
            token={token}
            commentId={comment.id}
            boardId={board.id}
          />
        ))}
      </div>
      <Molecule.CommentForm token={token} boardId={board.id} />
    </StyledBoardDetailAndComment>
  );
};

export default BoardDetailAndComment;
