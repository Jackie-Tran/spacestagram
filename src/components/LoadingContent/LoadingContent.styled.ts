import styled from 'styled-components';

export const SpinnerContainer = styled.div`
  width: 5em;
  height: 5em;
  overflow: hidden;
`;

export const SpinnerImage = styled.img`
  object-fit: cover;
  overflow: hidden;
  width: 100%;
  height: 100%;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5rem;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  z-index: 1;
`;

export const LoadingText = styled.p`
  ${({ theme }) => theme.fonts.quicksand}
  font-size: 2em;
  font-weight: 500;
  text-align: center;
`;
