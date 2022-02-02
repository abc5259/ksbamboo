import TextInput, { ITextInputProps } from "./TextInput";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/TextInput",
  component: TextInput,
} as Meta;

const Template: Story<ITextInputProps> = args => (
  <>
    <TextInput {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  labelText: "test",
};
