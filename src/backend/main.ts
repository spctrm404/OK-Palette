const PALETTE_PX = 48;
const PALETTE_PY = 48;
const PALETTE_GX = 24;
const PALETTE_GY = 24;
const SWATCH_W = 200;
const SWATCH_H = 200;
const INFO_PX = 16;
const INFO_PY = 16;
const INFO_GY = 4;
const INFO_FONTSIZE = 12;
const INFO_LINEHEIGHT = 16;
const IDX_FONTSIZE = 56;
const IDX_OFFSET_X = 16;
const IDX_OFFSET_Y = 16;

const degToRad = (deg: number) => {
  return (deg * Math.PI) / 180;
};

// 1. okLCh -> okLab 변환
const okLChToOkLab = ({ L, C, h }: { L: number; C: number; h: number }) => ({
  L,
  a: Math.cos(degToRad(h)) * C,
  b: Math.sin(degToRad(h)) * C,
});

// 2. okLab -> CIEXYZ 변환 (D65 기준)
const okLabToXYZ = (Lab: { L: number; a: number; b: number }) => {
  const okLabToLMS = ({ L, a, b }: { L: number; a: number; b: number }) => ({
    L: (L + 0.3963377774 * a + 0.2158037573 * b) ** 3,
    M: (L - 0.1055613458 * a - 0.0638541728 * b) ** 3,
    S: (L - 0.0894841775 * a - 1.291485548 * b) ** 3,
  });

  const LMS = okLabToLMS(Lab);

  return {
    X: 1.2270138511 * LMS.L - 0.5577999807 * LMS.M + 0.2812561489 * LMS.S,
    Y: -0.0405801784 * LMS.L + 1.1122568696 * LMS.M - 0.0716766787 * LMS.S,
    Z: -0.0763812845 * LMS.L - 0.4214819784 * LMS.M + 1.5861632204 * LMS.S,
  };
};

const XYZToRGB = (
  matrix: number[][],
  { X, Y, Z }: { X: number; Y: number; Z: number }
) => ({
  r: matrix[0][0] * X + matrix[0][1] * Y + matrix[0][2] * Z,
  g: matrix[1][0] * X + matrix[1][1] * Y + matrix[1][2] * Z,
  b: matrix[2][0] * X + matrix[2][1] * Y + matrix[2][2] * Z,
});

// 3-1. CIEXYZ -> sRGB 변환
const XYZToSRGB = (XYZ: { X: number; Y: number; Z: number }) =>
  XYZToRGB(
    [
      [3.2404542, -1.5371385, -0.4985314],
      [-0.969266, 1.8760108, 0.041556],
      [0.0556434, -0.2040259, 1.0572252],
    ],
    XYZ
  );

// 3-2. CIEXYZ -> Display-P3 변환
const XYZToDisplayP3 = (XYZ: { X: number; Y: number; Z: number }) =>
  XYZToRGB(
    [
      [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
      [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
      [0.0358458302437845, -0.0763812845057069, 0.9570942811736457],
    ],
    XYZ
  );

// 4. 감마 보정 (sRGB 커브 사용)
const gammaCorrect = (value: number) => {
  return value <= 0.0031308
    ? 12.92 * value
    : 1.055 * Math.pow(value, 1 / 2.4) - 0.055;
};

// 5. 공통절차 함수: OKLCH -> XYZ
const okLChToXYZ = (LCh: { L: number; C: number; h: number }) =>
  okLabToXYZ(okLChToOkLab(LCh));

const normalizedRGBToHex = ({
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

const roundToNDecimals = (value: number, n: number) => {
  return parseFloat(value.toFixed(n));
};

const clamp = (value: number) => {
  return Math.min(Math.max(value, 0), 1);
};

const createPalette = (
  lightnessStep: number,
  preNormalizedPeakLightness: number,
  preNormalizedPeakChroma: number,
  hue: number
) => {
  const total = 100 / lightnessStep + 1;
  const peakLightness = preNormalizedPeakLightness / 100;
  const peakChroma = preNormalizedPeakChroma / 100;

  const palette: {
    okLCh: { L: number; C: number; h: number };
    sRGB: { r: number; g: number; b: number };
    displayP3: { r: number; g: number; b: number };
    gamut: string;
  }[] = [];

  for (let n = 0; n < total; n++) {
    const lightness = (n * lightnessStep) / 100;
    const chroma =
      lightness === peakLightness
        ? peakChroma
        : lightness < peakLightness
          ? roundToNDecimals((peakChroma / peakLightness) * lightness, 3)
          : roundToNDecimals(
              (peakChroma / (1 - peakLightness)) * (1 - lightness),
              3
            );
    const okLCh = { L: lightness, C: chroma, h: hue };

    const XYZ = okLChToXYZ(okLCh);

    const linearSRGB = XYZToSRGB(XYZ);
    const sRGB = Object.fromEntries(
      Object.entries(linearSRGB).map(([key, value]) => [
        key,
        gammaCorrect(value),
      ])
    ) as { r: number; g: number; b: number };
    const clampedSRGB = Object.fromEntries(
      Object.entries(linearSRGB).map(([key, value]) => [key, clamp(value)])
    ) as { r: number; g: number; b: number };
    const isSRGB = chroma === 0 || (sRGB.r <= 1 && sRGB.g <= 1 && sRGB.b <= 1);

    const linearDisplayP3 = XYZToDisplayP3(XYZ);
    const displayP3 = Object.fromEntries(
      Object.entries(linearDisplayP3).map(([key, value]) => [
        key,
        gammaCorrect(value),
      ])
    ) as { r: number; g: number; b: number };
    const clampedDisplayP3 = Object.fromEntries(
      Object.entries(displayP3).map(([key, value]) => [key, clamp(value)])
    ) as { r: number; g: number; b: number };
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

let isFontLoaded = false;

const ensureFontLoaded = async () => {
  if (!isFontLoaded) {
    await figma.loadFontAsync({ family: 'Martian Mono', style: 'Regular' });
    await figma.loadFontAsync({ family: 'Martian Mono', style: 'Bold' });
    isFontLoaded = true;
  }
};

figma.showUI(__html__);

figma.ui.onmessage = async (msg: {
  type: string;
  lightnessStep: number;
  peakLightness: number;
  peakChroma: number;
  hue: number;
}) => {
  if (msg.type === 'create-palette') {
    await ensureFontLoaded();

    const palette = createPalette(
      msg.lightnessStep,
      msg.peakLightness,
      msg.peakChroma,
      msg.hue
    );

    const nodes: SceneNode[] = [];
    const paletteFrame = figma.createFrame();
    paletteFrame.name = `OKP-step${msg.lightnessStep}-l${msg.peakLightness}-c${msg.peakChroma}-h${msg.hue}`;
    const { x: centerX, y: centerY } = figma.viewport.center;
    paletteFrame.x = centerX;
    paletteFrame.y = centerY;
    paletteFrame.resize(
      2 * PALETTE_PX +
        palette.length * SWATCH_W +
        (palette.length - 1) * PALETTE_GX,
      2 * PALETTE_PY + SWATCH_H
    );
    paletteFrame.fills = [
      {
        type: 'SOLID',
        color: { r: 1, g: 1, b: 1 },
      },
    ];

    palette.forEach((aPalette, idx) => {
      const swatchFrame = figma.createFrame();
      paletteFrame.appendChild(swatchFrame);
      swatchFrame.name = `Swatch-${idx * msg.lightnessStep}`;
      swatchFrame.layoutMode = 'VERTICAL';
      swatchFrame.layoutSizingHorizontal = 'FIXED';
      swatchFrame.layoutSizingVertical = 'FIXED';
      swatchFrame.x = PALETTE_PX + idx * (SWATCH_W + PALETTE_GX);
      swatchFrame.y = PALETTE_PY;
      swatchFrame.resize(SWATCH_W, SWATCH_H);
      swatchFrame.fills = [{ type: 'SOLID', color: aPalette.displayP3 }];

      const infoFrame = figma.createFrame();
      swatchFrame.appendChild(infoFrame);
      infoFrame.name = 'info';
      infoFrame.layoutMode = 'VERTICAL';
      infoFrame.layoutSizingHorizontal = 'FILL';
      infoFrame.layoutSizingVertical = 'FILL';
      infoFrame.paddingTop = INFO_PY;
      infoFrame.paddingBottom = INFO_PY;
      infoFrame.paddingLeft = INFO_PX;
      infoFrame.paddingRight = INFO_PX;
      infoFrame.itemSpacing = INFO_GY;
      infoFrame.fills = [];

      const lightnessText = figma.createText();
      swatchFrame.appendChild(lightnessText);
      lightnessText.name = '#';
      lightnessText.fontName = { family: 'Martian Mono', style: 'Bold' };
      lightnessText.fontSize = IDX_FONTSIZE;
      lightnessText.lineHeight = { value: IDX_FONTSIZE, unit: 'PIXELS' };
      lightnessText.characters = `${idx * msg.lightnessStep}`;
      lightnessText.layoutPositioning = 'ABSOLUTE';
      lightnessText.x = SWATCH_W - lightnessText.width + IDX_OFFSET_X;
      lightnessText.y = SWATCH_H - lightnessText.height + IDX_OFFSET_Y;
      lightnessText.fills = [
        {
          type: 'SOLID',
          color:
            idx < palette.length / 2
              ? { r: 1, g: 1, b: 1 }
              : { r: 0, g: 0, b: 0 },
        },
      ];

      const okLChText = figma.createText();
      infoFrame.appendChild(okLChText);
      const p3RGBText = figma.createText();
      infoFrame.appendChild(p3RGBText);
      const sRGBHexText = figma.createText();
      infoFrame.appendChild(sRGBHexText);
      const p3HexText = figma.createText();
      infoFrame.appendChild(p3HexText);
      const gamutText = figma.createText();
      infoFrame.appendChild(gamutText);

      infoFrame.children.forEach((child) => {
        if (child.type === 'TEXT') {
          const textNode = child as TextNode;
          textNode.fontName = { family: 'Martian Mono', style: 'Regular' };
          textNode.fontSize = INFO_FONTSIZE;
          textNode.lineHeight = { value: INFO_LINEHEIGHT, unit: 'PIXELS' };
          textNode.fills = [
            {
              type: 'SOLID',
              color:
                idx < palette.length / 2
                  ? { r: 1, g: 1, b: 1 }
                  : { r: 0, g: 0, b: 0 },
            },
          ];
        }
      });

      okLChText.name = 'oklch';
      okLChText.characters = `oklch(${aPalette.okLCh.L} ${aPalette.okLCh.C} ${aPalette.okLCh.h})`;

      p3RGBText.name = 'displayP3-rgb';
      p3RGBText.fontName = { family: 'Martian Mono', style: 'Regular' };
      p3RGBText.characters = `color(display-p3
  ${roundToNDecimals(aPalette.displayP3.r, 6)}
  ${roundToNDecimals(aPalette.displayP3.g, 6)}
  ${roundToNDecimals(aPalette.displayP3.b, 6)}
)`;

      sRGBHexText.name = 'sRGB-hex';
      sRGBHexText.characters = `sRGB: #${normalizedRGBToHex(aPalette.sRGB)}`;

      p3HexText.name = 'displayP3-hex';
      p3HexText.characters = `P3:   #${normalizedRGBToHex(aPalette.displayP3)}`;

      gamutText.name = 'gamut';
      gamutText.characters = aPalette.gamut;
    });

    figma.currentPage.appendChild(paletteFrame);
    nodes.push(paletteFrame);
  }
};
