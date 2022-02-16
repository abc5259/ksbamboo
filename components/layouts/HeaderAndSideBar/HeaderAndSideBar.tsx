import React, { useEffect, useState } from "react";
import MobileSideBar from "../../organisms/MobileSideBar/MobileSideBar";
import NavBar from "../../organisms/NavBar/NavBar";
import SideBar from "../../organisms/SideBar/SideBar";
import { Container, StyledHeaderAndSideBar } from "./HeaderAndSideBarStyles";

const HeaderAndSideBar: React.FC = props => {
  const [windowWidth, setWindowWidth] = useState<number>();
  const [showMobileSideBar, setShowMobileSideBar] = useState(false);
  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    console.log(windowWidth);
  };
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);
  console.log(showMobileSideBar);

  const onClickMobileSideBarIcon = () => {
    setShowMobileSideBar(prev => !prev);
  };
  if (!windowWidth) {
    return <div>로딩중..</div>;
  }

  return (
    <>
      <NavBar />
      <StyledHeaderAndSideBar>
        <Container>{props.children}</Container>
        {windowWidth >= 600 && <SideBar />}
        {windowWidth < 600 && (
          <>
            <div
              onClick={onClickMobileSideBarIcon}
              className="mobileSideBarIcon"
            >
              {showMobileSideBar ? (
                <svg
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 320 512"
                >
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              ) : (
                <>
                  <svg
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" />
                  </svg>
                  <svg
                    width="18"
                    height="18"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                  >
                    <path d="M192 384c-8.188 0-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L192 306.8l137.4-137.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-160 160C208.4 380.9 200.2 384 192 384z" />
                  </svg>
                </>
              )}
            </div>
          </>
        )}
        {showMobileSideBar && <MobileSideBar />}
      </StyledHeaderAndSideBar>
    </>
  );
};

export default HeaderAndSideBar;
