import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.headerBackground};
  padding: 1.5rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
  border-bottom: solid 1px ${({ theme }) => theme.colors.border};
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled(Link)`
  ${({ theme }) => theme.fonts.quicksand};
  color: ${({ theme }) => theme.colors.headingText};
  font-size: 1.75em;
  font-weight: 700;
  border: none;
  background: none;
  text-decoration: none;
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.fonts.quicksand};
  color: ${({ theme }) => theme.colors.subheading};
  font-size: 1.2em;
`;
