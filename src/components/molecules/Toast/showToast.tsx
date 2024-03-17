import { ToastOptions } from './type';

const showToast = (options: ToastOptions) => {
  const event = new CustomEvent('gw-event-show-toast', { detail: options });
  window.dispatchEvent(event);
};

export default showToast;