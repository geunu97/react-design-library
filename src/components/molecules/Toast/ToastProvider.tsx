import React, { useState, useCallback, useEffect } from 'react';
import Toast from './Toast';
import { ToastOptions, ToastProviderProps } from './type';

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toastList, setToastList] = useState<ToastOptions[]>([]);

  const showToast = useCallback((options: ToastOptions) => {
    // duration이 정의되지 않았다면 토스트 무한
    if (options.duration === undefined) {
      setToastList((prev) => [...prev, options]);
    } else {
      // duration 옵션이 있으면 해당 시간만큼 대기 후 토스트 메시지 제거
      setToastList((prev) => [...prev, options]);
      setTimeout(() => setToastList((prev) => prev.slice(1)), options.duration);
    }
  }, []);

  useEffect(() => {
    const handleShowToast = (event: CustomEvent<ToastOptions>) => {
      showToast(event.detail);
    };

    window.addEventListener('gw-event-show-toast', handleShowToast as EventListener);

    return () => {
      window.removeEventListener('gw-event-show-toast', handleShowToast as EventListener);
    };
  }, [showToast]);

  return (
    <div className="gw-toast-provider">
      {children}
      <div className="gw-toast-list-wrapper">
        {toastList.map((options, index) => (
          <Toast key={index} {...options} />
        ))}
      </div>
    </div>
  );
};
