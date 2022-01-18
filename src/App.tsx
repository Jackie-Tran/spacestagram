import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Theme from './theme/theme';
import HomePage from './pages/home';
import LikesContext from './context/LikesContext';
import PostPage from './pages/post';
import ToastMessage, { ToastStatus } from './components/ToastMessage';
import ToastContext from './context/ToastContext';
import ColorModeContext, { ColorMode } from './context/ColorModeContext';

const App: React.FC = () => {
  const [colorMode, setColorMode] = useState<ColorMode>(
    localStorage.getItem('colorMode')
      ? (localStorage.getItem('colorMode') as ColorMode)
      : 'light'
  );
  const [likes, setLikes] = useState<string[]>([]);
  const [isToastVisible, setToastVisible] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');
  const [toastStatus, setToastStatus] = useState<ToastStatus>('info');
  const theme = Theme(colorMode);

  useEffect(() => {
    const { body } = document;
    body.style.setProperty('background-color', theme.colors.background);
  }, []);

  return (
    <React.StrictMode>
      <ColorModeContext.Provider value={{ colorMode, setColorMode }}>
        <ThemeProvider theme={theme}>
          <ToastContext.Provider
            value={{
              message: toastMessage,
              setMessage: setToastMessage,
              isVisible: isToastVisible,
              setVisible: setToastVisible,
              status: toastStatus,
              setStatus: setToastStatus,
            }}
          >
            <LikesContext.Provider value={{ likes, setLikes }}>
              <AnimatePresence>
                {isToastVisible && (
                  <ToastMessage message={toastMessage} status={toastStatus} />
                )}
              </AnimatePresence>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path=":date" element={<PostPage />} />
              </Routes>
            </LikesContext.Provider>
          </ToastContext.Provider>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </React.StrictMode>
  );
};

export default App;
