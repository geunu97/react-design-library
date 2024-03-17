import React from 'react';
import './index.css';
import SpinnerIcon from '../../../assets/icons/Spinner';
import { LoadingProps } from './type';

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
