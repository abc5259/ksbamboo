import { UseFormRegisterReturn } from "react-hook-form";
import { StyledSelect } from "./SelectStyles";

export interface IAtomSelectProps {
  options: any[];
  text?: string;
  register: UseFormRegisterReturn;
  defualt?: string;
}

const Select = (props: IAtomSelectProps) => {
  return (
    <StyledSelect {...props.register}>
      {props.defualt && <option>{props.defualt}</option>}
      {props.options.map(option => (
        <option key={option} value={option}>
          {props.text ? `${option}${props.text}` : `${option}`}
        </option>
      ))}
    </StyledSelect>
  );
};

export default Select;
