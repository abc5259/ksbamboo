import type { NextPage } from "next";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import { boardsAtom, ksDepartmentAtom } from "../atom/atoms";
import AppLayout from "../components/templates/AppLayout";
import Board from "../components/molecules/Board/Board";
import BoardForm from "../components/organisms/BoardForm/BoardForm";
import AllBoards from "../components/organisms/AllBoards/AllBoards";

export const BoardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
`;

const Home: NextPage = () => {
  const boards = useRecoilValue(boardsAtom);
  const ksDepartments = useRecoilValue(ksDepartmentAtom);
  const [department, setDepartment] = useState("전체");
  const onChangeDepartment = (e: React.FormEvent<HTMLSelectElement>) => {
    setDepartment(e.currentTarget.value);
  };
  return (
    <>
      <AppLayout>
        <select onChange={onChangeDepartment}>
          {ksDepartments.map(ksDepartment => (
            <option key={ksDepartment} value={ksDepartment}>
              {ksDepartment}
            </option>
          ))}
        </select>
        <BoardForm />
        <AllBoards boards={[]} />
        {/* <BoardWrapper>
          {boards.map(board => {
            if (department === "전체") {
              return <Board key={board.id} boardId={board.id} />;
            }
            if (board.department === department) {
              return <Board key={board.id} boardId={board.id} />;
            }
          })}
        </BoardWrapper> */}
      </AppLayout>
    </>
  );
};

export default Home;
