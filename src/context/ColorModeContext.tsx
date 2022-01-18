import { createContext, Dispatch, SetStateAction } from 'react';

export type ColorMode = 'light' | 'dark';

type ColorModeContextType = {
  colorMode: ColorMode;
  setColorMode: Dispatch<SetStateAction<'light' | 'dark'>>;
};

const ColorModeContext = createContext<ColorModeContextType>({
  colorMode: 'light',
  setColorMode: () => {},
});

export default ColorModeContext;
