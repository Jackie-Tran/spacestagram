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
  animation: spin 2s infinite;
  animation-timing-function: linear;
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: 5rem;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const LoadingText = styled.p`
  ${({ theme }) => theme.fonts.quicksand}
  font-size: 2em;
  font-weight: 500;
  text-align: center;
`;
