import { AlertOptions } from './type';

const showAlert = (options: AlertOptions) => {
  const event = new CustomEvent('gw-event-show-alert', { detail: options });
  window.dispatchEvent(event);
};

export default showAlert;