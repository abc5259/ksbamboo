import { Meta, Story } from "@storybook/react";
import LoginForm from "./LoginForm";

export default {
  title: "Organisms / LoginForm",
  component: LoginForm,
} as Meta;

const Template: Story<any> = args => (
  <>
    <LoginForm {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
