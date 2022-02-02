import { StyledTitle } from "./TitleStyles";

export interface IAtomTitleProps {
  fontSize?: string;
  fontWeight?: number;
  color?: string;
  mb?: string;
}

const Title: React.FC<IAtomTitleProps> = props => {
  return <StyledTitle {...props}>{props.children}</StyledTitle>;
};

export default Title;
