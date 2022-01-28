import { Meta, Story } from "@storybook/react";
import Input, { IAtomInputProps } from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomInputProps> = args => (
  <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Input {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
