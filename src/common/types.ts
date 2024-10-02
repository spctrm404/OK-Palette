export type DocumentColorSpace = 'LEGACY' | 'SRGB' | 'DISPLAY_P3';

export type XY = {
  x: number;
  y: number;
};

export type Hues = {
  from: number;
  to: number;
};

export type Swatch = {
  dispP3ClampedOklch: { l: number; c: number; h: number };
  dispP3: { r: number; g: number; b: number };
  dispP3Hex: string;
  sRgbClampedOklch: { l: number; c: number; h: number };
  sRgb: { r: number; g: number; b: number };
  sRgbHex: string;
  gamut: 'sRGB' | 'Display P3' | 'Out of Display P3';
};

export type Palette = {
  swatchStep: number;
  peakLightness: number;
  peakChroma: number;
  hues: Hues;
  swatches: Swatch[];
};

export type ApcaMatrix = {
  palette: Palette;
  matrix: number[][];
};
