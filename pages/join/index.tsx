import type { NextPage } from "next";
import AppLayout from "../../components/templates/AppLayout";
import JoinForm from "../../components/organisms/JoinForm/JoinForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import User from "../../interfaces/user";
import { getUserAPI } from "../../apis/user";

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
    if (me && !error) {
      router.replace("/");
    }
  }, [token, me]);
  return (
    <>
      <AppLayout>
        <JoinForm />
      </AppLayout>
    </>
  );
};

export default Join;
