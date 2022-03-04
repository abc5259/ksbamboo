import React, { useState } from "react";
import Atom from "../../atoms";
import { DepartmentTitleType } from "../../atoms/Toggle/Toggle";
import { StyledKsToggle } from "./KsToggleStyles";
import Link from "next/link";
import { useSetRecoilState } from "recoil";
import { showSideBarAtom } from "../../../atom/atoms";
import { ksDepartment } from "../../../utils/ksDepartment";

export interface IKsToggleProps {
  departmentTitle: DepartmentTitleType;
}

const KsToggle = ({ departmentTitle }: IKsToggleProps) => {
  const [detailKsDepartment, setDetailKsDepartment] = useState("");
  const [up, setUp] = useState(false);
  const setShowSideBar = useSetRecoilState(showSideBarAtom);
  const onClickToggle = () => {
    setUp(prev => !prev);
    if (detailKsDepartment) {
      return setDetailKsDepartment("");
    }
    setDetailKsDepartment(departmentTitle);
  };

  return (
    <StyledKsToggle>
      <Atom.Toggle
        up={up}
        onClick={onClickToggle}
        departmentTitle={departmentTitle}
        mb="20px"
      />
      {detailKsDepartment && (
        <ul>
          {ksDepartment
            .filter(detail => detail.title === detailKsDepartment)[0]
            .departments.map(department => (
              <Link key={department} href={`/category/${department}`}>
                <a onClick={() => setShowSideBar(false)}>
                  <li>{department}</li>
                </a>
              </Link>
            ))}
        </ul>
      )}
    </StyledKsToggle>
  );
};

export default KsToggle;
