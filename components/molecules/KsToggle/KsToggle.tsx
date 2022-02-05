import Atom from "../../atoms";
import { DepartmentTitleType } from "../../atoms/Toggle/Toggle";
import { StyledKsToggle } from "./KsToggleStyles";

export interface IKsToggleProps {
  departmentTitle: DepartmentTitleType;
}

const KsToggle = ({ departmentTitle }: IKsToggleProps) => {
  return (
    <StyledKsToggle>
      <Atom.Toggle departmentTitle={departmentTitle} />
      {departmentTitle === "문과대학" && (
        <ul>
          <li>인문문화학부</li>
          <li>글로컬문화학부</li>
          <li>영어영문학과</li>
          <li>중국학과</li>
          <li>문헌정보학과</li>
          <li>유아교육과</li>
          <li>윤리교육과</li>
          <li>심리학과</li>
        </ul>
      )}
      {departmentTitle === "사회과학대학" && (
        <ul>
          <li>법학과</li>
          <li>경찰행정학과</li>
          <li>미디어커뮤니케이션학과</li>
          <li>광고홍보학과</li>
          <li>사회복지학과</li>
        </ul>
      )}
      {departmentTitle === "상경대학" && (
        <ul>
          <li>경제금융물류학부</li>
          <li>호텔관광외식경영학부</li>
          <li>경영학과</li>
          <li>국제무역통상학과</li>
          <li>회계학과</li>
          <li>빅데이터응용통계학과</li>
        </ul>
      )}
      {departmentTitle === "이과대학" && (
        <ul>
          <li>응용수학과</li>
          <li>화학신소재학과</li>
          <li>에너지과학과</li>
        </ul>
      )}
      {departmentTitle === "공과대학" && (
        <ul>
          <li>기계자동차공학과</li>
          <li>메카트로닉스공학과</li>
          <li>환경공학과</li>
          <li>토목공학과</li>
          <li>도시공학과</li>
          <li>건축학과</li>
          <li>실내건축학과</li>
          <li>산업경영공학과</li>
          <li>신소재공학과</li>
          <li>전기공학과</li>
          <li>전자공학과</li>
          <li>컴퓨터공학과</li>
          <li>소프트웨어학과</li>
          <li>정보통신공학과</li>
        </ul>
      )}
      {departmentTitle === "약학대학" && (
        <ul>
          <li>약학과</li>
        </ul>
      )}
      {departmentTitle === "예술종합대학" && (
        <ul>
          <li>음악학부</li>
          <li>디자인학부</li>
          <li>연극영화학부</li>
          <li>영상애니메이션학부</li>
          <li>미디어콘텐츠학과</li>
          <li>스포츠건강학과</li>
          <li>현대미술학과</li>
          <li>공예디자인학과</li>
          <li>사진학과</li>
          <li>패션디자인학과</li>
        </ul>
      )}
      {departmentTitle === "생명보건대학" && (
        <ul>
          <li>간호학과</li>
          <li>물리치료학과</li>
          <li>식품생명공학과</li>
          <li>식품영양학과</li>
          <li>반려생물학과</li>
          <li>화장품학과</li>
          <li>스마트바이오학과</li>
          <li>제약공학과</li>
        </ul>
      )}
      {departmentTitle === "글로벌학부" && (
        <ul>
          <li>글로벌학부</li>
        </ul>
      )}
    </StyledKsToggle>
  );
};

export default KsToggle;
