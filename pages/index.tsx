import { useInfiniteQuery, useQuery } from "react-query";
import { allBoardsAPI } from "../apis/board";
import IBoard from "../interfaces/board";
import Home from "../components/templates/Home/Home";
import type { NextPage } from "next";
import { BASE_URL } from "../utils/baseUrl";
import { useEffect } from "react";
import User from "../interfaces/user";
import { AxiosError } from "axios";
import { getUserAPI } from "../apis/user";
import { useSetRecoilState } from "recoil";
import { showBoardNoticeAtom } from "../atom/atoms";

const HomePage: NextPage = () => {
  const { isLoading, data: me } = useQuery<User, AxiosError>(
    "user",
    getUserAPI
  );
  const setNewBoardNotice = useSetRecoilState(showBoardNoticeAtom);
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

  return (
    <>
      <Home />
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
