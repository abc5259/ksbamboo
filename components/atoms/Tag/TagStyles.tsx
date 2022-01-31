import styled, { css } from "styled-components";
import { IAtomTagProps } from "./Tag";

export const StyledTag = styled.div<IAtomTagProps>`
  ${({ bgColor, theme }) => {
    const tagBgColof = bgColor ? bgColor : theme.accentColor;
    return css`
      width: 80px;
      height: 40px;
      border-radius: 15px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.textColor};
      background-color: ${tagBgColof};
    `;
  }}
`;
