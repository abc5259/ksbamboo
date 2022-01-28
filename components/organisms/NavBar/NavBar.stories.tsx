import { Meta, Story } from "@storybook/react";
import NavBar from "./NavBar";

export default {
  title: "Organisms / NavBar",
  component: NavBar,
} as Meta;

const Template: Story<any> = args => (
  <>
    <NavBar {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
