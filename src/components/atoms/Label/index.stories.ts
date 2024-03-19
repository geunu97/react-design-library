import type { Meta, StoryObj } from '@storybook/react';
import Label from './index';

const meta: Meta<typeof Label> = {
  title: 'Components/Atoms/Label',
  component: Label,
};

export default meta;
export type Story = StoryObj<typeof Label>;

const sampleArgs = {
  value: 'Label',
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

/* -------------------------------- Weight -------------------------------- */
export const OutlinedWeight: Story = {
  name: 'Weight: Outlined',
  args: {
    ...sampleArgs,
    weight: 'outlined',
  },
};
export const InlineWeight: Story = {
  name: 'Weight: Inline',
  args: {
    ...sampleArgs,
    weight: 'inline',
  },
};
export const GhostWeight: Story = {
  name: 'Weight: Ghost',
  args: {
    ...sampleArgs,
    weight: 'ghost',
  },
};

/* -------------------------------- Shape -------------------------------- */
export const SquareShape: Story = {
  name: 'Shape: square',
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

/* -------------------------------- fontSize -------------------------------- */
export const FontSize: Story = {
  name: 'FontSize: string',
  args: {
    ...sampleArgs,
    fontSize: '14px',
    padding: '11px 18px',
  },
};

/* -------------------------------- padding -------------------------------- */
export const Padding: Story = {
  name: 'Padding: string',
  args: {
    ...sampleArgs,
    fontSize: '16px',
    padding: '14px 22px',
  },
};
