import type { Meta, StoryObj } from "@storybook/react";
import { Button2 } from "../index";

const meta: Meta<typeof Button2> = {
  title: "atoms/button2",
  tags: ["autodocs"],
  component: Button2,
};

type Story = StoryObj<typeof Button2>;

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
