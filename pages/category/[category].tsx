import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { allCategoryBoardsAPI } from "../../apis/board";
import { getUserAPI } from "../../apis/user";
import Home from "../../components/templates/Home/Home";
import IBoard from "../../interfaces/board";
import User from "../../interfaces/user";
import reissueExpToken from "../../utils/reissueExpToken";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const queryClient = useQueryClient();
  const { error, data: me } = useQuery<User | boolean, AxiosError>(
    "user",
    () => getUserAPI(token),
    {
      enabled: !!token,
    }
  );
  const { data: boards } = useQuery<IBoard[]>(["boards", category], () =>
    allCategoryBoardsAPI(category as string)
  );

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || "");
    setRefreshToken(localStorage.getItem("refreshToken") || "");
    // if (!me) {
    //   router.replace("/login");
    // }
  }, [token, me]);
  if (token || me === false) {
    reissueExpToken(token, refreshToken, setToken, queryClient);
  }
  return (
    <>
      <Home token={token} boards={boards} />
    </>
  );
};

export default CategoryPage;
