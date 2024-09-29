export type Hues = {
  from: number;
  to: number;
};

export type Swatch = {
  oklch: { l: number; c: number; h: number };
  sRgbHex: string;
  dispP3: { r: number; g: number; b: number };
  dispP3Hex: string;
  gamut: 'sRGB' | 'Display P3' | 'Out of Display P3';
};

export type Palette = {
  swatchStep: number;
  peakLightness: number;
  peakChroma: number;
  hues: Hues;
  swatches: Swatch[];
};
