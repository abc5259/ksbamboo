import React from "react";
import { StyledInput } from "./InputStyles";

export interface IAtomInputProps {
  placeholder?: string;
  width?: string;
  fontSize?: string;
  bgColor?: string;
  type: string;
}

//타입 나중에 바꿔야함 any => ??
const Input = (props: any) => {
  return (
    <StyledInput {...props} placeholder={props.placeholder} type={props.type} />
  );
};

export default Input;
