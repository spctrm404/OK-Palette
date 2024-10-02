const i = (p, o) => {
  const e = (o.toString().split(".")[1] || "").length;
  let P = Math.round(p / o) * o;
  return P = parseFloat(P.toFixed(e)), P;
};
let m = !1;
const d = async () => {
  m || (await figma.loadFontAsync({ family: "Roboto Mono", style: "Medium" }), await figma.loadFontAsync({ family: "Roboto Condensed", style: "Bold" }), m = !0);
};
figma.showUI(__html__, {
  themeColors: !0,
  width: 250 + 2 * 12,
  height: 900
});
figma.ui.postMessage({ type: "size", width: 250, height: 900, px: 12 });
const _ = figma.root.documentColorProfile;
figma.ui.postMessage({ type: "colorSpace", colorSpace: _ });
figma.ui.onmessage = async (p) => {
  if (p.type === "create-palette" && "palette" in p) {
    await d();
    const o = p.palette, e = figma.createFrame();
    e.name = `OKP-step${o.swatchStep}_l${i(
      100 * o.peakLightness,
      1
    )}_c${i(100 * o.peakChroma, 0.1)}_h${i(
      o.hues.from,
      1
    )}-${i(o.hues.to, 1)}`;
    const { x: P, y: T } = figma.viewport.center;
    e.x = P, e.y = T, e.resize(
      2 * 48 + o.swatches.length * 200 + (o.swatches.length - 1) * 24,
      2 * 48 + 200
    ), e.fills = [
      {
        type: "SOLID",
        color: { r: 1, g: 1, b: 1 }
      }
    ], o.swatches.forEach((a, E) => {
      const l = figma.createFrame();
      e.appendChild(l), l.name = `Swatch-${E * o.swatchStep}`, l.layoutMode = "VERTICAL", l.layoutSizingHorizontal = "FIXED", l.layoutSizingVertical = "FIXED", l.x = 48 + E * 224, l.y = 48, l.resize(200, 200), l.fills = _ === "DISPLAY_P3" ? [
        {
          type: "SOLID",
          color: {
            r: a.dispP3.r,
            g: a.dispP3.g,
            b: a.dispP3.b
          }
        }
      ] : [
        {
          type: "SOLID",
          color: {
            r: a.sRgb.r,
            g: a.sRgb.g,
            b: a.sRgb.b
          }
        }
      ];
      const t = figma.createFrame();
      l.appendChild(t), t.name = "info", t.layoutMode = "VERTICAL", t.layoutSizingHorizontal = "FILL", t.layoutSizingVertical = "FILL", t.paddingTop = 16, t.paddingBottom = 16, t.paddingLeft = 16, t.paddingRight = 16, t.itemSpacing = 4, t.fills = [];
      const c = figma.createText();
      l.appendChild(c), c.name = "#", c.fontName = { family: "Roboto Condensed", style: "Bold" }, c.fontSize = 56, c.lineHeight = { value: 56, unit: "PIXELS" }, c.characters = `${E * o.swatchStep}`, c.layoutPositioning = "ABSOLUTE", c.x = 200 - c.width + 12, c.y = 200 - c.height + 20, c.fills = [
        {
          type: "SOLID",
          color: E < o.swatches.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
        }
      ];
      const r = figma.createText();
      t.appendChild(r);
      let s;
      _ === "DISPLAY_P3" && (s = figma.createText(), t.appendChild(s));
      const n = figma.createText();
      t.appendChild(n);
      const g = figma.createText();
      t.appendChild(g), t.children.forEach((S) => {
        if (S.type === "TEXT") {
          const h = S;
          h.fontName = { family: "Roboto Mono", style: "Medium" }, h.fontSize = 12, h.lineHeight = { value: 16, unit: "PIXELS" }, h.fills = [
            {
              type: "SOLID",
              color: E < o.swatches.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
            }
          ];
        }
      }), r.name = "oklch", r.characters = _ === "DISPLAY_P3" ? `oklch(${i(
        a.dispP3ClampedOklch.l,
        0.01
      )} ${i(
        a.dispP3ClampedOklch.c,
        1e-3
      )} ${i(a.dispP3ClampedOklch.h, 1)})` : `oklch(${i(
        a.sRgbClampedOklch.l,
        0.01
      )} ${i(a.sRgbClampedOklch.c, 1e-3)} ${i(
        a.sRgbClampedOklch.h,
        1
      )})`, _ === "DISPLAY_P3" && s && (s.name = "displayP3-rgb", s.fontName = { family: "Roboto Mono", style: "Medium" }, s.characters = `color(display-p3
  ${i(a.dispP3.r, 1e-6)}
  ${i(a.dispP3.g, 1e-6)}
  ${i(a.dispP3.b, 1e-6)}
)`), n.name = "hex", n.characters = `#${_ === "DISPLAY_P3" ? a.dispP3Hex : a.sRgbHex}`, g.name = "gamut", g.characters = a.gamut;
    }), figma.currentPage.appendChild(e);
  } else if (p.type === "create-matrix" && "apcaMatrix" in p) {
    console.log("MATRIX"), await d();
    const o = p.apcaMatrix, e = o.palette, P = o.matrix, T = figma.createFrame();
    T.name = `OKP-matrix-step${e.swatchStep}_l${i(
      100 * e.peakLightness,
      1
    )}_c${i(100 * e.peakChroma, 0.1)}_h${i(
      e.hues.from,
      1
    )}-${i(e.hues.to, 1)}`;
    const { x: a, y: E } = figma.viewport.center;
    T.x = a + 200 + 2 * 48, T.y = E, T.resize(
      2 * 48 + (100 / e.swatchStep + 1) * 200 + 100 / e.swatchStep * 24,
      2 * 48 + +(100 / e.swatchStep + 1) * 200 + 100 / e.swatchStep * 24
    ), T.fills = [
      {
        type: "SOLID",
        color: { r: 1, g: 1, b: 1 }
      }
    ], P.forEach((l, t) => {
      l.forEach((c, r) => {
        const s = figma.createFrame();
        T.appendChild(s), s.name = `bg-${t * e.swatchStep}_fg-${r * e.swatchStep}`, s.layoutMode = "VERTICAL", s.layoutSizingHorizontal = "FIXED", s.layoutSizingVertical = "FIXED", s.x = 48 + t * 224, s.y = 48 + r * 224, s.resize(200, 200), s.fills = _ === "DISPLAY_P3" ? [
          {
            type: "SOLID",
            color: {
              r: e.swatches[t].dispP3.r,
              g: e.swatches[t].dispP3.g,
              b: e.swatches[t].dispP3.b
            }
          }
        ] : [
          {
            type: "SOLID",
            color: {
              r: e.swatches[t].sRgb.r,
              g: e.swatches[t].sRgb.g,
              b: e.swatches[t].sRgb.b
            }
          }
        ];
        const n = figma.createText();
        s.appendChild(n), n.name = "APCA Contrast", n.fontName = { family: "Roboto Condensed", style: "Bold" }, n.fontSize = 56, n.lineHeight = { value: 56, unit: "PIXELS" }, n.characters = `${c}`, n.layoutPositioning = "ABSOLUTE", n.x = 200 * 0.5 - n.width * 0.5, n.y = 200 * 0.5 - n.height * 0.5, n.fills = _ === "DISPLAY_P3" ? [
          {
            type: "SOLID",
            color: {
              r: e.swatches[r].dispP3.r,
              g: e.swatches[r].dispP3.g,
              b: e.swatches[r].dispP3.b
            }
          }
        ] : [
          {
            type: "SOLID",
            color: {
              r: e.swatches[r].sRgb.r,
              g: e.swatches[r].sRgb.g,
              b: e.swatches[r].sRgb.b
            }
          }
        ];
      });
    }), figma.currentPage.appendChild(T);
  }
};
