import HeaderAndSideBar from "../../layouts/HeaderAndSideBar/HeaderAndSideBar";
import AllBoards from "../../organisms/AllBoards/AllBoards";
import BoardForm from "../../molecules/BoardForm/BoardForm";
import { useInfiniteQueryWithScroll } from "../../../hooks/useInfiniteQueryWithScroll";
import Notice from "../../atoms/Notice/Notice";
import { useRecoilState } from "recoil";
import {
  showBoardNoticeAtom,
  showCategoryBoardNoticeAtom,
} from "../../../atom/atoms";
import { allBoardsAPI } from "../../../apis/board";
import { StyledAllBoards } from "../../organisms/AllBoards/AllBoardsStyles";

export interface ITempHomeProps {
  category?: string;
}

const Home = ({ category }: ITempHomeProps) => {
  const [newBoardNotice, setNewBoardNotice] =
    useRecoilState(showBoardNoticeAtom);
  const [newCategoryBooardNotice, setNewCategoryBoardNotice] = useRecoilState(
    showCategoryBoardNoticeAtom
  );
  const { data, refetch, isFetchingMore, fetchTriggerElement, isFetching } =
    useInfiniteQueryWithScroll(category);

  const onClickNotice = () => {
    if (category) {
      setNewCategoryBoardNotice(prev =>
        prev.filter(prevCategory => prevCategory !== category)
      );
    } else {
      setNewBoardNotice("");
    }
    refetch();
    window.scrollTo(0, 0);
  };
  console.log(newCategoryBooardNotice);
  return (
    <>
      <HeaderAndSideBar>
        <BoardForm mb="30px" />
        {!category && newBoardNotice && (
          <Notice onClick={onClickNotice}>{newBoardNotice}</Notice>
        )}
        {category && newCategoryBooardNotice.includes(category) && (
          <Notice onClick={onClickNotice}>새로운 게시글</Notice>
        )}
        <StyledAllBoards>
          {data &&
            data.pages.map((page, index) => (
              <AllBoards
                key={index}
                boards={page.boards}
                isNotboards={page.boards.length === 0 && index === 0}
              />
            ))}
          {isFetching && isFetchingMore && <div>로딩중...</div>}
          {isFetchingMore && fetchTriggerElement}
        </StyledAllBoards>
      </HeaderAndSideBar>
    </>
  );
};

export default Home;
