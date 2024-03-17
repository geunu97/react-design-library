export interface ToastOptions {
  type?: 'success' | 'warning' | 'danger' | 'info' | 'neutral';
  position?:
    | 'left-top'
    | 'left-center'
    | 'left-bottom'
    | 'center-top'
    | 'center-center'
    | 'center-bottom'
    | 'right-top'
    | 'right-center'
    | 'right-bottom';
  className?: string;
  duration?: number;
  width?: number;
  height?: number;
  title?: string;
  titleSize?: string;
  content?: string;
  contentSize?: string;
  showConfirmButton?: boolean;
  showCloseButton?: boolean;
  showCancelButton?: boolean;
  confirmButtonText?: string;
  closeButtonText?: string;
  cancelButtonText?: string;
  onConfirm?: () => void;
  onClose?: () => void;
  onCancel?: () => void;
  useAlertIcon?: boolean;
  useCloseIcon?: boolean;
}

export interface ToastProviderProps {
  children: React.ReactNode;
}
