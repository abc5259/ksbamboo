import { useQuery } from "react-query";
import { allBoardsAPI } from "../apis/board";
import IBoard from "../interfaces/board";
import Home from "../components/templates/Home/Home";
import type { NextPage } from "next";
import { BASE_URL } from "../utils/baseUrl";
import { useEffect, useState } from "react";
import Notice from "../components/atoms/Notice/Notice";

const HomePage: NextPage = () => {
  const { data: boards, refetch } = useQuery<IBoard[]>(
    "allboards",
    allBoardsAPI,
    {
      refetchOnWindowFocus: false,
    }
  );
  const [newBoardNotice, setNewBoardNotice] = useState("");
  useEffect(() => {
    const evtSource = new EventSource(`${BASE_URL}/boards/events`, {
      withCredentials: true,
    });
    console.log(evtSource);
    evtSource.onmessage = ({ data }) => {
      console.log(data);
      setNewBoardNotice(data);
    };
    return () => {
      evtSource.close();
    };
  }, []);

  const onClickNotice = () => {
    setNewBoardNotice("");
    refetch();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Home boards={boards} />
      {newBoardNotice && (
        <Notice onClick={onClickNotice}>{newBoardNotice}</Notice>
      )}
    </>
  );
};

export default HomePage;
