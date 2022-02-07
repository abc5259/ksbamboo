import type { NextPage } from "next";
import JoinForm from "../../components/organisms/JoinForm/JoinForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import User from "../../interfaces/user";
import { getUserAPI } from "../../apis/user";
import HeaderLayout from "../../components/layouts/HeaderLayout/HeaderLayout";
import jwt_decode from "jwt-decode";
import axios, { AxiosError } from "axios";

const Join: NextPage = () => {
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
  }, [token, refreshToken, me]);
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
        <JoinForm />
      </HeaderLayout>
    </>
  );
};

export default Join;
