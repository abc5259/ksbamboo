import User from "../../../interfaces/user";
import Atom from "../../atoms";
import {
  Avatar,
  StyledBoardDetail,
  Card,
  Info,
  EditAndDelete,
  CardHeader,
  CardInfo,
} from "./BoardDetailStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

export interface IBoardDetailProps {
  boardId: number;
  title: string;
  content: string;
  status: string;
  category: string;
  createdAt: Date;
  user: User;
  myId?: number;
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
}: IBoardDetailProps) => {
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
                  <span>삭제</span>
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
