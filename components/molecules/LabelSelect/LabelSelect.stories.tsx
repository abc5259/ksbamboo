import LabelSelect, { ILabelSelectProps } from "./LabelSelect";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/LabelSelect",
  component: LabelSelect,
} as Meta;

const Template: Story<ILabelSelectProps> = args => (
  <>
    <LabelSelect {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
