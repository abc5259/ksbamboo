import { Meta, Story } from "@storybook/react";
import Select, { IAtomSelectProps } from "./Select";

export default {
  title: "Atoms/Select",
  component: Select,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomSelectProps> = args => (
  <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Select {...args}></Select>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
