import React from 'react';
import './index.css';
import { LabelProps } from './type';

const Label = ({
  color = 'danger-dark',
  weight = 'outlined',
  size = 'smaller',
  shape = 'circle',
  value,
  className,
}: LabelProps) => {
  return (
    <span
      className={`${[
        'gw-label',
        `gw-label-color--${color}`,
        `gw-label-weight--${weight}`,
        `gw-label-size--${size}`,
        `gw-label-shape--${shape}`,
      ].join(' ')} ${className ? className : ''}`}
    >
      {value}
    </span>
  );
};

export default Label;
