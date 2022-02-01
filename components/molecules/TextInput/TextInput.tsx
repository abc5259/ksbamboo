import { UseFormRegisterReturn } from "react-hook-form";
import Atom from "../../atoms";
import { InputType } from "../../atoms/Input/Input";
import { StyledTextInput } from "./TextInputStyles";

export interface ITextInputProps {
  labelText: string;
  register?: UseFormRegisterReturn;
  type?: InputType;
  message?: string;
  mb?: string;
}

const TextInput = ({
  labelText,
  register,
  type,
  message,
  mb,
}: ITextInputProps) => {
  return (
    <StyledTextInput mb={mb}>
      <label>{labelText}</label>
      <Atom.Input register={register} type={type} />
      <Atom.Message className="error" fontSize="0.8rem">
        {message}
      </Atom.Message>
    </StyledTextInput>
  );
};

export default TextInput;
