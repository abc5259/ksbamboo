import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import IBoard from "../../../interfaces/board";
import User from "../../../interfaces/user";
import HeaderAndSideBar from "../../layouts/HeaderAndSideBar/HeaderAndSideBar";
import BoardDetailAndComment from "../../organisms/BoardDetailAndComment/BoardDetailAndComment";

export interface ITempBoardDetailTempProps {
  boardId: number;
}

const BoardDetailTemp = ({ boardId }: ITempBoardDetailTempProps) => {
  const [board, setBoard] = useState<IBoard>();
  const [user, setUser] = useState<User>();
  const queryClient = useQueryClient();
  useEffect(() => {
    if (queryClient.getQueryData("user")) {
      setUser(queryClient.getQueryData("user"));
    }
    if (queryClient.getQueryData(["board", `${boardId}`])) {
      setBoard(queryClient.getQueryData(["board", `${boardId}`]));
    }
  }, [
    queryClient.getQueryData("user"),
    queryClient.getQueryData(["board", boardId]),
  ]);
  return (
    <>
      <HeaderAndSideBar>
        {board && (
          <BoardDetailAndComment
            board={board}
            loginUserId={user?.id as number}
          />
        )}
      </HeaderAndSideBar>
    </>
  );
};

export default BoardDetailTemp;
