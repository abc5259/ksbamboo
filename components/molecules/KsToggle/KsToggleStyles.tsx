import styled from "styled-components";

export const StyledKsToggle = styled.div`
  ul {
    li {
      color: ${props => props.theme.textColor};
      margin-bottom: 10px;
      cursor: pointer;
      &:hover {
        color: #6d6d6d;
      }
    }
  }
`;
