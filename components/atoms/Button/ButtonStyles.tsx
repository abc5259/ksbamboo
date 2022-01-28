import styled, { css } from "styled-components";
import { IAtomButtonProps } from "./Button";

export const StyledButton = styled.button<IAtomButtonProps>`
  ${props => {
    const { width, height, bgColor, color, redius } = props;
    return css`
      border: none;
      width: ${width};
      height: ${height};
      background-color: ${bgColor};
      color: ${color};
      border-radius: ${redius}px;
      cursor: pointer;
      &.small {
        width: 100px;
        height: 45px;
      }
      &.middle {
        width: 150px;
        height: 60px;
      }
      &.big {
        width: 100%;
        height: auto;
      }
    `;
  }}
`;
