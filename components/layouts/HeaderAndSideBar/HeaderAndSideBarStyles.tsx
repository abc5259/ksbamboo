import styled from "styled-components";

export const StyledHeaderAndSideBar = styled.div`
  display: flex;
`;

export const Container = styled.div`
  width: calc(100% - 400px);
  padding: 100px 20px 40px;
  @media only screen and (max-width: 1024px) {
    width: calc(100% - 270px);
  }
  @media only screen and (max-width: 720px) {
    width: calc(100% - 200px);
  }
`;
