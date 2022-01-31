import styled, { css } from "styled-components";
import { IAtomTitleProps } from "./Title";

export const StyledTitle = styled.h3<IAtomTitleProps>`
  ${({ fontSize, fontWeight, color, theme: { textColor } }) => {
    const titleSize = fontSize ? fontSize : "1.2rem";
    const titleeight = fontWeight ? fontWeight : 400;
    const titleColor = color ? color : textColor;
    return css`
      font-size: ${titleSize};
      font-weight: ${titleeight};
      color: ${titleColor};
    `;
  }}
`;
