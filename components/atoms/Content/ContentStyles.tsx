import styled, { css } from "styled-components";
import { IAtomContentProps } from "./Content";

export const StyledContent = styled.p<IAtomContentProps>`
  ${props => {
    return css`
      width: 100%;
      color: ${props.theme.textColor};
    `;
  }}
`;
