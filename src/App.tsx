import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import Theme from './theme/theme';
import HomePage from './pages/home';
import LikesContext from './context/LikesContext';

const App: React.FC = () => {
  const [likes, setLikes] = useState<string[]>([]);
  return (
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <LikesContext.Provider value={{ likes, setLikes }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </LikesContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
