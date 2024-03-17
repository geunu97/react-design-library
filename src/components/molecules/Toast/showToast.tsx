import { ToastOptions } from './type';

export const showToast = (options: ToastOptions) => {
  const event = new CustomEvent('gw-event-show-toast', { detail: options });
  window.dispatchEvent(event);
};
