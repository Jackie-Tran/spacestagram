import { FlattenSimpleInterpolation } from 'styled-components';

export interface IColors {
  background: string;
  headingText: string;
  headerBackground: string;
  subheading: string;
  text: string;
  card: string;
  border: string;
  button: string;
  buttonHover: string;
  buttonActive: string;
  filterButton: string;
  filterButtonHover: string;
  filterButtonActive: string;
}

export interface IFonts {
  quicksand: FlattenSimpleInterpolation;
}

export interface ITheme {
  colors: IColors;
  fonts: IFonts;
}

declare module 'styled-components' {
  export interface DefaultTheme extends ITheme {}
}
