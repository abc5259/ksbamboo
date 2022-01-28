import { Meta, Story } from "@storybook/react";
import JoinForm from "./JoinForm";

export default {
  title: "Organisms / JoinForm",
  component: JoinForm,
} as Meta;

const Template: Story<any> = args => (
  <>
    <JoinForm {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
