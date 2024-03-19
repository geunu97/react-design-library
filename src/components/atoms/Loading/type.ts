export interface LoadingProps {
  position?: 'none' | 'center';
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
  iconSize?: 'smallest' | 'smaller' | 'medium' | 'larger' | 'largest';
  percentageSize?: string;
  showPercentage?: boolean;
  percentage?: number;
  className?: string;
}
