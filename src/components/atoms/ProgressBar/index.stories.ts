import type { Meta, StoryObj } from '@storybook/react';
import ProgressBar from './index';

const meta: Meta<typeof ProgressBar> = {
  title: 'Components/Atoms/ProgressBar',
  component: ProgressBar,
};

export default meta;
export type Story = StoryObj<typeof ProgressBar>;

const sampleArgs = {
  steps: 60,
};

/* -------------------------------- Type -------------------------------- */
export const SuccessType: Story = {
  name: 'Type: Success',
  args: {
    ...sampleArgs,
    type: 'success',
  },
};
export const SuccessDarkType: Story = {
  name: 'Type: Success Dark',
  args: {
    ...sampleArgs,
    type: 'success-dark',
  },
};
export const WarningType: Story = {
  name: 'Type: Warning',
  args: {
    ...sampleArgs,
    type: 'warning',
  },
};
export const WarningDarkType: Story = {
  name: 'Type: Warning Dark',
  args: {
    ...sampleArgs,
    type: 'warning-dark',
  },
};
export const DangerType: Story = {
  name: 'Type: Danger',
  args: {
    ...sampleArgs,
    type: 'danger',
  },
};
export const DangerDarkType: Story = {
  name: 'Type: Danger Dark',
  args: {
    ...sampleArgs,
    type: 'danger-dark',
  },
};
export const InfoType: Story = {
  name: 'Type: Info',
  args: {
    ...sampleArgs,
    type: 'info',
  },
};
export const InfoDarkType: Story = {
  name: 'Type: Info Dark',
  args: {
    ...sampleArgs,
    type: 'info-dark',
  },
};
export const GrayType: Story = {
  name: 'Type: Gray',
  args: {
    ...sampleArgs,
    type: 'gray',
  },
};
export const GrayDarkType: Story = {
  name: 'Type: Gray Dark',
  args: {
    ...sampleArgs,
    type: 'gray-dark',
  },
};
export const BlackType: Story = {
  name: 'Type: Black',
  args: {
    ...sampleArgs,
    type: 'black',
  },
};
export const WhiteType: Story = {
  name: 'Type: White',
  args: {
    ...sampleArgs,
    type: 'white',
  },
  parameters: {
    backgrounds: {
      default: 'dark',
      values: [{ name: 'dark', value: '#000000' }],
    },
  },
};

/* -------------------------------- SecondaryType -------------------------------- */
export const WhiteSecondaryType: Story = {
  name: 'SecondaryType: White',
  args: {
    ...sampleArgs,
    secondaryType: 'white',
  },
};
export const BlackSecondaryType: Story = {
  name: 'SecondaryType: Black',
  args: {
    ...sampleArgs,
    secondaryType: 'black',
  },
};

/* -------------------------------- Steps -------------------------------- */
export const Steps: Story = {
  name: 'Steps: number',
  args: {
    steps: 30,
  },
};

/* -------------------------------- Width -------------------------------- */
export const Width: Story = {
  name: 'Width: string',
  args: {
    ...sampleArgs,
    width: '300px',
  },
};

/* -------------------------------- Stroke -------------------------------- */
export const Stroke: Story = {
  name: 'Stroke: string',
  args: {
    ...sampleArgs,
    stroke: '2px',
  },
};

/* -------------------------------- Shape -------------------------------- */
export const SquareShape: Story = {
  name: 'Shape: Square',
  args: {
    ...sampleArgs,
    shape: 'square',
  },
};

export const CircleShape: Story = {
  name: 'Shape: Circle',
  args: {
    ...sampleArgs,
    shape: 'circle',
  },
};
