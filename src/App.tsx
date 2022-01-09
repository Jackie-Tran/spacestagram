import React from 'react';
import './App.css';
import styled, { ThemeProvider } from 'styled-components';
import Theme from './theme/theme';

const Test = styled.p`
  ${({ theme }) => theme.fonts.quicksand};
  color: ${({ theme }) => theme.colors.background};
`;

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Test>Hello Mars</Test>
    </ThemeProvider>
  );
}

export default App;
