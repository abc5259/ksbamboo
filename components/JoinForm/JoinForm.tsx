import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../LoginForm/LoginFormStyles";
import { Form, JoinContainer, Title, Input, Button } from "./JoinFormStyles";

interface IJoinForm {
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
}

const JoinForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IJoinForm>();
  return (
    <JoinContainer>
      <Title>KSB 회원가입</Title>
      <Form>
        <Input
          {...register("email", {
            required: "이메일을 적어주세요",
            validate: value =>
              value.includes("@") ? true : "이메일이어야 합니다.",
          })}
          name="email"
          placeholder="이메일"
        />
        <ErrorMessage></ErrorMessage>
        <Input name="nickname" placeholder="닉네임" />
        <Input name="password" placeholder="비밀번호" />
        <Input name="passwordConfoirm" placeholder="비밀번호 확인" />
        <Button type="submit">회원가입</Button>
      </Form>
    </JoinContainer>
  );
};

export default JoinForm;
