import { useInfiniteQuery, useQuery } from "react-query";
import { allBoardsAPI } from "../apis/board";
import IBoard from "../interfaces/board";
import Home from "../components/templates/Home/Home";
import type { NextPage } from "next";
import { BASE_URL } from "../utils/baseUrl";
import { useEffect, useState } from "react";
import Notice from "../components/atoms/Notice/Notice";
import User from "../interfaces/user";
import axios, { AxiosError } from "axios";
import { getAllNotifications, getUserAPI } from "../apis/user";

const nextPage = 20;
const HomePage: NextPage = () => {
  const { isLoading, data: me } = useQuery<User, AxiosError>(
    "user",
    getUserAPI
  );
  const { data: boards, refetch } = useQuery<{ boards: IBoard[] }>(
    "allboards",
    () => allBoardsAPI(0),
    {
      refetchOnWindowFocus: false,
    }
  );
  const { data, fetchPreviousPage, hasPreviousPage } = useInfiniteQuery(
    "example",
    async ({ pageParam = 0 }) => {
      // console.log(pageParam);
      const data = await allBoardsAPI(nextPage * pageParam);
      // console.log(data);
      return data;
    },
    {
      getPreviousPageParam: firstPage => {
        // console.log(firstPage);
        return firstPage.nextId ? firstPage.previousId + 1 : undefined;
      },
      getNextPageParam: (lastPage, allPages) => {
        // console.log(lastPage);
        // return lastPage.nextId;
        return lastPage.nextId;
      },
    }
  );
  console.log({ pages: data?.pages.reverse() });
  const [newBoardNotice, setNewBoardNotice] = useState("");
  useEffect(() => {
    if (!isLoading) {
      if (!me) {
        const evtSource = new EventSource(`${BASE_URL}/sse/events`, {
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
      }
      if (me) {
        const evtSource = new EventSource(
          `${BASE_URL}/sse/events?userId=${me?.id}`,
          {
            withCredentials: true,
          }
        );
        console.log(evtSource);
        evtSource.onmessage = ({ data }) => {
          console.log(data);
          setNewBoardNotice(data);
        };
        return () => {
          evtSource.close();
        };
      }
    }
  }, [isLoading, me]);

  const onClickNotice = () => {
    setNewBoardNotice("");
    refetch();
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Home boards={boards?.boards} />
      <div onClick={() => fetchPreviousPage()}>click</div>
      {newBoardNotice && (
        <Notice onClick={onClickNotice}>{newBoardNotice}</Notice>
      )}
    </>
  );
};

export default HomePage;

// export async function getServerSideProps() {
//   const user = await axios
//     .get(`/auth/user`)
//     .then(response => response.data)
//     .catch(error => {
//       console.log(error);
//       return false;
//     });
//   console.log(user);
//   return {
//     props: {
//       user,
//     },
//   };
// }
