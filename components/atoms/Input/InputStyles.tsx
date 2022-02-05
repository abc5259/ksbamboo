import styled, { css } from "styled-components";
import { IAtomInputProps } from "./Input";

export const StyledInput = styled.input<IAtomInputProps>`
  ${props => {
    const { width, fontSize, bgColor, outlineColor, borderRadius } = props;
    const inputWidth = width ? width : "100%";
    const inputBgColor = bgColor ? bgColor : "#FFFFFF";
    const inputSize = fontSize ? fontSize : "1rem";
    const focusOutline = outlineColor
      ? `outline-color: ${outlineColor}`
      : "outline: none";
    return css`
      border: none;
      width: ${inputWidth};
      font-size: ${inputSize} || "0.9rem";
      padding: 10px 5px;
      color: inherit;
      /* margin-bottom: 10px; */
      background-color: ${inputBgColor};
      border-radius: ${borderRadius};
      &:focus {
        ${focusOutline}
      }
    `;
  }}
`;
