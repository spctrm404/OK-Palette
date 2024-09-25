export type LchColorSpace = {
  l: number;
  c: number;
  h: number;
};
export type LabColorSpace = {
  l: number;
  a: number;
  b: number;
};
export type LmsColorSpace = {
  l: number;
  m: number;
  s: number;
};
export type XyzColorSpace = {
  x: number;
  y: number;
  z: number;
};
export type RgbColorSpace = {
  r: number;
  g: number;
  b: number;
};
export type Swatch = {
  oklch: LchColorSpace;
  sRgb: RgbColorSpace;
  dispP3: RgbColorSpace;
  gamut: 'sRGB' | 'P3' | 'Rec2020';
};
export type LightnessTable = {
  [key: string]: { light: number; dark: number };
};

export type PlaneCoord = { x: number; y: number };
