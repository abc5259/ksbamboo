import { StyledTag } from "./TagStyles";

export interface IAtomTagProps {
  bgColor?: string;
}

const Tag: React.FC<IAtomTagProps> = props => {
  return <StyledTag {...props}>{props.children}</StyledTag>;
};

export default Tag;
