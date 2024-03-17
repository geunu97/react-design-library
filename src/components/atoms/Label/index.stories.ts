import type { Meta, StoryObj } from '@storybook/react';
import Label from './index';

const meta: Meta<typeof Label> = {
  title: 'Components/Atoms/Label',
  component: Label,
};

export default meta;
export type Story = StoryObj<typeof Label>;

/* -------------------------------- Color -------------------------------- */
export const PrimaryColor: Story = {
  name: 'Color: Primary',
  args: {
    color: 'primary',
    value: 'Label',
  },
};
export const PrimaryDarkColor: Story = {
  name: 'Color: Primary Dark',
  args: {
    color: 'primary-dark',
    value: 'Label',
  },
};
export const SecondaryColor: Story = {
  name: 'Color: Secondary',
  args: {
    color: 'secondary',
    value: 'Label',
  },
};
export const SecondaryDarkColor: Story = {
  name: 'Color: Secondary Dark',
  args: {
    color: 'secondary-dark',
    value: 'Label',
  },
};
export const SuccessColor: Story = {
  name: 'Color: Success',
  args: {
    color: 'success',
    value: 'Label',
  },
};
export const SuccessDarkColor: Story = {
  name: 'Color: Success Dark',
  args: {
    color: 'success-dark',
    value: 'Label',
  },
};
export const WarningColor: Story = {
  name: 'Color: Warning',
  args: {
    color: 'warning',
    value: 'Label',
  },
};
export const WarningDarkColor: Story = {
  name: 'Color: Warning Dark',
  args: {
    color: 'warning-dark',
    value: 'Label',
  },
};
export const DangerColor: Story = {
  name: 'Color: Danger',
  args: {
    color: 'danger',
    value: 'Label',
  },
};
export const DangerDarkColor: Story = {
  name: 'Color: Danger Dark',
  args: {
    color: 'danger-dark',
    value: 'Label',
  },
};
export const InfoColor: Story = {
  name: 'Color: Info',
  args: {
    color: 'info',
    value: 'Label',
  },
};
export const InfoDarkColor: Story = {
  name: 'Color: Info Dark',
  args: {
    color: 'info-dark',
    value: 'Label',
  },
};
export const BlackColor: Story = {
  name: 'Color: Black',
  args: {
    color: 'black',
    value: 'Label',
  },
};

/* -------------------------------- Weight -------------------------------- */
export const OutlinedWeight: Story = {
  name: 'Weight: Outlined',
  args: {
    weight: 'outlined',
    value: 'Label',
  },
};
export const InlineWeight: Story = {
  name: 'Weight: Inline',
  args: {
    weight: 'inline',
    value: 'Label',
  },
};
export const GhostWeight: Story = {
  name: 'Weight: Ghost',
  args: {
    weight: 'ghost',
    value: 'Label',
  },
};

/* -------------------------------- Size -------------------------------- */
export const SmallestSize: Story = {
  name: 'Size: Smallest',
  args: {
    size: 'smallest',
    value: 'Label',
  },
};
export const SmallerSize: Story = {
  name: 'Size: Smaller',
  args: {
    size: 'smaller',
    value: 'Label',
  },
};
export const MediumSize: Story = {
  name: 'Size: Medium',
  args: {
    size: 'medium',
    value: 'Label',
  },
};
export const LargerSize: Story = {
  name: 'Size: Larger',
  args: {
    size: 'larger',
    value: 'Label',
  },
};
export const LargestSize: Story = {
  name: 'Size: Largest',
  args: {
    size: 'largest',
    value: 'Label',
  },
};

/* -------------------------------- Shape -------------------------------- */
export const SqureShape: Story = {
  name: 'Shape: Squre',
  args: {
    shape: 'squre',
    value: 'Label',
  },
};
export const CircleShape: Story = {
  name: 'Shape: Circle',
  args: {
    shape: 'circle',
    value: 'Label',
  },
};
