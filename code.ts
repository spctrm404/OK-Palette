/**
 * @license MIT
 * Copyright (c) 2024 SON OO-SUNG (spctrm404)
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
 * WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
 * CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */

const palettePaddingX = 32;
const palettePaddingY = 32;
const paletteGapX = 24;
const paletteGapY = 24;
const swatchWidth = 200;
const swatchheight = 200;

function degToRad(deg: number): number {
  return (deg * Math.PI) / 180;
}

// 1. OKLCH -> OKLab 변환
function okLChToOkLab(L: number, C: number, h: number) {
  const oklabA = Math.cos(degToRad(h)) * C;
  const oklabB = Math.sin(degToRad(h)) * C;
  return { L: L, a: oklabA, b: oklabB };
}

// 2. OKLab -> CIEXYZ 변환 (D65 기준)
function okLabToXYZ(L: number, a: number, b: number) {
  let lmsL = L + 0.3963377774 * a + 0.2158037573 * b;
  let lmsM = L - 0.1055613458 * a - 0.0638541728 * b;
  let lmsS = L - 0.0894841775 * a - 1.291485548 * b;

  lmsL = lmsL ** 3;
  lmsM = lmsM ** 3;
  lmsS = lmsS ** 3;

  const X = 1.2270138511 * lmsL - 0.5577999807 * lmsM + 0.2812561489 * lmsS;
  const Y = -0.0405801784 * lmsL + 1.1122568696 * lmsM - 0.0716766787 * lmsS;
  const Z = -0.0763812845 * lmsL - 0.4214819784 * lmsM + 1.5861632204 * lmsS;

  return { X, Y, Z };
}

// 3-1. CIEXYZ -> Display-P3 변환
function XYZToP3(X: number, Y: number, Z: number) {
  const r =
    2.493496911941425 * X - 0.9313836179191239 * Y - 0.40271078445071684 * Z;
  const g =
    -0.8294889695615747 * X + 1.7626640603183463 * Y + 0.023624685841943577 * Z;
  const b =
    0.0358458302437845 * X - 0.0763812845057069 * Y + 0.9570942811736457 * Z;
  return { r, g, b };
}

// 3-2. CIEXYZ -> sRGB 변환
function XYZToSRGB(X: number, Y: number, Z: number) {
  const r = 3.2404542 * X - 1.5371385 * Y - 0.4985314 * Z;
  const g = -0.969266 * X + 1.8760108 * Y + 0.041556 * Z;
  const b = 0.0556434 * X - 0.2040259 * Y + 1.0572252 * Z;
  return { r, g, b };
}

// 4. 감마 보정 (sRGB 커브 사용)
function gammaCorrect(value: number): number {
  return value <= 0.0031308
    ? 12.92 * value
    : 1.055 * Math.pow(value, 1 / 2.4) - 0.055;
}

// 5. 공통절차 함수: OKLCH -> XYZ
function okLChToXYZ(L: number, C: number, h: number) {
  const { L: oklabL, a: oklabA, b: oklabB } = okLChToOkLab(L, C, h);
  const { X, Y, Z } = okLabToXYZ(oklabL, oklabA, oklabB);
  return {
    X,
    Y,
    Z,
  };
}

function normalizedRGBToHex(r: number, g: number, b: number) {
  function normalizedValueToHex(value: number) {
    const hex = Math.round(value * 255)
      .toString(16)
      .toUpperCase();
    return hex.length === 1 ? '0' + hex : hex;
  }
  return (
    normalizedValueToHex(r) + normalizedValueToHex(g) + normalizedValueToHex(b)
  );
}

function roundToNDecimals(value: number, n: number) {
  return parseFloat(value.toFixed(n));
}

function clamp(value: number): number {
  return Math.min(Math.max(value, 0), 1);
}

let isFontLoaded = false;

async function ensureFontLoaded() {
  if (!isFontLoaded) {
    await figma.loadFontAsync({ family: 'Inter', style: 'Regular' });
    isFontLoaded = true;
  }
}

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

    const total = 100 / msg.lightnessStep + 1;
    const peakLightness = msg.peakLightness / 100;
    const peakChroma = msg.peakChroma / 100;
    const hue = msg.hue;

    const { x: centerX, y: centerY } = figma.viewport.center;
    const nodes: SceneNode[] = [];
    const paletteFrame = figma.createFrame();
    paletteFrame.name = 'ok-palette';
    paletteFrame.x = centerX;
    paletteFrame.y = centerY;
    for (let n = 0; n < total; n++) {
      const okLChL = (n * msg.lightnessStep) / 100;
      const okLChC =
        okLChL === peakLightness
          ? peakChroma
          : okLChL < peakLightness
          ? roundToNDecimals((peakChroma / peakLightness) * okLChL, 3)
          : roundToNDecimals(
              (peakChroma / (1 - peakLightness)) * (1 - okLChL),
              3
            );
      const okLChH = hue;

      const { X, Y, Z } = okLChToXYZ(okLChL, okLChC, okLChH);

      const { r: rawP3R, g: rawP3G, b: rawP3B } = XYZToP3(X, Y, Z);
      const unClamppedP3R = gammaCorrect(rawP3R);
      const unClamppedP3G = gammaCorrect(rawP3G);
      const unClamppedP3B = gammaCorrect(rawP3B);
      const p3R = clamp(unClamppedP3R);
      const p3G = clamp(unClamppedP3G);
      const p3B = clamp(unClamppedP3B);

      const { r: rawSRGBR, g: rawSRGBG, b: rawSRGBB } = XYZToSRGB(X, Y, Z);
      const unClamppedSRGBR = gammaCorrect(rawSRGBR);
      const unClamppedSRGBG = gammaCorrect(rawSRGBG);
      const unClamppedSRGBB = gammaCorrect(rawSRGBB);
      const sRGBR = clamp(unClamppedSRGBR);
      const sRGBG = clamp(unClamppedSRGBG);
      const sRGBB = clamp(unClamppedSRGBB);

      const isP3 =
        okLChC === 0 ||
        (unClamppedP3R <= 1 && unClamppedP3G <= 1 && unClamppedP3B <= 1);
      const isSRGB =
        okLChC === 0 ||
        (unClamppedSRGBR <= 1 && unClamppedSRGBG <= 1 && unClamppedSRGBB <= 1);

      // console.log('lch', okLChL, okLChC, okLChH);
      // console.log('p3', p3R, p3G, p3B);
      // console.log('isP3', isP3);
      // console.log('isSRGB', isSRGB);

      const swatchFrame = figma.createFrame();
      swatchFrame.name = `swatch-${n * msg.lightnessStep}`;
      swatchFrame.x = palettePaddingX + n * (swatchWidth + paletteGapX);
      swatchFrame.y = palettePaddingY;
      swatchFrame.resize(swatchWidth, swatchheight);
      swatchFrame.fills = [
        { type: 'SOLID', color: { r: p3R, g: p3G, b: p3B } },
      ];

      const textFrame = figma.createFrame();
      textFrame.name = 'info';
      textFrame.fills = [];
      textFrame.layoutMode = 'VERTICAL';
      textFrame.layoutSizingHorizontal = 'HUG';

      const lightnessText = figma.createText();
      lightnessText.name = 'lightness';
      lightnessText.characters = `${n * msg.lightnessStep}`;
      lightnessText.fills = [
        {
          type: 'SOLID',
          color: okLChL < 0.7 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 },
        },
      ];
      textFrame.appendChild(lightnessText);

      const okLChText = figma.createText();
      okLChText.name = 'oklch';
      okLChText.characters = `oklch(${okLChL} ${okLChC} ${okLChL})`;
      okLChText.fills = [
        {
          type: 'SOLID',
          color: okLChL < 0.7 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 },
        },
      ];
      textFrame.appendChild(okLChText);

      const p3RGBText = figma.createText();
      p3RGBText.name = 'p3-rgb';
      p3RGBText.characters = `color(display-p3 
  ${roundToNDecimals(p3R, 6)}
  ${roundToNDecimals(p3G, 6)}
  ${roundToNDecimals(p3B, 6)}
)`;
      p3RGBText.fills = [
        {
          type: 'SOLID',
          color: okLChL < 0.7 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 },
        },
      ];
      textFrame.appendChild(p3RGBText);

      const sRGBHexText = figma.createText();
      sRGBHexText.name = 'srgb-hex';
      sRGBHexText.characters = `sRGB: #${normalizedRGBToHex(
        sRGBR,
        sRGBG,
        sRGBB
      )}`;
      sRGBHexText.fills = [
        {
          type: 'SOLID',
          color: okLChL < 0.7 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 },
        },
      ];
      textFrame.appendChild(sRGBHexText);

      const p3HexText = figma.createText();
      p3HexText.name = 'p3-hex';
      p3HexText.characters = `P3: #${normalizedRGBToHex(p3R, p3G, p3B)}`;
      p3HexText.fills = [
        {
          type: 'SOLID',
          color: okLChL < 0.7 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 },
        },
      ];
      textFrame.appendChild(p3HexText);

      const gamutText = figma.createText();
      gamutText.name = 'gamut';
      gamutText.characters = isSRGB ? 'sRGB' : isP3 ? 'P3' : 'Rec2020';
      gamutText.fills = [
        {
          type: 'SOLID',
          color: okLChL < 0.7 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 },
        },
      ];
      textFrame.appendChild(gamutText);

      swatchFrame.appendChild(textFrame);
      paletteFrame.appendChild(swatchFrame);
    }
    paletteFrame.resize(
      2 * palettePaddingX + total * swatchWidth + (total - 1) * paletteGapX,
      2 * palettePaddingY + swatchheight
    );
    figma.currentPage.appendChild(paletteFrame);
    nodes.push(paletteFrame);
  }
};
