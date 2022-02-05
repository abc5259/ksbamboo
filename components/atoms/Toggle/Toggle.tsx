import { StyledToggle } from "./ToggleStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";

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
  up?: boolean;
  mb?: string;
}

const Toggle = (props: IAtomToggleProps) => {
  return (
    <>
      <StyledToggle
        up={props.up}
        fontSize={props.fontSize}
        mb={props.mb}
        onClick={props.onClick}
      >
        <span>{props.departmentTitle}</span>
        {!props.up ? (
          <FontAwesomeIcon icon={faChevronDown} size={"xs"} />
        ) : (
          <FontAwesomeIcon icon={faChevronUp} size={"xs"} />
        )}
      </StyledToggle>
    </>
  );
};

export default Toggle;
