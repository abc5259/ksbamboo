import { AxiosError } from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import { loginAPI } from "../../../apis/user";
import User from "../../../interfaces/user";
import Atom from "../../atoms";
import Molecule from "../../molecules";
import { Form, LoginContainer, Register } from "./LoginFormStyles";

export interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const mutation = useMutation<
    { accessToken: string; user: User }, //success했을때 data값의 타입
    AxiosError, // error타입
    { email: string; password: string } // loginAPI의 인자로 들어갈 타입
  >("user", loginAPI, {
    onMutate: () => {}, // 뮤테이션 시작
    onError: error => {
      // 에러가 났음
      if (error.response?.data.statusCode === 400) {
        toast.error(error.response.data.message[0]);
      } else {
        toast.error(error.response?.data.message);
      }
    },
    onSuccess: data => {
      // 성공
      queryClient.setQueryData("user", data.user); //user라는 이름으로 data.user값이 캐싱됨
      setValue("email", "");
      setValue("password", "");
      localStorage.setItem("accessToken", data.accessToken);
      // setToken(localStorage.getItem("accessToken") || "");
      router.push("/");
    },
    onSettled: () => {}, // 성공이든 에러든 어쨌든 끝났을 때
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ILoginForm>();

  const onValid = (data: ILoginForm) => {
    mutation.mutate(data);
  };

  return (
    <LoginContainer>
      <Atom.Title fontSize="24px" mb="20px">
        KSB
      </Atom.Title>
      <Form onSubmit={handleSubmit(onValid)}>
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
          labelText="학교 이메일"
          message={errors.email?.message}
          mb="20px"
        />
        <Molecule.TextInput
          register={{
            ...register("password", {
              required: "비밀번호를 입력해 주세요",
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
