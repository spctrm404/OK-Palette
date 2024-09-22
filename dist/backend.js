const u = (t) => t * Math.PI / 180, S = (t, n) => {
  const e = (n.toString().split(".")[1] || "").length;
  let o = Math.round(t / n) * n;
  return o = parseFloat(o.toFixed(e)), o;
}, O = (t, n, e) => Math.min(Math.max(t, n), e), C = ({
  L: t,
  C: n,
  h: e
}) => {
  const o = u(e);
  return {
    L: t,
    a: Math.cos(o) * n,
    b: Math.sin(o) * n
  };
}, H = (t) => {
  const n = ({ L: s, a: r, b: a }) => ({
    L: (s + 0.3963377774 * r + 0.2158037573 * a) ** 3,
    M: (s - 0.1055613458 * r - 0.0638541728 * a) ** 3,
    S: (s - 0.0894841775 * r - 1.291485548 * a) ** 3
  }), { L: e, M: o, S: T } = n(t);
  return {
    X: 1.2270138511 * e - 0.5577999807 * o + 0.2812561489 * T,
    Y: -0.0405801784 * e + 1.1122568696 * o - 0.0716766787 * T,
    Z: -0.0763812845 * e - 0.4214819784 * o + 1.5861632204 * T
  };
}, m = (t, { X: n, Y: e, Z: o }) => ({
  r: t[0][0] * n + t[0][1] * e + t[0][2] * o,
  g: t[1][0] * n + t[1][1] * e + t[1][2] * o,
  b: t[2][0] * n + t[2][1] * e + t[2][2] * o
}), X = (t) => m(
  [
    [3.2404542, -1.5371385, -0.4985314],
    [-0.969266, 1.8760108, 0.041556],
    [0.0556434, -0.2040259, 1.0572252]
  ],
  t
), R = (t) => m(
  [
    [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
    [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
    [0.0358458302437845, -0.0763812845057069, 0.9570942811736457]
  ],
  t
), y = (t) => Object.fromEntries(
  Object.entries(t).map(([n, e]) => [
    n,
    e <= 31308e-7 ? 12.92 * e : 1.055 * Math.pow(e, 0.4166666666666667) - 0.055
  ])
), I = (t) => Object.fromEntries(
  Object.entries(t).map(([n, e]) => [n, O(e, 0, 1)])
), A = (t) => H(C(t)), L = ({
  r: t,
  g: n,
  b: e
}) => [t, n, e].map(
  (o) => Math.round(o * 255).toString(16).padStart(2, "0").toUpperCase()
).join(""), M = (t, n, e, o) => {
  console.log(t, n, e, o);
  const T = 100 / t + 1, s = [];
  for (let r = 0; r < T; r++) {
    const a = S(r / (T - 1), 1e-3), c = a === n ? e : a < n ? S(e / n * a, 1e-3) : S(
      e / (1 - n) * (1 - a),
      1e-3
    ), i = { L: a, C: c, h: o }, h = A(i), d = X(h), p = y(d), g = I(p), E = c === 0 || p.r <= 1 && p.g <= 1 && p.b <= 1, _ = R(h), l = y(_), F = I(l), P = c === 0 || l.r <= 1 && l.g <= 1 && l.b <= 1;
    s.push({
      okLCh: i,
      sRGB: g,
      displayP3: F,
      gamut: E ? "sRGB" : P ? "P3" : "Rec2020"
    });
  }
  return s;
};
let f = !1;
const G = async () => {
  f || (await figma.loadFontAsync({ family: "Martian Mono", style: "Regular" }), await figma.loadFontAsync({ family: "Martian Mono", style: "Bold" }), f = !0);
};
figma.showUI(__html__, { width: 400, height: 200 });
figma.ui.onmessage = async (t) => {
  if (t.type === "create-palette") {
    await G();
    const n = M(
      t.swatchStep,
      t.peakLightness,
      t.peakChroma,
      t.hue
    ), e = figma.createFrame();
    e.name = `OKP-step${t.swatchStep}-l${100 * t.peakLightness}-c${100 * t.peakChroma}-h${t.hue}`;
    const { x: o, y: T } = figma.viewport.center;
    e.x = o, e.y = T, e.resize(
      2 * 48 + n.length * 200 + (n.length - 1) * 24,
      2 * 48 + 200
    ), e.fills = [
      {
        type: "SOLID",
        color: { r: 1, g: 1, b: 1 }
      }
    ], n.forEach((s, r) => {
      const a = figma.createFrame();
      e.appendChild(a), a.name = `Swatch-${r * t.swatchStep}`, a.layoutMode = "VERTICAL", a.layoutSizingHorizontal = "FIXED", a.layoutSizingVertical = "FIXED", a.x = 48 + r * 224, a.y = 48, a.resize(200, 200), a.fills = [{ type: "SOLID", color: s.displayP3 }];
      const c = figma.createFrame();
      a.appendChild(c), c.name = "info", c.layoutMode = "VERTICAL", c.layoutSizingHorizontal = "FILL", c.layoutSizingVertical = "FILL", c.paddingTop = 16, c.paddingBottom = 16, c.paddingLeft = 16, c.paddingRight = 16, c.itemSpacing = 4, c.fills = [];
      const i = figma.createText();
      a.appendChild(i), i.name = "#", i.fontName = { family: "Martian Mono", style: "Bold" }, i.fontSize = 56, i.lineHeight = { value: 56, unit: "PIXELS" }, i.characters = `${r * t.swatchStep}`, i.layoutPositioning = "ABSOLUTE", i.x = 200 - i.width + 16, i.y = 200 - i.height + 16, i.fills = [
        {
          type: "SOLID",
          color: r < n.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
        }
      ];
      const h = figma.createText();
      c.appendChild(h);
      const d = figma.createText();
      c.appendChild(d);
      const p = figma.createText();
      c.appendChild(p);
      const g = figma.createText();
      c.appendChild(g);
      const E = figma.createText();
      c.appendChild(E), c.children.forEach((_) => {
        if (_.type === "TEXT") {
          const l = _;
          l.fontName = { family: "Martian Mono", style: "Regular" }, l.fontSize = 12, l.lineHeight = { value: 16, unit: "PIXELS" }, l.fills = [
            {
              type: "SOLID",
              color: r < n.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
            }
          ];
        }
      }), h.name = "oklch", h.characters = `oklch(${s.okLCh.L} ${s.okLCh.C} ${s.okLCh.h})`, d.name = "displayP3-rgb", d.fontName = { family: "Martian Mono", style: "Regular" }, d.characters = `color(display-p3
  ${S(s.displayP3.r, 1e-6)}
  ${S(s.displayP3.g, 1e-6)}
  ${S(s.displayP3.b, 1e-6)}
)`, p.name = "sRGB-hex", p.characters = `sRGB: #${L(s.sRGB)}`, g.name = "displayP3-hex", g.characters = `P3:   #${L(s.displayP3)}`, E.name = "gamut", E.characters = s.gamut;
    }), figma.currentPage.appendChild(e);
  }
};
