import { Meta, Story } from "@storybook/react";
import SideBar, { IOrgSideBarProps } from "./SideBar";

export default {
  title: "Organisms / SideBar",
  component: SideBar,
} as Meta;

const Template: Story<IOrgSideBarProps> = args => (
  <>
    <SideBar {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
