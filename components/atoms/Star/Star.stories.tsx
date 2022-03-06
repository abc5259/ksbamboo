import { Meta, Story } from "@storybook/react";
import Star, { IAtomStarProps } from "./Star";

export default {
  title: "Atoms/Star",
  component: Star,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomStarProps> = args => (
  <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Star {...args}></Star>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
