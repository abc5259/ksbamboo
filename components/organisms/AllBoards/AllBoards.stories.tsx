import { Meta, Story } from "@storybook/react";
import AllBoards, { IOrgAllBoardsProps } from "./AllBoards";

export default {
  title: "organisms/AllBoards",
  component: AllBoards,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IOrgAllBoardsProps> = args => (
  <>
    <AllBoards {...args}></AllBoards>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  boards: [
    {
      id: 1,
      title: "test",
      content: "test content",
      status: "익명",
      user: {
        id: 1,
        username: "이재훈",
        email: "abc5259",
        password: "123",
        verified: true,
        ksDeparment: "컴퓨터공학과",
      },
    },
  ],
};
