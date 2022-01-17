import { motion } from 'framer-motion';
import styled from 'styled-components';

export const HomePageContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100%;
  padding: 10rem 10% 5rem 10%;
  min-height: 100vh;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  box-sizing: border-box;
  position: relative;
`;

export const CardContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 5rem;
  width: 100%;
  height: 100%;
  @media screen and (min-width: 1200px) {
    width: 60%;
  }

  @media screen and (min-width: 1600px) {
    width: 50%;
  }
`;

export const FiltersContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 40%;
  /* position: sticky; */
  top: 10rem;
  @media screen and (min-width: 1600px) {
    width: 30%;
  }
`;
