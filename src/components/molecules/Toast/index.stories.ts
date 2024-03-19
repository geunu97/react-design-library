import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Item';

const meta: Meta<typeof Toast> = {
  title: 'Components/Molecules/Toast',
  component: Toast,
};

export default meta;
export type Story = StoryObj<typeof Toast>;

const sampleArgs = {
  title: 'This is a sample title',
  content: 'This is a sample content',
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

/* -------------------------------- Width -------------------------------- */
export const Width: Story = {
  name: 'Width: string',
  args: {
    ...sampleArgs,
    width: '90%',
  },
};

/* -------------------------------- TitleFontSize -------------------------------- */
export const TitleFontSize: Story = {
  name: 'TitleFontSize: string',
  args: {
    ...sampleArgs,
    titleFontSize: '22px',
  },
};

/* -------------------------------- ContentFontSize -------------------------------- */
export const ContentFontSize: Story = {
  name: 'ContentFontSize: string',
  args: {
    ...sampleArgs,
    contentFontSize: '20px',
  },
};

/* -------------------------------- When there is no title -------------------------------- */
export const EmptyTitle: Story = {
  name: 'Title: empty',
  args: {
    ...sampleArgs,
    title: '',
  },
};

/* -------------------------------- When there is no content -------------------------------- */
export const EmptyContent: Story = {
  name: 'Content: empty',
  args: {
    ...sampleArgs,
    content: '',
  },
};

/* -------------------------------- When not to use toastIcon -------------------------------- */
export const DoNotUseToastIcon: Story = {
  name: 'showToastIcon: false',
  args: {
    ...sampleArgs,
    showToastIcon: false,
  },
};

/* -------------------------------- When not to use closeIcon -------------------------------- */
export const DoNotUseCloseIcon: Story = {
  name: 'showCloseIcon: false',
  args: {
    ...sampleArgs,
    showCloseIcon: false,
  },
};
