import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Atom from "../../atoms";
import { Register } from "../LoginForm/LoginFormStyles";
import {
  Form,
  JoinContainer,
  Title,
  Select,
  SelectWrapper,
  InputWrapper,
  Label,
  EmailWrapper,
} from "./JoinFormStyles";

const enterYear: number[] = [
  2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
  2009, 2008,
];

interface IJoinForm {
  enterYear: string;
  email: string;
  nickname: string;
  password: string;
  passwordConfirm: string;
  emailAuthNumber: number;
}

const JoinForm = () => {
  const [emailAuth, setEmailAuth] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("");
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IJoinForm>({
    defaultValues: {
      email: "@ks.ac.kr",
    },
  });

  const onEmailButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (watch("email") === "") setEmailErrorMessage("학교 이메일을 입력하세요");
    if (!watch("email").includes("@ks.ac.kr")) {
      setEmailErrorMessage("학교 이메일이어야 합니다.");
    } else {
      // 인증번호 서버로 요청
      setEmailAuth(true);
    }
  };

  const onVaild = (data: IJoinForm) => {
    console.log(data);
  };

  return (
    <JoinContainer>
      <Title>KSB 회원가입</Title>
      <Form onSubmit={handleSubmit(onVaild)}>
        <SelectWrapper>
          <Label>입학년도</Label>
          <Select
            {...register("enterYear", {
              validate: value => {
                if (value.trim() == "연도 선택 (학번)".trim()) {
                  return "학번을 선택하세요";
                } else {
                  return true;
                }
              },
            })}
            id="enter_year"
          >
            <option>연도 선택 (학번)</option>
            {enterYear.map(year => (
              <option key={year} value={year}>
                {year}학번
              </option>
            ))}
          </Select>
          <Atom.Message className="error" fontSize="0.9rem">
            {errors.enterYear?.message}
          </Atom.Message>
        </SelectWrapper>
        <InputWrapper>
          <Label>경성대학교 이메일</Label>
          <EmailWrapper>
            <Atom.Input
              register={{
                ...register("email", {
                  required: "학교 이메일을 적어주세요",
                  validate: value =>
                    value.includes("@ks.ac.kr")
                      ? true
                      : "학교 이메일이어야 합니다.",
                }),
              }}
              name="email"
              placeholder="이메일"
            />
            <button onClick={onEmailButtonClick}>인증번호받기</button>
          </EmailWrapper>
          <Atom.Message className="error" fontSize="0.9rem">
            {errors.email?.message || emailErrorMessage}
          </Atom.Message>
        </InputWrapper>
        {emailAuth && (
          <InputWrapper>
            <Label>인증번호 입력</Label>
            <Atom.Input
              register={{
                ...register("emailAuthNumber", {
                  required: "인증번호를 입력하세요",
                }),
              }}
              type="number"
            />
            <Atom.Message className="error" fontSize="0.9rem">
              {errors.emailAuthNumber?.message}
            </Atom.Message>
          </InputWrapper>
        )}
        <InputWrapper>
          <Label>비밀번호</Label>
          <Atom.Input
            register={{
              ...register("password", {
                required: "비밀번호를 입력하세요",
              }),
            }}
            type="password"
            name="password"
          />
          <Atom.Message className="error" fontSize="0.9rem">
            {errors.password?.message}
          </Atom.Message>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호 확인</Label>
          <Atom.Input
            register={{
              ...register("passwordConfirm", {
                required: "비밀번호 확인을 입력하세요",
                validate: value =>
                  value !== watch("password")
                    ? "비밀번호가 같지 않습니다"
                    : true,
              }),
            }}
            type="password"
            name="passwordConfirm"
          />
          <Atom.Message className="error" fontSize="0.9rem">
            {errors.passwordConfirm?.message}
          </Atom.Message>
        </InputWrapper>
        <Atom.Button className="big" color="inherit">
          회원가입
        </Atom.Button>
      </Form>
      <Register>
        <span>이미 회원가입을 하셨나요?</span>
        <Link href="/login">로그인</Link>
      </Register>
    </JoinContainer>
  );
};

export default JoinForm;
