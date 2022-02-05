import styled from "styled-components";
import Link from "next/link";
import { Title, Header, List, Nav, NaveBarWrapper } from "./NavBarstyles";

const NavBar = () => {
  return (
    <>
      <NaveBarWrapper>
        <Header>
          <Title>
            <Link href="/">KSB</Link>
          </Title>
          <Nav>
            <List>
              <Link href="/">게시판</Link>
            </List>
            <List>
              <Link href="/login">로그인</Link>
            </List>
            <List>
              <Link href="/join">회원가입</Link>
            </List>
          </Nav>
        </Header>
      </NaveBarWrapper>
    </>
  );
};

export default NavBar;
