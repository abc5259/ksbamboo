import { Meta, Story } from "@storybook/react";
import Message, { IAtomMessageProps } from "./Message";

export default {
  title: "Atoms/Message",
  component: Message,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomMessageProps> = args => (
  <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <span>Error Message</span>
      <Message {...args} className="error">
        test
      </Message>
      <span>Success Message</span>
      <Message {...args} className="success">
        test
      </Message>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  fontSize: "2em",
};
