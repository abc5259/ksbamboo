import { Meta, Story } from "@storybook/react";
import Home, { ITempHomeProps } from "./Home";

export default {
  title: "Templates / Home",
  component: Home,
} as Meta;

const Template: Story<ITempHomeProps> = args => (
  <>
    <Home {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
