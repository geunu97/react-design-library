export interface AlertOptions {
  type?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  shape?: 'squre' | 'circle';
  title: string;
  content?: string;
  duration?: number;
  showAlertIcon?: boolean;
  showCloseIcon?: boolean;
}

export interface AlertListProps {
  alertList: AlertOptions[];
  onClose: (index: number) => void;
}

export interface AlertItemProps extends AlertOptions {
  index: number;
  onClose: (index: number) => void;
}
