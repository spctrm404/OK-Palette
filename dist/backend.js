const O = (t) => t * Math.PI / 180, d = (t, n) => {
  const e = (n.toString().split(".")[1] || "").length;
  let c = Math.round(t / n) * n;
  return c = parseFloat(c.toFixed(e)), c;
}, L = (t, n, e) => Math.min(Math.max(t, n), e), H = ({ l: t, c: n, h: e }) => {
  const c = O(e);
  return {
    l: t,
    a: Math.cos(c) * n,
    b: Math.sin(c) * n
  };
}, A = (t) => {
  const n = ({ l: s, a: r, b: o }) => ({
    l: (s + 0.3963377774 * r + 0.2158037573 * o) ** 3,
    m: (s - 0.1055613458 * r - 0.0638541728 * o) ** 3,
    s: (s - 0.0894841775 * r - 1.291485548 * o) ** 3
  }), { l: e, m: c, s: T } = n(t);
  return {
    x: 1.2270138511 * e - 0.5577999807 * c + 0.2812561489 * T,
    y: -0.0405801784 * e + 1.1122568696 * c - 0.0716766787 * T,
    z: -0.0763812845 * e - 0.4214819784 * c + 1.5861632204 * T
  };
}, y = (t, { x: n, y: e, z: c }) => ({
  r: t[0][0] * n + t[0][1] * e + t[0][2] * c,
  g: t[1][0] * n + t[1][1] * e + t[1][2] * c,
  b: t[2][0] * n + t[2][1] * e + t[2][2] * c
}), C = (t) => y(
  [
    [3.2404542, -1.5371385, -0.4985314],
    [-0.969266, 1.8760108, 0.041556],
    [0.0556434, -0.2040259, 1.0572252]
  ],
  t
), X = (t) => y(
  [
    [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
    [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
    [0.0358458302437845, -0.0763812845057069, 0.9570942811736457]
  ],
  t
), m = (t) => Object.fromEntries(
  Object.entries(t).map(([n, e]) => [
    n,
    e <= 31308e-7 ? 12.92 * e : 1.055 * Math.pow(e, 0.4166666666666667) - 0.055
  ])
), I = (t) => Object.fromEntries(
  Object.entries(t).map(([n, e]) => [n, L(e, 0, 1)])
), N = (t) => A(H(t)), f = ({ r: t, g: n, b: e }) => [t, n, e].map(
  (c) => Math.round(c * 255).toString(16).padStart(2, "0").toUpperCase()
).join(""), b = (t, n, e, c) => {
  const T = 100 / t + 1, s = [];
  for (let r = 0; r < T; r++) {
    const o = d(r / (T - 1), 0.01), a = o === n ? e : o < n ? d(e / n * o, 1e-3) : d(
      e / (1 - n) * (1 - o),
      1e-3
    ), i = { l: o, c: a, h: c }, h = N(i), g = C(h), p = m(g), S = I(p), E = a === 0 || p.r <= 1 && p.g <= 1 && p.b <= 1, _ = X(h), l = m(_), P = I(l), u = a === 0 || l.r <= 1 && l.g <= 1 && l.b <= 1;
    s.push({
      oklch: i,
      sRgb: S,
      dispP3: P,
      gamut: E ? "sRGB" : u ? "P3" : "Rec2020"
    });
  }
  return s;
};
let F = !1;
const R = async () => {
  F || (await figma.loadFontAsync({ family: "Martian Mono", style: "Regular" }), await figma.loadFontAsync({ family: "Martian Mono", style: "Bold" }), F = !0);
};
figma.showUI(__html__, { width: 400, height: 200 });
figma.ui.onmessage = async (t) => {
  if (t.type === "create-palette") {
    await R();
    const n = b(
      t.swatchStep,
      t.peakLightness,
      t.peakChroma,
      t.hue
    ), e = figma.createFrame();
    e.name = `OKP-step${t.swatchStep}-l${100 * t.peakLightness}-c${100 * t.peakChroma}-h${t.hue}`;
    const { x: c, y: T } = figma.viewport.center;
    e.x = c, e.y = T, e.resize(
      2 * 48 + n.length * 200 + (n.length - 1) * 24,
      2 * 48 + 200
    ), e.fills = [
      {
        type: "SOLID",
        color: { r: 1, g: 1, b: 1 }
      }
    ], n.forEach((s, r) => {
      const o = figma.createFrame();
      e.appendChild(o), o.name = `Swatch-${r * t.swatchStep}`, o.layoutMode = "VERTICAL", o.layoutSizingHorizontal = "FIXED", o.layoutSizingVertical = "FIXED", o.x = 48 + r * 224, o.y = 48, o.resize(200, 200), o.fills = [{ type: "SOLID", color: s.dispP3 }];
      const a = figma.createFrame();
      o.appendChild(a), a.name = "info", a.layoutMode = "VERTICAL", a.layoutSizingHorizontal = "FILL", a.layoutSizingVertical = "FILL", a.paddingTop = 16, a.paddingBottom = 16, a.paddingLeft = 16, a.paddingRight = 16, a.itemSpacing = 4, a.fills = [];
      const i = figma.createText();
      o.appendChild(i), i.name = "#", i.fontName = { family: "Martian Mono", style: "Bold" }, i.fontSize = 56, i.lineHeight = { value: 56, unit: "PIXELS" }, i.characters = `${r * t.swatchStep}`, i.layoutPositioning = "ABSOLUTE", i.x = 200 - i.width + 16, i.y = 200 - i.height + 16, i.fills = [
        {
          type: "SOLID",
          color: r < n.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
        }
      ];
      const h = figma.createText();
      a.appendChild(h);
      const g = figma.createText();
      a.appendChild(g);
      const p = figma.createText();
      a.appendChild(p);
      const S = figma.createText();
      a.appendChild(S);
      const E = figma.createText();
      a.appendChild(E), a.children.forEach((_) => {
        if (_.type === "TEXT") {
          const l = _;
          l.fontName = { family: "Martian Mono", style: "Regular" }, l.fontSize = 12, l.lineHeight = { value: 16, unit: "PIXELS" }, l.fills = [
            {
              type: "SOLID",
              color: r < n.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
            }
          ];
        }
      }), h.name = "oklch", h.characters = `oklch(${s.oklch.l} ${s.oklch.c} ${s.oklch.h})`, g.name = "displayP3-rgb", g.fontName = { family: "Martian Mono", style: "Regular" }, g.characters = `color(display-p3
  ${d(s.dispP3.r, 1e-6)}
  ${d(s.dispP3.g, 1e-6)}
  ${d(s.dispP3.b, 1e-6)}
)`, p.name = "sRGB-hex", p.characters = `sRGB: #${f(s.sRgb)}`, S.name = "displayP3-hex", S.characters = `P3:   #${f(s.dispP3)}`, E.name = "gamut", E.characters = s.gamut;
    }), figma.currentPage.appendChild(e);
  }
};
