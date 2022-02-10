import { Meta, Story } from "@storybook/react";
import BoardDetailTemp, { ITempBoardDetailTempProps } from "./BoardDetailTemp";

export default {
  title: "Templates / BoardDetailTemp",
  component: BoardDetailTemp,
} as Meta;

const Template: Story<ITempBoardDetailTempProps> = args => (
  <>
    <BoardDetailTemp {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
