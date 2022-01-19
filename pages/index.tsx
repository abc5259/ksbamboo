import type { NextPage } from "next";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { boardsAtom, ksDepartmentAtom } from "../atom/atoms";
import AppLayout from "../components/AppLayout";
import Board from "../components/Board/Board";

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Home: NextPage = () => {
  const boards = useRecoilValue(boardsAtom);
  const ksDepartments = useRecoilValue(ksDepartmentAtom);
  return (
    <>
      <AppLayout>
        <select>
          {ksDepartments.map(ksDepartment => (
            <option key={ksDepartment} value={ksDepartment}>
              {ksDepartment}
            </option>
          ))}
        </select>
        <BoardWrapper>
          {boards.map(board => (
            <Board key={board.id} boardId={board.id} />
          ))}
        </BoardWrapper>
      </AppLayout>
    </>
  );
};

export default Home;
