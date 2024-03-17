export interface ToastOptions {
  type?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  shape?: 'squre' | 'circle';
  title: string;
  content?: string;
  duration?: number;
  showToastIcon?: boolean;
  showCloseIcon?: boolean;
}

export interface ToastListProps {
  toastList: ToastOptions[];
  onClose: (index: number) => void;
}

export interface ToastItemProps extends ToastOptions {
  index: number;
  onClose: (index: number) => void;
}
