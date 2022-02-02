import { UseFormRegisterReturn } from "react-hook-form";
import Atom from "../../atoms";
import { StyledLabelSelect } from "./LabelSelectStyles";

export interface ILabelSelectProps {
  labelText: string;
  options: any[];
  text?: string;
  register: UseFormRegisterReturn;
  mb?: string;
  message?: string;
  default?: string;
}

const LabelSelect = (props: ILabelSelectProps) => {
  return (
    <StyledLabelSelect mb={props.mb ? props.mb : "0"}>
      <Atom.Label>{props.labelText}</Atom.Label>
      <Atom.Select
        options={props.options}
        register={props.register}
        text={props.text}
        defualt={props.default}
      />
      <Atom.Message className="error" fontSize="0.9rem">
        {props.message}
      </Atom.Message>
    </StyledLabelSelect>
  );
};

export default LabelSelect;
