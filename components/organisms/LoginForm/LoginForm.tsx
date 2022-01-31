import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Atom from "../../atoms";
import Molecule from "../../molecules";
import {
  Form,
  LoginContainer,
  InputWrapper,
  Register,
  Title,
  Label,
} from "./LoginFormStyles";

export interface ILoginForm {
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
        {/* <InputWrapper>
          <Label>학교 이메일</Label>
          <Atom.Input
            register={{
              ...register("email", {
                required: "이메일을 적어주세요",
                validate: value =>
                  value.includes("@ks.ac.kr")
                    ? true
                    : "학교 이메일이어야 합니다.",
              }),
            }}
          />
          <Atom.Message className="error" fontSize="0.9rem">
            {errors.email?.message}
          </Atom.Message> 
        </InputWrapper> */}
        <Molecule.LoginInput
          register={{
            ...register("email", {
              required: "이메일을 적어주세요",
              validate: value =>
                value.includes("@ks.ac.kr")
                  ? true
                  : "학교 이메일이어야 합니다.",
            }),
          }}
          labelTest="학교 이메일"
          message={errors.email?.message}
        />
        <InputWrapper>
          <Label>비발번호</Label>
          <Atom.Input
            register={{
              ...register("password", {
                required: "패스워드를 입력해 주세요",
              }),
            }}
            type="password"
          />
          <Atom.Message className="error" fontSize="0.9rem">
            {errors.password?.message}
          </Atom.Message>
        </InputWrapper>
        <Atom.Button className="big" color="inherit">
          로그인
        </Atom.Button>
        <Register>
          <span>KSB가 처음이신가요?</span>
          <Link href="/join">
            <a>회원가입</a>
          </Link>
        </Register>
      </Form>
    </LoginContainer>
  );
};

export default LoginForm;
