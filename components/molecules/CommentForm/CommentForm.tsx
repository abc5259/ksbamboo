import { AxiosError } from "axios";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { createBoardCommentAPI } from "../../../apis/board";
import Comment from "../../../interfaces/comment";
import Atom from "../../atoms";
import { StyledCommentForm } from "./CommentFormStyles";

interface IForm {
  content: string;
}

export interface ICommentFormProps {
  token: string;
  boardId: number;
}

const CommentForm = ({ token, boardId }: ICommentFormProps) => {
  const queryClient = useQueryClient();
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<IForm>();
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
  const onValid = (data: IForm) => {
    if (!queryClient.getQueryData("user")) {
      return toast.error("로그인이 필요합니다.");
    }
    mutation.mutate({
      token,
      ...data,
      boardId,
    });
  };
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
        <Atom.Message fontSize="0.9rem" className="error">
          {errors.content?.message}
        </Atom.Message>
      </div>
      <Atom.Button
        className="small"
        bgColor="#E7F5E9"
        color="inherit"
        redius={7}
      >
        작성하기
      </Atom.Button>
    </StyledCommentForm>
  );
};

export default CommentForm;
