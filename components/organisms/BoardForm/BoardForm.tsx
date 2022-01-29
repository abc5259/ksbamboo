import { useAnimation } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { Board, boardsAtom } from "../../../atom/atoms";
import Atom from "../../atoms";
import { Form, TextArea } from "./BoardFormStyles";
interface IBoardForm {
  title: string;
  content: string;
}

const BoardForm = () => {
  const setBoards = useSetRecoilState(boardsAtom);
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IBoardForm>();
  const textAreaAnimation = useAnimation();

  const onValid = (data: IBoardForm) => {
    //서버로 데이터 보내기 (게시물 생성) with React Query
    //더미데이터
    const board: Board = {
      id: Date.now(),
      title: data.title,
      content: data.content,
      status: "익명",
      department: "컴퓨터공학과",
      user: {
        id: 4,
        username: "serf",
        email: "123@ks.ac.kr",
        verified: true,
        ksDeparment: "컴퓨터공학과",
      },
    };
    setBoards(prevBoards => [board, ...prevBoards]);
    setValue("title", "");
    setValue("content", "");
    textAreaAnimation.start({ height: 70 });
  };

  const onTextAreaFocus = () => {
    textAreaAnimation.start({ height: 300 });
  };

  const onTextAreaBlur = () => {
    if (watch("content")) return;
    textAreaAnimation.start({ height: 70 });
  };

  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Atom.Input
        register={{
          ...register("title", {
            required: "제목을 입력하세요",
            maxLength: { value: 30, message: "제목은 30자 이하여야 합니다" },
          }),
        }}
        type="text"
        placeholder="제목"
        width="50%"
        bgColor="#e7f5e9"
        outlineColor="#6eb9d4"
        fontSize="inherit"
        borderRadius="7px"
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
        animateHeight={300}
        value={watch("content")}
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
  );
};

export default BoardForm;
