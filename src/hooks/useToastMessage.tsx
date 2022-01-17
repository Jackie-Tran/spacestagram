import { useContext, useRef } from 'react';
import ToastContext from '../context/ToastContext';

const useToastMessage = () => {
  const { setMessage, setVisible } = useContext(ToastContext);
  const exitTimer = useRef<number>();

  const showMessage = (toastMessage: string) => {
    if (exitTimer.current) window.clearTimeout(exitTimer.current);
    setMessage(toastMessage);
    setVisible(true);
    exitTimer.current = window.setTimeout(() => {
      setVisible(false);
    }, 4000);
  };

  return { showMessage };
};

export default useToastMessage;
