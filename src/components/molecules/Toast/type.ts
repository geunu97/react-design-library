export interface ToastOptions {
  type?:
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
  shape?: 'square' | 'circle';
  title?: string;
  content?: string;
  titleFontSize?: string;
  contentFontSize?: string;
  width?: string;
  duration?: number;
  showToastIcon?: boolean;
  showCloseIcon?: boolean;
  className?: string;
}

export interface ToastListProps {
  toastList: ToastOptions[];
  onClose: (index: number) => void;
}

export interface ToastItemProps extends ToastOptions {
  index: number;
  onClose: (index: number) => void;
}
