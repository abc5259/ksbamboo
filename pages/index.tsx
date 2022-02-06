import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import { allBoardsAPI } from "../apis/board";
import IBoard from "../interfaces/board";
import { useRouter } from "next/router";
import { getUserAPI, newAccessTokenAPI } from "../apis/user";
import User from "../interfaces/user";
import axios, { AxiosError } from "axios";
import Home from "../components/templates/Home/Home";

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const HomePage: NextPage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const { error, data: me } = useQuery<User, AxiosError>(
    "user",
    () => getUserAPI(token),
    {
      enabled: !!token,
      onError: error => {
        // if (error?.response?.data.statusCode === 401) {
        //   const {accessToken} =  newAccessTokenAPI({ refresh_token: refreshToken });
        // }
      },
    }
  );
  const { data: boards } = useQuery<IBoard[]>(
    "allboards",
    () => allBoardsAPI(token),
    {
      enabled: !!token,
    }
  );

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || "");
    setRefreshToken(localStorage.getItem("refreshToken") || "");
    if (!me) {
      router.replace("/login");
    }
  }, [token, me]);

  return (
    <>
      <Home token={token} boards={boards} />
    </>
  );
};

export default HomePage;
