import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { toast } from "react-toastify";
import { getUserFetcher } from "../../../utils/user/api";
import Atom from "../../atoms";
import Molecule from "../../molecules";
import { Form, LoginContainer, Register } from "./LoginFormStyles";

export interface ILoginForm {
  email: string;
  password: string;
}

const LoginForm = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const { isLoading, error, data } = useQuery(
    "userData",
    () => getUserFetcher(token),
    { enabled: !!token }
  );
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ILoginForm>();

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || "");
  }, []);
  const onValid = (data: ILoginForm) => {
    // 로그인
    axios
      .post("http://localhost:3050/auth/login", data)
      .then(response => {
        setValue("email", "");
        setValue("password", "");
        console.log(response.data.accessToken);
        localStorage.setItem("accessToken", response.data.accessToken);
        setToken(localStorage.getItem("accessToken") || "");
        console.log("token", token);
      })
      .catch(error => {
        console.log(error.response.data);
        if (error.response.data.statusCode === 400) {
          toast.error(error.response.data.message[0]);
        } else {
          toast.error(error.response.data.message);
        }
      });
  };
  console.log(data);
  if (isLoading) {
    return <div>Lodding..</div>;
  }

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
