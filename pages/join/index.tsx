import type { NextPage } from "next";
import JoinForm from "../../components/organisms/JoinForm/JoinForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import User from "../../interfaces/user";
import { getUserAPI } from "../../apis/user";
import HeaderLayout from "../../components/layouts/HeaderLayout/HeaderLayout";

const Join: NextPage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const { error, data: me } = useQuery<User>(
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
      <HeaderLayout>
        <JoinForm />
      </HeaderLayout>
    </>
  );
};

export default Join;
