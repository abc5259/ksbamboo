import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Atom from "../../atoms";
import { StyledCommentForm } from "./CommentFormStyles";

interface IForm {
  content: string;
}

export interface ICommentFormProps {}

const CommentForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const queryClient = useQueryClient();
  const onValid = (data: IForm) => {
    if (!queryClient.getQueryData("user")) {
      return toast.error("로그인이 필요합니다.");
    }
    console.log(data);
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
