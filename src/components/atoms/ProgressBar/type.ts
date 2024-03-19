export type ProgressBarType =
  | 'success'
  | 'success-dark'
  | 'warning'
  | 'warning-dark'
  | 'danger'
  | 'danger-dark'
  | 'info'
  | 'info-dark'
  | 'gray'
  | 'gray-dark'
  | 'black'
  | 'white';

export interface ProgressBarProps {
  steps: number;
  type?: ProgressBarType;
  secondaryType?: ProgressBarType;
  shape?: 'square' | 'circle';
  width?: string;
  stroke?: string;
  className?: string;
}
