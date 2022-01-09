import { css } from 'styled-components';
import { IColors, IFonts, ITheme } from './theme.types';
import '@fontsource/quicksand';

export const colors: IColors = {
  background: '#F0E7DB',
  headingText: '#7D3800',
  subheading: '#8E6A5A',
  text: '#000000',
  white: '#ffffff',
};

export const fonts: IFonts = {
  quicksand: css`
    font-family: 'Quicksand';
  `,
};

const Theme: ITheme = {
  colors,
  fonts,
};

export default Theme;