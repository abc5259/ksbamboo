import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import {
  Button,
  ErrorMessage,
  Form,
  Input,
  LoginContainer,
  InputWrapper,
  Register,
  Title,
  Label,
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
        <InputWrapper>
          <Label>학교 이메일</Label>
          <Input
            {...register("email", {
              required: "이메일을 적어주세요",
              validate: value =>
                value.includes("@ks.ac.kr")
                  ? true
                  : "학교 이메일이어야 합니다.",
            })}
          />
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>비발번호</Label>
          <Input
            {...register("password", {
              required: "비밀번호를 적어주세요",
            })}
            type="password"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </InputWrapper>
        <Button type="submit">로그인</Button>
        <Register>
          <span>KSB가 처음이신가요?</span>
          <Link href="/join">회원가입</Link>
        </Register>
      </Form>
    </LoginContainer>
  );
};

export default LoginForm;
