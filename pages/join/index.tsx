import type { NextPage } from "next";
import JoinForm from "../../components/organisms/JoinForm/JoinForm";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import User from "../../interfaces/user";
import { getUserAPI } from "../../apis/user";
import HeaderLayout from "../../components/layouts/HeaderLayout/HeaderLayout";
import { AxiosError } from "axios";

const Join: NextPage = () => {
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
        <JoinForm />
      </HeaderLayout>
    </>
  );
};

export default Join;
