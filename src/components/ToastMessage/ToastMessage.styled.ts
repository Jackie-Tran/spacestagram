import styled, { css, keyframes } from 'styled-components';
import { motion } from 'framer-motion';
import { ToastStatus } from '.';

export const ToastContainer = styled(motion.div)<{ status: ToastStatus }>`
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  overflow: hidden;
  ${({ theme, status }) => {
    switch (status) {
      case 'success':
        return css`
          background-color: ${theme.colors.toastSuccess};
        `;
      case 'error':
        return css`
          background-color: ${theme.colors.toastError};
        `;
      default:
        return css`
          background-color: ${theme.colors.toastInfo};
        `;
    }
  }}
  color: ${({ theme }) => theme.colors.toastText};
  border-radius: 4px;
  padding: 1rem;
  box-sizing: border-box;
  z-index: 5;
`;

export const ToastText = styled.p`
  ${({ theme }) => theme.fonts.quicksand};
  font-size: 1.2em;
  font-weight: 500;
`;

const timer = keyframes`
    from {
        width: 0%;
    }
    to {
        width: 100%;
    }
`;

export const ToastTimer = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  height: 5px;
  width: 100%;
  left: 0;
  bottom: 0;
  animation: ${timer} 4s linear;
`;
