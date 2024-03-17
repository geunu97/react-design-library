import React from 'react';
import { AlertProps } from './type';
import './index.css';

const Alert = ({
  type = 'info-dark',
  position = 'center-center',
  className,
  width = 'auto',
  height = 'auto',
  title = '',
  titleSize = '20px',
  content = '',
  contentSize = '16px',
  confirmButtonText = '확인',
  showCancelButton = false,
  cancelButtonText = '취소',
  buttonTextSize = '16px',
  onConfirm,
  onClose,
}: AlertProps) => {
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
        'gw-alert',
        `gw-alert-position--${position}`,
        `gw-alert-type--${type}`,
        `${className ? className : ''}`,
      ].join(' ')}
      style={wrapperStyle}
    >
      <div className="gw-alert-contentWrap">
        <div className="gw-alert-title" style={titleStyle}>
          {title}
        </div>
        <div className="gw-alert-content" style={contentStyle}>
          {content}
        </div>
      </div>
      <div className="gw-alert-buttonWrap">
        <button
          className="gw-alert-confirm-button"
          style={confirmButtonStyle}
          onClick={() => {
            onConfirm && onConfirm();
            onClose();
          }}
        >
          {confirmButtonText}
        </button>
        {showCancelButton && (
          <button className="gw-alert-cancel-button" style={cancelButtonStyle} onClick={onClose}>
            {cancelButtonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default Alert;
