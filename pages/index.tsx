import { useQuery, useQueryClient } from "react-query";
import { allBoardsAPI, getFavoriteBoardsAPI } from "../apis/board";
import IBoard from "../interfaces/board";
import { getUserAPI } from "../apis/user";
import User from "../interfaces/user";
import axios, { AxiosError } from "axios";
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
      console.log("New message", JSON.parse(data));
    };
    axios.post(`${BASE_URL}/boards/emit`).then(response => {
      evtSource.onmessage = ({ data }) => {
        console.log("New message", JSON.parse(data));
      };
    });
  }, []);

  return (
    <>
      <Home boards={boards} />
    </>
  );
};

export default HomePage;
