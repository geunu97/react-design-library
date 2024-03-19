import React from 'react';
import { AlertProps } from './type';
import './index.css';

const Alert = ({
  type = 'info-dark',
  position = 'center-center',
  title = '',
  content = '',
  confirmButtonText = '확인',
  cancelButtonText = '취소',
  width = '300px',
  height = '200px',
  buttonHeight = '60px',
  titleSize = '20px',
  contentSize = '16px',
  buttonTextSize = '18px',
  titleAlignment = 'center',
  contentAlignment = 'center',
  titleVerticalAlignment = 'center',
  contentVerticalAlignment = 'center',
  showCancelButton = false,
  className,
  onConfirm,
  onClose,
}: AlertProps) => {
  const wrapperStyle = { width, height };
  const titleStyle = {
    fontSize: titleSize,
    justifyContent: titleAlignment,
    alignItems: titleVerticalAlignment,
  };
  const contentStyle = {
    fontSize: contentSize,
    justifyContent: contentAlignment,
    alignItems: contentVerticalAlignment,
  };
  const confirmButtonStyle = {
    height: buttonHeight,
    borderRadius: showCancelButton ? '0px 0px 0px 10px' : '0px 0px 10px 10px',
    fontSize: buttonTextSize,
  };
  const cancelButtonStyle = { height: buttonHeight, borderRadius: '0px 0px 10px 0px', fontSize: buttonTextSize };

  return (
    <div className="gw-alert-container">
      <div
        className={`gw-alert gw-alert-position--${position} gw-alert-type--${type} ${className ? className : ''}`}
        style={wrapperStyle}
      >
        <div className="gw-alert-contentWrap">
          {title && (
            <div className="gw-alert-title" style={titleStyle}>
              {title}
            </div>
          )}
          {content && (
            <div className="gw-alert-content" style={contentStyle}>
              {content}
            </div>
          )}
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
      <div className="gw-alert-dimmed" onClick={onClose} />
    </div>
  );
};

export default Alert;
