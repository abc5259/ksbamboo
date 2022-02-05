import { FC } from "react";
import styled from "styled-components";
import NavBar from "../organisms/NavBar/NavBar";
import SideBar from "../organisms/SideBar/SideBar";

const Container = styled.div`
  margin: 0 auto;
  width: 70vw;
  padding: 120px 0;
`;

const AppLayout: FC = ({ children }) => {
  return (
    <>
      <NavBar />
      <Container>{children}</Container>
    </>
  );
};

export default AppLayout;
