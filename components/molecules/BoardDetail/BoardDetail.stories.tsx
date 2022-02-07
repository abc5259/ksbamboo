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
Default.args = {};
