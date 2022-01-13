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
  background-color: #ffc8ae;
  ${({ theme }) => theme.fonts.quicksand};
  color: white;
  font-size: 1.2em;
  font-weight: 700;
  padding: 0.5rem 1.5rem;
  box-sizing: border-box;
  border-radius: 8px;
  width: 5em;
  transition: background-color 0.2s;
  &:hover {
    background-color: #ffb694;
  }
  &:active {
    background-color: #ff9e71;
  }
`;

export const MenuContainer = styled.div`
  background-color: white;
  padding: 1rem;
  border-radius: 8px;
  position: absolute;
  width: 19em;
  top: calc(100% + 1rem);
  right: 0;
  max-height: 40em;
  overflow-y: scroll;
  z-index: 500;
`;

export const MenuTitle = styled.h2`
  ${({ theme }) => theme.fonts.quicksand}
  font-weight: 700;
  font-size: 2em;
  text-decoration: underline;
`;

export const FilterIconButton = styled.button`
  background: none;
  border: none;
`;
