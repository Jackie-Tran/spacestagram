import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Theme from './theme/theme';
import HomePage from './pages/home';

const App: React.FC = () => (
  <ThemeProvider theme={Theme}>
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  </ThemeProvider>
);

export default App;
