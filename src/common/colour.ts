import {
  LchColorSpace,
  LabColorSpace,
  LmsColorSpace,
  XyzColorSpace,
  RgbColorSpace,
  Swatch,
} from './types';
import {
  LIGHTNESS_STEP,
  CHROMA_STEP,
  P3_CHROMA_LIMIT,
  THEME_PEAK_CHROMA_HEADROOM,
  THEME_PEAK_LIGHTNESS,
  THEME_SECONDARY_CHROMA_MULT,
  THEME_NEUTRAL_VARIANT_PEAK_CHROMA,
  THEME_NEUTRAL_PEAK_CHROMA,
  RGB_FLOAT_PRECISION,
} from './constants';
import { degToRad, clamp, quantize } from './numberUtils';

export const oklchToOklab = ({ l, c, h }: LchColorSpace): LabColorSpace => {
  const radH = degToRad(h);
  return {
    l,
    a: Math.cos(radH) * c,
    b: Math.sin(radH) * c,
  };
};

export const oklabToXyz = (lab: LabColorSpace): XyzColorSpace => {
  const oklabToLms = ({ l, a, b }: LabColorSpace): LmsColorSpace => ({
    l: (l + 0.3963377774 * a + 0.2158037573 * b) ** 3,
    m: (l - 0.1055613458 * a - 0.0638541728 * b) ** 3,
    s: (l - 0.0894841775 * a - 1.291485548 * b) ** 3,
  });

  const { l, m, s } = oklabToLms(lab);

  return {
    x: 1.2270138511 * l - 0.5577999807 * m + 0.2812561489 * s,
    y: -0.0405801784 * l + 1.1122568696 * m - 0.0716766787 * s,
    z: -0.0763812845 * l - 0.4214819784 * m + 1.5861632204 * s,
  };
};

export const xyzToRgb = (
  matrix: number[][],
  { x, y, z }: XyzColorSpace
): RgbColorSpace => ({
  r: matrix[0][0] * x + matrix[0][1] * y + matrix[0][2] * z,
  g: matrix[1][0] * x + matrix[1][1] * y + matrix[1][2] * z,
  b: matrix[2][0] * x + matrix[2][1] * y + matrix[2][2] * z,
});

export const xyzToLinearSrgb = (xyz: XyzColorSpace): RgbColorSpace =>
  xyzToRgb(
    [
      [3.2404542, -1.5371385, -0.4985314],
      [-0.969266, 1.8760108, 0.041556],
      [0.0556434, -0.2040259, 1.0572252],
    ],
    xyz
  );

export const xyzToLinearDispP3 = (xyz: XyzColorSpace): RgbColorSpace =>
  xyzToRgb(
    [
      [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
      [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
      [0.0358458302437845, -0.0763812845057069, 0.9570942811736457],
    ],
    xyz
  );

export const gammaCorrectRGB = (linearRGB: RgbColorSpace): RgbColorSpace => {
  return Object.fromEntries(
    Object.entries(linearRGB).map(([key, value]) => [
      key,
      value <= 0.0031308
        ? 12.92 * value
        : 1.055 * Math.pow(value, 1 / 2.4) - 0.055,
    ])
  ) as RgbColorSpace;
};

export const clampRGB = (RGB: RgbColorSpace): RgbColorSpace => {
  return Object.fromEntries(
    Object.entries(RGB).map(([key, value]) => [key, clamp(value, 0, 1)])
  ) as RgbColorSpace;
};

export const oklchToXyz = (lch: LchColorSpace): XyzColorSpace =>
  oklabToXyz(oklchToOklab(lch));

export const nomalRgbToHex = ({ r, g, b }: RgbColorSpace): string =>
  [r, g, b]
    .map((value) =>
      Math.round(value * 255)
        .toString(16)
        .padStart(2, '0')
        .toUpperCase()
    )
    .join('');

export const hueForLightness = (
  lightness: number,
  { from: hueFrom, to: hueTo }: { from: number; to: number }
): number => {
  const hueDiff = hueFrom <= hueTo ? hueTo - hueFrom : hueTo + 360 - hueFrom;
  return (hueFrom + lightness * hueDiff) % 360;
};

export const chromaForLightness = (
  lightness: number,
  peakLightness: number,
  peakChroma: number
): number => {
  const chroma =
    peakLightness === 1
      ? peakChroma * lightness
      : peakLightness === 0
      ? peakChroma * (1 - lightness)
      : lightness <= peakLightness
      ? (peakChroma / peakLightness) * lightness
      : (peakChroma / (1 - peakLightness)) * (1 - lightness);
  return chroma;
};

export const peakChromaForLightnessAndHue = (
  peakLightness: number,
  hues: { from: number; to: number }
): number => {
  const hue = hueForLightness(peakLightness, hues);

  let low = 0;
  let high = P3_CHROMA_LIMIT;

  while (high - low > CHROMA_STEP) {
    const mid = (low + high) / 2;
    const xyz = oklchToXyz({ l: peakLightness, c: mid, h: hue });
    const linearDispP3 = xyzToLinearDispP3(xyz);
    const dispP3 = gammaCorrectRGB(linearDispP3);

    if (dispP3.r <= 1 && dispP3.g <= 1 && dispP3.b <= 1) {
      low = mid; // chroma can be higher
    } else {
      high = mid; // chroma must be lower
    }
  }

  return low;
};

export const createPalette = (
  swatchStep: number,
  peakLightness: number,
  peakChroma: number,
  hues: { from: number; to: number }
) => {
  const total = 100 / swatchStep + 1;

  const palette: Swatch[] = [];

  for (let n = 0; n < total; n++) {
    const lightness = quantize(n / (total - 1), LIGHTNESS_STEP);
    const chroma = quantize(
      chromaForLightness(lightness, peakLightness, peakChroma),
      CHROMA_STEP
    );
    const hue = hueForLightness(lightness, hues);
    const oklch = { l: lightness, c: chroma, h: hue };

    const xyz = oklchToXyz(oklch);

    const linearSrgb = xyzToLinearSrgb(xyz);
    const sRgb = gammaCorrectRGB(linearSrgb);
    const clampedSrgb = clampRGB(sRgb);
    const isSRGB = chroma === 0 || (sRgb.r <= 1 && sRgb.g <= 1 && sRgb.b <= 1);

    const linearDispP3 = xyzToLinearDispP3(xyz);
    const dispP3 = gammaCorrectRGB(linearDispP3);
    const clampedDispP3 = clampRGB(dispP3);
    const isDisplayP3 =
      chroma === 0 || (dispP3.r <= 1 && dispP3.g <= 1 && dispP3.b <= 1);

    palette.push({
      oklch: oklch,
      sRgb: clampedSrgb,
      dispP3: clampedDispP3,
      gamut: isSRGB ? 'sRGB' : isDisplayP3 ? 'P3' : 'Rec2020',
    });
  }

  return palette;
};
