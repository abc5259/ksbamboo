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
Default.args = {};