import { useEffect, useState } from "react";
import { useQueryClient } from "react-query";
import IBoard from "../../../interfaces/board";
import User from "../../../interfaces/user";
import HeaderAndSideBar from "../../layouts/HeaderAndSideBar/HeaderAndSideBar";
import BoardDetailAndComment from "../../organisms/BoardDetailAndComment/BoardDetailAndComment";

export interface ITempBoardDetailTempProps {
  board?: IBoard;
}

const BoardDetailTemp = ({ board }: ITempBoardDetailTempProps) => {
  const [user, setUser] = useState<User>();
  const queryClient = useQueryClient();
  useEffect(() => {
    if (queryClient.getQueryData("user")) {
      setUser(queryClient.getQueryData("user"));
    }
  }, [queryClient.getQueryData("user")]);
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
