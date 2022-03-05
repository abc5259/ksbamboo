import ProfileModal, { IProfileModalProps } from "./ProfileModal";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/ProfileModal",
  component: ProfileModal,
} as Meta;

const Template: Story<IProfileModalProps> = args => (
  <>
    <ProfileModal {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
