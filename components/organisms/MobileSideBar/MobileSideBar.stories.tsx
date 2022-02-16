import { Meta, Story } from "@storybook/react";
import MobileSideBar, { IMobileSideBarProps } from "./MobileSideBar";

export default {
  title: "organisms/MobileSideBar",
  component: MobileSideBar,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IMobileSideBarProps> = args => (
  <>
    <div style={{ maxWidth: "600px" }}>
      <MobileSideBar {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
