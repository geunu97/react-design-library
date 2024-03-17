import React from 'react';
import { ToastOptions } from './type';
import './toast.css';

const Toast = ({ position = 'right-bottom', className, width, height, title, titleSize, content, contentSize }: ToastOptions) => {
  const style = {
    width: width ? `${width}px` : 'auto',
    height: height ? `${height}px` : 'auto',
    titleSize: titleSize ? titleSize : '14px',
    contentSize: contentSize ? contentSize : '14px',
  };

  return (
    <div className={['gw-toast-item-wrapper', `gw-position--${position}`, `${className}`].join(' ')} style={style}>
      <div className="gw-toast-item-title">{title}</div>
      <div className="gw-toast-item-content">{content}</div>
    </div>
  );
};

export default Toast;
