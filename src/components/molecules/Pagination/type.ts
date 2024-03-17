export interface PaginationProps {
  type?:
    | 'success'
    | 'success-dark'
    | 'warning'
    | 'warning-dark'
    | 'danger'
    | 'danger-dark'
    | 'info'
    | 'info-dark'
    | 'neutral-dark';
  weight?: 'inline' | 'ghost';
  shape?: 'square' | 'circle';
  page: number;
  pageSize: number;
  total: number;
  maxPageButtons?: number;
  showPrevButtonIcon?: boolean;
  showNextButtonIcon?: boolean;
  prevButtonText?: string;
  nextButtonText?: string;
  onChangePage: (page: number) => void;
  onShowContent?: (page: number, pageSize: number) => React.ReactNode | string;
  className?: string;
}
