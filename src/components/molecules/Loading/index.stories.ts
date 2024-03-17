import type { Meta, StoryObj } from '@storybook/react';
import Loading from './index';

const meta: Meta<typeof Loading> = {
  title: 'Components/Molecules/Loading',
  component: Loading,
};

export default meta;
export type Story = StoryObj<typeof Loading>;

/* -------------------------------- Color -------------------------------- */
export const SuccessColor: Story = {
  name: 'Color: Success',
  args: {
    color: 'success',
  },
};
export const WarningColor: Story = {
  name: 'Color: Warning',
  args: {
    color: 'warning',
  },
};
export const DangerColor: Story = {
  name: 'Color: Danger',
  args: {
    color: 'danger',
  },
};
export const InfoColor: Story = {
  name: 'Color: Info',
  args: {
    color: 'info',
  },
};
export const NeutralColor: Story = {
  name: 'Color: Neutral',
  args: {
    color: 'neutral',
  },
};
export const BlackColor: Story = {
  name: 'Color: Black',
  args: {
    color: 'black',
  },
};

/* -------------------------------- Size -------------------------------- */
export const SmallestSize: Story = {
  name: 'Size: Smallest',
  args: {
    size: 'smallest',
  },
};
export const SmallerSize: Story = {
  name: 'Size: Smaller',
  args: {
    size: 'smaller',
  },
};
export const MediumSize: Story = {
  name: 'Size: Medium',
  args: {
    size: 'medium',
  },
};
export const LargerSize: Story = {
  name: 'Size: Larger',
  args: {
    size: 'larger',
  },
};
export const LargestSize: Story = {
  name: 'Size: Largest',
  args: {
    size: 'largest',
  },
};

/* -------------------------------- Percentage -------------------------------- */
export const Percentage: Story = {
  name: 'Percentage : number',
  args: {
    percentage: 72,
  },
};
