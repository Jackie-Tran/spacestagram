import styled from 'styled-components';

export const FilterOptionContainer = styled.div``;

export const FilterOptionName = styled.h3`
  ${({ theme }) => theme.fonts.quicksand};
  font-size: 1.3em;
  font-weight: 600;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  padding-left: 1rem;
`;

export const RadioButton = styled.input`
  margin-right: 1rem;
`;

export const FilterLabel = styled.label`
  ${({ theme }) => theme.fonts.quicksand};
  font-size: 1.2em;
  font-size: 500;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;
