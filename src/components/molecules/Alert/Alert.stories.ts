import type { Meta, StoryObj } from "@storybook/react";
import Alert from "./Alert";

const meta: Meta<typeof Alert> = {
  title: "Components/Molecules/Alert",
  component: Alert,
};

export default meta;
export type Story = StoryObj<typeof Alert>;

const sampleArgs = {
  title: "This is a sample title",
  content: "This is a sample content",
};

/* -------------------------------- Type -------------------------------- */
export const SuccessType: Story = {
  name: "Type: Success",
  args: {
    ...sampleArgs,
    type: "success",
  },
};
export const WarningType: Story = {
  name: "Type: Warning",
  args: {
    ...sampleArgs,
    type: "warning",
  },
};
export const DangerType: Story = {
  name: "Type: Danger",
  args: {
    ...sampleArgs,
    type: "danger",
  },
};
export const InfoType: Story = {
  name: "Type: Info",
  args: {
    ...sampleArgs,
    type: "info",
  },
};
export const NeutralType: Story = {
  name: "Type: Neutral",
  args: {
    ...sampleArgs,
    type: "neutral",
  },
};

/* -------------------------------- Shape -------------------------------- */
export const SqureShape: Story = {
  name: "Shape: Squre",
  args: {
    ...sampleArgs,
    shape: "squre",
  },
};
export const CircleShape: Story = {
  name: "Shape: Circle",
  args: {
    ...sampleArgs,
    shape: "circle",
  },
};

/* -------------------------------- When there is no content -------------------------------- */
export const EmptyContent: Story = {
  name: "Content: empty",
  args: {
    ...sampleArgs,
    content: "",
  },
};

/* -------------------------------- When not to use alertIcon -------------------------------- */
export const DoNotUseAlertIcon: Story = {
  name: "UseAlertIcon: false",
  args: {
    ...sampleArgs,
    useAlertIcon: false,
  },
};

/* -------------------------------- When not to use closeIcon -------------------------------- */
export const DoNotUseCloseIcon: Story = {
  name: "UseCloseIcon: false",
  args: {
    ...sampleArgs,
    useCloseIcon: false,
  },
};
