import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { allBoardsAPI } from "../apis/board";
import IBoard from "../interfaces/board";
import { useRouter } from "next/router";
import { getUserAPI, newAccessTokenAPI } from "../apis/user";
import User from "../interfaces/user";
import axios, { AxiosError } from "axios";
import Home from "../components/templates/Home/Home";
import jwt_decode from "jwt-decode";

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const HomePage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const queryClient = useQueryClient();
  const { error, data: me } = useQuery<User, AxiosError>(
    "user",
    () => getUserAPI(token),
    {
      enabled: !!token,
    }
  );
  const { data: boards } = useQuery<IBoard[]>("allboards", allBoardsAPI);

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || "");
    setRefreshToken(localStorage.getItem("refreshToken") || "");
  }, [token]);

  if (token || error?.response?.data.statusCode === 401) {
    const decode: { email: string; iat: number; exp: number } =
      jwt_decode(token);
    const currentTime = Math.floor(new Date().getTime() / 1000);
    const dif = new Date((decode.exp - currentTime) * 1000);
    if (dif.getTime() < 30000) {
      axios
        .post(`http://localhost:3050/auth/refresh`, {
          refresh_token: refreshToken,
        })
        .then(response => {
          localStorage.removeItem("accessToken");
          localStorage.setItem("accessToken", response.data?.accessToken);
          setToken(response.data?.accessToken);
          queryClient.refetchQueries("user");
        })
        .catch(error => {
          console.log(error);
          if (error?.response?.data.statusCode === 401) {
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            queryClient.removeQueries("user");
          }
        });
    }
  }

  return (
    <>
      <Home token={token} boards={boards} />
    </>
  );
};

export default HomePage;
