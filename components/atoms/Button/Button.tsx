import React from "react";
import { StyledButton } from "./ButtonStyles";

export interface IAtomButtonProps {
  width?: string;
  height?: string;
  redius?: number;
  bgColor?: string;
  color?: string;
  className?: string;
}

const Button: React.FC<IAtomButtonProps> = props => {
  return (
    <>
      <StyledButton type="submit" {...props} className={props.className}>
        {props.children}
      </StyledButton>
    </>
  );
};

export default Button;
