import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { boardsAtom } from "../atom/atoms";
import AppLayout from "../components/AppLayout";
import Board from "../components/Board/Board";

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Home: NextPage = () => {
  const boards = useRecoilValue(boardsAtom);
  return (
    <>
      <AppLayout>
        <BoardWrapper>
          {boards.map(board => (
            <Board />
          ))}
        </BoardWrapper>
      </AppLayout>
    </>
  );
};

export default Home;
