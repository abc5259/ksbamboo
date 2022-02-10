import Comment, { ICommentProps } from "./Comment";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/Comment",
  component: Comment,
} as Meta;

const Template: Story<ICommentProps> = args => (
  <>
    <Comment {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  content: "컴공 화이팅",
  status: "PRIVATE",
  // createAt: "2022/01/02",
  user: {
    id: 10,
    username: "이재훈",
    email: "abc5259@ks.ac.kr",
    ksDepartment: "컴퓨터공학과",
  },
  myId: 10,
};
