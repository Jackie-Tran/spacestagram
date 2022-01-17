import styled from 'styled-components';

export const TruncatingTextContainer = styled.div`
  margin: 0.5rem 0rem;
`;

export const TruncatedText = styled.p`
  ${({ theme }) => theme.fonts.quicksand};
  color: ${({ theme }) => theme.colors.text};
  font-weight: 500;
  font-size: 1em;
  display: inline;
`;

export const ShowMoreText = styled.button`
  display: inline;
  ${({ theme }) => theme.fonts.quicksand}
  color: ${({ theme }) => theme.colors.subheading};
  font-weight: 500;
  font-size: 1em;
  border: none;
  background: none;
  cursor: pointer;
`;
