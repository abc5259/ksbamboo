import styled from "styled-components";

export const StyledSideBar = styled.nav`
  position: fixed;
  right: 0;
  width: 400px;
  background-color: #f7f7f7;
  height: 100%;
  overflow: auto;
  padding: 200px 100px 80px;
  @media only screen and (max-width: 1024px) {
    width: 270px;
    padding: 200px 40px;
  }
  & > ul {
    background-color: inherit;
    li {
      margin-bottom: 20px;
    }
  }
`;
