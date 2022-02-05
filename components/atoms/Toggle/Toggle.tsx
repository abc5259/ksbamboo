import { StyledToggle } from "./ToggleStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export type DepartmentTitleType =
  | "문과대학"
  | "사회과학대학"
  | "상경대학"
  | "이과대학"
  | "공과대학"
  | "약학대학"
  | "예술종합대학"
  | "생명보건대학"
  | "글로벌학부";

export interface IAtomToggleProps {
  onClick?: () => void;
  departmentTitle: DepartmentTitleType;
  fontSize?: string;
}

const Toggle = (props: IAtomToggleProps) => {
  const [Up, setUp] = useState(false);
  return (
    <>
      <StyledToggle fontSize={props.fontSize} onClick={props.onClick}>
        <span>{props.departmentTitle}</span>
        {!Up ? (
          <FontAwesomeIcon icon={faChevronDown} size={"xs"} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} size={"xs"} />
        )}
      </StyledToggle>
    </>
  );
};

export default Toggle;
