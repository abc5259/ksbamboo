import { Meta, Story } from "@storybook/react";
import BoardForm from "./BoardForm";

export default {
  title: "Molecules / BoardForm",
  component: BoardForm,
} as Meta;

const Template: Story<any> = args => (
  <>
    <BoardForm {...args} />;
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  token: "dawdawd",
};
