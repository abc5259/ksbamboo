import type { NextPage } from "next";
import JoinForm from "../../components/organisms/JoinForm/JoinForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import User from "../../interfaces/user";
import { getUserAPI } from "../../apis/user";
import HeaderLayout from "../../components/layouts/HeaderLayout/HeaderLayout";
import { AxiosError } from "axios";
import reissueExpToken from "../../utils/reissueExpToken";

const Join: NextPage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const { error, data: me } = useQuery<User | boolean, AxiosError>(
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
  if (token || me === false) {
    reissueExpToken(token, refreshToken, setToken);
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
