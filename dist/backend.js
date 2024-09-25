const O = (t) => t * Math.PI / 180, l = (t, e) => {
  const o = (e.toString().split(".")[1] || "").length;
  let n = Math.round(t / e) * e;
  return n = parseFloat(n.toFixed(o)), n;
}, H = (t, e, o) => Math.min(Math.max(t, e), o), C = ({ l: t, c: e, h: o }) => {
  const n = O(o);
  return {
    l: t,
    a: Math.cos(n) * e,
    b: Math.sin(n) * e
  };
}, A = (t) => {
  const e = ({ l: s, a: i, b: c }) => ({
    l: (s + 0.3963377774 * i + 0.2158037573 * c) ** 3,
    m: (s - 0.1055613458 * i - 0.0638541728 * c) ** 3,
    s: (s - 0.0894841775 * i - 1.291485548 * c) ** 3
  }), { l: o, m: n, s: T } = e(t);
  return {
    x: 1.2270138511 * o - 0.5577999807 * n + 0.2812561489 * T,
    y: -0.0405801784 * o + 1.1122568696 * n - 0.0716766787 * T,
    z: -0.0763812845 * o - 0.4214819784 * n + 1.5861632204 * T
  };
}, y = (t, { x: e, y: o, z: n }) => ({
  r: t[0][0] * e + t[0][1] * o + t[0][2] * n,
  g: t[1][0] * e + t[1][1] * o + t[1][2] * n,
  b: t[2][0] * e + t[2][1] * o + t[2][2] * n
}), N = (t) => y(
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
), f = (t) => Object.fromEntries(
  Object.entries(t).map(([e, o]) => [
    e,
    o <= 31308e-7 ? 12.92 * o : 1.055 * Math.pow(o, 0.4166666666666667) - 0.055
  ])
), I = (t) => Object.fromEntries(
  Object.entries(t).map(([e, o]) => [e, H(o, 0, 1)])
), b = (t) => A(C(t)), P = ({ r: t, g: e, b: o }) => [t, e, o].map(
  (n) => Math.round(n * 255).toString(16).padStart(2, "0").toUpperCase()
).join(""), M = (t, { from: e, to: o }) => {
  const n = e <= o ? o - e : o + 360 - e;
  return (e + t * n) % 360;
}, R = (t, e, o) => e === 1 ? o * t : e === 0 ? o * (1 - t) : t <= e ? o / e * t : o / (1 - e) * (1 - t), D = (t, e, o, n) => {
  const T = 100 / t + 1, s = [];
  for (let i = 0; i < T; i++) {
    const c = l(i / (T - 1), 0.01), a = l(
      R(c, e, o),
      1e-3
    ), r = M(c, n), S = { l: c, c: a, h: r }, h = b(S), d = N(h), p = f(d), E = I(p), _ = a === 0 || p.r <= 1 && p.g <= 1 && p.b <= 1, g = X(h), m = f(g), F = I(m), L = a === 0 || m.r <= 1 && m.g <= 1 && m.b <= 1;
    s.push({
      oklch: S,
      sRgb: E,
      dispP3: F,
      gamut: _ ? "sRGB" : L ? "P3" : "Rec2020"
    });
  }
  return s;
};
let u = !1;
const G = async () => {
  u || (await figma.loadFontAsync({ family: "Martian Mono", style: "Regular" }), await figma.loadFontAsync({ family: "Martian Mono", style: "Bold" }), u = !0);
};
figma.showUI(__html__, { themeColors: !0, width: 248, height: 800 });
const z = figma.root.documentColorProfile;
figma.ui.postMessage({ message: "colorSpace", colorSpace: z });
figma.ui.onmessage = async (t) => {
  if (t.type === "create-palette") {
    await G();
    const e = D(
      t.swatchStep,
      t.peakLightness,
      t.peakChroma,
      t.hues
    ), o = figma.createFrame();
    o.name = `OKP-step${t.swatchStep}_l${l(
      100 * t.peakLightness,
      1
    )}_c${l(100 * t.peakChroma, 0.1)}_h${l(
      t.hues.from,
      1
    )}-${l(t.hues.to, 1)}`;
    const { x: n, y: T } = figma.viewport.center;
    o.x = n, o.y = T, o.resize(
      2 * 48 + e.length * 200 + (e.length - 1) * 24,
      2 * 48 + 200
    ), o.fills = [
      {
        type: "SOLID",
        color: { r: 1, g: 1, b: 1 }
      }
    ], e.forEach((s, i) => {
      const c = figma.createFrame();
      o.appendChild(c), c.name = `Swatch-${i * t.swatchStep}`, c.layoutMode = "VERTICAL", c.layoutSizingHorizontal = "FIXED", c.layoutSizingVertical = "FIXED", c.x = 48 + i * 224, c.y = 48, c.resize(200, 200), c.fills = [{ type: "SOLID", color: s.dispP3 }];
      const a = figma.createFrame();
      c.appendChild(a), a.name = "info", a.layoutMode = "VERTICAL", a.layoutSizingHorizontal = "FILL", a.layoutSizingVertical = "FILL", a.paddingTop = 16, a.paddingBottom = 16, a.paddingLeft = 16, a.paddingRight = 16, a.itemSpacing = 4, a.fills = [];
      const r = figma.createText();
      c.appendChild(r), r.name = "#", r.fontName = { family: "Martian Mono", style: "Bold" }, r.fontSize = 56, r.lineHeight = { value: 56, unit: "PIXELS" }, r.characters = `${i * t.swatchStep}`, r.layoutPositioning = "ABSOLUTE", r.x = 200 - r.width + 16, r.y = 200 - r.height + 16, r.fills = [
        {
          type: "SOLID",
          color: i < e.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
        }
      ];
      const S = figma.createText();
      a.appendChild(S);
      const h = figma.createText();
      a.appendChild(h);
      const d = figma.createText();
      a.appendChild(d);
      const p = figma.createText();
      a.appendChild(p);
      const E = figma.createText();
      a.appendChild(E), a.children.forEach((_) => {
        if (_.type === "TEXT") {
          const g = _;
          g.fontName = { family: "Martian Mono", style: "Regular" }, g.fontSize = 12, g.lineHeight = { value: 16, unit: "PIXELS" }, g.fills = [
            {
              type: "SOLID",
              color: i < e.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
            }
          ];
        }
      }), S.name = "oklch", S.characters = `oklch(${l(
        s.oklch.l,
        0.01
      )} ${l(s.oklch.c, 1e-3)} ${l(
        s.oklch.h,
        1
      )})`, h.name = "displayP3-rgb", h.fontName = { family: "Martian Mono", style: "Regular" }, h.characters = `color(display-p3
  ${l(s.dispP3.r, 1e-6)}
  ${l(s.dispP3.g, 1e-6)}
  ${l(s.dispP3.b, 1e-6)}
)`, d.name = "sRGB-hex", d.characters = `sRGB: #${P(s.sRgb)}`, p.name = "displayP3-hex", p.characters = `P3:   #${P(s.dispP3)}`, E.name = "gamut", E.characters = s.gamut;
    }), figma.currentPage.appendChild(o);
  }
};
