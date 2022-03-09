import { Meta, Story } from "@storybook/react";
import NotificationCards, {
  INotificationCardsProps,
} from "./NotificationCards";

export default {
  title: "organisms/NotificationCards",
  component: NotificationCards,
  parameters: {},
  argTypes: {},
} as Meta;

const Template: Story<INotificationCardsProps> = args => (
  <>
    <div style={{ maxWidth: "600px" }}>
      <NotificationCards {...args} />
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {};
