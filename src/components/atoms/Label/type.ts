export interface LabelProps {
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
  weight?: 'outlined' | 'inline' | 'ghost';
  shape?: 'square' | 'circle';
  fontSize?: string;
  padding?: string;
  value?: string;
  className?: string;
}
