const f = (t) => t * Math.PI / 180, H = ({ L: t, C: n, h: e }) => ({
  L: t,
  a: Math.cos(f(e)) * n,
  b: Math.sin(f(e)) * n
}), N = (t) => {
  const e = (({ L: i, a: l, b: a }) => ({
    L: (i + 0.3963377774 * l + 0.2158037573 * a) ** 3,
    M: (i - 0.1055613458 * l - 0.0638541728 * a) ** 3,
    S: (i - 0.0894841775 * l - 1.291485548 * a) ** 3
  }))(t);
  return {
    X: 1.2270138511 * e.L - 0.5577999807 * e.M + 0.2812561489 * e.S,
    Y: -0.0405801784 * e.L + 1.1122568696 * e.M - 0.0716766787 * e.S,
    Z: -0.0763812845 * e.L - 0.4214819784 * e.M + 1.5861632204 * e.S
  };
}, C = (t, { X: n, Y: e, Z: i }) => ({
  r: t[0][0] * n + t[0][1] * e + t[0][2] * i,
  g: t[1][0] * n + t[1][1] * e + t[1][2] * i,
  b: t[2][0] * n + t[2][1] * e + t[2][2] * i
}), A = (t) => C(
  [
    [3.2404542, -1.5371385, -0.4985314],
    [-0.969266, 1.8760108, 0.041556],
    [0.0556434, -0.2040259, 1.0572252]
  ],
  t
), R = (t) => C(
  [
    [2.493496911941425, -0.9313836179191239, -0.40271078445071684],
    [-0.8294889695615747, 1.7626640603183463, 0.023624685841943577],
    [0.0358458302437845, -0.0763812845057069, 0.9570942811736457]
  ],
  t
), I = (t) => t <= 31308e-7 ? 12.92 * t : 1.055 * Math.pow(t, 0.4166666666666667) - 0.055, b = (t) => N(H(t)), F = ({
  r: t,
  g: n,
  b: e
}) => [t, n, e].map(
  (i) => Math.round(i * 255).toString(16).padStart(2, "0").toUpperCase()
).join(""), y = (t, n) => parseFloat(t.toFixed(n)), O = (t) => Math.min(Math.max(t, 0), 1), G = (t, n, e, i) => {
  const l = 100 / t + 1, a = n / 100, r = e / 100, c = [];
  for (let o = 0; o < l; o++) {
    const s = o * t / 100, p = s === a ? r : s < a ? y(r / a * s, 3) : y(
      r / (1 - a) * (1 - s),
      3
    ), T = { L: s, C: p, h: i }, m = b(T), S = A(m), h = Object.fromEntries(
      Object.entries(S).map(([d, g]) => [
        d,
        I(g)
      ])
    ), E = Object.fromEntries(
      Object.entries(S).map(([d, g]) => [d, O(g)])
    ), L = p === 0 || h.r <= 1 && h.g <= 1 && h.b <= 1, u = R(m), _ = Object.fromEntries(
      Object.entries(u).map(([d, g]) => [
        d,
        I(g)
      ])
    ), X = Object.fromEntries(
      Object.entries(_).map(([d, g]) => [d, O(g)])
    ), M = p === 0 || _.r <= 1 && _.g <= 1 && _.b <= 1;
    c.push({
      okLCh: T,
      sRGB: E,
      displayP3: X,
      gamut: L ? "sRGB" : M ? "P3" : "Rec2020"
    });
  }
  return c;
};
let P = !1;
const k = async () => {
  P || (await figma.loadFontAsync({ family: "Martian Mono", style: "Regular" }), await figma.loadFontAsync({ family: "Martian Mono", style: "Bold" }), P = !0);
};
figma.showUI(__html__);
figma.ui.onmessage = async (t) => {
  if (t.type === "create-palette") {
    await k();
    const n = G(
      t.lightnessStep,
      t.peakLightness,
      t.peakChroma,
      t.hue
    ), e = figma.createFrame();
    e.name = `OKP-step${t.lightnessStep}-l${t.peakLightness}-c${t.peakChroma}-h${t.hue}`;
    const { x: i, y: l } = figma.viewport.center;
    e.x = i, e.y = l, e.resize(
      2 * 48 + n.length * 200 + (n.length - 1) * 24,
      2 * 48 + 200
    ), e.fills = [
      {
        type: "SOLID",
        color: { r: 1, g: 1, b: 1 }
      }
    ], n.forEach((a, r) => {
      const c = figma.createFrame();
      e.appendChild(c), c.name = `Swatch-${r * t.lightnessStep}`, c.layoutMode = "VERTICAL", c.layoutSizingHorizontal = "FIXED", c.layoutSizingVertical = "FIXED", c.x = 48 + r * 224, c.y = 48, c.resize(200, 200), c.fills = [{ type: "SOLID", color: a.displayP3 }];
      const o = figma.createFrame();
      c.appendChild(o), o.name = "info", o.layoutMode = "VERTICAL", o.layoutSizingHorizontal = "FILL", o.layoutSizingVertical = "FILL", o.paddingTop = 16, o.paddingBottom = 16, o.paddingLeft = 16, o.paddingRight = 16, o.itemSpacing = 4, o.fills = [];
      const s = figma.createText();
      c.appendChild(s), s.name = "#", s.fontName = { family: "Martian Mono", style: "Bold" }, s.fontSize = 56, s.lineHeight = { value: 56, unit: "PIXELS" }, s.characters = `${r * t.lightnessStep}`, s.layoutPositioning = "ABSOLUTE", s.x = 200 - s.width + 16, s.y = 200 - s.height + 16, s.fills = [
        {
          type: "SOLID",
          color: r < n.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
        }
      ];
      const p = figma.createText();
      o.appendChild(p);
      const T = figma.createText();
      o.appendChild(T);
      const m = figma.createText();
      o.appendChild(m);
      const S = figma.createText();
      o.appendChild(S);
      const h = figma.createText();
      o.appendChild(h), o.children.forEach((E) => {
        if (E.type === "TEXT") {
          const L = E;
          L.fontName = { family: "Martian Mono", style: "Regular" }, L.fontSize = 12, L.lineHeight = { value: 16, unit: "PIXELS" }, L.fills = [
            {
              type: "SOLID",
              color: r < n.length / 2 ? { r: 1, g: 1, b: 1 } : { r: 0, g: 0, b: 0 }
            }
          ];
        }
      }), p.name = "oklch", p.characters = `oklch(${a.okLCh.L} ${a.okLCh.C} ${a.okLCh.h})`, T.name = "displayP3-rgb", T.fontName = { family: "Martian Mono", style: "Regular" }, T.characters = `color(display-p3
  ${y(a.displayP3.r, 6)}
  ${y(a.displayP3.g, 6)}
  ${y(a.displayP3.b, 6)}
)`, m.name = "sRGB-hex", m.characters = `sRGB: #${F(a.sRGB)}`, S.name = "displayP3-hex", S.characters = `P3:   #${F(a.displayP3)}`, h.name = "gamut", h.characters = a.gamut;
    }), figma.currentPage.appendChild(e);
  }
};
