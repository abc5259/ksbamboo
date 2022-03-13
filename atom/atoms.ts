import { atom } from "recoil";

const ksDepartment = [
  "인문문화학부",
  "글로컬문화학부",
  "영어영문학과",
  "중국학과",
  "문헌정보학과",
  "유아교육과",
  "윤리교육과",
  "심리학과",
  "법학과",
  "경찰행정학과",
  "미디어커뮤니케이션학과",
  "광고홍보학과",
  "사회복지학과",
  "경제금융물류학부",
  "호텔관광외식경영학부",
  "경영학과",
  "국제무역통상학과",
  "회계학과",
  "빅데이터응용통계학과",
  "응용수학과",
  "화학신소재학과",
  "에너지과학과",
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
  "약학과",
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
  "간호학과",
  "물리치료학과",
  "식품생명공학과",
  "식품영양학과",
  "반려생물학과",
  "화장품학과",
  "스마트바이오학과",
  "제약공학과",
  "글로벌학부",
];
export const ksDepartmentAtom = atom<string[]>({
  key: "isKsDepartment",
  default: ksDepartment,
});

export const showSideBarAtom = atom<boolean>({
  key: "isShowSideBar",
  default: false,
});

export const showProfileModalAtom = atom<boolean>({
  key: "isShowProfileModal",
  default: false,
});

export const showCommentAlarmAtom = atom<boolean>({
  key: "isShowCommentAlarm",
  default: false,
});
