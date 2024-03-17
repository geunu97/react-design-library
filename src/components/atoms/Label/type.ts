export interface LabelProps {
  color?:
    | 'primary'
    | 'primary-dark'
    | 'secondary'
    | 'secondary-dark'
    | 'success'
    | 'success-dark'
    | 'warning'
    | 'warning-dark'
    | 'danger'
    | 'danger-dark'
    | 'info'
    | 'info-dark'
    | 'black';
  weight?: 'outlined' | 'inline' | 'ghost';
  size?: 'smallest' | 'smaller' | 'medium' | 'larger' | 'largest';
  shape?: 'squre' | 'circle';
  value?: string;
  className?: string;
}
