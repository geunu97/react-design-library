import React, { useState, useCallback, useEffect } from 'react';
import { ToastOptions, ToastProviderProps } from './type';
import Toast from './Toast';
import './toast.css';

const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toast, setToast] = useState<ToastOptions | null>(null);

  useEffect(() => {
    const handleShowToast = (event: CustomEvent<ToastOptions>) => {
      setToast(event.detail);
    };
    window.addEventListener('gw-event-show-toast', handleShowToast as EventListener);
    return () => {
      window.removeEventListener('gw-event-show-toast', handleShowToast as EventListener);
    };
  }, []);

  const onClose = () => {
    setToast(null);
  };

  return (
    <div className="gw-toast-provider">
      {children}
      {toast && <Toast onClose={onClose} {...toast} />}
    </div>
  );
};

export default ToastProvider;
