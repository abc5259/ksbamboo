import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getFavoriteBoardsAPI, getMyCommentBoards } from "../../apis/board";
import { getUserAPI } from "../../apis/user";
import Atom from "../../components/atoms";
import HeaderLayout from "../../components/layouts/HeaderLayout/HeaderLayout";
import AllBoards from "../../components/organisms/AllBoards/AllBoards";
import IBoard from "../../interfaces/board";
import User from "../../interfaces/user";

const Favorite = () => {
  const router = useRouter();
  const { isLoading, data: me } = useQuery<User | boolean, AxiosError>(
    "user",
    getUserAPI
  );
  const { data: myFavoriteBoards } = useQuery<IBoard[]>(
    "myFavoriteBoards",
    getFavoriteBoardsAPI
  );
  if (!isLoading) {
    if (me === undefined) {
      router.replace("/login");
    }
  }
  return (
    <HeaderLayout>
      <Atom.Tag>내 스크랩</Atom.Tag>
      {!myFavoriteBoards ? (
        <div>Lodinng..</div>
      ) : (
        <AllBoards boards={myFavoriteBoards} />
      )}
    </HeaderLayout>
  );
};

export default Favorite;
