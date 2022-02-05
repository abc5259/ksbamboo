import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { ksDepartmentAtom } from "../atom/atoms";
import AppLayout from "../components/templates/AppLayout";
import BoardForm from "../components/organisms/BoardForm/BoardForm";
import AllBoards from "../components/organisms/AllBoards/AllBoards";
import { useQuery } from "react-query";
import { allBoardsAPI } from "../apis/board";
import IBoard from "../interfaces/board";
import { useRouter } from "next/router";
import { getUserAPI } from "../apis/user";
import User from "../interfaces/user";
import { AxiosError } from "axios";
import Home from "../components/templates/Home/Home";

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const HomePage: NextPage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const {
    isLoading,
    error,
    data: me,
  } = useQuery<User, AxiosError>("user", () => getUserAPI(token), {
    enabled: !!token,
  });
  const { data: boards } = useQuery<IBoard[]>(
    "allboards",
    () => allBoardsAPI(token),
    {
      enabled: !!token,
    }
  );
  const ksDepartments = useRecoilValue(ksDepartmentAtom);
  const [department, setDepartment] = useState("전체");
  const onChangeDepartment = (e: React.FormEvent<HTMLSelectElement>) => {
    setDepartment(e.currentTarget.value);
  };
  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || "");
    console.log(me, isLoading);
    if (!me && !isLoading) {
      router.replace("/login");
    }
  }, [token, me, isLoading]);
  if (error?.response?.data.statusCode === 401) {
    router.replace("/login");
  }
  return (
    <>
      <Home token={token} boards={boards} />
    </>
  );
};

export default HomePage;
