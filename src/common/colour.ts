import {
  LIGHTNESS_INTEGER_LENGTH,
  LIGHTNESS_DECIMAL_LENGTH,
  LIGHTNESS_STEP,
  CHROMA_INTEGER_LENGTH,
  CHROMA_DECIMAL_LENGTH,
  CHROMA_STEP,
  HUE_INTEGER_LENGTH,
  HUE_DECIMAL_LENGTH,
  HUE_STEP,
  P3_CHROMA_LIMIT,
  P3_PEAK_CHROMA_OFFSET,
  PEAK_LIGHTNESS,
  SECONDARY_CHROMA_MULT,
  NEUTRAL_VARIANT_PEAK_CHROMA,
  NEUTRAL_PEAK_CHROMA,
  COLOUR_FLOAT_DECIMAL_PRECISION,
} from './constants';
import { degToRad, clamp, quantize } from './numberUtils';

export const okLChToOkLab = ({
  L,
  C,
  h,
}: {
  L: number;
  C: number;
  h: number;
}) => {
  const radH = degToRad(h);
  return {
    L,
    a: Math.cos(radH) * C,
    b: Math.sin(radH) * C,
  };
};

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
  r: matrix[0][0] * X + matrix[0][1] * Y + matrix[0][2] * Z,
  g: matrix[1][0] * X + matrix[1][1] * Y + matrix[1][2] * Z,
  b: matrix[2][0] * X + matrix[2][1] * Y + matrix[2][2] * Z,
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

export const gammaCorrectRGB = (linearRGB: {
  r: number;
  g: number;
  b: number;
}) => {
  return Object.fromEntries(
    Object.entries(linearRGB).map(([key, value]) => [
      key,
      value <= 0.0031308
        ? 12.92 * value
        : 1.055 * Math.pow(value, 1 / 2.4) - 0.055,
    ])
  ) as {
    r: number;
    g: number;
    b: number;
  };
};

export const clampRGB = (RGB: { r: number; g: number; b: number }) => {
  return Object.fromEntries(
    Object.entries(RGB).map(([key, value]) => [key, clamp(value, 0, 1)])
  ) as {
    r: number;
    g: number;
    b: number;
  };
};

export const okLChToXYZ = (LCh: { L: number; C: number; h: number }) =>
  okLabToXYZ(okLChToOkLab(LCh));

export const normalizedRGBToHex = ({
  r,
  g,
  b,
}: {
  r: number;
  g: number;
  b: number;
}): string =>
  [r, g, b]
    .map((value) =>
      Math.round(value * 255)
        .toString(16)
        .padStart(2, '0')
        .toUpperCase()
    )
    .join('');

export const createPalette = (
  swatchStep: number,
  peakLightness: number,
  peakChroma: number,
  hue: number
) => {
  console.log(swatchStep, peakLightness, peakChroma, hue);
  const total = 100 / swatchStep + 1;

  const palette: {
    okLCh: { L: number; C: number; h: number };
    sRGB: { r: number; g: number; b: number };
    displayP3: { r: number; g: number; b: number };
    gamut: string;
  }[] = [];

  for (let n = 0; n < total; n++) {
    const lightness = quantize(n / (total - 1), LIGHTNESS_STEP);
    const chroma =
      lightness === peakLightness
        ? peakChroma
        : lightness < peakLightness
        ? quantize((peakChroma / peakLightness) * lightness, CHROMA_STEP)
        : quantize(
            (peakChroma / (1 - peakLightness)) * (1 - lightness),
            CHROMA_STEP
          );
    const okLCh = { L: lightness, C: chroma, h: hue };

    const XYZ = okLChToXYZ(okLCh);

    const linearSRGB = XYZToLinearSRGB(XYZ);
    const sRGB = gammaCorrectRGB(linearSRGB);
    const clampedSRGB = clampRGB(sRGB);
    const isSRGB = chroma === 0 || (sRGB.r <= 1 && sRGB.g <= 1 && sRGB.b <= 1);

    const linearDisplayP3 = XYZToLinearDisplayP3(XYZ);
    const displayP3 = gammaCorrectRGB(linearDisplayP3);
    const clampedDisplayP3 = clampRGB(displayP3);
    const isDisplayP3 =
      chroma === 0 ||
      (displayP3.r <= 1 && displayP3.g <= 1 && displayP3.b <= 1);

    palette.push({
      okLCh: okLCh,
      sRGB: clampedSRGB,
      displayP3: clampedDisplayP3,
      gamut: isSRGB ? 'sRGB' : isDisplayP3 ? 'P3' : 'Rec2020',
    });
  }

  return palette;
};

export const hueForLightness = (
  lightness: number,
  { from: hueFrom, to: hueTo }: { from: number; to: number }
): number => {
  const hueDiff = hueFrom < hueTo ? hueTo - hueFrom : hueTo + 360 - hueFrom;
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
      : lightness < peakLightness
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
    const xyz = okLChToXYZ({ L: peakLightness, C: mid, h: hue });
    const linearDisplayP3 = XYZToLinearDisplayP3(xyz);
    const displayP3 = gammaCorrectRGB(linearDisplayP3);

    if (displayP3.r <= 1 && displayP3.g <= 1 && displayP3.b <= 1) {
      low = mid; // chroma can be higher
    } else {
      high = mid; // chroma must be lower
    }
  }

  return low;
};
