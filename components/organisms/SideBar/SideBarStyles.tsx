import styled from "styled-components";

export const StyledSideBar = styled.nav`
  position: fixed;
  right: 0;
  width: 400px;
  background-color: #f7f7f7;
  height: 100%;
  overflow: auto;
  padding: 160px 80px 80px;
  border-left: 0.8px solid #e0dbdb;
  @media only screen and (max-width: 1024px) {
    width: 270px;
    padding: 160px 40px 80px;
  }
  @media only screen and (max-width: 720px) {
    width: 200px;
    padding: 160px 20px 80px;
  }
  & > ul {
    background-color: inherit;
    li {
      margin-bottom: 20px;
    }
  }
`;
