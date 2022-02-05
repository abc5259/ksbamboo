import { StyledToggle } from "./ToggleStyles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export interface IAtomToggleProps {
  onClick?: () => void;
  title: string;
  fontSize?: string;
}

const Toggle = (props: IAtomToggleProps) => {
  const [Up, setUp] = useState(false);
  return (
    <>
      <StyledToggle fontSize={props.fontSize} onClick={props.onClick}>
        <span>{props.title}</span>
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
