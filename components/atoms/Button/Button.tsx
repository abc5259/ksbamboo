import React from "react";
import { StyledButton } from "./ButtonStyles";

export interface IAtomButtonProps {
  text: string;
  width?: string;
  height?: string;
  redius?: number;
  bgColor: string;
  color: string;
  className?: string;
}

const Button: React.FC<IAtomButtonProps> = (props: IAtomButtonProps) => {
  return (
    <>
      <StyledButton type="submit" {...props} className={props.className}>
        {props.text}
      </StyledButton>
    </>
  );
};

export default Button;
