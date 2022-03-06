import type { NextPage } from "next";
import LoginForm from "../components/organisms/LoginForm/LoginForm";
import { getUserAPI, newAccessTokenAPI } from "../apis/user";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import User from "../interfaces/user";
import { AxiosError } from "axios";
import HeaderLayout from "../components/layouts/HeaderLayout/HeaderLayout";

const Login: NextPage = () => {
  const router = useRouter();
  const { error, data: me } = useQuery<User | boolean, AxiosError>(
    "user",
    getUserAPI
  );

  useEffect(() => {
    if (me) {
      router.replace("/");
    }
  }, [me]);

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
