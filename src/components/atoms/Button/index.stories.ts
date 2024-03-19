import type { Meta, StoryObj } from '@storybook/react';
import Button from './index';

const meta: Meta<typeof Button> = {
  title: 'Components/Atoms/Button',
  component: Button,
};

export default meta;
export type Story = StoryObj<typeof Button>;

const sampleArgs = {
  label: 'Button',
};

/* -------------------------------- Types -------------------------------- */
export const SuccessTypes: Story = {
  name: 'Types: Success',
  args: {
    ...sampleArgs,
    types: 'success',
  },
};
export const SuccessDarkTypes: Story = {
  name: 'Types: Success Dark',
  args: {
    ...sampleArgs,
    types: 'success-dark',
  },
};
export const WarningTypes: Story = {
  name: 'Types: Warning',
  args: {
    ...sampleArgs,
    types: 'warning',
  },
};
export const WarningDarkTypes: Story = {
  name: 'Types: Warning Dark',
  args: {
    ...sampleArgs,
    types: 'warning-dark',
  },
};
export const DangerTypes: Story = {
  name: 'Types: Danger',
  args: {
    ...sampleArgs,
    types: 'danger',
  },
};
export const DangerDarkTypes: Story = {
  name: 'Types: Danger Dark',
  args: {
    ...sampleArgs,
    types: 'danger-dark',
  },
};
export const InfoTypes: Story = {
  name: 'Types: Info',
  args: {
    ...sampleArgs,
    types: 'info',
  },
};
export const InfoDarkTypes: Story = {
  name: 'Types: Info Dark',
  args: {
    ...sampleArgs,
    types: 'info-dark',
  },
};
export const GrayTypes: Story = {
  name: 'Types: Gray',
  args: {
    ...sampleArgs,
    types: 'gray',
  },
};
export const GrayDarkTypes: Story = {
  name: 'Types: Gray Dark',
  args: {
    ...sampleArgs,
    types: 'gray-dark',
  },
};
export const BlackTypes: Story = {
  name: 'Types: Black',
  args: {
    ...sampleArgs,
    types: 'black',
  },
};
export const WhiteTypes: Story = {
  name: 'Types: White',
  args: {
    ...sampleArgs,
    types: 'white',
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

/* -------------------------------- Disabled -------------------------------- */
export const Disabled: Story = {
  name: 'Disabled: True',
  args: {
    ...sampleArgs,
    disabled: true,
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
