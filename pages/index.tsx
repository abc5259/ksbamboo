import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { allBoardsAPI } from "../apis/board";
import IBoard from "../interfaces/board";
import { useRouter } from "next/router";
import { getUserAPI } from "../apis/user";
import User from "../interfaces/user";
import { AxiosError } from "axios";
import Home from "../components/templates/Home/Home";
import reissueExpToken from "../utils/reissueExpToken";

const HomePage = () => {
  const router = useRouter();
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const queryClient = useQueryClient();
  const { data: me } = useQuery<User | boolean, AxiosError>(
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

  if (token || me === false) {
    reissueExpToken(token, refreshToken, setToken, queryClient);
  }

  return (
    <>
      <Home token={token} boards={boards} />
    </>
  );
};

export default HomePage;
