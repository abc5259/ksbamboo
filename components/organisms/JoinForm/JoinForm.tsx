import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage, Register } from "../LoginForm/LoginFormStyles";
import {
  Form,
  JoinContainer,
  Title,
  Input,
  Button,
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

  console.log(errors);

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
          <ErrorMessage>{errors.enterYear?.message}</ErrorMessage>
        </SelectWrapper>
        <InputWrapper>
          <Label>경성대학교 이메일</Label>
          <EmailWrapper>
            <Input
              {...register("email", {
                required: "학교 이메일을 적어주세요",
                validate: value =>
                  value.includes("@ks.ac.kr")
                    ? true
                    : "학교 이메일이어야 합니다.",
              })}
              name="email"
              placeholder="이메일"
            />
            <button onClick={onEmailButtonClick}>인증번호받기</button>
          </EmailWrapper>
          <ErrorMessage>
            {errors.email?.message || emailErrorMessage}
          </ErrorMessage>
        </InputWrapper>
        {emailAuth && (
          <InputWrapper>
            <Label>인증번호 입력</Label>
            <Input
              type="number"
              {...register("emailAuthNumber", {
                required: "인증번호를 입력하세요",
              })}
            />
            <ErrorMessage>{errors.emailAuthNumber?.message}</ErrorMessage>
          </InputWrapper>
        )}
        <InputWrapper>
          <Label>비밀번호</Label>
          <Input
            {...register("password", {
              required: "비밀번호를 입력하세요",
            })}
            type="password"
            name="password"
          />
          <ErrorMessage>{errors.password?.message}</ErrorMessage>
        </InputWrapper>
        <InputWrapper>
          <Label>비밀번호 확인</Label>
          <Input
            {...register("passwordConfirm", {
              required: "비밀번호 확인을 입력하세요",
              validate: value =>
                value !== watch("password") ? "비밀번호가 같지 않습니다" : true,
            })}
            type="password"
            name="passwordConfirm"
          />
          <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
        </InputWrapper>
        <Button type="submit">회원가입</Button>
      </Form>
      <Register>
        <span>이미 회원가입을 하셨나요?</span>
        <Link href="/login">로그인</Link>
      </Register>
    </JoinContainer>
  );
};

export default JoinForm;
