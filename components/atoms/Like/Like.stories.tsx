import { Meta, Story } from "@storybook/react";
import Like, { IAtomLikeProps } from "./Like";

export default {
  title: "Atoms/Like",
  component: Like,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomLikeProps> = args => (
  <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Like {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: "1rem",
  height: "1rem",
  fillColor: "red",
};
