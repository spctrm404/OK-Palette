export type lchColorSpaceType = {
  l: number;
  c: number;
  h: number;
};
export type labColorSpaceType = {
  l: number;
  a: number;
  b: number;
};
export type lmsColorSpaceType = {
  l: number;
  m: number;
  s: number;
};
export type xyzColorSpaceType = {
  x: number;
  y: number;
  z: number;
};
export type rgbColorSpaceType = {
  r: number;
  g: number;
  b: number;
};
export type swatchType = {
  oklch: lchColorSpaceType;
  sRgb: rgbColorSpaceType;
  dispP3: rgbColorSpaceType;
  gamut: 'sRGB' | 'P3' | 'Rec2020';
};
export type lightnessTableType = {
  [key: string]: { light: number; dark: number };
};
