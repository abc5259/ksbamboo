import React from "react";
import StyledButton from "./button_styled";

const ButtonComponent: React.FC<any> = props => {
  console.log(props);
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default ButtonComponent;
