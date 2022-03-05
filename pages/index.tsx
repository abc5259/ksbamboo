import { useQuery, useQueryClient } from "react-query";
import { allBoardsAPI } from "../apis/board";
import IBoard from "../interfaces/board";
import { getUserAPI } from "../apis/user";
import User from "../interfaces/user";
import { AxiosError } from "axios";
import Home from "../components/templates/Home/Home";
import type { NextPage } from "next";

const HomePage: NextPage = () => {
  const { data: me } = useQuery<User | boolean, AxiosError>("user", getUserAPI);
  const { data: boards } = useQuery<IBoard[]>("allboards", allBoardsAPI);
  return (
    <>
      <Home boards={boards} />
    </>
  );
};

export default HomePage;
