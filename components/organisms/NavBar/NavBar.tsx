import Link from "next/link";
import { Title, Header, List, Nav, NaveBarWrapper } from "./NavBarstyles";
import { useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import ProfileModal from "../../molecules/ProfileModal/ProfileModal";
import { useRecoilState } from "recoil";
import { showProfileModalAtom } from "../../../atom/atoms";
import Atom from "../../atoms";

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isShowProfileModal, setIsShowProfileModal] =
    useRecoilState(showProfileModalAtom);
  const queryClient = useQueryClient();
  useEffect(() => {
    if (queryClient.getQueryData("user")) {
      setIsLogin(true);
    }
  }, [queryClient.getQueryData("user")]);
  const onToggleProfileModal = () => {
    setIsShowProfileModal(prev => !prev);
  };
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
                  <div onClick={onToggleProfileModal} className="profile">
                    <Atom.Avatar />
                    <svg
                      className="down"
                      stroke="currentColor"
                      fill="currentColor"
                      strokeWidth="0"
                      viewBox="0 0 24 24"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M7 10l5 5 5-5z"></path>
                    </svg>
                  </div>
                </List>
                {/* <List>
                  <a onClick={onClickLogOut}>로그아웃</a>
                </List> */}
              </>
            ) : (
              <>
                <List>
                  <Link href="/">
                    <a>게시판</a>
                  </Link>
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
      {isShowProfileModal && <ProfileModal />}
    </>
  );
};

export default NavBar;
