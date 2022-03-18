import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { useSetRecoilState } from "recoil";
import { allCategoryBoardsAPI } from "../../apis/board";
import { getUserAPI } from "../../apis/user";
import { showBoardNoticeAtom } from "../../atom/atoms";
import Notice from "../../components/atoms/Notice/Notice";
import Home from "../../components/templates/Home/Home";
import IBoard from "../../interfaces/board";
import User from "../../interfaces/user";
import { BASE_URL } from "../../utils/baseUrl";

const CategoryPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const queryClient = useQueryClient();
  const { isLoading, data: me } = useQuery<User, AxiosError>(
    "user",
    getUserAPI
  );
  // const { data: boards, refetch } = useQuery<IBoard[]>(
  //   ["boards", category],
  //   () => allCategoryBoardsAPI(category as string),
  //   {
  //     refetchOnWindowFocus: false,
  //   }
  // );
  const setNewBoardNotice = useSetRecoilState(showBoardNoticeAtom);
  useEffect(() => {
    if (!isLoading && category) {
      if (!me) {
        const evtSource = new EventSource(
          `${BASE_URL}/sse/events/${category}`,
          {
            withCredentials: true,
          }
        );
        console.log(evtSource);
        evtSource.onmessage = ({ data }) => {
          setNewBoardNotice(data);
        };
        return () => {
          evtSource.close();
        };
      }
      if (me) {
        const evtSource = new EventSource(
          `${BASE_URL}/sse/events/${category}?userId=${me?.id}`,
          {
            withCredentials: true,
          }
        );
        console.log(evtSource);
        evtSource.onmessage = ({ data }) => {
          setNewBoardNotice(data);
        };
        return () => {
          evtSource.close();
        };
      }
    }
  }, [isLoading, me, category]);

  return (
    <>
      <Home category={category as string} />
    </>
  );
};

export default CategoryPage;
