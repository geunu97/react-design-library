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
  shape = 'squre',
  title,
  content,
  showToastIcon = true,
  showCloseIcon = true,
  index,
  onClose,
}: ToastItemProps) => {
  return (
    <div className={['gw-toast', `gw-toast-type--${type}`, `gw-toast-shape--${shape}`].join(' ')}>
      {showToastIcon && (
        <div className="gw-toast-icon">
          {type === 'success' && <SuccessIcon width="20px" height="20px" />}
          {type === 'warning' && <WarningIcon width="20px" height="20px" />}
          {type === 'danger' && <DangerIcon width="20px" height="20px" />}
          {type === 'info' && <InfoIcon width="20px" height="20px" />}
          {type === 'neutral' && <NeutralIcon width="20px" height="20px" />}
        </div>
      )}
      <div className="gw-toast-text">
        <p className="gw-toast-title">{title}</p>
        <p className="gw-toast-content">{content}</p>
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
