import { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useMutation } from "react-query";
import { toast } from "react-toastify";
import Molecule from "..";
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
  likesLength?: number;
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
  likesLength,
}: IBoardDetailProps) => {
  const [editBoard, setEditBoard] = useState(false);
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
      //해당 category게시판으로 replace
      router.replace(`/category/${category}`);
      toast.success("해당 게시글이 삭제되었습니다.");
    },
  });
  const onDeleteClick = useCallback(() => {
    mutation.mutate({
      token,
      boardId,
    });
  }, [token, boardId]);

  const onEditClick = useCallback(() => {
    setEditBoard(prev => !prev); // true
  }, [editBoard]);
  return (
    <StyledBoardDetail>
      {editBoard ? (
        <Molecule.BoardForm
          token={token}
          editBoard={editBoard}
          current_title={title}
          current_textArea={content}
          boardId={boardId}
          setEditBoard={setEditBoard}
        />
      ) : (
        <>
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
                    <span onClick={onEditClick}>수정</span>
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
              <div className="cardInfo_like">
                <Atom.Like />
                <span>{likesLength}</span>
              </div>
            </CardInfo>
          </Card>
        </>
      )}
    </StyledBoardDetail>
  );
};

export default BoardDetail;
