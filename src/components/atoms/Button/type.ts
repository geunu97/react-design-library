export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: 'primary' | 'secondary' | 'black' | 'success' | 'warning' | 'danger';
  weight?: 'outlined' | 'inline' | 'ghost';
  size?: 'smallest' | 'smaller' | 'medium' | 'larger' | 'largest';
  shape?: 'squre' | 'circle';
  disabled?: boolean;
  label?: string;
  onClick?: () => void;
}
