import React, { useState } from "react";
import Atom from "../../atoms";
import { DepartmentTitleType } from "../../atoms/Toggle/Toggle";
import { StyledKsToggle } from "./KsToggleStyles";
import Link from "next/link";

export interface IKsToggleProps {
  departmentTitle: DepartmentTitleType;
}

interface IksDepartment {
  title: string;
  departments: string[];
}

const ksDepartment: IksDepartment[] = [
  {
    title: "문과대학",
    departments: [
      "인문문화학부",
      "글로컬문화학부",
      "영어영문학과",
      "중국학과",
      "문헌정보학과",
      "유아교육과",
      "윤리교육과",
      "심리학과",
    ],
  },
  {
    title: "사회과학대학",
    departments: [
      "법학과",
      "경찰행정학과",
      "미디어커뮤니케이션학과",
      "광고홍보학과",
      "사회복지학과",
    ],
  },
  {
    title: "상경대학",
    departments: [
      "경제금융물류학부",
      "호텔관광외식경영학부",
      "경영학과",
      "국제무역통상학과",
      "회계학과",
      "빅데이터응용통계학과",
    ],
  },
  {
    title: "이과대학",
    departments: ["응용수학과", "화학신소재학과", "에너지과학과"],
  },
  {
    title: "공과대학",
    departments: [
      "기계자동차공학과",
      "메카트로닉스공학과",
      "환경공학과",
      "토목공학과",
      "도시공학과",
      "건축학과",
      "실내건축학과",
      "산업경영공학과",
      "신소재공학과",
      "전기공학과",
      "컴퓨터공학과",
      "소프트웨어학과",
      "정보통신공학과",
    ],
  },
  {
    title: "약학대학",
    departments: ["약학과"],
  },
  {
    title: "예술종합대학",
    departments: [
      "음악학부",
      "디자인학부",
      "연극영화학부",
      "영상애니메이션학부",
      "미디어콘텐츠학과",
      "스포츠건강학과",
      "현대미술학과",
      "공예디자인학과",
      "사진학과",
      "패션디자인학과",
    ],
  },
  {
    title: "생명보건대학",
    departments: [
      "간호학과",
      "물리치료학과",
      "식품생명공학과",
      "식품영양학과",
      "반려생물학과",
      "화장품학과",
      "스마트바이오학과",
      "제약공학과",
    ],
  },
  {
    title: "글로벌학부",
    departments: ["글로벌학부"],
  },
];

const KsToggle = ({ departmentTitle }: IKsToggleProps) => {
  const [detailKsDepartment, setDetailKsDepartment] = useState("");
  const [up, setUp] = useState(false);

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
                <a>
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
