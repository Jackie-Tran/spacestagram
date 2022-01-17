import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Theme from './theme/theme';
import HomePage from './pages/home';
import LikesContext from './context/LikesContext';
import PostPage from './pages/post';
import ToastMessage from './components/ToastMessage';
import ToastContext from './context/ToastContext';

const App: React.FC = () => {
  const [likes, setLikes] = useState<string[]>([]);
  const [isToastVisible, setToastVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  return (
    <React.StrictMode>
      <ThemeProvider theme={Theme}>
        <ToastContext.Provider
          value={{
            message: toastMessage,
            setMessage: setToastMessage,
            isVisible: isToastVisible,
            setVisible: setToastVisible,
          }}
        >
          <LikesContext.Provider value={{ likes, setLikes }}>
            <AnimatePresence>
              {isToastVisible && <ToastMessage message={toastMessage} />}
            </AnimatePresence>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path=":date" element={<PostPage />} />
            </Routes>
          </LikesContext.Provider>
        </ToastContext.Provider>
      </ThemeProvider>
    </React.StrictMode>
  );
};

export default App;
