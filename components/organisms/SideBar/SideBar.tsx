import Atom from "../../atoms";
import { StyledSideBar } from "./SideBarStyles";

export interface IOrgSideBarProps {}

const SideBar = () => {
  return (
    <StyledSideBar>
      <ul>
        <li>
          <Atom.Toggle departmentTitle="문과대학" />
        </li>
        <li>
          <Atom.Toggle departmentTitle="이과대학" />
        </li>
        <li>
          <Atom.Toggle departmentTitle="사회과학대학" />
        </li>
        <li>
          <Atom.Toggle departmentTitle="공과대학" />
        </li>
        <li>
          <Atom.Toggle departmentTitle="이과대학" />
        </li>
        <li>
          <Atom.Toggle departmentTitle="예술종합대학" />
        </li>
        <li>
          <Atom.Toggle departmentTitle="생명보건대학" />
        </li>
        <li>
          <Atom.Toggle departmentTitle="상경대학" />
        </li>
        <li>
          <Atom.Toggle departmentTitle="약학대학" />
        </li>
        <li>
          <Atom.Toggle departmentTitle="글로벌학부" />
        </li>
      </ul>
    </StyledSideBar>
  );
};

export default SideBar;
