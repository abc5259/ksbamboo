import Board, { IBoardProps } from "./Board";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/Board",
  component: Board,
} as Meta;

const Template: Story<IBoardProps> = args => (
  <>
    <Board {...args} />;
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
  user: {
    id: 10,
    username: "이재훈",
    email: "abc5259@ks.ac.kr",
    ksDepartment: "컴퓨터공학과",
  },
};
