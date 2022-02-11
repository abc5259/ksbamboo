import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useCallback } from "react";
import { useMutation } from "react-query";
import { deleteBoardAPI } from "../../../apis/board";
import User from "../../../interfaces/user";
import Atom from "../../atoms";
import {
  StyledBoardDetail,
  Card,
  Info,
  EditAndDelete,
  CardHeader,
  CardInfo,
} from "./BoardDetailStyles";

export interface IBoardDetailProps {
  boardId: number;
  title: string;
  content: string;
  status: string;
  category: string;
  createdAt: Date;
  user: User;
  myId?: number;
  token: string;
}

const BoardDetail = ({
  boardId,
  token,
  title,
  content,
  status,
  category,
  createdAt,
  user,
  myId,
}: IBoardDetailProps) => {
  const router = useRouter();
  const mutation = useMutation<
    { result: boolean },
    AxiosError,
    { token: string; boardId: number }
  >("deleteBoard", deleteBoardAPI, {
    onError: error => {
      console.log(error);
    },
    onSuccess: () => {
      //해당 category게시판으로 push
      router.replace(`/category/${category}`);
    },
  });
  const onDeleteClick = useCallback(() => {
    mutation.mutate({
      token,
      boardId,
    });
  }, [token, boardId]);
  return (
    <>
      <StyledBoardDetail>
        <Atom.Tag>{category} 게시판</Atom.Tag>
        <Card>
          <CardHeader>
            <Atom.Avatar />
            <Info>
              <span>
                {status === "PRIVATE" ? "익명" : user.username} (
                {user.ksDepartment})
              </span>
              <Atom.Time createdAt={createdAt} />
            </Info>
            <EditAndDelete>
              {user.id === myId && (
                <>
                  <span>수정</span>
                  <span onClick={onDeleteClick}>삭제</span>
                </>
              )}
            </EditAndDelete>
          </CardHeader>
          <CardInfo>
            <Atom.Title mb="20px" fontWeight={700}>
              {title}
            </Atom.Title>
            <Atom.Content>{content}</Atom.Content>
          </CardInfo>
        </Card>
      </StyledBoardDetail>
    </>
  );
};

export default BoardDetail;
