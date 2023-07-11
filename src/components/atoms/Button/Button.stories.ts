import type { Meta, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
};

export default meta;
export type Story = StoryObj<typeof Button>;

/* -------------------------------- Color -------------------------------- */
export const PrimaryColor: Story = {
  name: 'Color: Primary',
  args: {
    color: 'primary',
    label: 'Button',
  },
};
export const SecondaryColor: Story = {
  name: 'Color: Secondary',
  args: {
    color: 'secondary',
    label: 'Button',
  },
};
export const BlackColor: Story = {
  name: 'Color: Black',
  args: {
    color: 'black',
    label: 'Button',
  },
};
export const SuccessColor: Story = {
  name: 'Color: Success',
  args: {
    color: 'success',
    label: 'Button',
  },
};
export const WarningColor: Story = {
  name: 'Color: Warning',
  args: {
    color: 'warning',
    label: 'Button',
  },
};
export const DangerColor: Story = {
  name: 'Color: Danger',
  args: {
    color: 'danger',
    label: 'Button',
  },
};

/* -------------------------------- Weight -------------------------------- */
export const OutlinedWeight: Story = {
  name: 'Weight: Outlined',
  args: {
    weight: 'outlined',
    label: 'Button',
  },
};
export const InlineWeight: Story = {
  name: 'Weight: Inline',
  args: {
    weight: 'inline',
    label: 'Button',
  },
};
export const GhostWeight: Story = {
  name: 'Weight: Ghost',
  args: {
    weight: 'ghost',
    label: 'Button',
  },
};

/* -------------------------------- Size -------------------------------- */
export const SmallestSize: Story = {
  name: 'Size: Smallest',
  args: {
    size: 'smallest',
    label: 'Button',
  },
};
export const SmallerSize: Story = {
  name: 'Size: Smaller',
  args: {
    size: 'smaller',
    label: 'Button',
  },
};
export const MediumSize: Story = {
  name: 'Size: Medium',
  args: {
    size: 'medium',
    label: 'Button',
  },
};
export const LargerSize: Story = {
  name: 'Size: Larger',
  args: {
    size: 'larger',
    label: 'Button',
  },
};
export const LargestSize: Story = {
  name: 'Size: Largest',
  args: {
    size: 'largest',
    label: 'Button',
  },
};

/* -------------------------------- Shape -------------------------------- */
export const SqureShape: Story = {
  name: 'Shape: Squre',
  args: {
    shape: 'squre',
    label: 'Button',
  },
};
export const CircleShape: Story = {
  name: 'Shape: Circle',
  args: {
    shape: 'circle',
    label: 'Button',
  },
};

/* -------------------------------- Disabled -------------------------------- */
export const Disabled: Story = {
  name: 'Disabled: True',
  args: {
    disabled: true,
    label: 'Button',
  },
};
