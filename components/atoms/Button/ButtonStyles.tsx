import styled, { css } from "styled-components";
import { IAtomButtonProps } from "./Button";

export const StyledButton = styled.button<IAtomButtonProps>`
  ${({ width, height, bgColor, color, redius, theme: { accentColor } }) => {
    const backgroundColor = bgColor ? bgColor : accentColor;
    return css`
      border: none;
      width: ${width};
      height: ${height};
      background-color: ${backgroundColor};
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
        padding: 10px 5px;
        font-size: 18px;
      }
    `;
  }}
`;
