import styled, { css } from "styled-components";
import { IAtomTagProps } from "./Tag";

export const StyledTag = styled.div<IAtomTagProps>`
  ${({ bgColor, theme }) => {
    const tagBgColof = bgColor ? bgColor : theme.accentColor;
    return css`
      max-width: 450px;
      min-width: 200px;
      margin: 0 auto;
      height: 50px;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.textColor};
      font-weight: 600;
      background-color: #cfebd3;
    `;
  }}
`;
