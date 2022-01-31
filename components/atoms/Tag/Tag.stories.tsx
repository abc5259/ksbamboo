import { Meta, Story } from "@storybook/react";
import Tag, { IAtomTagProps } from "./Tag";

export default {
  title: "Atoms/Tag",
  component: Tag,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomTagProps> = args => (
  <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Tag {...args}>text</Tag>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
