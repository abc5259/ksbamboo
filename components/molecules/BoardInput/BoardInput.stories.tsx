import BoardInput, { IModuleBoardInputProps } from "./BoardInput";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/BoardInput",
  component: BoardInput,
} as Meta;

const Template: Story<IModuleBoardInputProps> = args => (
  <>
    <BoardInput {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
