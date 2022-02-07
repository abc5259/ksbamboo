import BoardDetail, { IBoardDetailProps } from "./BoardDetail";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/BoardDetail",
  component: BoardDetail,
} as Meta;

const Template: Story<IBoardDetailProps> = args => (
  <>
    <BoardDetail {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  boardId: 21,
  title: "첫번째 게시물",
  content: "컴공 화이팅",
  status: "PRIVATE",
  category: "컴퓨터공학과",
  createAt: "2022/01/02",
  user: {
    id: 10,
    username: "이재훈",
    email: "abc5259@ks.ac.kr",
    ksDepartment: "컴퓨터공학과",
  },
  me: {
    id: 10,
    username: "이재훈",
    email: "abc5259@ks.ac.kr",
    ksDepartment: "컴퓨터공학과",
  },
};
