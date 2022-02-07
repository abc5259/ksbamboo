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
  createAt: string;
  user: User;
  me: User;
}

const BoardDetail = ({
  boardId,
  title,
  content,
  status,
  category,
  createAt,
  user,
  me,
}: IBoardDetailProps) => {
  return (
    <>
      <StyledBoardDetail>
        <Atom.Tag width="100%">{category} 게시판</Atom.Tag>
        <Card>
          <CardHeader>
            <Avatar>
              <FontAwesomeIcon icon={faUser} size={"sm"} />
            </Avatar>
            <Info>
              <span>
                {status === "PRIVATE" ? "익명" : user.username} (
                {user.ksDepartment})
              </span>
              <span>{createAt}</span>
            </Info>
            <EditAndDelete>
              {user.id === me.id && (
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
