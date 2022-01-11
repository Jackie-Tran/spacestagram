import styled from 'styled-components';

export const FilterOptionContainer = styled.div``;

export const FilterOptionName = styled.h3`
  ${({ theme }) => theme.fonts.quicksand};
  font-size: 1.1em;
  font-weight: 600;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 1rem;
`;
