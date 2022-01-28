import { UseFormRegister } from "react-hook-form";
import { StyledInput } from "./InputStyles";

export interface IAtomInputProps {
  placeholder?: string;
  width?: string;
  height?: string;
  bgColor?: string;
  register: UseFormRegister<TFieldValues>;
}

const Input = (props: IAtomInputProps) => {
  return <StyledInput {...props} />;
};

export default Input;
