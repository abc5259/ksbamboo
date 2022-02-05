import KsToggle, { IKsToggleProps } from "./KsToggle";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/KsToggle",
  component: KsToggle,
} as Meta;

const Template: Story<IKsToggleProps> = args => (
  <>
    <KsToggle {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = { departmentTitle: "공과대학" };
