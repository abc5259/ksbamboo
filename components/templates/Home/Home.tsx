import IBoard from "../../../interfaces/board";
import HeaderAndSideBar from "../../layouts/HeaderAndSideBar/HeaderAndSideBar";
import AllBoards from "../../organisms/AllBoards/AllBoards";
import BoardForm from "../../molecules/BoardForm/BoardForm";
import { useInfiniteQueryWithScroll } from "../../hooks/useInfiniteQueryWithScroll";
import { useState } from "react";
import Notice from "../../atoms/Notice/Notice";
import { useRecoilState } from "recoil";
import { showBoardNoticeAtom } from "../../../atom/atoms";

export interface ITempHomeProps {}

const Home = (props: ITempHomeProps) => {
  const [newBoardNotice, setNewBoardNotice] =
    useRecoilState(showBoardNoticeAtom);
  const { data, refetch, isFetchingMore, fetchTriggerElement, isFetching } =
    useInfiniteQueryWithScroll();

  const onClickNotice = () => {
    setNewBoardNotice("");
    refetch();
    window.scrollTo(0, 0);
  };
  return (
    <>
      <HeaderAndSideBar>
        <BoardForm mb="30px" />
        {newBoardNotice && (
          <Notice onClick={onClickNotice}>{newBoardNotice}</Notice>
        )}
        {data &&
          data.pages.map((page, index) => (
            <AllBoards key={index} boards={page.boards} />
          ))}
      </HeaderAndSideBar>
      {isFetching && <div>로딩중...</div>}
      {isFetchingMore && fetchTriggerElement}
    </>
  );
};

export default Home;
