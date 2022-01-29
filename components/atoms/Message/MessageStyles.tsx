import styled from "styled-components";
import { IAtomMessageProps } from "./Message";

export const StyledMessage = styled.span<IAtomMessageProps>`
  font-size: ${props => props.fontSize};
  &.error {
    color: red;
  }
  &.success {
    color: ${props => props.theme.accentColor};
  }
`;
