import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useQuery } from "react-query";
import { getMyBoards } from "../../apis/board";
import { getUserAPI } from "../../apis/user";
import Atom from "../../components/atoms";
import HeaderLayout from "../../components/layouts/HeaderLayout/HeaderLayout";
import AllBoards from "../../components/organisms/AllBoards/AllBoards";
import { StyledAllBoards } from "../../components/organisms/AllBoards/AllBoardsStyles";
import IBoard from "../../interfaces/board";
import User from "../../interfaces/user";

const Write = () => {
  const router = useRouter();
  const { isLoading, data: me } = useQuery<User | boolean, AxiosError>(
    "user",
    getUserAPI
  );
  const { data: myBoards } = useQuery<IBoard[]>("myBoards", getMyBoards);
  if (!isLoading) {
    if (!me) {
      router.replace("/login");
    }
  }
  return (
    <HeaderLayout>
      <Atom.Tag>내가 쓴 글</Atom.Tag>
      <StyledAllBoards>
        {!myBoards ? <div>Lodinng..</div> : <AllBoards boards={myBoards} />}
      </StyledAllBoards>
    </HeaderLayout>
  );
};

export default Write;
