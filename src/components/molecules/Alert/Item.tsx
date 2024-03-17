import React from 'react';
import CloseIcon from '../../../assets/icons/Close';
import SuccessIcon from '../../../assets/icons/Success';
import WarningIcon from '../../../assets/icons/Warning';
import DangerIcon from '../../../assets/icons/Danger';
import InfoIcon from '../../../assets/icons/Info';
import NeutralIcon from '../../../assets/icons/Neutral';
import { AlertItemProps } from './type';
import './index.css';

const AlertItem = ({
  type = 'success',
  shape = 'squre',
  title,
  content,
  showAlertIcon = true,
  showCloseIcon = true,
  index,
  onClose,
}: AlertItemProps) => {
  return (
    <div className={['gw-alert', `gw-alert-type--${type}`, `gw-alert-shape--${shape}`].join(' ')}>
      {showAlertIcon && (
        <div className="gw-alert-icon">
          {type === 'success' && <SuccessIcon width="20px" height="20px" />}
          {type === 'warning' && <WarningIcon width="20px" height="20px" />}
          {type === 'danger' && <DangerIcon width="20px" height="20px" />}
          {type === 'info' && <InfoIcon width="20px" height="20px" />}
          {type === 'neutral' && <NeutralIcon width="20px" height="20px" />}
        </div>
      )}
      <div className="gw-alert-text">
        <p className="gw-alert-title">{title}</p>
        <p className="gw-alert-content">{content}</p>
      </div>
      {showCloseIcon && (
        <div className="gw-alert-close" onClick={() => onClose(index)}>
          <CloseIcon width="24px" height="24px" />
        </div>
      )}
    </div>
  );
};

export default AlertItem;
