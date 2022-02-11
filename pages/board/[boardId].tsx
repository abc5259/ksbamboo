import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QueryClient, useQuery, useQueryClient } from "react-query";
import { getBoardAPI } from "../../apis/board";
import { getUserAPI } from "../../apis/user";

import HeaderAndSideBar from "../../components/layouts/HeaderAndSideBar/HeaderAndSideBar";
import jwt_decode from "jwt-decode";
import IBoard from "../../interfaces/board";
import Molecule from "../../components/molecules";
import User from "../../interfaces/user";
import BoardDetailTemp from "../../components/templates/BoardDetailTemp/BoardDetailTemp";

const BoardPage = () => {
  const router = useRouter();
  const { boardId } = router.query;
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [getBoardId, setGetBoardId] = useState("");
  const queryClient = useQueryClient();
  const { error, data: me } = useQuery<User, AxiosError>(
    "user",
    () => getUserAPI(token),
    {
      enabled: !!token,
    }
  );
  const {
    isLoading,
    error: boardError,
    data: board,
  } = useQuery<IBoard>(
    ["board", boardId],
    () => getBoardAPI(boardId as string),
    {
      enabled: !!getBoardId,
    }
  );

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || "");
    setRefreshToken(localStorage.getItem("refreshToken") || "");
    setGetBoardId(boardId as string);
  }, [token, boardId]);

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
  if (isLoading) {
    return <div>로딩중...</div>;
  }
  return (
    <>
      {board && <BoardDetailTemp board={board} token={token}></BoardDetailTemp>}
    </>
  );
};
export default BoardPage;
