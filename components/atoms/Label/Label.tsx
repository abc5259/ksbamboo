import { StyledLabel } from "./LabelStyles";

export interface IAtomLabelProps {}

const Label: React.FC = props => {
  return <StyledLabel>{props.children}</StyledLabel>;
};

export default Label;
