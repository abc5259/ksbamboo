import type { NextPage } from "next";
import AppLayout from "../components/templates/AppLayout";
import LoginForm from "../components/organisms/LoginForm/LoginForm";
import { getUserAPI } from "../apis/user";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import User from "../interfaces/user";

const Login: NextPage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const { data: me } = useQuery<User>(
    "user",
    () => getUserAPI(token),
    { enabled: !!token } // token이 있을때만 useQuery실행
  );
  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || "");
    if (me) {
      router.replace("/");
    }
  }, [token, me]);
  return (
    <>
      <AppLayout>
        <LoginForm />
      </AppLayout>
    </>
  );
};
export default Login;
