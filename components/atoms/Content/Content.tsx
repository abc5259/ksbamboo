import { StyledContent } from "./ContentStyles";

export interface IAtomContentProps {
  fontSize?: string;
}

const Content: React.FC<IAtomContentProps> = props => {
  return <StyledContent {...props}>{props.children}</StyledContent>;
};

export default Content;
