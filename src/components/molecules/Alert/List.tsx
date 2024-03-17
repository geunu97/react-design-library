import React from 'react';
import AlertItem from './Item';
import { AlertListProps } from './type';
import './index.css';

const AlertList = ({ alertList, onClose }: AlertListProps) => {
  return (
    <div className="gw-alert-list">
      {alertList.map((alert, index) => (
        <AlertItem key={index} index={index} onClose={onClose} {...alert} />
      ))}
    </div>
  );
};

export default AlertList;
