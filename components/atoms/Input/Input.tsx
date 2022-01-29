import React from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { ILoginForm } from "../../organisms/LoginForm/LoginForm";
import { StyledInput } from "./InputStyles";

type InputType = "email" | "password" | "text" | "search" | "submit";

export interface IAtomInputProps {
  placeholder?: string;
  width?: string;
  fontSize?: string;
  bgColor?: string;
  type: InputType;
  register?: UseFormRegisterReturn;
}

//타입 나중에 바꿔야함 any => ??
const Input = (props: IAtomInputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
