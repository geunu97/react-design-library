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

/* -------------------------------- IconType -------------------------------- */
export const SuccessIconType: Story = {
  name: 'Icon Type: Success',
  args: {
    ...sampleArgs,
    type: 'success',
    iconType: 'success',
  },
};
export const SuccessDarkIconType: Story = {
  name: 'Icon Type: Success Dark',
  args: {
    ...sampleArgs,
    type: 'success-dark',
    iconType: 'success-dark',
  },
};
export const WarningIconType: Story = {
  name: 'Icon Type: Warning',
  args: {
    ...sampleArgs,
    type: 'warning',
    iconType: 'warning',
  },
};
export const WarningDarkIconType: Story = {
  name: 'Icon Type: Warning Dark',
  args: {
    ...sampleArgs,
    type: 'warning-dark',
    iconType: 'warning-dark',
  },
};
export const DangerIconType: Story = {
  name: 'Icon Type: Danger',
  args: {
    ...sampleArgs,
    type: 'danger',
    iconType: 'danger',
  },
};
export const DangerDarkIconType: Story = {
  name: 'Icon Type: Danger Dark',
  args: {
    ...sampleArgs,
    type: 'danger-dark',
    iconType: 'danger-dark',
  },
};
export const InfoIconType: Story = {
  name: 'Icon Type: Info',
  args: {
    ...sampleArgs,
    type: 'info',
    iconType: 'info',
  },
};
export const InfoDarkIconType: Story = {
  name: 'Icon Type: Info Dark',
  args: {
    ...sampleArgs,
    type: 'info-dark',
    iconType: 'info-dark',
  },
};
export const GrayIconType: Story = {
  name: 'Icon Type: Gray',
  args: {
    ...sampleArgs,
    type: 'gray',
    iconType: 'gray',
  },
};
export const GrayDarkIconType: Story = {
  name: 'Icon Type: Gray Dark',
  args: {
    ...sampleArgs,
    type: 'gray-dark',
    iconType: 'gray-dark',
  },
};
export const BlackIconType: Story = {
  name: 'Icon Type: Black',
  args: {
    ...sampleArgs,
    type: 'black',
    iconType: 'black',
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
