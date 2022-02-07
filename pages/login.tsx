import type { NextPage } from "next";
import LoginForm from "../components/organisms/LoginForm/LoginForm";
import { getUserAPI, newAccessTokenAPI } from "../apis/user";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import User from "../interfaces/user";
import axios, { AxiosError } from "axios";
import HeaderLayout from "../components/layouts/HeaderLayout/HeaderLayout";
import jwt_decode from "jwt-decode";

const Login: NextPage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const { error, data: me } = useQuery<User | AxiosError>(
    "user",
    () => getUserAPI(token),
    {
      enabled: !!token,
    }
  );

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || "");
    setRefreshToken(localStorage.getItem("refreshToken") || "");
    if (me) {
      router.replace("/");
    }
  }, [token, refreshToken]);
  if (token) {
    const decode: { email: string; iat: number; exp: number } =
      jwt_decode(token);
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const time = new Date((decode.exp - currentTime) * 1000);
    if (time.getTime() < 10000) {
      axios
        .post(`/auth/refresh`, { refresh_token: refreshToken })
        .then(response => {
          localStorage.setItem("accessToken", response.data?.accessToken);
          setToken(response.data?.accessToken);
        })
        .catch(error => {
          console.log(error);
        });
    }
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
