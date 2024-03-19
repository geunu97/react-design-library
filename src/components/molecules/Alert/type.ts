export interface AlertOptions {
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
  title?: string;
  content?: string;
  confirmButtonText?: string;
  cancelButtonText?: string;
  width?: string;
  height?: string;
  buttonHeight?: string;
  titleSize?: string;
  contentSize?: string;
  buttonTextSize?: string;
  titleAlignment?: 'start' | 'center' | 'end';
  contentAlignment?: 'start' | 'center' | 'end';
  titleVerticalAlignment?: 'start' | 'center' | 'end';
  contentVerticalAlignment?: 'start' | 'center' | 'end';
  showCancelButton?: boolean;
  className?: string;
  onConfirm?: () => void;
}

export interface AlertProps extends AlertOptions {
  onClose: () => void;
}
