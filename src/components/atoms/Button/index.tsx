import React from 'react';
import './index.css';
import { ButtonProps } from './type';

const Button = ({
  types = 'danger-dark',
  weight = 'outlined',
  fontSize = '14px',
  padding = '11px 18px',
  shape = 'circle',
  disabled = false,
  label,
  className,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={`gw-button gw-button-types--${types} gw-button-weight--${weight} gw-button-shape--${shape} ${
        className ? className : ''
      }`}
      style={{ padding, fontSize }}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
