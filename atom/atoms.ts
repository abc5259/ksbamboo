import { atom } from "recoil";

interface Idummyuser {
  id: number;
  nickname: string;
}

interface IdummyBoards {
  id: number;
  title: string;
  content: string;
  status: string;
  user: Idummyuser;
}

const dummyBoards: IdummyBoards[] = [
  {
    id: 1,
    title: "더미 포스트입니다",
    content: "더미 포스트의 content입니다1",
    status: "익명",
    user: { id: 1, nickname: "serf" },
  },
  {
    id: 2,
    title: "더미 포스트입니다2",
    content: "더미 포스트의 content입니다2",
    status: "익명",
    user: { id: 1, nickname: "serf2" },
  },
  {
    id: 3,
    title: "더미 포스트입니다3",
    content: "더미 포스트의 content입니다3",
    status: "익명",
    user: { id: 1, nickname: "serf3" },
  },
  {
    id: 4,
    title: "더미 포스트입니다4",
    content: "더미 포스트의 content입니다4",
    status: "익명",
    user: { id: 1, nickname: "serf4" },
  },
];

export const boardsAtom = atom({
  key: "boards",
  default: dummyBoards,
});
