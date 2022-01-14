import { FC } from "react";
import styled from "styled-components";
import NavBar from "./NavBar";

const Container = styled.div`
  margin: 0 30px;
`;

const AppLayout: FC = ({ children }) => {
  return (
    <>
      <Container>
        <NavBar />
        {children}
      </Container>
    </>
  );
};

export default AppLayout;
