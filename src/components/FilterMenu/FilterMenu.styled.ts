import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FilterButton = styled.button`
  border: none;
  background-color: ${({ theme }) => theme.colors.filterButton};
  ${({ theme }) => theme.fonts.quicksand};
  color: white;
  font-size: 1.2em;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  box-sizing: border-box;
  border-radius: 8px;
  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.filterButtonHover};
  }
  &:active {
    background-color: ${({ theme }) => theme.colors.filterButtonActive};
  }
`;

export const MenuContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.card};
  border: solid 1px ${({ theme }) => theme.colors.border};
  z-index: 500;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 1rem;
  width: 19em;
  max-height: 40em;
  border-radius: 8px;
  position: absolute;
  top: calc(100% + 1rem);
  right: 0;
  overflow: hidden;
`;

export const MenuTitle = styled.h2`
  ${({ theme }) => theme.fonts.quicksand}
  font-weight: 700;
  font-size: 2em;
  text-decoration: underline;
  color: ${({ theme }) => theme.colors.text};
`;

export const FilterIconButton = styled.button`
  background: none;
  border: none;
`;

export const FilterIcon = styled.svg`
  stroke: ${({ theme }) => theme.colors.filterButton};
  fill: ${({ theme }) => theme.colors.filterButton};
  transition: stroke 100ms, fill 100ms;
  &:hover {
    stroke: ${({ theme }) => theme.colors.filterButtonHover};
    fill: ${({ theme }) => theme.colors.filterButtonHover};
  }
  &:active {
    stroke: ${({ theme }) => theme.colors.filterButtonActive};
    fill: ${({ theme }) => theme.colors.filterButtonActive};
  }
`;
