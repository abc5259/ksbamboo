import React, { ReducerWithoutAction } from "react";
import ButtonComponent from "./button_component";

export interface IButton {
  children: string;
  backColor?: "primary" | "gradient" | "black";
}

const Button: React.FC<IButton> = (props, { backColor }: IButton) => {
  console.log(props);
  return <ButtonComponent backColor={backColor} {...props}></ButtonComponent>;
};

export default Button;
