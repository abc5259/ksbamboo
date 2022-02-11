import { AxiosError } from "axios";
import { useCallback } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { deleteBoardCommentAPI } from "../../../apis/board";
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
  writerId: number;
  token: string;
  commentId: number;
  boardId: number;
  //대댓글 목록?
}

const Comment = ({
  content,
  user,
  status,
  createdAt,
  myId,
  writerId,
  commentId,
  token,
  boardId,
}: ICommentProps) => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation<
    { ok: boolean },
    AxiosError,
    { boardId: number; commentId: number; token: string }
  >("deleteBoardComment", deleteBoardCommentAPI, {
    onError: error => {
      console.log(error);
    },
    onSuccess: () => {
      queryClient.refetchQueries(["board", `${boardId}`]);
      toast.success("해당 댓글이 삭제 되었습니다.");
    },
  });

  const onDeleteComment = useCallback(() => {
    deleteMutation.mutate({
      boardId,
      commentId,
      token,
    });
  }, [boardId, commentId, token]);

  return (
    <StyledComment>
      <div className="comment_info">
        <Atom.Avatar className="small" />
        <Title fontSize="0.9rem" fontWeight={700}>
          {status === "PUBLIC"
            ? `${user.username} (${user.ksDepartment})`
            : writerId === user.id
            ? `글쓴이 (${user.ksDepartment})`
            : `익명 (${user.ksDepartment})`}
        </Title>
        <div className="commment_deletAndEdit">
          {user.id === myId && (
            <>
              <span>수정</span>
              <span onClick={onDeleteComment}>삭제</span>
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
