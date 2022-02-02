import styled, { css } from "styled-components";

export const StyledLabelSelect = styled.div<{ mb: string }>`
  ${props => {
    return css`
      margin-bottom: ${props.mb};
    `;
  }}
`;
