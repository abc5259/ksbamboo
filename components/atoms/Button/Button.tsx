import React from "react";
import { StyledButton } from "./ButtonStyles";

type ButtonType = "submit" | "button";

export interface IAtomButtonProps {
  width?: string;
  height?: string;
  redius?: number;
  bgColor?: string;
  color?: string;
  className?: string;
  type?: ButtonType;
  onClick?: () => void;
}

const Button: React.FC<IAtomButtonProps> = props => {
  return (
    <>
      <StyledButton
        {...props}
        type={props.type || "submit"}
        className={props.className}
        onClick={props.onClick}
      >
        {props.children}
      </StyledButton>
    </>
  );
};

export default Button;
