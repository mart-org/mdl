import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../index";

const meta: Meta<typeof Button> = {
  title: "components/button",
  tags: ["autodocs"],
  component: Button,
};

type Story = StoryObj<typeof Button>;

export const count: Story = {
  tags: ["count", "add", "substract"],
};
export const add: Story = {
  args: {
    num: 5,
    operation: "add",
    label: "Add",
  },
};
export const sudstract: Story = {
  args: {
    num: 5,
    operation: "sudstract",
    label: "Sudstract",
  },
};

export default meta;
