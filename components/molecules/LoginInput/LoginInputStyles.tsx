import styled from "styled-components";
import { ILoginInputProps } from "./LoginInput";

export const StyledLoginInput = styled.div<{ mb?: string }>`
  margin-bottom: ${props => props.mb || "0"};
  label {
    display: block;
    font-size: 12px;
    color: #8b949e;
    margin-bottom: 5px;
  }
`;
