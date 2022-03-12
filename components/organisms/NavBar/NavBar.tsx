import Link from "next/link";
import { Title, Header, List, Nav, NaveBarWrapper } from "./NavBarstyles";
import { useQuery, useQueryClient } from "react-query";
import { useEffect, useState } from "react";
import ProfileModal from "../../molecules/ProfileModal/ProfileModal";
import { useRecoilState } from "recoil";
import { showProfileModalAtom } from "../../../atom/atoms";
import Atom from "../../atoms";
import { BASE_URL } from "../../../utils/baseUrl";
import User from "../../../interfaces/user";
import { AxiosError } from "axios";
import { getUserAPI } from "../../../apis/user";

const NavBar = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [isShowProfileModal, setIsShowProfileModal] =
    useRecoilState(showProfileModalAtom);
  const queryClient = useQueryClient();
  const { isLoading, data: me } = useQuery<User, AxiosError>(
    "user",
    getUserAPI
  );
  useEffect(() => {
    if (!isLoading) {
      if (me) {
        setIsLogin(true);
        const evtSource = new EventSource(
          `${BASE_URL}/sse/events/comment?userId=${me?.id}`,
          {
            withCredentials: true,
          }
        );
        console.log(evtSource);
        evtSource.onmessage = ({ data }) => {
          alert(data);
        };
        return () => {
          evtSource.close();
        };
      }
    }
  }, [isLoading, me]);
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
                  <Link href="/profile/notification">
                    <a>
                      <Atom.NotificationIcon />
                    </a>
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
