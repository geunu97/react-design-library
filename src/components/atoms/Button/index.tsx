import React from 'react';
import './index.css';
import { ButtonProps } from './type';

const Button = ({
  color = 'primary',
  weight = 'inline',
  size = 'medium',
  shape = 'circle',
  disabled = false,
  label,
  ...props
}: ButtonProps) => {
  return (
    <button
      disabled={disabled}
      className={[
        'gw-button',
        `gw-button-color--${color}`,
        `gw-button-weight--${weight}`,
        `gw-button-size--${size}`,
        `gw-button-shape--${shape}`,
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
