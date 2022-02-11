import { AxiosError } from "axios";
import { Dispatch, SetStateAction, useCallback } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import {
  createBoardCommentAPI,
  updateBoardCommentAPI,
} from "../../../apis/board";
import Comment from "../../../interfaces/comment";
import Atom from "../../atoms";
import { StyledCommentForm } from "./CommentFormStyles";

interface IForm {
  content: string;
}

export interface ICommentFormProps {
  token: string;
  boardId: number;
  current_content?: string;
  editComment?: boolean;
  setEditComment?: Dispatch<SetStateAction<boolean>>;
  commentId?: number;
}

const CommentForm = ({
  token,
  boardId,
  current_content,
  editComment,
  setEditComment,
  commentId,
}: ICommentFormProps) => {
  const queryClient = useQueryClient();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>({
    defaultValues: {
      content: `${current_content || ""}`,
    },
  });
  const mutation = useMutation<
    Comment,
    AxiosError,
    { token: string; content: string; boardId: number }
  >("createBoardComment", createBoardCommentAPI, {
    onError: error => {
      if (error.response?.data.statusCode === 400) {
        toast.error(error.response.data.message[0]);
      } else {
        toast.error(error.response?.data.message);
      }
    },
    onSuccess: data => {
      queryClient.refetchQueries(["board", `${boardId}`]);
      setValue("content", "");
    },
  });

  const editMutation = useMutation<
    Comment,
    AxiosError,
    { token: string; content: string; boardId: number; commentId: number }
  >("createBoardComment", updateBoardCommentAPI, {
    onError: error => {
      if (error.response?.data.statusCode === 400) {
        toast.error(error.response.data.message[0]);
      } else {
        toast.error(error.response?.data.message);
      }
    },
    onSuccess: () => {
      queryClient.refetchQueries(["board", `${boardId}`]);
      if (setEditComment) {
        setEditComment(prev => !prev);
      }
      toast.success("해당 댓글이 수정되었습니다.");
    },
  });
  const onValid = (data: IForm) => {
    if (!queryClient.getQueryData("user")) {
      return toast.error("로그인이 필요합니다.");
    }
    if (editComment && commentId) {
      editMutation.mutate({
        token,
        ...data,
        boardId,
        commentId,
      });
    } else {
      mutation.mutate({
        token,
        ...data,
        boardId,
      });
    }
  };

  const onEditCancelClick = useCallback(() => {
    if (setEditComment) {
      setEditComment(prev => !prev);
    }
  }, [editComment, setEditComment]);

  return (
    <StyledCommentForm onSubmit={handleSubmit(onValid)}>
      <div className="commentForm_content">
        <Atom.Textarea
          placeholder="댓글을 입력하세요."
          animateheight={100}
          register={{
            ...register("content", {
              required: "댓글을 입력하세요.",
            }),
          }}
          value={watch("content")}
          success={`${mutation.isSuccess}`}
        />
        <Atom.Button
          className="small"
          bgColor="#E7F5E9"
          color="inherit"
          redius={7}
        >
          {!editComment ? "작성하기" : "수정하기"}
        </Atom.Button>
      </div>
      <Atom.Message fontSize="0.9rem" className="error">
        {errors.content?.message}
      </Atom.Message>
      {editComment && (
        <Atom.Button
          bgColor="#ace4b4"
          color="inherit"
          type="button"
          width="80px"
          height="30px"
          onClick={onEditCancelClick}
        >
          글 수정 취소
        </Atom.Button>
      )}
    </StyledCommentForm>
  );
};

export default CommentForm;
