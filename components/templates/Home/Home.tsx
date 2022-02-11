import IBoard from "../../../interfaces/board";
import HeaderAndSideBar from "../../layouts/HeaderAndSideBar/HeaderAndSideBar";
import AllBoards from "../../organisms/AllBoards/AllBoards";
import BoardForm from "../../molecules/BoardForm/BoardForm";

export interface ITempHomeProps {
  token: string;
  boards?: IBoard[];
}

const Home = ({ token, boards }: ITempHomeProps) => {
  return (
    <>
      <HeaderAndSideBar>
        <BoardForm mb="30px" token={token} />
        {boards ? <AllBoards boards={boards} /> : <div>로딩중...</div>}
      </HeaderAndSideBar>
    </>
  );
};

export default Home;
