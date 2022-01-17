import styled from 'styled-components';

export const FilterOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const FilterOptionName = styled.h3`
  ${({ theme }) => theme.fonts.quicksand};
  color: ${({ theme }) => theme.colors.text};
  font-size: 1.3em;
  font-weight: 600;
`;

export const OptionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const RadioButton = styled.input`
  margin-right: 1rem;
`;

export const FilterLabel = styled.label`
  ${({ theme }) => theme.fonts.quicksand};
  color: ${({ theme }) => theme.colors.text};
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
  padding: 0.5rem;
  border: 1px solid ${({ theme }) => theme.colors.border};
  background-color: ${({ theme }) => theme.colors.button};
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  width: 90%;
`;
