import { createContext, Dispatch, SetStateAction } from 'react';

type ToastContextType = {
  message: string;
  setMessage: Dispatch<SetStateAction<string>>;
  isVisible: boolean;
  setVisible: Dispatch<SetStateAction<boolean>>;
};

const ToastContext = createContext<ToastContextType>({
  message: '',
  setMessage: () => {},
  isVisible: false,
  setVisible: () => {},
});

export default ToastContext;
