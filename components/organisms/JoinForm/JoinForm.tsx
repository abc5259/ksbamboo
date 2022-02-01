import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Atom from "../../atoms";
import Molecule from "../../molecules";
import { Register } from "../LoginForm/LoginFormStyles";
import {
  Form,
  JoinContainer,
  Title,
  Select,
  SelectWrapper,
  Label,
} from "./JoinFormStyles";

const enterYear: number[] = [
  2022, 2021, 2020, 2019, 2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011, 2010,
  2009, 2008,
];

interface IJoinForm {
  enterYear: string;
  email: string;
  username: string;
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
        <Molecule.TextInput
          register={{
            ...register("username", {
              required: "이름을 적어주세요",
            }),
          }}
          labelText="이름"
          message={errors.username?.message}
          mb="20px"
        />
        <Molecule.TextInput
          register={{
            ...register("email", {
              required: "학교 이메일을 적어주세요",
              validate: value =>
                value.includes("@ks.ac.kr")
                  ? true
                  : "학교 이메일이어야 합니다.",
            }),
          }}
          labelText="경성대학교 이메일"
          message={errors.email?.message || emailErrorMessage}
          mb="20px"
        />
        <Molecule.TextInput
          register={{
            ...register("password", {
              required: "비밀번호를 입력하세요",
            }),
          }}
          type="password"
          labelText="비밀번호"
          message={errors.password?.message}
          mb="20px"
        />
        <Molecule.TextInput
          register={{
            ...register("passwordConfirm", {
              required: "비밀번호 확인을 입력하세요",
              validate: value =>
                value !== watch("password") ? "비밀번호가 같지 않습니다" : true,
            }),
          }}
          type="password"
          labelText="비밀번호 확인"
          message={errors.passwordConfirm?.message}
          mb="20px"
        />
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
