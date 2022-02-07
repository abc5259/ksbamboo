import styled, { css } from "styled-components";
import { IAtomTagProps } from "./Tag";

export const StyledTag = styled.div<IAtomTagProps>`
  ${({ bgColor, theme, height }) => {
    const tagHeight = height || "50px";
    return css`
      max-width: 450px;
      min-width: 200px;
      margin: 0 auto;
      height: ${tagHeight};
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      color: ${theme.textColor};
      font-weight: 600;
      background-color: #cfebd3;
      margin-bottom: 25px;
    `;
  }}
`;
