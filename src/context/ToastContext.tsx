import { createContext, Dispatch, SetStateAction } from 'react';
import { ToastStatus } from '../components/ToastMessage';

type ToastContextType = {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
  status: ToastStatus;
  setStatus: Dispatch<SetStateAction<ToastStatus>>;
};

const ToastContext = createContext<ToastContextType>({
  message: '',
  setMessage: () => {},
  isVisible: false,
  setVisible: () => {},
  status: 'info',
  setStatus: () => {},
});

export default ToastContext;
