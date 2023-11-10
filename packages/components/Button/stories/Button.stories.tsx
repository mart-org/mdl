import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "mart-dl";

const meta: Meta<typeof Button> = {
  title: "atoms/button",
  tags: ["autodocs"],
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    label: "Button",
  },
};
export const Secondary: Story = {
  args: {
    label: "Button",
  },
};
export const button: Story = {
  args: {
    label: "Button",
  },
};

export default meta;
