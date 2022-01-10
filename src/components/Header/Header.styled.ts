import styled from 'styled-components';

export const HeaderContainer = styled.div`
  background-color: #f4d9c5;
  padding: 1.5rem;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.quicksand};
  color: ${({ theme }) => theme.colors.headingText};
  font-size: 1.5em;
  font-weight: 700;
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.fonts.quicksand};
  color: ${({ theme }) => theme.colors.subheading};
  font-size: 1.2em;
`;
