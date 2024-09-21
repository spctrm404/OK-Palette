import { CHROMA_LIMIT, CHROMA_STEP } from './constants';
import { degToRad, clamp } from './numberUtils';

export const okLChToOkLab = ({
  L,
  C,
  h,
}: {
  L: number;
  C: number;
  h: number;
}) => ({
  L,
  a: Math.cos(degToRad(h)) * C,
  b: Math.sin(degToRad(h)) * C,
});

export const okLabToXYZ = (Lab: { L: number; a: number; b: number }) => {
  const okLabToLMS = ({ L, a, b }: { L: number; a: number; b: number }) => ({
    L: (L + 0.3963377774 * a + 0.2158037573 * b) ** 3,
    M: (L - 0.1055613458 * a - 0.0638541728 * b) ** 3,
    S: (L - 0.0894841775 * a - 1.291485548 * b) ** 3,
  });

  const { L, M, S } = okLabToLMS(Lab);

  return {
    X: 1.2270138511 * L - 0.5577999807 * M + 0.2812561489 * S,
    Y: -0.0405801784 * L + 1.1122568696 * M - 0.0716766787 * S,
    Z: -0.0763812845 * L - 0.4214819784 * M + 1.5861632204 * S,
  };
};

export const XYZToRGB = (
  matrix: number[][],
  { X, Y, Z }: { X: number; Y: number; Z: number }
) => ({
  R: matrix[0][0] * X + matrix[0][1] * Y + matrix[0][2] * Z,
  G: matrix[1][0] * X + matrix[1][1] * Y + matrix[1][2] * Z,
  B: matrix[2][0] * X + matrix[2][1] * Y + matrix[2][2] * Z,
});

export const XYZToLinearSRGB = (XYZ: { X: number; Y: number; Z: number }) =>
  XYZToRGB(
    [
      [3.2404542, -1.5371385, -0.4985314],
      [-0.969266, 1.8760108, 0.041556],
      [0.0556434, -0.2040259, 1.0572252],
    ],
    XYZ
  );

export const XYZToLinearDisplayP3 = (XYZ: {
  X: number;
  Y: number;
  Z: number;
}) =>
  XYZToRGB(
    [
      [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
      [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
      [0.0358458302437845, -0.0763812845057069, 0.9570942811736457],
    ],
    XYZ
  );

export const gammaCorrect = (value: number) => {
  return value <= 0.0031308
    ? 12.92 * value
    : 1.055 * Math.pow(value, 1 / 2.4) - 0.055;
};

export const gammaCorrectRGB = (linearRGB: {
  R: number;
  G: number;
  B: number;
}) => {
  return Object.fromEntries(
    Object.entries(linearRGB).map(([key, value]) => [key, gammaCorrect(value)])
  ) as {
    R: number;
    G: number;
    B: number;
  };
};

export const clampRGB = (RGB: { R: number; G: number; B: number }) => {
  return Object.fromEntries(
    Object.entries(RGB).map(([key, value]) => [key, clamp(value, 0, 1)])
  ) as {
    R: number;
    G: number;
    B: number;
  };
};

export const okLChToXYZ = (LCh: { L: number; C: number; h: number }) =>
  okLabToXYZ(okLChToOkLab(LCh));

export const normalizedRGBToHex = ({
  R,
  G,
  B,
}: {
  R: number;
  G: number;
  B: number;
}): string =>
  [R, G, B]
    .map((value) =>
      Math.round(value * 255)
        .toString(16)
        .padStart(2, '0')
        .toUpperCase()
    )
    .join('');

export const hueOfLightness = (
  lightness: number,
  { from: hueFrom, to: hueTo }: { from: number; to: number }
): number => {
  const hue =
    hueFrom === hueTo
      ? hueFrom
      : hueFrom < hueTo
      ? (hueFrom + lightness * (hueTo - hueFrom)) % 360
      : (hueFrom + lightness * (hueTo + 360 - hueFrom)) % 360;
  return hue;
};

export const chromaOfLightness = (
  lightness: number,
  peakLightness: number,
  peakChroma: number
): number => {
  const chroma =
    peakLightness === 1
      ? peakChroma * lightness
      : peakLightness === 0
      ? peakChroma * (1 - lightness)
      : lightness < peakLightness
      ? (peakChroma / peakLightness) * lightness
      : (peakChroma / (1 - peakLightness)) * (1 - lightness);
  return chroma;
};

export const maxChromaOfLightness = (
  lightness: number,
  hues: { from: number; to: number }
): number => {
  const hue = hueOfLightness(lightness, hues);
  for (let chroma = CHROMA_LIMIT; chroma >= 0; chroma -= CHROMA_STEP) {
    const xyz = okLChToXYZ({ L: lightness, C: chroma, h: hue });
    const linearDisplayP3 = XYZToLinearDisplayP3(xyz);
    const displayP3 = gammaCorrectRGB(linearDisplayP3);
    if (displayP3.R <= 1 && displayP3.G <= 1 && displayP3.B <= 1) return chroma;
  }
  return 0;
};
