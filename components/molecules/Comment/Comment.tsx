import { useQueryClient } from "react-query";
import User from "../../../interfaces/user";
import Atom from "../../atoms";
import Title from "../../atoms/Title/Title";
import { StyledComment } from "./CommentStyles";

export interface ICommentProps {
  content: string;
  user: User; //작성자
  status?: string;
  createdAt: Date;
  myId: number;
  //대댓글 목록?
}

const Comment = ({ content, user, status, createdAt, myId }: ICommentProps) => {
  const query = useQueryClient();
  console.log(query.getQueryData("user"));

  return (
    <StyledComment>
      <div className="comment_info">
        <Atom.Avatar className="small" />
        <Title fontSize="0.9rem" fontWeight={700}>
          {status === "PRIVATE" ? "익명" : user.username} ({user.ksDepartment})
        </Title>
        <div className="commment_deletAndEdit">
          {user.id === myId && (
            <>
              <span>수정</span>
              <span>삭제</span>
            </>
          )}
        </div>
      </div>
      <Atom.Content fontSize="0.9rem">{content}</Atom.Content>
      <Atom.Time createdAt={createdAt} />
    </StyledComment>
  );
};

export default Comment;
