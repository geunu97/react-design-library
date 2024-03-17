import React from 'react';
import './button.css';
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
        'button',
        `button-color--${color}`,
        `button-weight--${weight}`,
        `button-size--${size}`,
        `button-shape--${shape}`,
      ].join(' ')}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
