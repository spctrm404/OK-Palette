import { RGB, LCH } from './colourTypes';

export type Hues = {
  from: number;
  to: number;
};

export type Swatch = {
  oklch: LCH;
  dispP3Oklch: LCH;
  dispP3: RGB;
  dispP3Hex: string;
  sRgbOklch: LCH;
  sRgb: RGB;
  sRgbHex: string;
  gamut: 'sRGB' | 'Display P3' | 'Out of Display P3';
};

export type PaletteParam = {
  swatchStep: number;
  peakLightness: number;
  peakChroma: number;
  hues: Hues;
};

export type Palette = {
  swatches: Swatch[];
} & PaletteParam;

export type ApcaMatrix = {
  palette: Palette;
  matrix: number[][];
};
