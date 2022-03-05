import { useSetRecoilState } from "recoil";
import { showProfileModalAtom } from "../../../atom/atoms";
import Atom from "../../atoms";
import Molecule from "../../molecules";
import { StyledSideBar } from "./SideBarStyles";

export interface IOrgSideBarProps {}

const SideBar = () => {
  const setShowProfileModal = useSetRecoilState(showProfileModalAtom);
  return (
    <StyledSideBar onClick={() => setShowProfileModal(false)}>
      <ul>
        <li>
          <Molecule.KsToggle departmentTitle="문과대학" />
        </li>
        <li>
          <Molecule.KsToggle departmentTitle="사회과학대학" />
        </li>
        <li>
          <Molecule.KsToggle departmentTitle="상경대학" />
        </li>
        <li>
          <Molecule.KsToggle departmentTitle="이과대학" />
        </li>
        <li>
          <Molecule.KsToggle departmentTitle="공과대학" />
        </li>
        <li>
          <Molecule.KsToggle departmentTitle="약학대학" />
        </li>
        <li>
          <Molecule.KsToggle departmentTitle="예술종합대학" />
        </li>
        <li>
          <Molecule.KsToggle departmentTitle="생명보건대학" />
        </li>
        <li>
          <Molecule.KsToggle departmentTitle="글로벌학부" />
        </li>
      </ul>
    </StyledSideBar>
  );
};

export default SideBar;
