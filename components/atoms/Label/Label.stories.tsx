import { Meta, Story } from "@storybook/react";
import Label, { IAtomLabelProps } from "./Label";

export default {
  title: "Atoms/Label",
  component: Label,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomLabelProps> = args => (
  <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Label {...args}>Test</Label>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
