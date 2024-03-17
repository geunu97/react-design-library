import React, { useState, useCallback, useEffect } from 'react';
import { ProviderProps } from './type';
import { ToastOptions } from '../../molecules/Toast/type';
import Toast from '../../molecules/Toast';
import './index.css';
import { AlertOptions } from '../../molecules/Alert/type';
import AlertList from '../../molecules/Alert/List';

const Provider = ({ children }: ProviderProps) => {
  const [toast, setToast] = useState<ToastOptions | null>(null);
  const [alertList, setAlertList] = useState<AlertOptions[]>([]);

  useEffect(() => {
    const handleShowToast = (event: CustomEvent<ToastOptions>) => {
      setToast(event.detail);
    };
    const handleShowAlert = (event: CustomEvent<AlertOptions>) => {
      setAlertList((currentAlertList) => {
        const newAlertList = [...currentAlertList, event.detail].slice(-10); // alertList를 최대 10개까지만 유지
        // 각 alert에 대해 duration 설정
        if (event.detail.duration) {
          setTimeout(() => {
            setAlertList((current) => current.filter((alert) => alert !== event.detail));
          }, event.detail.duration);
        } else {
          // 기본적으로 3초 후에 alert 제거
          setTimeout(() => {
            setAlertList((current) => current.filter((alert) => alert !== event.detail));
          }, 3000);
        }
        return newAlertList;
      });
    };

    window.addEventListener('gw-event-show-toast', handleShowToast as EventListener);
    window.addEventListener('gw-event-show-alert', handleShowAlert as EventListener);
    return () => {
      window.removeEventListener('gw-event-show-toast', handleShowToast as EventListener);
      window.removeEventListener('gw-event-show-alert', handleShowAlert as EventListener);
    };
  }, []);

  const onCloseToast = () => {
    setToast(null);
  };

  const onCloseAlert = (index: number) => {
    setAlertList((currentAlertList) => currentAlertList.filter((_, i) => i !== index));
  };

  return (
    <div className="gw-provider">
      {children}
      {toast && <Toast onClose={onCloseToast} {...toast} />}
      {alertList?.length > 0 && <AlertList onClose={onCloseAlert} alertList={alertList} />}
    </div>
  );
};

export default Provider;
