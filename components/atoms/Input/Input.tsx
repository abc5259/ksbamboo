import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { StyledInput } from "./InputStyles";

type InputType = "email" | "password" | "text" | "search" | "submit" | "number";

export interface IAtomInputProps {
  placeholder?: string;
  width?: string;
  fontSize?: string;
  bgColor?: string;
  type?: InputType;
  register?: UseFormRegisterReturn;
  name?: string;
  outlineColor?: string;
  borderRadius?: string;
}

const Input = (props: IAtomInputProps) => {
  return <StyledInput spellCheck={false} {...props} {...props.register} />;
};

export default Input;
