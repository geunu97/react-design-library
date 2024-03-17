export interface ProgressBarProps {
  steps: number;
  type?: 'success-dark' | 'warning-dark' | 'danger-dark' | 'info-dark' | 'neutral-dark';
  shape?: 'square' | 'circle';
  width?: string;
  stroke?: string;
  className?: string;
}
