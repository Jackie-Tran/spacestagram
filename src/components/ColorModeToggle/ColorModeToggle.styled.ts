import styled from 'styled-components';

const ToggleContainer = styled.button`
  background: none;
  border: none;
  padding: 0.75rem;
  border-radius: 50%;
  font-size: 1.5em;
  :hover {
    background-color: ${({ theme }) => theme.colors.buttonHover};
  }
  :active {
    background-color: ${({ theme }) => theme.colors.buttonActive};
  }
`;

export default ToggleContainer;
