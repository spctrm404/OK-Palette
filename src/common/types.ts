export type TLchColorSpace = {
  l: number;
  c: number;
  h: number;
};
export type TLabColorSpace = {
  l: number;
  a: number;
  b: number;
};
export type TLmsColorSpace = {
  l: number;
  m: number;
  s: number;
};
export type TXyzColorSpace = {
  x: number;
  y: number;
  z: number;
};
export type TRgbColorSpace = {
  r: number;
  g: number;
  b: number;
};
export type TSwatch = {
  oklch: TLchColorSpace;
  sRgb: TRgbColorSpace;
  dispP3: TRgbColorSpace;
  gamut: 'sRGB' | 'P3' | 'Rec2020';
};
export type TLightnessTable = {
  [key: string]: { light: number; dark: number };
};
