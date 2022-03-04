import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useCallback, useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { toast } from "react-toastify";
import Molecule from "..";
import { deleteBoardAPI, updateBoardLikesAPI } from "../../../apis/board";
import { Like } from "../../../interfaces/like";
import User from "../../../interfaces/user";
import Atom from "../../atoms";
import {
  StyledBoardDetail,
  Card,
  Info,
  EditAndDelete,
  CardHeader,
  CardInfo,
  LikeBtn,
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
  likes?: Like[];
}

const BoardDetail = ({
  boardId,
  title,
  content,
  status,
  category,
  createdAt,
  user,
  myId,
  likes,
}: IBoardDetailProps) => {
  const queryClient = useQueryClient();
  const [editBoard, setEditBoard] = useState(false);
  const router = useRouter();
  const mutation = useMutation<
    { result: boolean },
    AxiosError,
    { boardId: number }
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
      boardId,
    });
  }, [boardId]);

  const onEditClick = useCallback(() => {
    setEditBoard(prev => !prev); // true
  }, [editBoard]);

  const onLikeBtnClick = useCallback(() => {
    updateBoardLikesAPI(boardId)
      .then(() => {
        queryClient.refetchQueries(["board", `${boardId}`]);
      })
      .catch(error => {
        if (error.response.data.statusCode === 401) {
          toast.error("로그인후에 이용가능한 서비스입니다.");
        }
      });
  }, [boardId]);
  console.log(user);
  return (
    <StyledBoardDetail>
      {editBoard ? (
        <Molecule.BoardForm
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
                <span>{likes?.length}</span>
              </div>
              {myId && (
                <div className="cardInfo_btns">
                  <LikeBtn
                    isLike={!!likes?.filter(like => like.user.id === myId)[0]}
                    onClick={onLikeBtnClick}
                  >
                    <Atom.Like fillColor="currentColor" />
                    <span>좋아요</span>
                  </LikeBtn>
                </div>
              )}
            </CardInfo>
          </Card>
        </>
      )}
    </StyledBoardDetail>
  );
};

export default BoardDetail;
