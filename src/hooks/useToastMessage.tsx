import { useContext, useRef } from 'react';
import { ToastStatus } from '../components/ToastMessage';
import ToastContext from '../context/ToastContext';

const useToastMessage = () => {
  const { setMessage, setStatus, setVisible } = useContext(ToastContext);
  const exitTimer = useRef<number>();

  const showMessage = (toastMessage: string, status: ToastStatus) => {
    if (exitTimer.current) window.clearTimeout(exitTimer.current);
    setMessage(toastMessage);
    setStatus(status);
    setVisible(true);
    exitTimer.current = window.setTimeout(() => {
      setVisible(false);
    }, 4000);
  };

  return { showMessage };
};

export default useToastMessage;
