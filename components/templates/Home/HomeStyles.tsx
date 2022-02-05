import styled from "styled-components";

export const StyledHome = styled.div`
  display: flex;
`;

export const Container = styled.div`
  width: calc(100% - 400px);
  padding: 100px 80px;
  @media only screen and (max-width: 1024px) {
    width: calc(100% - 270px);
  }
`;
