import Button, { IAtomButtonProps } from "./Button";
import { Meta, Story } from "@storybook/react";

export default {
  title: "Atoms/Button",
  component: Button,
  parameters: {},
  argTypes: {
    className: {
      control: {
        type: "select",
        options: ["small", "middle", "big"],
      },
    },
  },
} as Meta;

const Template: Story<IAtomButtonProps> = args => (
  <>
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <span>small</span>
      <Button {...args} className="small">
        test
      </Button>
      <span>middle</span>
      <Button {...args} className="middle">
        test
      </Button>
      <span>big</span>
      <Button {...args} className="big">
        test
      </Button>
    </div>
  </>
);

export const Default = Template.bind({});
Default.parameters = {};
Default.args = {
  width: "120px",
  height: "50px",
  color: "#fff",
};
