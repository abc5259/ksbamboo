import Molecule from "../../molecules";
import { StyledMobileSideBar } from "./MobileSideBarStyles";

export interface IMobileSideBarProps {}

const MobileSideBar = (props: IMobileSideBarProps) => {
  return (
    <StyledMobileSideBar>
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
    </StyledMobileSideBar>
  );
};

export default MobileSideBar;
