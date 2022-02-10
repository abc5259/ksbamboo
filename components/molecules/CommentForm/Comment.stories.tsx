import CommentForm, { ICommentFormProps } from "./CommentForm";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/CommentForm",
  component: CommentForm,
} as Meta;

const Template: Story<ICommentFormProps> = args => (
  <>
    <CommentForm {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
