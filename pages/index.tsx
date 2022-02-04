import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { boardsAtom, ksDepartmentAtom } from "../atom/atoms";
import AppLayout from "../components/templates/AppLayout";
import Board from "../components/molecules/Board/Board";
import BoardForm from "../components/organisms/BoardForm/BoardForm";
import AllBoards from "../components/organisms/AllBoards/AllBoards";
import { useQuery } from "react-query";
import { allBoardsAPI } from "../apis/board";
import IBoard from "../interfaces/board";
import { useRouter } from "next/router";
import { getUserAPI } from "../apis/user";
import User from "../interfaces/user";

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Home: NextPage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const { data: me } = useQuery<User>(
    "user",
    () => getUserAPI(token),
    { enabled: !!token } // token이 있을때만 useQuery실행
  );
  const { isLoading, data: boards } = useQuery<IBoard[]>(
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
    if (!me) {
      router.replace("/login");
    }
  }, [token, me]);

  return (
    <>
      <AppLayout>
        <select onChange={onChangeDepartment}>
          {ksDepartments.map(ksDepartment => (
            <option key={ksDepartment} value={ksDepartment}>
              {ksDepartment}
            </option>
          ))}
        </select>
        <BoardForm />
        {boards ? <AllBoards boards={boards} /> : <div>로딩중...</div>}
      </AppLayout>
    </>
  );
};

export default Home;
