import { useContext } from 'react';
import ToastContext from '../context/ToastContext';

const useToastMessage = () => {
  const { setMessage, setVisible } = useContext(ToastContext);

  const showMessage = (toastMessage: string) => {
    setMessage(toastMessage);
    setVisible(true);
    setTimeout(() => {
      setVisible(false);
    }, 4000);
  };

  return { showMessage };
};

export default useToastMessage;
