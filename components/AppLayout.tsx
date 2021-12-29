import styled from "styled-components";
import NavBar from "./NavBar";

type AppLayoutProps = {
  children: React.ReactNode;
};

const Container = styled.div`
  margin: 0 30px;
`;

const AppLayout = ({ children }: AppLayoutProps) => {
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
