import styled from "styled-components";

export const StyledHeaderAndSideBar = styled.div`
  display: flex;
  .mobileSideBarIcon {
    position: fixed;
    z-index: 999999;
    bottom: 40px;
    right: 30px;
    width: 60px;
    height: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 60%;
    background-color: ${props => props.theme.accentColor};
    cursor: pointer;
  }
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
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
