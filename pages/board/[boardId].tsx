import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { getBoardAPI } from "../../apis/board";
import { getUserAPI } from "../../apis/user";
import IBoard from "../../interfaces/board";
import User from "../../interfaces/user";
import BoardDetailTemp from "../../components/templates/BoardDetailTemp/BoardDetailTemp";

const BoardPage = () => {
  const router = useRouter();
  const { boardId } = router.query;
  const [getBoardId, setGetBoardId] = useState("");
  const { error, data: me } = useQuery<User | boolean, AxiosError>(
    "user",
    getUserAPI
  );
  const { data: board } = useQuery<IBoard>(
    ["board", boardId],
    () => getBoardAPI(boardId as string),
    {
      enabled: !!getBoardId,
    }
  );

  useEffect(() => {
    setGetBoardId(boardId as string);
  }, [boardId]);

  return (
    <>
      <BoardDetailTemp board={board}></BoardDetailTemp>
    </>
  );
};
export default BoardPage;
