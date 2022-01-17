import { css } from 'styled-components';
import { IColors, IFonts, ITheme } from './theme.types';

export const light: IColors = {
  background: '#fafafa',
  headerBackground: '#ffffff',
  headingText: '#5a6be3',
  subheading: '#919191',
  text: '#000000',
  card: '#ffffff',
  border: '#c2c2c2',
  button: '#FFFFFF',
  buttonHover: '#F6F6F6',
  buttonActive: '#ededed',
  filterButton: '#5a6be3',
  filterButtonHover: '#4557D7',
  filterButtonActive: '#3648C6',
  toastSuccess: '#3BBD9F',
  toastError: '#FD868B',
  toastInfo: '#7C6FCC',
  toastText: '#ffffff',
};

export const dark: IColors = {
  background: '#23272A',
  headerBackground: '#2F3136',
  headingText: '#b4bdff',
  subheading: '#cdcdcd',
  text: '#f3f3f3',
  card: '#2F3136',
  border: '#4D4D4D',
  button: '#36343E',
  buttonHover: '#2B2931',
  buttonActive: '#25242C',
  filterButton: '#b4bdff',
  filterButtonHover: '#9FA7E5',
  filterButtonActive: '#808AD1',
  toastSuccess: '#3BBD9F',
  toastError: '#FD868B',
  toastInfo: '#7C6FCC',
  toastText: '#ffffff',
};

export const fonts: IFonts = {
  quicksand: css`
    font-family: 'Quicksand', sans-serif;
  `,
};

const Theme = (colorMode: 'light' | 'dark'): ITheme => ({
  colors: colorMode === 'light' ? light : dark,
  fonts,
});

export default Theme;
