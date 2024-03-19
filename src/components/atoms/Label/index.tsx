import React from 'react';
import './index.css';
import { LabelProps } from './type';

const Label = ({
  type = 'danger-dark',
  weight = 'outlined',
  fontSize = '14px',
  padding = '11px 18px',
  shape = 'circle',
  value,
  className,
}: LabelProps) => {
  return (
    <span
      className={`gw-label gw-label-type--${type} gw-label-weight--${weight} gw-label-shape--${shape} ${
        className ? className : ''
      }`}
      style={{ padding, fontSize }}
    >
      {value}
    </span>
  );
};

export default Label;
