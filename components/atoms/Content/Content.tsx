import { StyledContent } from "./ContentStyles";

export interface IAtomContentProps {
  content: string;
}

const Content: React.FC<IAtomContentProps> = props => {
  return <StyledContent {...props}>{props.children}</StyledContent>;
};

export default Content;
