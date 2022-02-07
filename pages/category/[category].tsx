import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { QueryClient, useQuery } from "react-query";
import { allCategoryBoardsAPI } from "../../apis/board";
import { getUserAPI } from "../../apis/user";
import Home from "../../components/templates/Home/Home";
import IBoard from "../../interfaces/board";
import User from "../../interfaces/user";
import jwt_decode from "jwt-decode";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const queryClient = new QueryClient();
  const { error, data: me } = useQuery<User, AxiosError>(
    "user",
    () => getUserAPI(token),
    {
      enabled: !!token,
    }
  );
  const { data: boards } = useQuery<IBoard[]>(
    ["boards", category],
    () => allCategoryBoardsAPI(token, category as string),
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
            router.replace("/login");
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

export default CategoryPage;