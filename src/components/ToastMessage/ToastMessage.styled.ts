import styled from 'styled-components';
import { motion } from 'framer-motion';

export const ToastContainer = styled(motion.div)`
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  width: 80%;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
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
