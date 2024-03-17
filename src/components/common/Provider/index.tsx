import React, { useState, useEffect } from 'react';
import { ProviderProps } from './type';
import { ToastOptions } from '../../molecules/Toast/type';
import { AlertOptions } from '../../molecules/Alert/type';
import Alert from '../../molecules/Alert';
import ToastList from '../../molecules/Toast/List';
import './index.css';

const Provider = ({ children }: ProviderProps) => {
  const [alert, setAlert] = useState<AlertOptions | null>(null);
  const [toastList, setToastList] = useState<ToastOptions[]>([]);

  useEffect(() => {
    const handleShowAlert = (event: CustomEvent<AlertOptions>) => {
      setAlert(event.detail);
    };
    const handleShowToast = (event: CustomEvent<ToastOptions>) => {
      setToastList((currentToastList) => {
        const newToastList = [...currentToastList, event.detail].slice(-10); // toastList를 최대 10개까지만 유지
        // 각 toast 대해 duration 설정
        if (event.detail.duration) {
          setTimeout(() => {
            setToastList((current) => current.filter((alert) => alert !== event.detail));
          }, event.detail.duration);
        } else {
          // 기본적으로 3초 후에 toast 제거
          setTimeout(() => {
            setToastList((current) => current.filter((alert) => alert !== event.detail));
          }, 3000);
        }
        return newToastList;
      });
    };

    window.addEventListener('gw-event-show-alert', handleShowAlert as EventListener);
    window.addEventListener('gw-event-show-toast', handleShowToast as EventListener);    
    return () => {
      window.removeEventListener('gw-event-show-alert', handleShowAlert as EventListener);
      window.removeEventListener('gw-event-show-toast', handleShowToast as EventListener);      
    };
  }, []);

  const onCloseAlert = () => {
    setAlert(null);
  };

  const onCloseToast = (index: number) => {
    setToastList((currentToastList) => currentToastList.filter((_, i) => i !== index));
  };

  return (
    <div className="gw-provider">
      {children}
      {alert && <Alert onClose={onCloseAlert} {...alert} />}
      {toastList?.length > 0 && <ToastList onClose={onCloseToast} toastList={toastList} />}
    </div>
  );
};

export default Provider;
