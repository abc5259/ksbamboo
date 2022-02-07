import { StyledTime } from "./TimeStyles";
import "moment/locale/ko";
import moment from "moment";

export interface IAtomTimeProps {
  createdAt: Date;
}

const Time = ({ createdAt }: IAtomTimeProps) => {
  const now = moment().format("YYYY-MM-DD");
  const writeTime = moment(createdAt).format("YYYY-MM-DD");
  const diffTime = moment(writeTime).isBefore(now);
  const realWriteTime = moment(createdAt).format("MM/DD HH:mm");
  return (
    <StyledTime>
      {diffTime ? realWriteTime : moment(createdAt).fromNow()}
    </StyledTime>
  );
};

export default Time;
