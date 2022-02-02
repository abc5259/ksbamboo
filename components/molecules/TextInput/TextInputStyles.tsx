import styled from "styled-components";

export const StyledTextInput = styled.div<{ mb?: string }>`
  margin-bottom: ${props => props.mb || "0"};
`;
