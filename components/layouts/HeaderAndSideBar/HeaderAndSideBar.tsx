import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import SideBar from "../../organisms/SideBar/SideBar";
import { Container, StyledHeaderAndSideBar } from "./HeaderAndSideBarStyles";

const HeaderAndSideBar: React.FC = props => {
  return (
    <>
      <NavBar />
      <StyledHeaderAndSideBar>
        <Container>{props.children}</Container>
        <SideBar />
      </StyledHeaderAndSideBar>
    </>
  );
};

export default HeaderAndSideBar;
