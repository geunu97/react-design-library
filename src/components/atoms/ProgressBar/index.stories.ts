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
export const SuccessDarkType: Story = {
  name: 'Type: SuccessDark',
  args: {
    ...sampleArgs,
    type: 'success-dark',
  },
};
export const WarningDarkType: Story = {
  name: 'Type: WarningDark',
  args: {
    ...sampleArgs,
    type: 'warning-dark',
  },
};
export const DangerDarkType: Story = {
  name: 'Type: DangerDark',
  args: {
    ...sampleArgs,
    type: 'danger-dark',
  },
};
export const InfoDarkType: Story = {
  name: 'Type: InfoDark',
  args: {
    ...sampleArgs,
    type: 'info-dark',
  },
};
export const NeutralDarkType: Story = {
  name: 'Type: NeutralDark',
  args: {
    ...sampleArgs,
    type: 'neutral-dark',
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
