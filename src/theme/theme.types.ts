import { FlattenSimpleInterpolation } from 'styled-components';

export interface IColors {
  background: string;
  headingText: string;
  subheading: string;
  text: string;
  white: string;
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
