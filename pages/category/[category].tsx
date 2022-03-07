import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { allCategoryBoardsAPI } from "../../apis/board";
import { getUserAPI } from "../../apis/user";
import Home from "../../components/templates/Home/Home";
import IBoard from "../../interfaces/board";
import User from "../../interfaces/user";
import { BASE_URL } from "../../utils/baseUrl";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const queryClient = useQueryClient();
  const { error, data: me } = useQuery<User | boolean, AxiosError>(
    "user",
    getUserAPI
  );
  const { data: boards } = useQuery<IBoard[]>(["boards", category], () =>
    allCategoryBoardsAPI(category as string)
  );

  useEffect(() => {
    const evtSource = new EventSource(`${BASE_URL}/boards/events`, {
      withCredentials: true,
    });
    console.log(evtSource);
    evtSource.onmessage = ({ data }) => {
      console.log(evtSource);
      alert(data);
    };
    return () => {
      evtSource.close();
    };
  }, []);

  return (
    <>
      <Home boards={boards} />
    </>
  );
};

export default CategoryPage;
