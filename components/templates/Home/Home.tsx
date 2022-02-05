import IBoard from "../../../interfaces/board";
import AllBoards from "../../organisms/AllBoards/AllBoards";
import BoardForm from "../../organisms/BoardForm/BoardForm";
import NavBar from "../../organisms/NavBar/NavBar";
import SideBar from "../../organisms/SideBar/SideBar";
import { Container, StyledHome } from "./HomeStyles";

export interface ITempHomeProps {
  token: string;
  boards?: IBoard[];
}

const Home = ({ token, boards }: ITempHomeProps) => {
  return (
    <>
      <NavBar />
      <StyledHome>
        <Container>
          <BoardForm token={token} />
          {boards ? <AllBoards boards={boards} /> : <div>로딩중...</div>}
        </Container>
        <SideBar />
      </StyledHome>
    </>
  );
};

export default Home;
