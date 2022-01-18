import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: none;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1.5em;
  width: 2em;
  height: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.border};
  :hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
  :active {
    background-color: ${({ theme }) => theme.colors.buttonActive};
  }
`;

export default ToggleContainer;
