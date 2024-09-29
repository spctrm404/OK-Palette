const s = (r, t) => {
  const i = (t.toString().split(".")[1] || "").length;
  let l = Math.round(r / t) * t;
  return l = parseFloat(l.toFixed(i)), l;
};
let d = !1;
const f = async () => {
  d || (await figma.loadFontAsync({ family: "Martian Mono", style: "Regular" }), await figma.loadFontAsync({ family: "Martian Mono", style: "Bold" }), d = !0);
};
figma.showUI(__html__, { themeColors: !0, width: 236, height: 600 });
figma.ui.postMessage({ type: "size", width: 236, height: 600 });
const F = figma.root.documentColorProfile;
figma.ui.postMessage({ type: "colorSpace", colorSpace: F });
figma.ui.onmessage = async (r) => {
  if (r.type === "create-palette") {
    await f();
    const t = r.palette, i = figma.createFrame();
    i.name = `OKP-step${t.swatchStep}_l${s(
      100 * t.peakLightness,
      1
    )}_c${s(100 * t.peakChroma, 0.1)}_h${s(
      t.hues.from,
      1
    )}-${s(t.hues.to, 1)}`;
    const { x: l, y: E } = figma.viewport.center;
    i.x = l, i.y = E, i.resize(
      2 * 48 + t.swatches.length * 200 + (t.swatches.length - 1) * 24,
      2 * 48 + 200
    ), i.fills = [
      {
        type: "SOLID",
        color: { r: 1, g: 1, b: 1 }
      }
    ], t.swatches.forEach((a, c) => {
      const n = figma.createFrame();
      i.appendChild(n), n.name = `Swatch-${c * t.swatchStep}`, n.layoutMode = "VERTICAL", n.layoutSizingHorizontal = "FIXED", n.layoutSizingVertical = "FIXED", n.x = 48 + c * 224, n.y = 48, n.resize(200, 200), n.fills = [
        {
          type: "SOLID",
          color: {
            r: a.dispP3.r,
            g: a.dispP3.g,
            b: a.dispP3.b
          }
        }
      ];
      const e = figma.createFrame();
      n.appendChild(e), e.name = "info", e.layoutMode = "VERTICAL", e.layoutSizingHorizontal = "FILL", e.layoutSizingVertical = "FILL", e.paddingTop = 16, e.paddingBottom = 16, e.paddingLeft = 16, e.paddingRight = 16, e.itemSpacing = 4, e.fills = [];
      const o = figma.createText();
      n.appendChild(o), o.name = "#", o.fontName = { family: "Martian Mono", style: "Bold" }, o.fontSize = 56, o.lineHeight = { value: 56, unit: "PIXELS" }, o.characters = `${c * t.swatchStep}`, o.layoutPositioning = "ABSOLUTE", o.x = 200 - o.width + 16, o.y = 200 - o.height + 16, o.fills = [
        {
          type: "SOLID",
          color: c < t.swatches.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
        }
      ];
      const p = figma.createText();
      e.appendChild(p);
      const T = figma.createText();
      e.appendChild(T);
      const _ = figma.createText();
      e.appendChild(_);
      const I = figma.createText();
      e.appendChild(I);
      const h = figma.createText();
      e.appendChild(h), e.children.forEach((m) => {
        if (m.type === "TEXT") {
          const g = m;
          g.fontName = { family: "Martian Mono", style: "Regular" }, g.fontSize = 12, g.lineHeight = { value: 16, unit: "PIXELS" }, g.fills = [
            {
              type: "SOLID",
              color: c < t.swatches.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
            }
          ];
        }
      }), p.name = "oklch", p.characters = `oklch(${a.oklch.l} ${a.oklch.c} ${a.oklch.h})`, T.name = "displayP3-rgb", T.fontName = { family: "Martian Mono", style: "Regular" }, T.characters = `color(display-p3
  ${s(a.dispP3.r, 1e-6)}
  ${s(a.dispP3.g, 1e-6)}
  ${s(a.dispP3.b, 1e-6)}
)`, _.name = "sRGB-hex", _.characters = `sRGB: #${a.sRgbHex}`, I.name = "displayP3-hex", I.characters = `P3:   #${a.dispP3Hex}`, h.name = "gamut", h.characters = a.gamut;
    }), figma.currentPage.appendChild(i);
  }
};
