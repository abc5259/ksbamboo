import { Meta, Story } from "@storybook/react";
import NotificationIcon, {
  IAtomNotificationIconProps,
} from "./NotificationIcon";

export default {
  title: "Atoms/NotificationIcon",
  component: NotificationIcon,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<IAtomNotificationIconProps> = args => (
  <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <NotificationIcon {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
