import { atom } from "recoil";

const ksDepartment = [
  "국어국문학과",
  "영어영문학과",
  "중어중문학과",
  "역사학과",
  "문헌정보학과",
  "교육학과",
  "유아교육학과",
  "심리학과",
  "법학과",
  "행정학과",
  "정치외교학과",
  "사회복지학과",
  "경제통상학과",
  "경영학과",
  "호텔관광외식경영학과",
  "신학과",
  "언론홍보학과",
  "글로벌비즈니스학과",
  "화학과",
  "생명과학과",
  "물리치료학과",
  "패션디자인학과",
  "약학과",
  "바이오안전학과",
  "화장품학과",
  "식품생명공학과",
  "산업경영공학과",
  "환경공학과",
  "재료공학과",
  "토목공학과",
  "도시공학과",
  "전기전자통신공학과",
  "메카트로닉스공학과",
  "소프트웨어학과",
  "컴퓨터공학과",
  "기후변화정책학과",
  "미디어영상디자인학과",
  "공예학과",
  "현대미술학과",
  "사진학과",
  "연극영화학과",
  "음악학과",
  "체육학과",
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
