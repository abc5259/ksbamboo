import styled from "styled-components";
import NavBar from "./NavBar";

type AppLayoutProps = {
  children: React.ReactNode;
};

const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <NavBar />
      {children}
    </>
  );
};

export default AppLayout;
