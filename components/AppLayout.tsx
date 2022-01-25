import { FC } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Container = styled.div`
  margin: 0 auto;
  width: 70vw;
  padding: 20px 0;
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
