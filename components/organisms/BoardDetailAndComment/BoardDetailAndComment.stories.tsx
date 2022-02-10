import { Meta, Story } from "@storybook/react";
import BoardDetailAndComment, {
  IBoardDetailAndCommentProps,
} from "./BoardDetailAndComment";

export default {
  title: "organisms/BoardDetailAndComment",
  component: BoardDetailAndComment,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IBoardDetailAndCommentProps> = args => (
  <>
    <BoardDetailAndComment {...args}></BoardDetailAndComment>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  board: {
    id: 1,
    title: "test",
    content: "test content",
    status: "PRIVATE",
    createdAt: new Date(),
    category: "컴퓨터공학과",
    user: {
      id: 1,
      username: "이재훈",
      email: "abc5259",
      verified: true,
      ksDepartment: "컴퓨터공학과",
    },
    comments: [
      {
        id: 1,
        content: "test content",
        status: "PRIVATE",
        createdAt: new Date(),
        user: {
          id: 1,
          username: "이재훈",
          email: "abc5259",
          verified: true,
          ksDepartment: "컴퓨터공학과",
        },
      },
      {
        id: 1,
        content: "test content",
        status: "PRIVATE",
        createdAt: new Date(),
        user: {
          id: 2,
          username: "이재훈",
          email: "abc5259",
          verified: true,
          ksDepartment: "컴퓨터공학과",
        },
      },
      {
        id: 1,
        content: "test content",
        status: "PRIVATE",
        createdAt: new Date(),
        user: {
          id: 1,
          username: "이재훈",
          email: "abc5259",
          verified: true,
          ksDepartment: "컴퓨터공학과",
        },
      },
    ],
  },
  loginUserId: 1,
};
