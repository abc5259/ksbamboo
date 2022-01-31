import { UseFormRegisterReturn } from "react-hook-form";
import Atom from "../../atoms";
import { InputType } from "../../atoms/Input/Input";
import { StyledLoginInput } from "./LoginInputStyles";

export interface ILoginInputProps {
  labelTest: string;
  register?: UseFormRegisterReturn;
  type?: InputType;
  message?: string;
  mb?: string;
}

const LoginInput = ({
  labelTest,
  register,
  type,
  message,
  mb,
}: ILoginInputProps) => {
  return (
    <StyledLoginInput mb={mb}>
      <label>{labelTest}</label>
      <Atom.Input register={register} type={type} />
      <Atom.Message className="error" fontSize="0.8rem">
        {message}
      </Atom.Message>
    </StyledLoginInput>
  );
};

export default LoginInput;
