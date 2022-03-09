import NotificationCard, { INotificationCardProps } from "./NotificationCard";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Molecules/NotificationCard",
  component: NotificationCard,
} as Meta;

const Template: Story<INotificationCardProps> = args => (
  <>
    <NotificationCard {...args} />
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
