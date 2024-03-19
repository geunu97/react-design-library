import React from 'react';
import './index.css';
import SpinnerIcon from '../../../assets/icons/Spinner';
import { LoadingProps } from './type';

const Loading = ({
  position = 'center',
  type = 'success',
  iconSize = 'medium',
  percentageSize = '16px',
  showPercentage = false,
  percentage = 0,
  className,
}: LoadingProps) => {
  const spinnerIconSizes = {
    smallest: '23px',
    smaller: '34px',
    medium: '44px',
    larger: '54px',
    largest: '64px',
  };

  return (
    <div
      className={`gw-loading gw-loading-position--${position} gw-loading-type--${type} ${className ? className : ''}`}
    >
      <div className="gw-loading-icon">
        <SpinnerIcon width={spinnerIconSizes[iconSize]} height={spinnerIconSizes[iconSize]} />
      </div>
      {showPercentage && (
        <p className="gw-loading-percentage" style={{ fontSize: percentageSize }}>
          {percentage}%
        </p>
      )}
    </div>
  );
};

export default Loading;
