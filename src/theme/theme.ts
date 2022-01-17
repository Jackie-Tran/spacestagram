import { css } from 'styled-components';
import { IColors, IFonts, ITheme } from './theme.types';

// export const light: IColors = {
//   background: '#F0E7DB',
//   headerBackground: '#f4d9c5',
//   headingText: '#7D3800',
//   subheading: '#8E6A5A',
//   text: '#000000',
//   card: '#ffffff',
//   border: '#c2c2c2',
//   button: '#FFFFFF',
//   buttonHover: '#F6F6F6',
//   buttonActive: '#ededed',
//   filterButton: '#ffc8ae',
//   filterButtonHover: '#ffb694',
//   filterButtonActive: '#ff9e71',
// };
export const colors: IColors = {
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

export const fonts: IFonts = {
  quicksand: css`
    font-family: 'Quicksand', sans-serif;
  `,
};

const Theme: ITheme = {
  colors,
  fonts,
};

export default Theme;
