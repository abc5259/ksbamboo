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
        boardId={board.id}
        title={board.title}
        content={board.content}
        status={board.status}
        category={board.category}
        createdAt={board.createdAt}
        user={board.user}
        myId={loginUserId}
      />
      <Molecule.CommentForm token={token} boardId={board.id} />
      <div className="commentWrapper">
        {board.comments?.map(comment => (
          <Molecule.Comment
            key={comment.id}
            content={comment.content}
            user={comment.user}
            status={comment.status}
            createdAt={comment.createdAt}
            myId={loginUserId}
          />
        ))}
      </div>
    </StyledBoardDetailAndComment>
  );
};

export default BoardDetailAndComment;
