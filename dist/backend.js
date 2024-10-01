const s = (_, t) => {
  const a = (t.toString().split(".")[1] || "").length;
  let T = Math.round(_ / t) * t;
  return T = parseFloat(T.toFixed(a)), T;
};
let P = !1;
const h = async () => {
  P || (await figma.loadFontAsync({ family: "Roboto Mono", style: "Medium" }), await figma.loadFontAsync({ family: "Roboto Condensed", style: "Bold" }), P = !0);
};
figma.showUI(__html__, { themeColors: !0, width: 286, height: 762 });
figma.ui.postMessage({ type: "size", width: 286, height: 762 });
const c = figma.root.documentColorProfile;
figma.ui.postMessage({ type: "colorSpace", colorSpace: c });
figma.ui.onmessage = async (_) => {
  if (_.type === "create-palette") {
    await h();
    const t = _.palette, a = figma.createFrame();
    a.name = `OKP-step${t.swatchStep}_l${s(
      100 * t.peakLightness,
      1
    )}_c${s(100 * t.peakChroma, 0.1)}_h${s(
      t.hues.from,
      1
    )}-${s(t.hues.to, 1)}`;
    const { x: T, y: m } = figma.viewport.center;
    a.x = T, a.y = m, a.resize(
      2 * 48 + t.swatches.length * 200 + (t.swatches.length - 1) * 24,
      2 * 48 + 200
    ), a.fills = [
      {
        type: "SOLID",
        color: { r: 1, g: 1, b: 1 }
      }
    ], t.swatches.forEach((e, r) => {
      const i = figma.createFrame();
      a.appendChild(i), i.name = `Swatch-${r * t.swatchStep}`, i.layoutMode = "VERTICAL", i.layoutSizingHorizontal = "FIXED", i.layoutSizingVertical = "FIXED", i.x = 48 + r * 224, i.y = 48, i.resize(200, 200), i.fills = c === "DISPLAY_P3" ? [
        {
          type: "SOLID",
          color: {
            r: e.dispP3.r,
            g: e.dispP3.g,
            b: e.dispP3.b
          }
        }
      ] : [
        {
          type: "SOLID",
          color: {
            r: e.sRgb.r,
            g: e.sRgb.g,
            b: e.sRgb.b
          }
        }
      ];
      const o = figma.createFrame();
      i.appendChild(o), o.name = "info", o.layoutMode = "VERTICAL", o.layoutSizingHorizontal = "FILL", o.layoutSizingVertical = "FILL", o.paddingTop = 16, o.paddingBottom = 16, o.paddingLeft = 16, o.paddingRight = 16, o.itemSpacing = 4, o.fills = [];
      const n = figma.createText();
      i.appendChild(n), n.name = "#", n.fontName = { family: "Roboto Condensed", style: "Bold" }, n.fontSize = 56, n.lineHeight = { value: 56, unit: "PIXELS" }, n.characters = `${r * t.swatchStep}`, n.layoutPositioning = "ABSOLUTE", n.x = 200 - n.width + 12, n.y = 200 - n.height + 20, n.fills = [
        {
          type: "SOLID",
          color: r < t.swatches.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
        }
      ];
      const p = figma.createText();
      o.appendChild(p);
      let l;
      c === "DISPLAY_P3" && (l = figma.createText(), o.appendChild(l));
      const I = figma.createText();
      o.appendChild(I);
      const d = figma.createText();
      o.appendChild(d), o.children.forEach((E) => {
        if (E.type === "TEXT") {
          const g = E;
          g.fontName = { family: "Roboto Mono", style: "Medium" }, g.fontSize = 12, g.lineHeight = { value: 16, unit: "PIXELS" }, g.fills = [
            {
              type: "SOLID",
              color: r < t.swatches.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
            }
          ];
        }
      }), p.name = "oklch", p.characters = c === "DISPLAY_P3" ? `oklch(${s(
        e.dispP3ClampedOklch.l,
        0.01
      )} ${s(
        e.dispP3ClampedOklch.c,
        1e-3
      )} ${s(e.dispP3ClampedOklch.h, 1)})` : `oklch(${s(
        e.sRgbClampedOklch.l,
        0.01
      )} ${s(e.sRgbClampedOklch.c, 1e-3)} ${s(
        e.sRgbClampedOklch.h,
        1
      )})`, c === "DISPLAY_P3" && l && (l.name = "displayP3-rgb", l.fontName = { family: "Roboto Mono", style: "Medium" }, l.characters = `color(display-p3
  ${s(e.dispP3.r, 1e-6)}
  ${s(e.dispP3.g, 1e-6)}
  ${s(e.dispP3.b, 1e-6)}
)`), I.name = "hex", I.characters = `#${c === "DISPLAY_P3" ? e.dispP3Hex : e.sRgbHex}`, d.name = "gamut", d.characters = e.gamut;
    }), figma.currentPage.appendChild(a);
  }
};
