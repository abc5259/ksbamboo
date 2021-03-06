import styled, { css } from "styled-components";
import { IAtomLikeProps } from "./Like";

export const StyledLike = styled.svg<IAtomLikeProps>`
  ${({ width, height, fillColor, mr, theme }) => {
    const likeWidth = width ? width : "0.8rem";
    const likeHeight = height ? height : "0.8rem";
    const likeColor = fillColor ? fillColor : theme.accentColor;
    const LikeMarginRight = mr ? mr : "0";
    return css`
      fill: ${likeColor};
      width: ${likeWidth};
      height: ${likeHeight};
      margin-right: ${LikeMarginRight};
    `;
  }}
`;
