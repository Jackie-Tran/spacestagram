import styled from 'styled-components';

export const FilterWrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 5rem;
`;

export const FilterButton = styled.button`
  border: none;
  background-color: #ffc8ae;
  ${({ theme }) => theme.fonts.quicksand};
  color: white;
  font-size: 1.2em;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  border-radius: 8px;
  width: 10em;
`;

export const MenuContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  position: absolute;
  width: 19em;
  top: calc(100% + 1rem);
  max-height: 40em;
  overflow-y: scroll;
`;

export const MenuTitle = styled.h2`
  ${({ theme }) => theme.fonts.quicksand}
  font-weight: 700;
  font-size: 1.2em;
`;

export const FilterTitle = styled.h3`
  ${({ theme }) => theme.fonts.quicksand}
  font-weight: 700;
  font-size: 1.1em;
`;
