import { useInfiniteQuery } from "react-query";
import { allBoardsAPI } from "../../apis/board";
import IBoard from "../../interfaces/board";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

export const useInfiniteQueryWithScroll = () => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteQuery(
      "example",
      async ({
        pageParam = 0,
      }): Promise<{ boards: IBoard[]; nextId: number | boolean }> => {
        const data = await allBoardsAPI(pageParam);
        return {
          boards: data,
          nextId: data.length !== 15 ? false : data[14].id,
        };
      },
      {
        getNextPageParam: lastPage =>
          lastPage.nextId ? lastPage.nextId : undefined,
        refetchOnWindowFocus: false,
      }
    );
  useEffect(() => {
    if (inView && hasNextPage && !isFetching) {
      fetchNextPage();
    }
  }, [inView]);
  return {
    data,
    isFetching,
    isFetchingMore: hasNextPage,
    fetchTriggerElement: <div ref={ref}></div>,
    refetch,
  };
};
