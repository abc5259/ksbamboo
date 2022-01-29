import { StyledMessage } from "./MessageStyles";

type MessageClassType = "error" | "success";

export interface IAtomMessageProps {
  className: MessageClassType;
  fontSize: string;
}

const Message: React.FC<IAtomMessageProps> = props => {
  return <StyledMessage {...props}>{props.children}</StyledMessage>;
};

export default Message;
