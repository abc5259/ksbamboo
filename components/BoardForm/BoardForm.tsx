import React from "react";
import { useForm } from "react-hook-form";
import { Button, Form, Input, TextArea } from "./BoardFormStyles";

interface IBoardForm {
  title: string;
  content: string;
}

const BoardForm = () => {
  const { register, handleSubmit } = useForm<IBoardForm>();
  const onValid = (data: IBoardForm) => {
    console.log(data);
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <Input
        {...register("title")}
        type="text"
        placeholder="제목"
        spellCheck="false"
      />
      <TextArea
        {...register("content")}
        placeholder="타인을 향한 욕설 및 비방은 징계 대상입니다."
        initial={{ height: 70 }}
        animate={{}}
        spellCheck="false"
      ></TextArea>
      <Button>작성하기</Button>
    </Form>
  );
};

export default BoardForm;
