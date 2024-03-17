import React from 'react';
import ToastItem from './Item';
import { ToastListProps } from './type';
import './index.css';

const ToastList = ({ toastList, onClose }: ToastListProps) => {
  return (
    <div className="gw-toast-list">
      {toastList.map((toast, index) => (
        <ToastItem key={index} index={index} onClose={onClose} {...toast} />
      ))}
    </div>
  );
};

export default ToastList;
