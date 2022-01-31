import LoginInput, { ILoginInputProps } from "./LoginInput";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/LoginInput",
  component: LoginInput,
} as Meta;

const Template: Story<ILoginInputProps> = args => (
  <>
    <LoginInput {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  labelTest: "test",
};
