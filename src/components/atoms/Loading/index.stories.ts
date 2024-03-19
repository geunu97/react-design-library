import type { Meta, StoryObj } from '@storybook/react';
import Loading from './index';

const meta: Meta<typeof Loading> = {
  title: 'Components/Atoms/Loading',
  component: Loading,
};

export default meta;
export type Story = StoryObj<typeof Loading>;

/* -------------------------------- Type -------------------------------- */
export const SuccessType: Story = {
  name: 'Type: Success',
  args: {
    type: 'success',
  },
};
export const SuccessDarkType: Story = {
  name: 'Type: Success Dark',
  args: {
    type: 'success-dark',
  },
};
export const WarningType: Story = {
  name: 'Type: Warning',
  args: {
    type: 'warning',
  },
};
export const WarningDarkType: Story = {
  name: 'Type: Warning Dark',
  args: {
    type: 'warning-dark',
  },
};
export const DangerType: Story = {
  name: 'Type: Danger',
  args: {
    type: 'danger',
  },
};
export const DangerDarkType: Story = {
  name: 'Type: Danger Dark',
  args: {
    type: 'danger-dark',
  },
};
export const InfoType: Story = {
  name: 'Type: Info',
  args: {
    type: 'info',
  },
};
export const InfoDarkType: Story = {
  name: 'Type: Info Dark',
  args: {
    type: 'info-dark',
  },
};
export const GrayType: Story = {
  name: 'Type: Gray',
  args: {
    type: 'gray',
  },
};
export const GrayDarkType: Story = {
  name: 'Type: Gray Dark',
  args: {
    type: 'gray-dark',
  },
};
export const BlackType: Story = {
  name: 'Type: Black',
  args: {
    type: 'black',
  },
};
export const WhiteType: Story = {
  name: 'Type: White',
  args: {
    type: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
};

/* -------------------------------- Size -------------------------------- */
export const SmallestSize: Story = {
  name: 'Size: Smallest',
  args: {
    iconSize: 'smallest',
  },
};
export const SmallerSize: Story = {
  name: 'Size: Smaller',
  args: {
    iconSize: 'smaller',
  },
};
export const MediumSize: Story = {
  name: 'Size: Medium',
  args: {
    iconSize: 'medium',
  },
};
export const LargerSize: Story = {
  name: 'Size: Larger',
  args: {
    iconSize: 'larger',
  },
};
export const LargestSize: Story = {
  name: 'Size: Largest',
  args: {
    iconSize: 'largest',
  },
};

/* -------------------------------- showPercentage -------------------------------- */
export const ShowPercentage: Story = {
  name: 'ShowPercentage : true',
  args: {
    showPercentage: true,
    percentage: 72,
  },
};

/* -------------------------------- percentageSize -------------------------------- */
export const PercentageSize: Story = {
  name: 'PercentageSize : string',
  args: {
    showPercentage: true,
    percentage: 72,
    percentageSize: '12px',
  },
};
