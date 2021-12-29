import styled from "styled-components";
import Link from "next/link";

const Header = styled.header`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0;
`;

const Title = styled.h1`
  font-size: 32px;
  color: #44bd32;
`;

const Nav = styled.ul`
  display: flex;
`;

const List = styled.li`
  margin-left: 10px;
  transition: color 0.2s ease-in;
  font-size: 18px;
  &:hover {
    color: ${props => props.theme.accentColor};
  }
`;

const NavBar = () => {
  return (
    <>
      <Header>
        <Title>KsBamboo</Title>
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
    </>
  );
};

export default NavBar;
