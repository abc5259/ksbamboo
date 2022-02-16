import MobileSideBarBtn, { IMobileSideBarBtnProps } from "./MobileSideBarBtn";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/MobileSideBarBtn",
  component: MobileSideBarBtn,
} as Meta;

const Template: Story<IMobileSideBarBtnProps> = args => (
  <>
    <MobileSideBarBtn {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
