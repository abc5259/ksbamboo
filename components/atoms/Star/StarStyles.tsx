import styled, { css } from "styled-components";
import { IAtomStarProps } from "./Star";

export const StyledStar = styled.svg<IAtomStarProps>`
  ${({ width, height, fillColor, mr, theme }) => {
    const starWidth = width ? width : "0.8rem";
    const starHeight = height ? height : "0.8rem";
    const starColor = fillColor ? fillColor : theme.accentColor;
    const starMarginRight = mr ? mr : "0";
    return css`
      fill: ${starColor};
      width: ${starWidth};
      height: ${starHeight};
      margin-right: ${starMarginRight};
    `;
  }}
`;
