import Link from "next/link";
import { Title, Header, List, Nav, NaveBarWrapper } from "./NavBarstyles";
import { useRouter } from "next/router";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const queryClient = useQueryClient();
  const router = useRouter();
  const onClickLogOut = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    queryClient.removeQueries("user");
    router.push("/login");
  };
  useEffect(() => {
    if (queryClient.getQueryData("user")) {
      setIsLogin(true);
    }
  }, [queryClient.getQueryData("user")]);
  console.log(isLogin);
  return (
    <>
      <NaveBarWrapper>
        <Header>
          <Title>
            <Link href="/">
              <a>KSB</a>
            </Link>
          </Title>
          <Nav>
            {isLogin ? (
              <>
                <List>
                  <Link href="/">
                    <a>게시판</a>
                  </Link>
                </List>
                <List>
                  <a onClick={onClickLogOut}>로그아웃</a>
                </List>
              </>
            ) : (
              <>
                <List>
                  {/* <Link href="/">
                <a>게시판</a>
              </Link> */}
                </List>
                <List>
                  <Link href="/login">
                    <a>로그인</a>
                  </Link>
                </List>
                <List>
                  <Link href="/join">
                    <a>회원가입</a>
                  </Link>
                </List>
              </>
            )}
          </Nav>
        </Header>
      </NaveBarWrapper>
    </>
  );
};

export default NavBar;
