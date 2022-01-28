import React from "react";
import { UseFormRegister, UseFormRegisterReturn } from "react-hook-form";
import { ILoginForm } from "../../organisms/LoginForm/LoginForm";
import { StyledInput } from "./InputStyles";

export interface IAtomInputProps {
  placeholder?: string;
  width?: string;
  fontSize?: string;
  bgColor?: string;
  type: string;
  register: UseFormRegister<ILoginForm>;
}

//타입 나중에 바꿔야함 any => ??
const Input = (props: IAtomInputProps) => {
  return (
    <StyledInput
      {...props}
      {...props.register("password", { required: "비밀번호를 적어주세요" })}
      placeholder={props.placeholder}
      type={props.type}
    />
  );
};

export default Input;
