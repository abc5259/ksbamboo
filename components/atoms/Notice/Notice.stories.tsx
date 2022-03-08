import { Meta, Story } from "@storybook/react";
import Notice, { IAtomNoticeProps } from "./Notice";

export default {
  title: "Atoms/Notice",
  component: Notice,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomNoticeProps> = args => (
  <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Notice {...args}>새로운 게시글</Notice>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
