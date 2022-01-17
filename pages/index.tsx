import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import { boardsAtom } from "../atom/atoms";
import AppLayout from "../components/AppLayout";
import Board from "../components/Board/Board";

const Home: NextPage = () => {
  const boards = useRecoilValue(boardsAtom);
  return (
    <>
      <AppLayout>
        {boards.map(board => (
          <Board />
        ))}
      </AppLayout>
    </>
  );
};

export default Home;
