import React from 'react';
import './loading.css';
import SpinnerIcon from '../../../assets/icons/Spinner';

interface LoadingProps {
  position?: 'inline' | 'center';
  color?: 'success' | 'warning' | 'danger' | 'info' | 'neutral' | 'black';
  size?: 'smallest' | 'smaller' | 'medium' | 'larger' | 'largest';
  percentage?: number;
}

const Loading = ({ position = 'inline', color = 'success', size = 'medium', percentage }: LoadingProps) => {
  const spinnerIconSizes = {
    smallest: '23px',
    smaller: '32px',
    medium: '40px',
    larger: '47px',
    largest: '58px',
  };

  return (
    <div
      className={['loading', `loading-position--${position}`, `loading-color--${color}`, `loading-size--${size}`].join(
        ' ',
      )}
    >
      <div className="loading-icon">
        <SpinnerIcon width={spinnerIconSizes[size]} height={spinnerIconSizes[size]} />
      </div>
      {percentage && <p className="loading-percentage">{percentage}%</p>}
    </div>
  );
};

export default Loading;
