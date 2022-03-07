import { useQuery } from "react-query";
import { allBoardsAPI } from "../apis/board";
import IBoard from "../interfaces/board";
import Home from "../components/templates/Home/Home";
import type { NextPage } from "next";
import { BASE_URL } from "../utils/baseUrl";
import { useEffect } from "react";

const HomePage: NextPage = () => {
  const { data: boards } = useQuery<IBoard[]>("allboards", allBoardsAPI);
  useEffect(() => {
    const evtSource = new EventSource(`${BASE_URL}/boards/events`, {
      withCredentials: true,
    });
    console.log(evtSource);
    evtSource.onmessage = ({ data }) => {
      console.log(data);
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

export default HomePage;
