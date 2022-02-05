import styled from "styled-components";

export const StyledToggle = styled.div<{ fontSize?: string }>`
  display: flex;
  align-items: center;
  span {
    margin-right: 5px;
    font-size: ${props => props.fontSize || "1rem"};
  }
`;
