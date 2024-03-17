import React from 'react';
import { ProgressBarProps } from './type';
import './index.css';

const ProgressBar = ({
  steps,
  type = 'success-dark',
  shape = 'circle',
  width = '100%',
  stroke = '4px',
  className,
}: ProgressBarProps) => {
  const colorMap = {
    'success-dark': '#009780',
    'warning-dark': '#ffa04e',
    'danger-dark': '#FF2869',
    'info-dark': '#0D47A1',
    'neutral-dark': '#000000',
  };
  const currentColor = colorMap[type];

  const renderColorBlocks = () => {
    return (
      <>
        <div
          style={{
            borderTop: `${stroke} solid ${currentColor}`,
            width: `${steps}%`,
          }}
        />
        <div
          style={{
            borderTop: `${stroke} solid #696A6B`,
            width: `${100 - steps}%`,
          }}
        />
      </>
    );
  };

  return (
    <div
      className={`gw-progressBar gw-progressBar-shape--${shape} ${className ? className : ''}`}
      style={{ width: width }}
    >
      {renderColorBlocks()}
    </div>
  );
};

export default ProgressBar;
