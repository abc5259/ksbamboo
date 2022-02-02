import EmailAuth, { IModuleEmailAuthProps } from "./EmailAuth";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Organisms/EmailAuth",
  component: EmailAuth,
} as Meta;

const Template: Story<IModuleEmailAuthProps> = args => (
  <>
    <EmailAuth {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = { email: "dlwogns3413@naver.com" };
