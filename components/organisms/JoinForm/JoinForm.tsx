import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";
import Atom from "../../atoms";
import Molecule from "../../molecules";
import axios from "axios";
import { ksDepartmentAtom } from "../../../atom/atoms";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/router";

import { Form, JoinContainer, Title, Register } from "./JoinFormStyles";
import { useRecoilValue } from "recoil";

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
  ksDepartment: string;
}

const JoinForm = () => {
  const ksDepartment = useRecoilValue(ksDepartmentAtom);
  const router = useRouter();
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

    axios
      .post("http://localhost:3050/auth/join", data)
      .then(response => {
        if (response.data.ok) {
          // 이메일 인증 확인 페이지로 redirect
          router.push(`/join/emailAuth?email=${data.email}`);
        }
      })
      .catch(error => {
        console.log(error.response.data.statusCode);
        if (error.response.data.statusCode === 400) {
          toast.error(error.response.data.message[0]);
        } else {
          toast.error(error.response.data.message);
        }
      });
  };

  return (
    <JoinContainer>
      <Atom.Title fontSize="24px" mb="20px">
        KSB 회원가입
      </Atom.Title>
      <Form onSubmit={handleSubmit(onVaild)}>
        <Molecule.TextInput
          register={{
            ...register("email", {
              required: "학교 이메일을 적어주세요",
              pattern: {
                value: /@ks.ac.kr$/g,
                message: "학교 이메일이어야 합니다.",
              },
              validate: value =>
                value === "@ks.ac.kr" ? "이메일을 적어주세요" : true,
            }),
          }}
          labelText="경성대학교 이메일"
          message={errors.email?.message}
          mb="20px"
        />
        <Molecule.TextInput
          register={{
            ...register("username", {
              required: "이름을 적어주세요",
              pattern: {
                value: /^[가-힣a-zA-Z]+$/,
                message: "이름은 한글 또는 영어만 가능합니다.",
              },
            }),
          }}
          labelText="이름"
          message={errors.username?.message}
          mb="20px"
        />
        <Molecule.LabelSelect
          register={{
            ...register("enterYear", {
              validate: value => {
                if (value.trim() == "연도 선택 (학번)".trim()) {
                  return "학번을 선택하세요";
                } else {
                  return true;
                }
              },
            }),
          }}
          options={enterYear}
          text="학번"
          labelText="입학년도"
          mb="20px"
          message={errors.enterYear?.message}
          default="연도 선택 (학번)"
        />
        <Molecule.LabelSelect
          register={{
            ...register("ksDepartment", {
              validate: value => {
                if (value.trim() == "학과 선택".trim()) {
                  return "학과를 선택하세요";
                } else {
                  return true;
                }
              },
            }),
          }}
          options={ksDepartment}
          labelText="학과"
          mb="20px"
          message={errors.ksDepartment?.message}
          default="학과 선택"
        />
        <Molecule.TextInput
          register={{
            ...register("password", {
              required: "비밀번호를 입력하세요",
              pattern: {
                value:
                  /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$/,
                message:
                  "숫자와 영문자, 특수문자 조합으로 8~20자리를 사용해야 합니다.",
              },
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
      <ToastContainer />
    </JoinContainer>
  );
};

export default JoinForm;
