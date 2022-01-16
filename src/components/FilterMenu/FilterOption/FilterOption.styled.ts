import styled from 'styled-components';

export const FilterOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

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

export const DatePicker = styled.input`
  ${({ theme }) => theme.fonts.quicksand}
  font-size: 1.1em;
  padding: 0.2rem 0.3em;
  border: 1px solid #cfcfcf;
  border-radius: 4px;
`;
