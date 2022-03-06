import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { getMyCommentBoards } from "../../apis/board";
import { getUserAPI } from "../../apis/user";
import Atom from "../../components/atoms";
import HeaderLayout from "../../components/layouts/HeaderLayout/HeaderLayout";
import AllBoards from "../../components/organisms/AllBoards/AllBoards";
import IBoard from "../../interfaces/board";
import User from "../../interfaces/user";
const CommentBoard = () => {
  const router = useRouter();
  const { isLoading, data: me } = useQuery<User | boolean, AxiosError>(
    "user",
    getUserAPI
  );
  const { data: myCommentBoards } = useQuery<IBoard[]>(
    "myCommentBoards",
    getMyCommentBoards
  );
  if (!isLoading) {
    if (!me) {
      router.replace("/login");
    }
  }
  return (
    <HeaderLayout>
      <Atom.Tag>댓글 단 글</Atom.Tag>
      {!myCommentBoards ? (
        <div>Lodinng..</div>
      ) : (
        <AllBoards boards={myCommentBoards} />
      )}
    </HeaderLayout>
  );
};

export default CommentBoard;
