import { Meta, Story } from "@storybook/react";
import Toggle, { IAtomToggleProps } from "./Toggle";

export default {
  Toggle: "Atoms/Toggle",
  component: Toggle,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomToggleProps> = args => (
  <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Toggle {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  title: "test",
};
