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
    | 'neutral'
    | 'neutral-dark';
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
  width?: string;
  height?: string;
  title?: string;
  titleSize?: string;
  content?: string;
  contentSize?: string;
  confirmButtonText?: string;
  showCancelButton?: boolean;
  cancelButtonText?: string;
  buttonTextSize?: string;
  onConfirm?: () => void;
}

export interface ToastProps extends ToastOptions {
  onClose: () => void;
}
