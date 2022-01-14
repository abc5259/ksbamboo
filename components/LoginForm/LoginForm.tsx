import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  LoginContainer,
  Register,
  Title,
} from "./LoginFormStyles";

interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ILoginForm>();

  const onValid = (data: ILoginForm) => {
    // 서버요청
    setValue("email", "");
    setValue("password", "");
  };

  return (
    <LoginContainer>
      <Title>KSB</Title>
      <Form onSubmit={handleSubmit(onValid)}>
        <Input
          {...register("email", {
            required: "이메일을 적어주세요",
            validate: value =>
              value.includes("@") ? true : "이메일을 적어주세요",
          })}
          // type="email"
          placeholder="이메일"
        />
        <ErrorMessage>{errors.email?.message}</ErrorMessage>
        <Input
          {...register("password", {
            required: "비밀번호를 적어주세요",
          })}
          type="password"
          placeholder="비밀번호"
        />
        <ErrorMessage>{errors.password?.message}</ErrorMessage>
        <Button>로그인</Button>
        <Register>
          <span>KSB가 처음이신가요?</span>
          <Link href="/join">회원가입</Link>
        </Register>
      </Form>
    </LoginContainer>
  );
};

export default LoginForm;
