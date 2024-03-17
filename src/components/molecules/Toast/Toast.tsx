import React from 'react';
import { ToastProps } from './type';
import './toast.css';

const Toast = ({
  type = 'info-dark',
  position = 'center-center',
  className,
  width = 'auto',
  height = 'auto',
  title = '',
  titleSize = '18px',
  content = '',
  contentSize = '16px',
  confirmButtonText = '확인',
  showCancelButton = false,
  cancelButtonText = '취소',
  buttonTextSize = '15px',
  onConfirm,
  onClose,
}: ToastProps) => {
  const wrapperStyle = { width, height };
  const titleStyle = { fontSize: titleSize };
  const contentStyle = { fontSize: contentSize };
  const confirmButtonStyle = {
    borderRadius: showCancelButton ? '0px 0px 0px 10px' : '0px 0px 10px 10px',
    fontSize: buttonTextSize,
  };
  const cancelButtonStyle = { borderRadius: '0px 0px 10px 0px', fontSize: buttonTextSize };

  return (
    <div
      className={[
        'gw-toast',
        `gw-toast-position--${position}`,
        `gw-toast-type--${type}`,
        `${className ? className : ''}`,
      ].join(' ')}
      style={wrapperStyle}
    >
      <div className="gw-toast-contentWrap">
        <div className="gw-toast-title" style={titleStyle}>
          {title}
        </div>
        <div className="gw-toast-content" style={contentStyle}>
          {content}
        </div>
      </div>
      <div className="gw-toast-buttonWrap">
        <button
          className="gw-toast-confirm-button"
          style={confirmButtonStyle}
          onClick={() => {
            onConfirm && onConfirm();
            onClose();
          }}
        >
          {confirmButtonText}
        </button>

        {showCancelButton && (
          <button className="gw-toast-cancel-button" style={cancelButtonStyle} onClick={onClose}>
            {cancelButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Toast;
