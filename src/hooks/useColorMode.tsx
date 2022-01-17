import { useContext, useEffect } from 'react';
import ColorModeContext from '../context/ColorModeContext';

const useColorMode = () => {
  const { colorMode, setColorMode } = useContext(ColorModeContext);

  const toggleColorMode = () => {
    const newColorMode = colorMode === 'light' ? 'dark' : 'light';
    setColorMode(newColorMode);
    localStorage.setItem('colorMode', newColorMode);
  };

  useEffect(() => {
    const storedColorMode = localStorage.getItem('colorMode') as
      | 'light'
      | 'dark';
    if (storedColorMode) {
      setColorMode(storedColorMode);
    }
  }, []);

  return { colorMode, toggleColorMode };
};

export default useColorMode;
