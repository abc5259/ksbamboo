import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { allBoardsAPI, allCategoryBoardsAPI } from "../../apis/board";
import { getUserAPI } from "../../apis/user";
import Home from "../../components/templates/Home/Home";
import IBoard from "../../interfaces/board";
import User from "../../interfaces/user";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [token, setToken] = useState("");
  const {
    isLoading,
    error,
    data: me,
  } = useQuery<User, AxiosError>("user", () => getUserAPI(token), {
    enabled: !!token,
  });
  const { data: boards } = useQuery<IBoard[]>(
    ["boards", category],
    () => allCategoryBoardsAPI(token, category as string),
    {
      enabled: !!token,
    }
  );

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || "");
    console.log(me, isLoading);
    if (!me && error?.response?.data.statusCode === 401) {
      router.replace("/login");
    }
  }, [token, me, error]);
  return (
    <>
      <Home token={token} boards={boards} />
    </>
  );
};

export default CategoryPage;
