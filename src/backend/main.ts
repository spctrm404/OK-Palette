import { Swatch, Palette } from '../common/types';
import {
  LIGHTNESS_STEP,
  CHROMA_STEP,
  HUE_STEP,
  RGB_FLOAT_PRECISION,
} from '../common/constants';
import { quantize } from '../common/numberUtils';

const WIDTH = 286;
const HEIGHT = 762; // 761.5

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

let isFontLoaded = false;
const ensureFontLoaded = async () => {
  if (!isFontLoaded) {
    await figma.loadFontAsync({ family: 'Martian Mono', style: 'Regular' });
    await figma.loadFontAsync({ family: 'Martian Mono', style: 'Bold' });
    isFontLoaded = true;
  }
};

figma.showUI(__html__, { themeColors: true, width: WIDTH, height: HEIGHT });
figma.ui.postMessage({ type: 'size', width: WIDTH, height: HEIGHT });

const colorSpace = figma.root.documentColorProfile;
figma.ui.postMessage({ type: 'colorSpace', colorSpace: colorSpace });

figma.ui.onmessage = async (msg: { type: string; palette: Palette }) => {
  if (msg.type === 'create-palette') {
    await ensureFontLoaded();

    const palette = msg.palette;

    const nodes: SceneNode[] = [];
    const paletteFrame = figma.createFrame();
    paletteFrame.name = `OKP-step${palette.swatchStep}_l${quantize(
      100 * palette.peakLightness,
      1
    )}_c${quantize(100 * palette.peakChroma, 0.1)}_h${quantize(
      palette.hues.from,
      1
    )}-${quantize(palette.hues.to, 1)}`;
    const { x: centerX, y: centerY } = figma.viewport.center;
    paletteFrame.x = centerX;
    paletteFrame.y = centerY;
    paletteFrame.resize(
      2 * PALETTE_PX +
        palette.swatches.length * SWATCH_W +
        (palette.swatches.length - 1) * PALETTE_GX,
      2 * PALETTE_PY + SWATCH_H
    );
    paletteFrame.fills = [
      {
        type: 'SOLID',
        color: { r: 1, g: 1, b: 1 },
      },
    ];

    palette.swatches.forEach((aSwatch, idx) => {
      const swatchFrame = figma.createFrame();
      paletteFrame.appendChild(swatchFrame);
      swatchFrame.name = `Swatch-${idx * palette.swatchStep}`;
      swatchFrame.layoutMode = 'VERTICAL';
      swatchFrame.layoutSizingHorizontal = 'FIXED';
      swatchFrame.layoutSizingVertical = 'FIXED';
      swatchFrame.x = PALETTE_PX + idx * (SWATCH_W + PALETTE_GX);
      swatchFrame.y = PALETTE_PY;
      swatchFrame.resize(SWATCH_W, SWATCH_H);
      swatchFrame.fills = [
        {
          type: 'SOLID',
          color: {
            r: aSwatch.dispP3.r,
            g: aSwatch.dispP3.g,
            b: aSwatch.dispP3.b,
          },
        },
      ];

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
      lightnessText.characters = `${idx * palette.swatchStep}`;
      lightnessText.layoutPositioning = 'ABSOLUTE';
      lightnessText.x = SWATCH_W - lightnessText.width + IDX_OFFSET_X;
      lightnessText.y = SWATCH_H - lightnessText.height + IDX_OFFSET_Y;
      lightnessText.fills = [
        {
          type: 'SOLID',
          color:
            idx < palette.swatches.length / 2
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
                idx < palette.swatches.length / 2
                  ? { r: 1, g: 1, b: 1 }
                  : { r: 0, g: 0, b: 0 },
            },
          ];
        }
      });

      okLChText.name = 'oklch';
      okLChText.characters = `oklch(${aSwatch.oklch.l} ${aSwatch.oklch.c} ${aSwatch.oklch.h})`;

      p3RGBText.name = 'displayP3-rgb';
      p3RGBText.fontName = { family: 'Martian Mono', style: 'Regular' };
      p3RGBText.characters = `color(display-p3
  ${quantize(aSwatch.dispP3.r, RGB_FLOAT_PRECISION)}
  ${quantize(aSwatch.dispP3.g, RGB_FLOAT_PRECISION)}
  ${quantize(aSwatch.dispP3.b, RGB_FLOAT_PRECISION)}
)`;

      sRGBHexText.name = 'sRGB-hex';
      sRGBHexText.characters = `sRGB: #${aSwatch.sRgbHex}`;

      p3HexText.name = 'displayP3-hex';
      p3HexText.characters = `P3:   #${aSwatch.dispP3Hex}`;

      gamutText.name = 'gamut';
      gamutText.characters = aSwatch.gamut;
    });

    figma.currentPage.appendChild(paletteFrame);
    nodes.push(paletteFrame);
  }
};
