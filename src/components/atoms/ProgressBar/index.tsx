import React from 'react';
import { ProgressBarProps } from './type';
import './index.css';

const ProgressBar = ({
  steps,
  type = 'success',
  secondaryType = 'gray',
  shape = 'circle',
  width = '100%',
  stroke = '4px',
  className,
}: ProgressBarProps) => {
  const colorMap = {
    success: '#7cbb3f',
    'success-dark': '#009780',
    warning: '#ff8e0d',
    'warning-dark': '#ad580e',
    danger: '#FF2869',
    'danger-dark': '#ff3232',
    info: '#2563eb',
    'info-dark': '#0D47A1',
    gray: 'lightgray',
    'gray-dark': '#696A6B',
    black: 'black',
    white: 'white',
  };
  const currentColor = colorMap[type];
  const secondaryColor = colorMap[secondaryType];

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
            borderTop: `${stroke} solid ${secondaryColor}`,
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
