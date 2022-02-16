import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery, useQueryClient } from "react-query";
import { getBoardAPI } from "../../apis/board";
import { getUserAPI } from "../../apis/user";
import IBoard from "../../interfaces/board";
import User from "../../interfaces/user";
import BoardDetailTemp from "../../components/templates/BoardDetailTemp/BoardDetailTemp";
import reissueExpToken from "../../utils/reissueExpToken";

const BoardPage = () => {
  const router = useRouter();
  const { boardId } = router.query;
  const [token, setToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [getBoardId, setGetBoardId] = useState("");
  const queryClient = useQueryClient();
  const { error, data: me } = useQuery<User | boolean, AxiosError>(
    "user",
    () => getUserAPI(token),
    {
      enabled: !!token,
    }
  );
  const {
    isLoading,
    error: boardError,
    data: board,
  } = useQuery<IBoard>(
    ["board", boardId],
    () => getBoardAPI(boardId as string),
    {
      enabled: !!getBoardId,
    }
  );

  useEffect(() => {
    setToken(localStorage.getItem("accessToken") || "");
    setRefreshToken(localStorage.getItem("refreshToken") || "");
    setGetBoardId(boardId as string);
  }, [token, boardId]);

  if (token || me === false) {
    reissueExpToken(token, refreshToken, setToken, queryClient);
  }
  if (isLoading) {
    return <div>로딩중...</div>;
  }
  return (
    <>
      {board && <BoardDetailTemp board={board} token={token}></BoardDetailTemp>}
    </>
  );
};
export default BoardPage;
