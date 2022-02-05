import React from "react";
import NavBar from "../../organisms/NavBar/NavBar";
import { StyledHeaderLayout } from "./HeaderLayoutStyles";

const HeaderLayout: React.FC = props => {
  return (
    <>
      <NavBar />
      <StyledHeaderLayout>{props.children}</StyledHeaderLayout>
    </>
  );
};

export default HeaderLayout;
