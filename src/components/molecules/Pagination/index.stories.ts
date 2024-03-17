import type { Meta, StoryObj } from '@storybook/react';
import Pagination from './index';

const meta: Meta<typeof Pagination> = {
  title: 'Components/Molecules/Pagination',
  component: Pagination,
};

export default meta;
export type Story = StoryObj<typeof Pagination>;

const sampleArgs = {
  page: 1,
  pageSize: 10,
  total: 100,
  onChangePage: (page: number) => {},
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
export const NeutralDarkType: Story = {
  name: 'Type: NeutralDark',
  args: {
    ...sampleArgs,
    type: 'neutral-dark',
  },
};

/* -------------------------------- Weight -------------------------------- */
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

/* -------------------------------- maxPageButtons -------------------------------- */
export const MaxPageButtons: Story = {
  name: 'MaxPageButtons: number',
  args: {
    ...sampleArgs,
    maxPageButtons: 10,
  },
};

/* -------------------------------- prevButtonText, nextButtonText  -------------------------------- */
export const PrevButtonText: Story = {
  name: 'PrevButtonText: string',
  args: {
    ...sampleArgs,
    prevButtonText: 'Prev',
  },
};
export const NextButtonText: Story = {
  name: 'NextButtonText: string',
  args: {
    ...sampleArgs,
    nextButtonText: 'Next',
  },
};

/* -------------------------------- showPrevButtonIcon, showNextButtonIcon  -------------------------------- */
export const ShowPrevButtonIcon: Story = {
  name: 'ShowPrevButtonIcon: false',
  args: {
    ...sampleArgs,
    prevButtonText: 'Prev',
    showPrevButtonIcon: false,
  },
};
export const ShowNextButtonIcon: Story = {
  name: 'ShowNextButtonIcon: false',
  args: {
    ...sampleArgs,
    nextButtonText: 'Next',
    showNextButtonIcon: false,
  },
};

/* -------------------------------- onShowContent  -------------------------------- */
export const onShowContent: Story = {
  name: 'onShowContent: function',
  args: {
    ...sampleArgs,
    onShowContent: (page: number, pageSize: number) => {
      return `Page ${page} of ${pageSize}`;
    },
  },
};
