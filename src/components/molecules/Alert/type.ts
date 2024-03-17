export interface AlertProps {
  type?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  shape?: 'squre' | 'circle';
  title: string;
  content?: string;
  duration?: number;
  useAlertIcon?: boolean;
  useCloseIcon?: boolean;
}
