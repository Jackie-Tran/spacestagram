import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, ToastText, ToastTimer } from './ToastMessage.styled';

export type ToastStatus = 'success' | 'error' | 'info';

type ToastMessageProps = {
  message: string;
  status: ToastStatus;
};

const ToastMessage: React.FC<ToastMessageProps> = ({ message, status }) =>
  ReactDOM.createPortal(
    <ToastContainer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ duration: 0.25 }}
      status={status}
    >
      <ToastText>{message}</ToastText>
      <ToastTimer />
    </ToastContainer>,
    document.body
  );

export default ToastMessage;
