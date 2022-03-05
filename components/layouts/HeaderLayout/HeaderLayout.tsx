import React from "react";
import { useSetRecoilState } from "recoil";
import { showProfileModalAtom } from "../../../atom/atoms";
import NavBar from "../../organisms/NavBar/NavBar";
import { StyledHeaderLayout } from "./HeaderLayoutStyles";

const HeaderLayout: React.FC = props => {
  const setShowProfileModal = useSetRecoilState(showProfileModalAtom);
  return (
    <>
      <NavBar />
      <StyledHeaderLayout onClick={() => setShowProfileModal(false)}>
        {props.children}
      </StyledHeaderLayout>
    </>
  );
};

export default HeaderLayout;
