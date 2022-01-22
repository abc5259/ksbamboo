import { useAnimation } from "framer-motion";
import React from "react";
import { useForm } from "react-hook-form";
import { Button, ErrorMessage, Form, Input, TextArea } from "./BoardFormStyles";
interface IBoardForm {
  title: string;
  content: string;
}

const BoardForm = () => {
  const {
    register,
    watch,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IBoardForm>();
  const textAreaAnimation = useAnimation();

  const onValid = (data: IBoardForm) => {
    //서버로 데이터 보내기 (게시물 생성)
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
      <Input
        {...register("title", {
          required: "제목을 입력하세요",
          maxLength: { value: 30, message: "제목은 30자 이하여야 합니다" },
        })}
        type="text"
        placeholder="제목"
        spellCheck="false"
      />
      <ErrorMessage>{errors.title?.message}</ErrorMessage>
      <TextArea
        {...register("content", {
          required: "content를 입력하세요",
        })}
        // ref={textareaRef}
        placeholder="타인을 향한 욕설 및 비방은 징계 대상입니다."
        initial={{ height: 70 }}
        animate={textAreaAnimation}
        transition={{ type: "linear" }}
        spellCheck="false"
        onFocus={onTextAreaFocus}
        onBlur={onTextAreaBlur}
      ></TextArea>
      <ErrorMessage>{errors.content?.message}</ErrorMessage>
      <Button type="submit">작성하기</Button>
    </Form>
  );
};

export default BoardForm;
