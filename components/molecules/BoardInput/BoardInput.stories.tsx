import BoardInput, { IBoardInputProps } from "./BoardInput";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/BoardInput",
  component: BoardInput,
} as Meta;

const Template: Story<IBoardInputProps> = args => (
  <>
    <BoardInput {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
