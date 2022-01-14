import React from "react";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "../LoginForm/LoginFormStyles";
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
}

const JoinForm = () => {
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
          <ErrorMessage>{errors.email?.message}</ErrorMessage>
        </InputWrapper>
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
            name="passwordConfirm"
          />
          <ErrorMessage>{errors.passwordConfirm?.message}</ErrorMessage>
        </InputWrapper>
        <Button type="submit">회원가입</Button>
      </Form>
    </JoinContainer>
  );
};

export default JoinForm;
