import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer, ToastText } from './ToastMessage.styled';

type ToastMessageProps = {
  message: string;
};
// TODO: update the design/style of toast message
const ToastMessage: React.FC<ToastMessageProps> = ({ message }) =>
  ReactDOM.createPortal(
    <ToastContainer
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      exit={{ y: 100 }}
      transition={{ duration: 0.25 }}
    >
      <ToastText>{message}</ToastText>
    </ToastContainer>,
    document.body
  );

export default ToastMessage;
