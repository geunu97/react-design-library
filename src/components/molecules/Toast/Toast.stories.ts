import type { Meta, StoryObj } from '@storybook/react';
import Toast from './Toast';

const meta: Meta<typeof Toast> = {
  title: 'Components/Molecules/Toast',
  component: Toast,
};

export default meta;
export type Story = StoryObj<typeof Toast>;

const sampleArgs = {
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
  name: 'Type: SuccessDark',
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
  name: 'Type: WarningDark',
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
  name: 'Type: DangerDark',
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
  name: 'Type: InfoDark',
  args: {
    ...sampleArgs,
    type: 'info-dark',
  },
};
export const NeutralType: Story = {
  name: 'Type: Neutral',
  args: {
    ...sampleArgs,
    type: 'neutral',
  },
};
export const NeutralDarkType: Story = {
  name: 'Type: NeutralDark',
  args: {
    ...sampleArgs,
    type: 'neutral-dark',
  },
};

/* -------------------------------- Position -------------------------------- */
export const LeftTopPosition: Story = {
  name: 'Position: LeftTop',
  args: {
    ...sampleArgs,
    position: 'left-top',
  },
};
export const LeftCenterPosition: Story = {
  name: 'Position: LeftCenter',
  args: {
    ...sampleArgs,
    position: 'left-center',
  },
};
export const LeftBottomPosition: Story = {
  name: 'Position: LeftBottom',
  args: {
    ...sampleArgs,
    position: 'left-bottom',
  },
};
export const CenterTopPosition: Story = {
  name: 'Position: CenterTop',
  args: {
    ...sampleArgs,
    position: 'center-top',
  },
};
export const CenterCenterPosition: Story = {
  name: 'Position: CenterCenter',
  args: {
    ...sampleArgs,
    position: 'center-center',
  },
};
export const CenterBottomPosition: Story = {
  name: 'Position: CenterBottom',
  args: {
    ...sampleArgs,
    position: 'center-bottom',
  },
};
export const RightTopPosition: Story = {
  name: 'Position: RightTop',
  args: {
    ...sampleArgs,
    position: 'right-top',
  },
};
export const RightCenterPosition: Story = {
  name: 'Position: RightCenter',
  args: {
    ...sampleArgs,
    position: 'right-center',
  },
};
export const RightBottomPosition: Story = {
  name: 'Position: RightBottom',
  args: {
    ...sampleArgs,
    position: 'right-bottom',
  },
};

/* -------------------------------- ShowCancelButton -------------------------------- */
export const ShowCancelButton: Story = {
  name: 'ShowCancelButton: true',
  args: {
    ...sampleArgs,
    showCancelButton: true,
  },
};

/* -------------------------------- Title -------------------------------- */
export const Title: Story = {
  name: 'Title: string',
  args: {
    ...sampleArgs,
    title: 'This is a sample title',
  },
};

/* -------------------------------- Content -------------------------------- */
export const Content: Story = {
  name: 'Content: string',
  args: {
    ...sampleArgs,
    content: 'This is a sample content',
  },
};

/* -------------------------------- ConfirmButtonText -------------------------------- */
export const ConfirmButtonText: Story = {
  name: 'ConfirmButtonText: string',
  args: {
    ...sampleArgs,
    confirmButtonText: '확인',
  },
};

/* -------------------------------- CancelButtonText -------------------------------- */
export const CancelButtonText: Story = {
  name: 'CancelButtonText: string',
  args: {
    ...sampleArgs,
    showCancelButton: true,
    cancelButtonText: '취소',
  },
};

/* -------------------------------- TitleSize -------------------------------- */
export const TitleSize: Story = {
  name: 'TitleSize: string',
  args: {
    ...sampleArgs,
    title: 'This is a sample title',
    titleSize: '24px',
  },
};
/* -------------------------------- ContentSize -------------------------------- */
export const ContentSize: Story = {
  name: 'ContentSize: string',
  args: {
    ...sampleArgs,
    contentSize: '24px',
  },
};
/* -------------------------------- ButtonTextSize -------------------------------- */
export const ButtonTextSize: Story = {
  name: 'ButtonTextSize: string',
  args: {
    ...sampleArgs,
    buttonTextSize: '18px',
  },
};
