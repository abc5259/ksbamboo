import styled, { css } from "styled-components";
import { IAtomInputProps } from "./Input";

export const StyledInput = styled.input<IAtomInputProps>`
  ${({ width, fontSize, bgColor }) => {
    const inputWidth = width ? width : "100%";
    const inputBgColor = bgColor ? bgColor : "#FFFFFF";
    const inputSize = fontSize ? fontSize : "1rem";
    return css`
      width: ${inputWidth};
      font-size: ${inputSize};
      padding: 10px 5px;
      margin-bottom: 10px;
      background-color: ${inputBgColor};
      &:focus {
        outline: none;
      }
    `;
  }}
`;
