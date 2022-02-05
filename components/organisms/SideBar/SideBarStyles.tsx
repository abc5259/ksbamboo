import styled from "styled-components";

export const StyledSideBar = styled.nav`
  width: 400px;
  background-color: #f7f7f7;
  @media only screen and (max-width: 1024px) {
    width: 270px;
  }
  & > ul {
    background-color: inherit;
    padding: 60px 40px;
  }
`;
