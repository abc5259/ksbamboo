import React, { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { showSideBarAtom } from "../../../atom/atoms";
import Molecule from "../../molecules";
import MobileSideBar from "../../organisms/MobileSideBar/MobileSideBar";
import NavBar from "../../organisms/NavBar/NavBar";
import SideBar from "../../organisms/SideBar/SideBar";
import { Container, StyledHeaderAndSideBar } from "./HeaderAndSideBarStyles";

const HeaderAndSideBar: React.FC = props => {
  const [windowWidth, setWindowWidth] = useState<number>();
  const [showMobileSideBar, setShowMobileSideBar] =
    useRecoilState(showSideBarAtom);
  const handleResize = useCallback(() => {
    setWindowWidth(window.innerWidth);
  }, [windowWidth]);
  useEffect(() => {
    setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [windowWidth]);

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
        {windowWidth >= 600 ? (
          <SideBar />
        ) : (
          <Molecule.MobileSideBarBtn
            onClick={onClickMobileSideBarIcon}
            showMobileSideBar={showMobileSideBar}
          />
        )}
        {showMobileSideBar && <MobileSideBar />}
      </StyledHeaderAndSideBar>
    </>
  );
};

export default HeaderAndSideBar;
