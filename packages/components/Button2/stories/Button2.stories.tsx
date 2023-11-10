import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../index";

const meta: Meta<typeof Button> = {
  title: "atoms/button2",
  tags: ["autodocs"],
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Button",
    text: "Button",
  },
};
export const Secondary: Story = {
  args: {
    label: "Button",
    text: "Button",
  },
};
export const button: Story = {
  args: {
    label: "Button",
    text: "Button",
  },
};

export default meta;
