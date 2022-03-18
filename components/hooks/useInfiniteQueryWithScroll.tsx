import { useInfiniteQuery } from "react-query";
import { allBoardsAPI, allCategoryBoardsAPI } from "../../apis/board";
import IBoard from "../../interfaces/board";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

// type WhatAPIType = typeof allBoardsAPI | typeof allCategoryBoardsAPI;

export const useInfiniteQueryWithScroll = (category?: string) => {
  const { ref, inView } = useInView();
  const { data, fetchNextPage, hasNextPage, isFetching, refetch } =
    useInfiniteQuery(
      !category ? "boards" : ["boards", category],
      async ({
        pageParam = 0,
      }): Promise<{ boards: IBoard[]; nextId: number | boolean }> => {
        let data;
        if (!category) {
          data = await allBoardsAPI(pageParam);
        } else {
          data = await allCategoryBoardsAPI(category, pageParam);
        }
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

// function isAllBoardsAPIType(
//   whatAPI: WhatAPIType
// ): whatAPI is typeof allBoardsAPI {
//   return typeof whatAPI === typeof allBoardsAPI;
// }
