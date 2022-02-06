import { AxiosError } from "axios";
import { useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { createBoardAPI } from "../../../apis/board";
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
  token?: string;
}

const BoardForm = (props: IBoardFormProps) => {
  const [boardCategory, setBoardCategory] = useState("");
  const [postSuccess, setSuccess] = useState("");
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
  } = useForm<IBoardForm>();
  const mutation = useMutation<
    { board: IBoard }, //success했을때 data값의 타입
    AxiosError, // error타입
    { token: string; title: string; content: string; category: string } // loginAPI의 인자로 들어갈 타입
  >("myBoards", createBoardAPI, {
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
      setSuccess("true");
      console.log(data);
      queryClient.refetchQueries(["boards", boardCategory]);
      queryClient.setQueryData("myBoards", data); //myBoards 이름으로 data.board값이 캐싱됨
      queryClient.refetchQueries("allboards");
      queryClient.refetchQueries("user");
      setValue("title", "");
      setValue("content", "");
    },
    onSettled: () => {}, // 성공이든 에러든 어쨌든 끝났을 때
  });

  const onValid = (data: IBoardForm) => {
    //서버로 데이터 보내기 (게시물 생성) with React Query
    if (!props.token) {
      return toast.error("로그인이 필요합니다.");
    }
    mutation.mutate({
      token: props.token,
      ...data,
      category: boardCategory as string,
    });
  };
  // console.log("router", category);

  return (
    <>
      <Atom.Tag>{boardCategory} 게시판</Atom.Tag>
      <Form onSubmit={handleSubmit(onValid)}>
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
          success={postSuccess}
        ></Atom.Textarea>
        <Atom.Message className="error" fontSize="0.9rem">
          {errors.content?.message}
        </Atom.Message>
        <Atom.Button
          className="small"
          bgColor="#E7F5E9"
          color="inherit"
          redius={7}
        >
          작성하기
        </Atom.Button>
      </Form>
    </>
  );
};

export default BoardForm;
