import { AxiosError } from "axios";
import React, {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { createBoardAPI, editBoardAPI } from "../../../apis/board";
import IBoard from "../../../interfaces/board";
import Atom from "../../atoms";
import Molecule from "../../molecules";
import { Form } from "./BoardFormStyles";
import { useRouter } from "next/router";

interface IBoardForm {
  title: string;
  content: string;
}

export interface IBoardFormProps {
  mb?: string;
  token?: string;
  current_textArea?: string;
  current_title?: string;
  edit?: boolean;
  boardId?: number;
  setEditBoard?: Dispatch<SetStateAction<boolean>>;
}

const BoardForm = (props: IBoardFormProps) => {
  const [boardCategory, setBoardCategory] = useState("");
  const router = useRouter();
  const { category } = router.query;
  useEffect(() => {
    const routerCategory = category ? category : "전체";
    setBoardCategory(routerCategory as string);
  }, [category]);
  const queryClient = useQueryClient();
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IBoardForm>({
    defaultValues: {
      title: `${props.current_title || ""}`,
      content: `${props.current_textArea || ""}`,
    },
  });
  //Create Board
  const mutation = useMutation<
    { board: IBoard }, //success했을때 data값의 타입
    AxiosError, // error타입
    { token: string; title: string; content: string; category: string } // loginAPI의 인자로 들어갈 타입
  >("createBoard", createBoardAPI, {
    onMutate: () => {}, // 뮤테이션 시작
    onError: error => {
      // 에러가 났음
      if (error.response?.data.statusCode === 400) {
        toast.error(error.response.data.message[0]);
      } else {
        toast.error(error.response?.data.message);
      }
    },
    onSuccess: data => {
      // 성공
      queryClient.refetchQueries(["boards", boardCategory]);
      queryClient.setQueryData("createBoard", data); //myBoards 이름으로 data.board값이 캐싱됨
      queryClient.refetchQueries("allboards");
      queryClient.refetchQueries("user");
      setValue("title", "");
      setValue("content", "");
    },
    onSettled: () => {}, // 성공이든 에러든 어쨌든 끝났을 때
  });

  //Edit Board
  const editBoardMutation = useMutation<
    { board: IBoard },
    AxiosError,
    {
      title?: string;
      content?: string;
      boardId: number;
      token: string;
    }
  >("editBoard", editBoardAPI, {
    onError: error => {
      // 에러가 났음
      if (error.response?.data.statusCode === 400) {
        toast.error(error.response.data.message[0]);
      } else {
        toast.error(error.response?.data.message);
      }
    },
    onSuccess: () => {
      if (props.setEditBoard) {
        props.setEditBoard(prev => !prev);
      }
      queryClient.refetchQueries(["board", `${props.boardId}`]);
      toast.success("해당 게시물이 수정되었습니다.");
    },
  });

  const onValid = (data: IBoardForm) => {
    if (!props.token) {
      return toast.error("로그인이 필요합니다.");
    }
    if (props.edit) {
      editBoardMutation.mutate({
        token: props.token,
        ...data,
        boardId: props.boardId as number,
      });
    } else {
      mutation.mutate({
        token: props.token,
        ...data,
        category: boardCategory as string,
      });
    }
  };

  const onEditCancelClick = useCallback(() => {
    if (props.setEditBoard) {
      props.setEditBoard(prev => !prev);
    }
  }, [props.edit, props.setEditBoard]);

  return (
    <>
      <Atom.Tag>{boardCategory} 게시판</Atom.Tag>
      <Form mb={props.mb} onSubmit={handleSubmit(onValid)}>
        <Molecule.BoardInput
          register={{
            ...register("title", {
              required: "제목을 입력하세요",
              maxLength: { value: 30, message: "제목은 30자 이하여야 합니다" },
            }),
          }}
        />
        <Atom.Message className="error" fontSize="0.9rem">
          {errors.title?.message}
        </Atom.Message>
        <Atom.Textarea
          register={{
            ...register("content", {
              required: "content를 입력하세요",
            }),
          }}
          placeholder="타인을 향한 욕설 및 비방은 징계 대상입니다."
          animateheight={300}
          value={watch("content")}
          success={`${mutation.isSuccess}`}
        ></Atom.Textarea>
        <Atom.Message className="error" fontSize="0.9rem">
          {errors.content?.message}
        </Atom.Message>
        <div className="boardForm_button">
          <Atom.Button
            className="small"
            bgColor="#E7F5E9"
            color="inherit"
            redius={7}
          >
            {!props.edit ? "작성하기" : "수정하기"}
          </Atom.Button>
        </div>
        {props.edit && (
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
      </Form>
    </>
  );
};

export default BoardForm;
