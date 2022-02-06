import styled, { css } from "styled-components";
import { IAtomTagProps } from "./Tag";

export const StyledTag = styled.div<IAtomTagProps>`
  ${({ bgColor, theme }) => {
    const tagBgColof = bgColor ? bgColor : theme.accentColor;
    return css`
      width: auto;
      /* padding: 10px 20px; */
      height: 40px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.textColor};
      background-color: #6eb9d4;
      border: 1px solid #6eb9d4;
    `;
  }}
`;
