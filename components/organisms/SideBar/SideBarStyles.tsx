import styled from "styled-components";

export const StyledSideBar = styled.nav`
  width: 400px;
  background-color: #f7f7f7;
  @media only screen and (max-width: 1024px) {
    width: 270px;
  }
  ul {
    background-color: inherit;
    padding: 60px 40px;
    li {
      margin-bottom: 30px;
      color: #6d6d6d;
      cursor: pointer;
      &:hover {
        color: ${props => props.theme.textColor};
      }
    }
  }
`;
