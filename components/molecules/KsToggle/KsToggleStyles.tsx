import styled from "styled-components";

export const StyledKsToggle = styled.div`
  ul {
    margin-bottom: 40px;
    li {
      color: ${props => props.theme.textColor};
      margin-bottom: 10px;
      cursor: pointer;
      font-size: 1rem;
      &:hover {
        color: #6d6d6d;
      }
    }
  }
`;
