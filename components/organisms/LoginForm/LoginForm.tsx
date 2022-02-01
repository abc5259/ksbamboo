import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Atom from "../../atoms";
import Molecule from "../../molecules";
import { Form, LoginContainer, Register, Title } from "./LoginFormStyles";

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
        <Molecule.TextInput
          register={{
            ...register("email", {
              required: "이메일을 적어주세요",
              validate: value =>
                value.includes("@ks.ac.kr")
                  ? true
                  : "학교 이메일이어야 합니다.",
            }),
          }}
          labelText="학교 이메일"
          message={errors.email?.message}
          mb="20px"
        />
        <Molecule.TextInput
          register={{
            ...register("password", {
              required: "패스워드를 입력해 주세요",
            }),
          }}
          type="password"
          labelText="비밀번호"
          message={errors.password?.message}
          mb="20px"
        />
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
