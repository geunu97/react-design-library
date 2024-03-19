import React from 'react';
import CloseIcon from '../../../assets/icons/Close';
import SuccessIcon from '../../../assets/icons/Success';
import WarningIcon from '../../../assets/icons/Warning';
import DangerIcon from '../../../assets/icons/Danger';
import InfoIcon from '../../../assets/icons/Info';
import NeutralIcon from '../../../assets/icons/Neutral';
import { ToastItemProps } from './type';
import './index.css';

const ToastItem = ({
  type = 'success',
  shape = 'square',
  title,
  content,
  titleFontSize = '16px',
  contentFontSize = '14px',
  width = '350px',
  showToastIcon = true,
  showCloseIcon = true,
  index,
  className,
  onClose,
}: ToastItemProps) => {
  return (
    <div
      className={`gw-toast gw-toast-type--${type} gw-toast-shape--${shape} ${className ? className : ''}`}
      style={{ width: width }}
    >
      {showToastIcon && (
        <div className="gw-toast-icon">
          {type === 'success' && <SuccessIcon width="20px" height="20px" />}
          {type === 'success-dark' && <SuccessIcon width="20px" height="20px" />}
          {type === 'warning' && <WarningIcon width="20px" height="20px" />}
          {type === 'warning-dark' && <WarningIcon width="20px" height="20px" />}
          {type === 'danger' && <DangerIcon width="20px" height="20px" />}
          {type === 'danger-dark' && <DangerIcon width="20px" height="20px" />}
          {type === 'info' && <InfoIcon width="20px" height="20px" />}
          {type === 'info-dark' && <InfoIcon width="20px" height="20px" />}
          {type === 'gray' && <NeutralIcon width="20px" height="20px" />}
          {type === 'gray-dark' && <NeutralIcon width="20px" height="20px" />}
          {type === 'black' && <NeutralIcon width="20px" height="20px" />}
          {type === 'white' && <NeutralIcon width="20px" height="20px" />}
        </div>
      )}
      <div className="gw-toast-text">
        {title && (
          <p className="gw-toast-title" style={{ fontSize: titleFontSize }}>
            {title}
          </p>
        )}
        {content && (
          <p className="gw-toast-content" style={{ fontSize: contentFontSize }}>
            {content}
          </p>
        )}
      </div>
      {showCloseIcon && (
        <div className="gw-toast-close" onClick={() => onClose(index)}>
          <CloseIcon width="24px" height="24px" />
        </div>
      )}
    </div>
  );
};

export default ToastItem;
