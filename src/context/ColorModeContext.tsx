import { createContext, Dispatch, SetStateAction } from 'react';

type ColorModeContextType = {
  colorMode: 'light' | 'dark';
  setColorMode: Dispatch<SetStateAction<'light' | 'dark'>>;
};

const ColorModeContext = createContext<ColorModeContextType>({
  colorMode: 'light',
  setColorMode: () => {},
});

export default ColorModeContext;
