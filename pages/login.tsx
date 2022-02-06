import type { NextPage } from "next";
import LoginForm from "../components/organisms/LoginForm/LoginForm";
import { getUserAPI } from "../apis/user";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import User from "../interfaces/user";
import { AxiosError } from "axios";
import HeaderLayout from "../components/layouts/HeaderLayout/HeaderLayout";
import jwt_decode from "jwt-decode";

const Login: NextPage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const { error, data: me } = useQuery<User | AxiosError>(
    "user",
    () => getUserAPI(token),
    {
      enabled: !!token,
    }
  );

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || "");
    if (me) {
      router.replace("/");
    }
  }, [token]);
  if (token) {
    const decode = jwt_decode(token);
    console.log(decode);
    //Math.floor(new Date().getTime() / 1000);
  }
  return (
    <>
      <HeaderLayout>
        <LoginForm />
      </HeaderLayout>
    </>
  );
};
export default Login;
//로그인 페이지에서 로그인 페이지 들어올때 요청 or 로그인 버튼 눌렀을때 요청?
