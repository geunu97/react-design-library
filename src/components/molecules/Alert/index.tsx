import React from 'react';
import './index.css';
import CloseIcon from '../../../assets/icons/Close';
import SuccessIcon from '../../../assets/icons/Success';
import WarningIcon from '../../../assets/icons/Warning';
import DangerIcon from '../../../assets/icons/Danger';
import InfoIcon from '../../../assets/icons/Info';
import useTimeout from '../../../hooks/useTimeout';
import NeutralIcon from '../../../assets/icons/Neutral';
import { AlertProps } from './type';

const Alert = ({
  type = 'success',
  shape = 'squre',
  title,
  content,
  duration,
  useAlertIcon = true,
  useCloseIcon = true,
}: AlertProps) => {
  const { isOpened, setIsOpened } = useTimeout(duration);

  if (isOpened) {
    return (
      <div className={['alert', `alert-type--${type}`, `alert-shape--${shape}`].join(' ')}>
        {useAlertIcon && (
          <div className="alert-icon">
            {type === 'success' && <SuccessIcon width="20px" height="20px" />}
            {type === 'warning' && <WarningIcon width="20px" height="20px" />}
            {type === 'danger' && <DangerIcon width="20px" height="20px" />}
            {type === 'info' && <InfoIcon width="20px" height="20px" />}
            {type === 'neutral' && <NeutralIcon width="20px" height="20px" />}
          </div>
        )}
        <div className="alert-text">
          <p className="alert-title">{title}</p>
          <p className="alert-content">{content}</p>
        </div>
        {useCloseIcon && (
          <div className="alert-close" onClick={() => setIsOpened(false)}>
            <CloseIcon width="24px" height="24px" />
          </div>
        )}
      </div>
    );
  }

  return <></>;
};

export default Alert;
