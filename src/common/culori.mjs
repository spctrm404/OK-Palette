(() => {
  var a0 = Object.defineProperty, Mr = Object.getOwnPropertyDescriptor, yr = Object.getOwnPropertyNames, _r = Object.prototype.hasOwnProperty, Tr = (e, t) => {
    for (var a in t)
      a0(e, a, { get: t[a], enumerable: !0 });
  }, xr = (e, t, a, r) => {
    if (t && typeof t == "object" || typeof t == "function")
      for (let o of yr(t))
        !_r.call(e, o) && o !== a && a0(e, o, { get: () => t[o], enumerable: !(r = Mr(t, o)) || r.enumerable });
    return e;
  }, zr = (e) => xr(a0({}, "__esModule", { value: !0 }), e), Lt = {};
  Tr(Lt, {
    a98: () => cn,
    average: () => yo,
    averageAngle: () => D,
    averageNumber: () => Zt,
    blend: () => M1,
    blerp: () => l0,
    clampChroma: () => B1,
    clampGamut: () => Mt,
    clampRgb: () => O1,
    colorsNamed: () => Pt,
    convertA98ToXyz65: () => d0,
    convertCubehelixToRgb: () => Yt,
    convertDlchToLab65: () => Ce,
    convertHsiToRgb: () => ra,
    convertHslToRgb: () => na,
    convertHsvToRgb: () => y0,
    convertHwbToRgb: () => ua,
    convertItpToXyz65: () => w0,
    convertJabToJch: () => q0,
    convertJabToRgb: () => I0,
    convertJabToXyz65: () => $0,
    convertJchToJab: () => O0,
    convertLab65ToDlch: () => Ie,
    convertLab65ToRgb: () => ge,
    convertLab65ToXyz65: () => c0,
    convertLabToLch: () => j,
    convertLabToRgb: () => A0,
    convertLabToXyz50: () => je,
    convertLchToLab: () => J,
    convertLchuvToLuv: () => Y0,
    convertLrgbToOklab: () => G0,
    convertLrgbToRgb: () => K,
    convertLuvToLchuv: () => E0,
    convertLuvToXyz50: () => Ze,
    convertOkhslToOklab: () => K0,
    convertOkhsvToOklab: () => V0,
    convertOklabToLrgb: () => ue,
    convertOklabToOkhsl: () => U0,
    convertOklabToOkhsv: () => Q0,
    convertOklabToRgb: () => _e,
    convertP3ToXyz65: () => et,
    convertProphotoToXyz50: () => it,
    convertRec2020ToXyz65: () => dt,
    convertRgbToCubehelix: () => Et,
    convertRgbToHsi: () => oa,
    convertRgbToHsl: () => la,
    convertRgbToHsv: () => _0,
    convertRgbToHwb: () => fa,
    convertRgbToJab: () => C0,
    convertRgbToLab: () => J0,
    convertRgbToLab65: () => me,
    convertRgbToLrgb: () => U,
    convertRgbToOklab: () => ye,
    convertRgbToXyb: () => ja,
    convertRgbToXyz50: () => de,
    convertRgbToXyz65: () => Y,
    convertRgbToYiq: () => Wa,
    convertXybToRgb: () => Ja,
    convertXyz50ToLab: () => Je,
    convertXyz50ToLuv: () => Ge,
    convertXyz50ToProphoto: () => rt,
    convertXyz50ToRgb: () => ve,
    convertXyz50ToXyz65: () => Za,
    convertXyz65ToA98: () => f0,
    convertXyz65ToItp: () => R0,
    convertXyz65ToJab: () => X0,
    convertXyz65ToLab65: () => m0,
    convertXyz65ToP3: () => tt,
    convertXyz65ToRec2020: () => lt,
    convertXyz65ToRgb: () => G,
    convertXyz65ToXyz50: () => Ga,
    convertYiqToRgb: () => Ua,
    converter: () => T,
    cubehelix: () => gn,
    differenceCie76: () => so,
    differenceCie94: () => po,
    differenceCiede2000: () => bo,
    differenceCmc: () => co,
    differenceEuclidean: () => ne,
    differenceHueChroma: () => ce,
    differenceHueNaive: () => Gt,
    differenceHueSaturation: () => be,
    differenceHyab: () => go,
    differenceItp: () => Mo,
    differenceKotsarenkoRamos: () => mo,
    displayable: () => mt,
    dlab: () => mn,
    dlch: () => Mn,
    easingGamma: () => hr,
    easingInOutSine: () => pn,
    easingMidpoint: () => or,
    easingSmootherstep: () => hn,
    easingSmoothstep: () => dn,
    easingSmoothstepInverse: () => un,
    filterBrightness: () => F1,
    filterContrast: () => W1,
    filterDeficiencyDeuter: () => ln,
    filterDeficiencyProt: () => nn,
    filterDeficiencyTrit: () => vn,
    filterGrayscale: () => Q1,
    filterHueRotate: () => en,
    filterInvert: () => V1,
    filterSaturate: () => K1,
    filterSepia: () => U1,
    fixupAlpha: () => z,
    fixupHueDecreasing: () => lo,
    fixupHueIncreasing: () => no,
    fixupHueLonger: () => io,
    fixupHueShorter: () => B,
    formatCss: () => h1,
    formatHex: () => s1,
    formatHex8: () => p1,
    formatHsl: () => c1,
    formatRgb: () => b1,
    getMode: () => P,
    hsi: () => yn,
    hsl: () => _n,
    hsv: () => Tn,
    hwb: () => xn,
    inGamut: () => Ke,
    interpolate: () => R1,
    interpolateWith: () => lr,
    interpolateWithPremultipliedAlpha: () => P1,
    interpolatorLinear: () => s,
    interpolatorPiecewise: () => Bt,
    interpolatorSplineBasis: () => dr,
    interpolatorSplineBasisClosed: () => ur,
    interpolatorSplineMonotone: () => H1,
    interpolatorSplineMonotone2: () => N1,
    interpolatorSplineMonotoneClosed: () => $1,
    interpolatorSplineNatural: () => S1,
    interpolatorSplineNaturalClosed: () => X1,
    itp: () => zn,
    jab: () => kn,
    jch: () => wn,
    lab: () => Ln,
    lab65: () => Rn,
    lch: () => Pn,
    lch65: () => Sn,
    lchuv: () => Xn,
    lerp: () => F,
    lrgb: () => Hn,
    luv: () => Nn,
    mapAlphaDivide: () => rr,
    mapAlphaMultiply: () => ar,
    mapTransferGamma: () => z1,
    mapTransferLinear: () => pt,
    mapper: () => ze,
    modeA98: () => Dt,
    modeCubehelix: () => Ft,
    modeDlab: () => ta,
    modeDlch: () => aa,
    modeHsi: () => ia,
    modeHsl: () => M0,
    modeHsv: () => T0,
    modeHwb: () => sa,
    modeItp: () => ca,
    modeJab: () => ma,
    modeJch: () => Ma,
    modeLab: () => Ee,
    modeLab65: () => _a,
    modeLch: () => Ye,
    modeLch65: () => xa,
    modeLchuv: () => wa,
    modeLrgb: () => La,
    modeLuv: () => Ra,
    modeOkhsl: () => Sa,
    modeOkhsv: () => Xa,
    modeOklab: () => Na,
    modeOklch: () => Ca,
    modeP3: () => Ia,
    modeProphoto: () => qa,
    modeRec2020: () => Da,
    modeRgb: () => W,
    modeXyb: () => Ea,
    modeXyz50: () => Ya,
    modeXyz65: () => Fa,
    modeYiq: () => Ka,
    nearest: () => j1,
    okhsl: () => $n,
    okhsv: () => Cn,
    oklab: () => In,
    oklch: () => qn,
    p3: () => On,
    parse: () => It,
    parseHex: () => Xt,
    parseHsl: () => da,
    parseHslLegacy: () => va,
    parseHwb: () => ha,
    parseLab: () => ya,
    parseLch: () => Ta,
    parseNamed: () => St,
    parseOklab: () => Ha,
    parseOklch: () => $a,
    parseRgb: () => qt,
    parseRgbLegacy: () => Ht,
    parseTransparent: () => Ot,
    prophoto: () => Bn,
    random: () => x1,
    rec2020: () => Dn,
    removeParser: () => qr,
    rgb: () => An,
    round: () => Qa,
    samples: () => q1,
    serializeHex: () => st,
    serializeHex8: () => Va,
    serializeHsl: () => tr,
    serializeRgb: () => er,
    toGamut: () => D1,
    trilerp: () => Fr,
    unlerp: () => Zr,
    useMode: () => y,
    useParser: () => $t,
    wcagContrast: () => bn,
    wcagLuminance: () => xt,
    xyb: () => jn,
    xyz50: () => Jn,
    xyz65: () => En,
    yiq: () => Yn
  });
  var kr = (e, t) => {
    if (typeof e == "number") {
      if (t === 3)
        return {
          mode: "rgb",
          r: (e >> 8 & 15 | e >> 4 & 240) / 255,
          g: (e >> 4 & 15 | e & 240) / 255,
          b: (e & 15 | e << 4 & 240) / 255
        };
      if (t === 4)
        return {
          mode: "rgb",
          r: (e >> 12 & 15 | e >> 8 & 240) / 255,
          g: (e >> 8 & 15 | e >> 4 & 240) / 255,
          b: (e >> 4 & 15 | e & 240) / 255,
          alpha: (e & 15 | e << 4 & 240) / 255
        };
      if (t === 6)
        return {
          mode: "rgb",
          r: (e >> 16 & 255) / 255,
          g: (e >> 8 & 255) / 255,
          b: (e & 255) / 255
        };
      if (t === 8)
        return {
          mode: "rgb",
          r: (e >> 24 & 255) / 255,
          g: (e >> 16 & 255) / 255,
          b: (e >> 8 & 255) / 255,
          alpha: (e & 255) / 255
        };
    }
  }, Rt = kr, wr = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    // Added in CSS Colors Level 4:
    // https://drafts.csswg.org/css-color/#changes-from-3
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
  }, Pt = wr, Lr = (e) => Rt(Pt[e.toLowerCase()], 6), St = Lr, Rr = /^#?([0-9a-f]{8}|[0-9a-f]{6}|[0-9a-f]{4}|[0-9a-f]{3})$/i, Pr = (e) => {
    let t;
    return (t = e.match(Rr)) ? Rt(parseInt(t[1], 16), t[1].length) : void 0;
  }, Xt = Pr, E = "([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)", se = `${E}%`, r0 = `(?:${E}%|${E})`, Sr = `(?:${E}(deg|grad|rad|turn)|${E})`, oe = "\\s*,\\s*", Xr = new RegExp(
    `^rgba?\\(\\s*${E}${oe}${E}${oe}${E}\\s*(?:,\\s*${r0}\\s*)?\\)$`
  ), Hr = new RegExp(
    `^rgba?\\(\\s*${se}${oe}${se}${oe}${se}\\s*(?:,\\s*${r0}\\s*)?\\)$`
  ), Nr = (e) => {
    let t = { mode: "rgb" }, a;
    if (a = e.match(Xr))
      a[1] !== void 0 && (t.r = a[1] / 255), a[2] !== void 0 && (t.g = a[2] / 255), a[3] !== void 0 && (t.b = a[3] / 255);
    else if (a = e.match(Hr))
      a[1] !== void 0 && (t.r = a[1] / 100), a[2] !== void 0 && (t.g = a[2] / 100), a[3] !== void 0 && (t.b = a[3] / 100);
    else
      return;
    return a[4] !== void 0 ? t.alpha = Math.max(0, Math.min(1, a[4] / 100)) : a[5] !== void 0 && (t.alpha = Math.max(0, Math.min(1, +a[5]))), t;
  }, Ht = Nr, $r = (e, t) => e === void 0 ? void 0 : typeof e != "object" ? It(e) : e.mode !== void 0 ? e : t ? { ...e, mode: t } : void 0, q = $r, Cr = (e = "rgb") => (t) => (t = q(t, e)) !== void 0 ? (
    // if the color's mode corresponds to our target mode
    t.mode === e ? (
      // then just return the color
      t
    ) : (
      // otherwise check to see if we have a dedicated
      // converter for the target mode
      O[t.mode][e] ? (
        // and return its result...
        O[t.mode][e](t)
      ) : (
        // ...otherwise pass through RGB as an intermediary step.
        // if the target mode is RGB...
        e === "rgb" ? (
          // just return the RGB
          O[t.mode].rgb(t)
        ) : (
          // otherwise convert color.mode -> RGB -> target_mode
          O.rgb[e](O[t.mode].rgb(t))
        )
      )
    )
  ) : void 0, T = Cr, O = {}, Nt = {}, ie = [], o0 = {}, Ir = (e) => e, y = (e) => (O[e.mode] = {
    ...O[e.mode],
    ...e.toMode
  }, Object.keys(e.fromMode || {}).forEach((t) => {
    O[t] || (O[t] = {}), O[t][e.mode] = e.fromMode[t];
  }), e.ranges || (e.ranges = {}), e.difference || (e.difference = {}), e.channels.forEach((t) => {
    if (e.ranges[t] === void 0 && (e.ranges[t] = [0, 1]), !e.interpolate[t])
      throw new Error(`Missing interpolator for: ${t}`);
    typeof e.interpolate[t] == "function" && (e.interpolate[t] = {
      use: e.interpolate[t]
    }), e.interpolate[t].fixup || (e.interpolate[t].fixup = Ir);
  }), Nt[e.mode] = e, (e.parse || []).forEach((t) => {
    $t(t, e.mode);
  }), T(e.mode)), P = (e) => Nt[e], $t = (e, t) => {
    if (typeof e == "string") {
      if (!t)
        throw new Error("'mode' required when 'parser' is a string");
      o0[e] = t;
    } else typeof e == "function" && ie.indexOf(e) < 0 && ie.push(e);
  }, qr = (e) => {
    if (typeof e == "string")
      delete o0[e];
    else if (typeof e == "function") {
      const t = ie.indexOf(e);
      t > 0 && ie.splice(t, 1);
    }
  }, i0 = /[^\x00-\x7F]|[a-zA-Z_]/, Or = /[^\x00-\x7F]|[-\w]/, f = {
    Function: "function",
    Ident: "ident",
    Number: "number",
    Percentage: "percentage",
    ParenClose: ")",
    None: "none",
    Hue: "hue",
    Alpha: "alpha"
  }, g = 0;
  function Re(e) {
    let t = e[g], a = e[g + 1];
    return t === "-" || t === "+" ? /\d/.test(a) || a === "." && /\d/.test(e[g + 2]) : t === "." ? /\d/.test(a) : /\d/.test(t);
  }
  function n0(e) {
    if (g >= e.length)
      return !1;
    let t = e[g];
    if (i0.test(t))
      return !0;
    if (t === "-") {
      if (e.length - g < 2)
        return !1;
      let a = e[g + 1];
      return !!(a === "-" || i0.test(a));
    }
    return !1;
  }
  var Br = {
    deg: 1,
    rad: 180 / Math.PI,
    grad: 9 / 10,
    turn: 360
  };
  function pe(e) {
    let t = "";
    if ((e[g] === "-" || e[g] === "+") && (t += e[g++]), t += Pe(e), e[g] === "." && /\d/.test(e[g + 1]) && (t += e[g++] + Pe(e)), (e[g] === "e" || e[g] === "E") && ((e[g + 1] === "-" || e[g + 1] === "+") && /\d/.test(e[g + 2]) ? t += e[g++] + e[g++] + Pe(e) : /\d/.test(e[g + 1]) && (t += e[g++] + Pe(e))), n0(e)) {
      let a = Se(e);
      return a === "deg" || a === "rad" || a === "turn" || a === "grad" ? { type: f.Hue, value: t * Br[a] } : void 0;
    }
    return e[g] === "%" ? (g++, { type: f.Percentage, value: +t }) : { type: f.Number, value: +t };
  }
  function Pe(e) {
    let t = "";
    for (; /\d/.test(e[g]); )
      t += e[g++];
    return t;
  }
  function Se(e) {
    let t = "";
    for (; g < e.length && Or.test(e[g]); )
      t += e[g++];
    return t;
  }
  function Dr(e) {
    let t = Se(e);
    return e[g] === "(" ? (g++, { type: f.Function, value: t }) : t === "none" ? { type: f.None, value: void 0 } : { type: f.Ident, value: t };
  }
  function Ar(e = "") {
    let t = e.trim(), a = [], r;
    for (g = 0; g < t.length; ) {
      if (r = t[g++], r === `
` || r === "	" || r === " ") {
        for (; g < t.length && (t[g] === `
` || t[g] === "	" || t[g] === " "); )
          g++;
        continue;
      }
      if (r === ",")
        return;
      if (r === ")") {
        a.push({ type: f.ParenClose });
        continue;
      }
      if (r === "+") {
        if (g--, Re(t)) {
          a.push(pe(t));
          continue;
        }
        return;
      }
      if (r === "-") {
        if (g--, Re(t)) {
          a.push(pe(t));
          continue;
        }
        if (n0(t)) {
          a.push({ type: f.Ident, value: Se(t) });
          continue;
        }
        return;
      }
      if (r === ".") {
        if (g--, Re(t)) {
          a.push(pe(t));
          continue;
        }
        return;
      }
      if (r === "/") {
        for (; g < t.length && (t[g] === `
` || t[g] === "	" || t[g] === " "); )
          g++;
        let o;
        if (Re(t) && (o = pe(t), o.type !== f.Hue)) {
          a.push({ type: f.Alpha, value: o });
          continue;
        }
        if (n0(t) && Se(t) === "none") {
          a.push({
            type: f.Alpha,
            value: { type: f.None, value: void 0 }
          });
          continue;
        }
        return;
      }
      if (/\d/.test(r)) {
        g--, a.push(pe(t));
        continue;
      }
      if (i0.test(r)) {
        g--, a.push(Dr(t));
        continue;
      }
      return;
    }
    return a;
  }
  function jr(e) {
    e._i = 0;
    let t = e[e._i++];
    if (!t || t.type !== f.Function || t.value !== "color" || (t = e[e._i++], t.type !== f.Ident))
      return;
    const a = o0[t.value];
    if (!a)
      return;
    const r = { mode: a }, o = Ct(e, !1);
    if (!o)
      return;
    const i = P(a).channels;
    for (let n = 0, l, v; n < i.length; n++)
      l = o[n], v = i[n], l.type !== f.None && (r[v] = l.type === f.Number ? l.value : l.value / 100, v === "alpha" && (r[v] = Math.max(0, Math.min(1, r[v]))));
    return r;
  }
  function Ct(e, t) {
    const a = [];
    let r;
    for (; e._i < e.length; ) {
      if (r = e[e._i++], r.type === f.None || r.type === f.Number || r.type === f.Alpha || r.type === f.Percentage || t && r.type === f.Hue) {
        a.push(r);
        continue;
      }
      if (r.type === f.ParenClose) {
        if (e._i < e.length)
          return;
        continue;
      }
      return;
    }
    if (!(a.length < 3 || a.length > 4)) {
      if (a.length === 4) {
        if (a[3].type !== f.Alpha)
          return;
        a[3] = a[3].value;
      }
      return a.length === 3 && a.push({ type: f.None, value: void 0 }), a.every((o) => o.type !== f.Alpha) ? a : void 0;
    }
  }
  function Jr(e, t) {
    e._i = 0;
    let a = e[e._i++];
    if (!a || a.type !== f.Function)
      return;
    let r = Ct(e, t);
    if (r)
      return r.unshift(a.value), r;
  }
  var Er = (e) => {
    if (typeof e != "string")
      return;
    const t = Ar(e), a = t ? Jr(t, !0) : void 0;
    let r, o = 0, i = ie.length;
    for (; o < i; )
      if ((r = ie[o++](e, a)) !== void 0)
        return r;
    return t ? jr(t) : void 0;
  }, It = Er;
  function Yr(e, t) {
    if (!t || t[0] !== "rgb" && t[0] !== "rgba")
      return;
    const a = { mode: "rgb" }, [, r, o, i, n] = t;
    if (!(r.type === f.Hue || o.type === f.Hue || i.type === f.Hue))
      return r.type !== f.None && (a.r = r.type === f.Number ? r.value / 255 : r.value / 100), o.type !== f.None && (a.g = o.type === f.Number ? o.value / 255 : o.value / 100), i.type !== f.None && (a.b = i.type === f.Number ? i.value / 255 : i.value / 100), n.type !== f.None && (a.alpha = Math.min(
        1,
        Math.max(
          0,
          n.type === f.Number ? n.value : n.value / 100
        )
      )), a;
  }
  var qt = Yr, Gr = (e) => e === "transparent" ? { mode: "rgb", r: 0, g: 0, b: 0, alpha: 0 } : void 0, Ot = Gr, F = (e, t, a) => e + a * (t - e), Zr = (e, t, a) => (a - e) / (t - e), l0 = (e, t, a, r, o, i) => F(F(e, t, o), F(a, r, o), i), Fr = (e, t, a, r, o, i, n, l, v, h, d) => F(
    l0(e, t, a, r, v, h),
    l0(o, i, n, l, v, h),
    d
  ), Wr = (e) => {
    let t = [];
    for (let a = 0; a < e.length - 1; a++) {
      let r = e[a], o = e[a + 1];
      r === void 0 && o === void 0 ? t.push(void 0) : r !== void 0 && o !== void 0 ? t.push([r, o]) : t.push(r !== void 0 ? [r, r] : [o, o]);
    }
    return t;
  }, Bt = (e) => (t) => {
    let a = Wr(t);
    return (r) => {
      let o = r * a.length, i = r >= 1 ? a.length - 1 : Math.max(Math.floor(o), 0), n = a[i];
      return n === void 0 ? void 0 : e(n[0], n[1], o - i);
    };
  }, s = Bt(F), z = (e) => {
    let t = !1, a = e.map((r) => r !== void 0 ? (t = !0, r) : 1);
    return t ? a : e;
  }, Ur = {
    mode: "rgb",
    channels: ["r", "g", "b", "alpha"],
    parse: [
      qt,
      Xt,
      Ht,
      St,
      Ot,
      "srgb"
    ],
    serialize: "srgb",
    interpolate: {
      r: s,
      g: s,
      b: s,
      alpha: { use: s, fixup: z }
    },
    gamut: !0,
    white: { r: 1, g: 1, b: 1 },
    black: { r: 0, g: 0, b: 0 }
  }, W = Ur, v0 = (e = 0) => Math.pow(Math.abs(e), 563 / 256) * Math.sign(e), Kr = (e) => {
    let t = v0(e.r), a = v0(e.g), r = v0(e.b), o = {
      mode: "xyz65",
      x: 0.5766690429101305 * t + 0.1855582379065463 * a + 0.1882286462349947 * r,
      y: 0.297344975250536 * t + 0.6273635662554661 * a + 0.0752914584939979 * r,
      z: 0.0270313613864123 * t + 0.0706888525358272 * a + 0.9913375368376386 * r
    };
    return e.alpha !== void 0 && (o.alpha = e.alpha), o;
  }, d0 = Kr, u0 = (e) => Math.pow(Math.abs(e), 256 / 563) * Math.sign(e), Qr = ({ x: e, y: t, z: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = {
      mode: "a98",
      r: u0(
        e * 2.0415879038107465 - t * 0.5650069742788597 - 0.3447313507783297 * a
      ),
      g: u0(
        e * -0.9692436362808798 + t * 1.8759675015077206 + 0.0415550574071756 * a
      ),
      b: u0(
        e * 0.0134442806320312 - t * 0.1183623922310184 + 1.0151749943912058 * a
      )
    };
    return r !== void 0 && (o.alpha = r), o;
  }, f0 = Qr, h0 = (e = 0) => {
    const t = Math.abs(e);
    return t <= 0.04045 ? e / 12.92 : (Math.sign(e) || 1) * Math.pow((t + 0.055) / 1.055, 2.4);
  }, Vr = ({ r: e, g: t, b: a, alpha: r }) => {
    let o = {
      mode: "lrgb",
      r: h0(e),
      g: h0(t),
      b: h0(a)
    };
    return r !== void 0 && (o.alpha = r), o;
  }, U = Vr, eo = (e) => {
    let { r: t, g: a, b: r, alpha: o } = U(e), i = {
      mode: "xyz65",
      x: 0.4123907992659593 * t + 0.357584339383878 * a + 0.1804807884018343 * r,
      y: 0.2126390058715102 * t + 0.715168678767756 * a + 0.0721923153607337 * r,
      z: 0.0193308187155918 * t + 0.119194779794626 * a + 0.9505321522496607 * r
    };
    return o !== void 0 && (i.alpha = o), i;
  }, Y = eo, s0 = (e = 0) => {
    const t = Math.abs(e);
    return t > 31308e-7 ? (Math.sign(e) || 1) * (1.055 * Math.pow(t, 1 / 2.4) - 0.055) : e * 12.92;
  }, to = ({ r: e, g: t, b: a, alpha: r }, o = "rgb") => {
    let i = {
      mode: o,
      r: s0(e),
      g: s0(t),
      b: s0(a)
    };
    return r !== void 0 && (i.alpha = r), i;
  }, K = to, ao = ({ x: e, y: t, z: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = K({
      r: e * 3.2409699419045226 - t * 1.537383177570094 - 0.4986107602930034 * a,
      g: e * -0.9692436362808796 + t * 1.8759675015077204 + 0.0415550574071756 * a,
      b: e * 0.0556300796969936 - t * 0.2039769588889765 + 1.0569715142428784 * a
    });
    return r !== void 0 && (o.alpha = r), o;
  }, G = ao, ro = {
    ...W,
    mode: "a98",
    parse: ["a98-rgb"],
    serialize: "a98-rgb",
    fromMode: {
      rgb: (e) => f0(Y(e)),
      xyz65: f0
    },
    toMode: {
      rgb: (e) => G(d0(e)),
      xyz65: d0
    }
  }, Dt = ro, oo = (e) => (e = e % 360) < 0 ? e + 360 : e, R = oo, Xe = (e, t) => e.map((a, r, o) => {
    if (a === void 0)
      return a;
    let i = R(a);
    return r === 0 || e[r - 1] === void 0 ? i : t(i - R(o[r - 1]));
  }).reduce((a, r) => !a.length || r === void 0 || a[a.length - 1] === void 0 ? (a.push(r), a) : (a.push(r + a[a.length - 1]), a), []), B = (e) => Xe(e, (t) => Math.abs(t) <= 180 ? t : t - 360 * Math.sign(t)), io = (e) => Xe(e, (t) => Math.abs(t) >= 180 || t === 0 ? t : t - 360 * Math.sign(t)), no = (e) => Xe(e, (t) => t >= 0 ? t : t + 360), lo = (e) => Xe(e, (t) => t <= 0 ? t : t - 360), L = [-0.14861, 1.78277, -0.29227, -0.90649, 1.97294, 0], vo = Math.PI / 180, uo = 180 / Math.PI, At = L[3] * L[4], jt = L[1] * L[4], Jt = L[1] * L[2] - L[0] * L[3], fo = ({ r: e, g: t, b: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = (Jt * a + e * At - t * jt) / (Jt + At - jt), i = a - o, n = (L[4] * (t - o) - L[2] * i) / L[3], l = {
      mode: "cubehelix",
      l: o,
      s: o === 0 || o === 1 ? void 0 : Math.sqrt(i * i + n * n) / (L[4] * o * (1 - o))
    };
    return l.s && (l.h = Math.atan2(n, i) * uo - 120), r !== void 0 && (l.alpha = r), l;
  }, Et = fo, ho = ({ h: e, s: t, l: a, alpha: r }) => {
    let o = { mode: "rgb" };
    e = (e === void 0 ? 0 : e + 120) * vo, a === void 0 && (a = 0);
    let i = t === void 0 ? 0 : t * a * (1 - a), n = Math.cos(e), l = Math.sin(e);
    return o.r = a + i * (L[0] * n + L[1] * l), o.g = a + i * (L[2] * n + L[3] * l), o.b = a + i * (L[4] * n + L[5] * l), r !== void 0 && (o.alpha = r), o;
  }, Yt = ho, be = (e, t) => {
    if (e.h === void 0 || t.h === void 0 || !e.s || !t.s)
      return 0;
    let a = R(e.h), r = R(t.h), o = Math.sin((r - a + 360) / 2 * Math.PI / 180);
    return 2 * Math.sqrt(e.s * t.s) * o;
  }, Gt = (e, t) => {
    if (e.h === void 0 || t.h === void 0)
      return 0;
    let a = R(e.h), r = R(t.h);
    return Math.abs(r - a) > 180 ? a - (r - 360 * Math.sign(r - a)) : r - a;
  }, ce = (e, t) => {
    if (e.h === void 0 || t.h === void 0 || !e.c || !t.c)
      return 0;
    let a = R(e.h), r = R(t.h), o = Math.sin((r - a + 360) / 2 * Math.PI / 180);
    return 2 * Math.sqrt(e.c * t.c) * o;
  }, ne = (e = "rgb", t = [1, 1, 1, 0]) => {
    let a = P(e), r = a.channels, o = a.difference, i = T(e);
    return (n, l) => {
      let v = i(n), h = i(l);
      return Math.sqrt(
        r.reduce((d, u, b) => {
          let p = o[u] ? o[u](v, h) : v[u] - h[u];
          return d + (t[b] || 0) * Math.pow(isNaN(p) ? 0 : p, 2);
        }, 0)
      );
    };
  }, so = () => ne("lab65"), po = (e = 1, t = 0.045, a = 0.015) => {
    let r = T("lab65");
    return (o, i) => {
      let n = r(o), l = r(i), v = n.l, h = n.a, d = n.b, u = Math.sqrt(h * h + d * d), b = l.l, p = l.a, c = l.b, M = Math.sqrt(p * p + c * c), m = Math.pow(v - b, 2), _ = Math.pow(u - M, 2), x = Math.pow(h - p, 2) + Math.pow(d - c, 2) - _;
      return Math.sqrt(
        m / Math.pow(e, 2) + _ / Math.pow(1 + t * u, 2) + x / Math.pow(1 + a * u, 2)
      );
    };
  }, bo = (e = 1, t = 1, a = 1) => {
    let r = T("lab65");
    return (o, i) => {
      let n = r(o), l = r(i), v = n.l, h = n.a, d = n.b, u = Math.sqrt(h * h + d * d), b = l.l, p = l.a, c = l.b, M = Math.sqrt(p * p + c * c), m = (u + M) / 2, _ = 0.5 * (1 - Math.sqrt(
        Math.pow(m, 7) / (Math.pow(m, 7) + Math.pow(25, 7))
      )), x = h * (1 + _), w = p * (1 + _), S = Math.sqrt(x * x + d * d), X = Math.sqrt(w * w + c * c), H = Math.abs(x) + Math.abs(d) === 0 ? 0 : Math.atan2(d, x);
      H += (H < 0) * 2 * Math.PI;
      let N = Math.abs(w) + Math.abs(c) === 0 ? 0 : Math.atan2(c, w);
      N += (N < 0) * 2 * Math.PI;
      let te = b - v, Z = X - S, I = S * X === 0 ? 0 : N - H;
      I -= (I > Math.PI) * 2 * Math.PI, I += (I < -Math.PI) * 2 * Math.PI;
      let A = 2 * Math.sqrt(S * X) * Math.sin(I / 2), ae = (v + b) / 2, re = (S + X) / 2, $;
      S * X === 0 ? $ = H + N : ($ = (H + N) / 2, $ -= (Math.abs(H - N) > Math.PI) * Math.PI, $ += ($ < 0) * 2 * Math.PI);
      let Ve = Math.pow(ae - 50, 2), e0 = 1 - 0.17 * Math.cos($ - Math.PI / 6) + 0.24 * Math.cos(2 * $) + 0.32 * Math.cos(3 * $ + Math.PI / 30) - 0.2 * Math.cos(4 * $ - 63 * Math.PI / 180), ke = 1 + 0.015 * Ve / Math.sqrt(20 + Ve), we = 1 + 0.045 * re, he = 1 + 0.015 * re * e0, zt = 30 * Math.PI / 180 * Math.exp(-1 * Math.pow((180 / Math.PI * $ - 275) / 25, 2)), t0 = 2 * Math.sqrt(Math.pow(re, 7) / (Math.pow(re, 7) + Math.pow(25, 7))), Le = -1 * Math.sin(2 * zt) * t0;
      return Math.sqrt(
        Math.pow(te / (e * ke), 2) + Math.pow(Z / (t * we), 2) + Math.pow(A / (a * he), 2) + Le * Z / (t * we) * A / (a * he)
      );
    };
  }, co = (e = 1, t = 1) => {
    let a = T("lab65");
    return (r, o) => {
      let i = a(r), n = i.l, l = i.a, v = i.b, h = Math.sqrt(l * l + v * v), d = Math.atan2(v, l);
      d = d + 2 * Math.PI * (d < 0);
      let u = a(o), b = u.l, p = u.a, c = u.b, M = Math.sqrt(p * p + c * c), m = Math.pow(n - b, 2), _ = Math.pow(h - M, 2), x = Math.pow(l - p, 2) + Math.pow(v - c, 2) - _, w = Math.sqrt(Math.pow(h, 4) / (Math.pow(h, 4) + 1900)), S = d >= 164 / 180 * Math.PI && d <= 345 / 180 * Math.PI ? 0.56 + Math.abs(0.2 * Math.cos(d + 168 / 180 * Math.PI)) : 0.36 + Math.abs(0.4 * Math.cos(d + 35 / 180 * Math.PI)), X = n < 16 ? 0.511 : 0.040975 * n / (1 + 0.01765 * n), H = 0.0638 * h / (1 + 0.0131 * h) + 0.638, N = H * (w * S + 1 - w);
      return Math.sqrt(
        m / Math.pow(e * X, 2) + _ / Math.pow(t * H, 2) + x / Math.pow(N, 2)
      );
    };
  }, go = () => {
    let e = T("lab65");
    return (t, a) => {
      let r = e(t), o = e(a), i = r.l - o.l, n = r.a - o.a, l = r.b - o.b;
      return Math.abs(i) + Math.sqrt(n * n + l * l);
    };
  }, mo = () => ne("yiq", [0.5053, 0.299, 0.1957]), Mo = () => ne("itp", [518400, 129600, 518400]), D = (e) => {
    let t = e.reduce(
      (r, o) => {
        if (o !== void 0) {
          let i = o * Math.PI / 180;
          r.sin += Math.sin(i), r.cos += Math.cos(i);
        }
        return r;
      },
      { sin: 0, cos: 0 }
    ), a = Math.atan2(t.sin, t.cos) * 180 / Math.PI;
    return a < 0 ? 360 + a : a;
  }, Zt = (e) => {
    let t = e.filter((a) => a !== void 0);
    return t.length ? t.reduce((a, r) => a + r, 0) / t.length : void 0;
  }, p0 = (e) => typeof e == "function";
  function yo(e, t = "rgb", a) {
    let r = P(t), o = e.map(T(t));
    return r.channels.reduce(
      (i, n) => {
        let l = o.map((v) => v[n]).filter((v) => v !== void 0);
        if (l.length) {
          let v;
          p0(a) ? v = a : a && p0(a[n]) ? v = a[n] : r.average && p0(r.average[n]) ? v = r.average[n] : v = Zt, i[n] = v(l, n);
        }
        return i;
      },
      { mode: t }
    );
  }
  var _o = {
    mode: "cubehelix",
    channels: ["h", "s", "l", "alpha"],
    parse: ["--cubehelix"],
    serialize: "--cubehelix",
    ranges: {
      h: [0, 360],
      s: [0, 4.614],
      l: [0, 1]
    },
    fromMode: {
      rgb: Et
    },
    toMode: {
      rgb: Yt
    },
    interpolate: {
      h: {
        use: s,
        fixup: B
      },
      s,
      l: s,
      alpha: {
        use: s,
        fixup: z
      }
    },
    difference: {
      h: be
    },
    average: {
      h: D
    }
  }, Ft = _o, To = ({ l: e, a: t, b: a, alpha: r }, o = "lch") => {
    t === void 0 && (t = 0), a === void 0 && (a = 0);
    let i = Math.sqrt(t * t + a * a), n = { mode: o, l: e, c: i };
    return i && (n.h = R(Math.atan2(a, t) * 180 / Math.PI)), r !== void 0 && (n.alpha = r), n;
  }, j = To, xo = ({ l: e, c: t, h: a, alpha: r }, o = "lab") => {
    a === void 0 && (a = 0);
    let i = {
      mode: o,
      l: e,
      a: t ? t * Math.cos(a / 180 * Math.PI) : 0,
      b: t ? t * Math.sin(a / 180 * Math.PI) : 0
    };
    return r !== void 0 && (i.alpha = r), i;
  }, J = xo, Wt = Math.pow(29, 3) / Math.pow(3, 3), Ut = Math.pow(6, 3) / Math.pow(29, 3), k = {
    X: 0.3457 / 0.3585,
    Y: 1,
    Z: (1 - 0.3457 - 0.3585) / 0.3585
  }, le = {
    X: 0.3127 / 0.329,
    Y: 1,
    Z: (1 - 0.3127 - 0.329) / 0.329
  }, b0 = (e) => Math.pow(e, 3) > Ut ? Math.pow(e, 3) : (116 * e - 16) / Wt, zo = ({ l: e, a: t, b: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = (e + 16) / 116, i = t / 500 + o, n = o - a / 200, l = {
      mode: "xyz65",
      x: b0(i) * le.X,
      y: b0(o) * le.Y,
      z: b0(n) * le.Z
    };
    return r !== void 0 && (l.alpha = r), l;
  }, c0 = zo, ko = (e) => G(c0(e)), ge = ko, g0 = (e) => e > Ut ? Math.cbrt(e) : (Wt * e + 16) / 116, wo = ({ x: e, y: t, z: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = g0(e / le.X), i = g0(t / le.Y), n = g0(a / le.Z), l = {
      mode: "lab65",
      l: 116 * i - 16,
      a: 500 * (o - i),
      b: 200 * (i - n)
    };
    return r !== void 0 && (l.alpha = r), l;
  }, m0 = wo, Lo = (e) => {
    let t = m0(Y(e));
    return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
  }, me = Lo, He = 1, Kt = 1, Me = 26 / 180 * Math.PI, Ne = Math.cos(Me), $e = Math.sin(Me), Qt = 100 / Math.log(139 / 100), Ro = ({ l: e, c: t, h: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = {
      mode: "lab65",
      l: (Math.exp(e * He / Qt) - 1) / 39e-4
    }, i = (Math.exp(0.0435 * t * Kt * He) - 1) / 0.075, n = i * Math.cos(a / 180 * Math.PI - Me), l = i * Math.sin(a / 180 * Math.PI - Me);
    return o.a = n * Ne - l / 0.83 * $e, o.b = n * $e + l / 0.83 * Ne, r !== void 0 && (o.alpha = r), o;
  }, Ce = Ro, Po = ({ l: e, a: t, b: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = t * Ne + a * $e, i = 0.83 * (a * Ne - t * $e), n = Math.sqrt(o * o + i * i), l = {
      mode: "dlch",
      l: Qt / He * Math.log(1 + 39e-4 * e),
      c: Math.log(1 + 0.075 * n) / (0.0435 * Kt * He)
    };
    return l.c && (l.h = R((Math.atan2(i, o) + Me) / Math.PI * 180)), r !== void 0 && (l.alpha = r), l;
  }, Ie = Po, Vt = (e) => Ce(j(e, "dlch")), ea = (e) => J(Ie(e), "dlab"), So = {
    mode: "dlab",
    parse: ["--din99o-lab"],
    serialize: "--din99o-lab",
    toMode: {
      lab65: Vt,
      rgb: (e) => ge(Vt(e))
    },
    fromMode: {
      lab65: ea,
      rgb: (e) => ea(me(e))
    },
    channels: ["l", "a", "b", "alpha"],
    ranges: {
      l: [0, 100],
      a: [-40.09, 45.501],
      b: [-40.469, 44.344]
    },
    interpolate: {
      l: s,
      a: s,
      b: s,
      alpha: {
        use: s,
        fixup: z
      }
    }
  }, ta = So, Xo = {
    mode: "dlch",
    parse: ["--din99o-lch"],
    serialize: "--din99o-lch",
    toMode: {
      lab65: Ce,
      dlab: (e) => J(e, "dlab"),
      rgb: (e) => ge(Ce(e))
    },
    fromMode: {
      lab65: Ie,
      dlab: (e) => j(e, "dlch"),
      rgb: (e) => Ie(me(e))
    },
    channels: ["l", "c", "h", "alpha"],
    ranges: {
      l: [0, 100],
      c: [0, 51.484],
      h: [0, 360]
    },
    interpolate: {
      l: s,
      c: s,
      h: {
        use: s,
        fixup: B
      },
      alpha: {
        use: s,
        fixup: z
      }
    },
    difference: {
      h: ce
    },
    average: {
      h: D
    }
  }, aa = Xo;
  function ra({ h: e, s: t, i: a, alpha: r }) {
    e = R(e !== void 0 ? e : 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = Math.abs(e / 60 % 2 - 1), i;
    switch (Math.floor(e / 60)) {
      case 0:
        i = {
          r: a * (1 + t * (3 / (2 - o) - 1)),
          g: a * (1 + t * (3 * (1 - o) / (2 - o) - 1)),
          b: a * (1 - t)
        };
        break;
      case 1:
        i = {
          r: a * (1 + t * (3 * (1 - o) / (2 - o) - 1)),
          g: a * (1 + t * (3 / (2 - o) - 1)),
          b: a * (1 - t)
        };
        break;
      case 2:
        i = {
          r: a * (1 - t),
          g: a * (1 + t * (3 / (2 - o) - 1)),
          b: a * (1 + t * (3 * (1 - o) / (2 - o) - 1))
        };
        break;
      case 3:
        i = {
          r: a * (1 - t),
          g: a * (1 + t * (3 * (1 - o) / (2 - o) - 1)),
          b: a * (1 + t * (3 / (2 - o) - 1))
        };
        break;
      case 4:
        i = {
          r: a * (1 + t * (3 * (1 - o) / (2 - o) - 1)),
          g: a * (1 - t),
          b: a * (1 + t * (3 / (2 - o) - 1))
        };
        break;
      case 5:
        i = {
          r: a * (1 + t * (3 / (2 - o) - 1)),
          g: a * (1 - t),
          b: a * (1 + t * (3 * (1 - o) / (2 - o) - 1))
        };
        break;
      default:
        i = { r: a * (1 - t), g: a * (1 - t), b: a * (1 - t) };
    }
    return i.mode = "rgb", r !== void 0 && (i.alpha = r), i;
  }
  function oa({ r: e, g: t, b: a, alpha: r }) {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = Math.max(e, t, a), i = Math.min(e, t, a), n = {
      mode: "hsi",
      s: e + t + a === 0 ? 0 : 1 - 3 * i / (e + t + a),
      i: (e + t + a) / 3
    };
    return o - i !== 0 && (n.h = (o === e ? (t - a) / (o - i) + (t < a) * 6 : o === t ? (a - e) / (o - i) + 2 : (e - t) / (o - i) + 4) * 60), r !== void 0 && (n.alpha = r), n;
  }
  var Ho = {
    mode: "hsi",
    toMode: {
      rgb: ra
    },
    parse: ["--hsi"],
    serialize: "--hsi",
    fromMode: {
      rgb: oa
    },
    channels: ["h", "s", "i", "alpha"],
    ranges: {
      h: [0, 360]
    },
    gamut: "rgb",
    interpolate: {
      h: { use: s, fixup: B },
      s,
      i: s,
      alpha: { use: s, fixup: z }
    },
    difference: {
      h: be
    },
    average: {
      h: D
    }
  }, ia = Ho;
  function na({ h: e, s: t, l: a, alpha: r }) {
    e = R(e !== void 0 ? e : 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = a + t * (a < 0.5 ? a : 1 - a), i = o - (o - a) * 2 * Math.abs(e / 60 % 2 - 1), n;
    switch (Math.floor(e / 60)) {
      case 0:
        n = { r: o, g: i, b: 2 * a - o };
        break;
      case 1:
        n = { r: i, g: o, b: 2 * a - o };
        break;
      case 2:
        n = { r: 2 * a - o, g: o, b: i };
        break;
      case 3:
        n = { r: 2 * a - o, g: i, b: o };
        break;
      case 4:
        n = { r: i, g: 2 * a - o, b: o };
        break;
      case 5:
        n = { r: o, g: 2 * a - o, b: i };
        break;
      default:
        n = { r: 2 * a - o, g: 2 * a - o, b: 2 * a - o };
    }
    return n.mode = "rgb", r !== void 0 && (n.alpha = r), n;
  }
  function la({ r: e, g: t, b: a, alpha: r }) {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = Math.max(e, t, a), i = Math.min(e, t, a), n = {
      mode: "hsl",
      s: o === i ? 0 : (o - i) / (1 - Math.abs(o + i - 1)),
      l: 0.5 * (o + i)
    };
    return o - i !== 0 && (n.h = (o === e ? (t - a) / (o - i) + (t < a) * 6 : o === t ? (a - e) / (o - i) + 2 : (e - t) / (o - i) + 4) * 60), r !== void 0 && (n.alpha = r), n;
  }
  var No = (e, t) => {
    switch (t) {
      case "deg":
        return +e;
      case "rad":
        return e / Math.PI * 180;
      case "grad":
        return e / 10 * 9;
      case "turn":
        return e * 360;
    }
  }, $o = No, Co = new RegExp(
    `^hsla?\\(\\s*${Sr}${oe}${se}${oe}${se}\\s*(?:,\\s*${r0}\\s*)?\\)$`
  ), Io = (e) => {
    let t = e.match(Co);
    if (!t)
      return;
    let a = { mode: "hsl" };
    return t[3] !== void 0 ? a.h = +t[3] : t[1] !== void 0 && t[2] !== void 0 && (a.h = $o(t[1], t[2])), t[4] !== void 0 && (a.s = Math.min(Math.max(0, t[4] / 100), 1)), t[5] !== void 0 && (a.l = Math.min(Math.max(0, t[5] / 100), 1)), t[6] !== void 0 ? a.alpha = Math.max(0, Math.min(1, t[6] / 100)) : t[7] !== void 0 && (a.alpha = Math.max(0, Math.min(1, +t[7]))), a;
  }, va = Io;
  function qo(e, t) {
    if (!t || t[0] !== "hsl" && t[0] !== "hsla")
      return;
    const a = { mode: "hsl" }, [, r, o, i, n] = t;
    if (r.type !== f.None) {
      if (r.type === f.Percentage)
        return;
      a.h = r.value;
    }
    if (o.type !== f.None) {
      if (o.type === f.Hue)
        return;
      a.s = o.value / 100;
    }
    if (i.type !== f.None) {
      if (i.type === f.Hue)
        return;
      a.l = i.value / 100;
    }
    return n.type !== f.None && (a.alpha = Math.min(
      1,
      Math.max(
        0,
        n.type === f.Number ? n.value : n.value / 100
      )
    )), a;
  }
  var da = qo, Oo = {
    mode: "hsl",
    toMode: {
      rgb: na
    },
    fromMode: {
      rgb: la
    },
    channels: ["h", "s", "l", "alpha"],
    ranges: {
      h: [0, 360]
    },
    gamut: "rgb",
    parse: [da, va],
    serialize: (e) => `hsl(${e.h !== void 0 ? e.h : "none"} ${e.s !== void 0 ? e.s * 100 + "%" : "none"} ${e.l !== void 0 ? e.l * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
    interpolate: {
      h: { use: s, fixup: B },
      s,
      l: s,
      alpha: { use: s, fixup: z }
    },
    difference: {
      h: be
    },
    average: {
      h: D
    }
  }, M0 = Oo;
  function y0({ h: e, s: t, v: a, alpha: r }) {
    e = R(e !== void 0 ? e : 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = Math.abs(e / 60 % 2 - 1), i;
    switch (Math.floor(e / 60)) {
      case 0:
        i = { r: a, g: a * (1 - t * o), b: a * (1 - t) };
        break;
      case 1:
        i = { r: a * (1 - t * o), g: a, b: a * (1 - t) };
        break;
      case 2:
        i = { r: a * (1 - t), g: a, b: a * (1 - t * o) };
        break;
      case 3:
        i = { r: a * (1 - t), g: a * (1 - t * o), b: a };
        break;
      case 4:
        i = { r: a * (1 - t * o), g: a * (1 - t), b: a };
        break;
      case 5:
        i = { r: a, g: a * (1 - t), b: a * (1 - t * o) };
        break;
      default:
        i = { r: a * (1 - t), g: a * (1 - t), b: a * (1 - t) };
    }
    return i.mode = "rgb", r !== void 0 && (i.alpha = r), i;
  }
  function _0({ r: e, g: t, b: a, alpha: r }) {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = Math.max(e, t, a), i = Math.min(e, t, a), n = {
      mode: "hsv",
      s: o === 0 ? 0 : 1 - i / o,
      v: o
    };
    return o - i !== 0 && (n.h = (o === e ? (t - a) / (o - i) + (t < a) * 6 : o === t ? (a - e) / (o - i) + 2 : (e - t) / (o - i) + 4) * 60), r !== void 0 && (n.alpha = r), n;
  }
  var Bo = {
    mode: "hsv",
    toMode: {
      rgb: y0
    },
    parse: ["--hsv"],
    serialize: "--hsv",
    fromMode: {
      rgb: _0
    },
    channels: ["h", "s", "v", "alpha"],
    ranges: {
      h: [0, 360]
    },
    gamut: "rgb",
    interpolate: {
      h: { use: s, fixup: B },
      s,
      v: s,
      alpha: { use: s, fixup: z }
    },
    difference: {
      h: be
    },
    average: {
      h: D
    }
  }, T0 = Bo;
  function ua({ h: e, w: t, b: a, alpha: r }) {
    if (t === void 0 && (t = 0), a === void 0 && (a = 0), t + a > 1) {
      let o = t + a;
      t /= o, a /= o;
    }
    return y0({
      h: e,
      s: a === 1 ? 1 : 1 - t / (1 - a),
      v: 1 - a,
      alpha: r
    });
  }
  function fa(e) {
    let t = _0(e);
    if (t === void 0)
      return;
    let a = t.s !== void 0 ? t.s : 0, r = t.v !== void 0 ? t.v : 0, o = {
      mode: "hwb",
      w: (1 - a) * r,
      b: 1 - r
    };
    return t.h !== void 0 && (o.h = t.h), t.alpha !== void 0 && (o.alpha = t.alpha), o;
  }
  function Do(e, t) {
    if (!t || t[0] !== "hwb")
      return;
    const a = { mode: "hwb" }, [, r, o, i, n] = t;
    if (r.type !== f.None) {
      if (r.type === f.Percentage)
        return;
      a.h = r.value;
    }
    if (o.type !== f.None) {
      if (o.type === f.Hue)
        return;
      a.w = o.value / 100;
    }
    if (i.type !== f.None) {
      if (i.type === f.Hue)
        return;
      a.b = i.value / 100;
    }
    return n.type !== f.None && (a.alpha = Math.min(
      1,
      Math.max(
        0,
        n.type === f.Number ? n.value : n.value / 100
      )
    )), a;
  }
  var ha = Do, Ao = {
    mode: "hwb",
    toMode: {
      rgb: ua
    },
    fromMode: {
      rgb: fa
    },
    channels: ["h", "w", "b", "alpha"],
    ranges: {
      h: [0, 360]
    },
    gamut: "rgb",
    parse: [ha],
    serialize: (e) => `hwb(${e.h !== void 0 ? e.h : "none"} ${e.w !== void 0 ? e.w * 100 + "%" : "none"} ${e.b !== void 0 ? e.b * 100 + "%" : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
    interpolate: {
      h: { use: s, fixup: B },
      w: s,
      b: s,
      alpha: { use: s, fixup: z }
    },
    difference: {
      h: Gt
    },
    average: {
      h: D
    }
  }, sa = Ao, pa = 203, qe = 0.1593017578125, ba = 78.84375, Oe = 0.8359375, Be = 18.8515625, De = 18.6875;
  function x0(e) {
    if (e < 0)
      return 0;
    const t = Math.pow(e, 1 / ba);
    return 1e4 * Math.pow(Math.max(0, t - Oe) / (Be - De * t), 1 / qe);
  }
  function z0(e) {
    if (e < 0)
      return 0;
    const t = Math.pow(e / 1e4, qe);
    return Math.pow((Oe + Be * t) / (1 + De * t), ba);
  }
  var k0 = (e) => Math.max(e / pa, 0), jo = ({ i: e, t, p: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    const o = x0(
      e + 0.008609037037932761 * t + 0.11102962500302593 * a
    ), i = x0(
      e - 0.00860903703793275 * t - 0.11102962500302599 * a
    ), n = x0(
      e + 0.5600313357106791 * t - 0.32062717498731885 * a
    ), l = {
      mode: "xyz65",
      x: k0(
        2.070152218389422 * o - 1.3263473389671556 * i + 0.2066510476294051 * n
      ),
      y: k0(
        0.3647385209748074 * o + 0.680566024947227 * i - 0.0453045459220346 * n
      ),
      z: k0(
        -0.049747207535812 * o - 0.0492609666966138 * i + 1.1880659249923042 * n
      )
    };
    return r !== void 0 && (l.alpha = r), l;
  }, w0 = jo, L0 = (e = 0) => Math.max(e * pa, 0), Jo = ({ x: e, y: t, z: a, alpha: r }) => {
    const o = L0(e), i = L0(t), n = L0(a), l = z0(
      0.3592832590121217 * o + 0.6976051147779502 * i - 0.0358915932320289 * n
    ), v = z0(
      -0.1920808463704995 * o + 1.1004767970374323 * i + 0.0753748658519118 * n
    ), h = z0(
      0.0070797844607477 * o + 0.0748396662186366 * i + 0.8433265453898765 * n
    ), d = 0.5 * l + 0.5 * v, u = 1.61376953125 * l - 3.323486328125 * v + 1.709716796875 * h, b = 4.378173828125 * l - 4.24560546875 * v - 0.132568359375 * h, p = { mode: "itp", i: d, t: u, p: b };
    return r !== void 0 && (p.alpha = r), p;
  }, R0 = Jo, Eo = {
    mode: "itp",
    channels: ["i", "t", "p", "alpha"],
    parse: ["--ictcp"],
    serialize: "--ictcp",
    toMode: {
      xyz65: w0,
      rgb: (e) => G(w0(e))
    },
    fromMode: {
      xyz65: R0,
      rgb: (e) => R0(Y(e))
    },
    ranges: {
      i: [0, 0.581],
      t: [-0.369, 0.272],
      p: [-0.164, 0.331]
    },
    interpolate: {
      i: s,
      t: s,
      p: s,
      alpha: { use: s, fixup: z }
    }
  }, ca = Eo, Yo = 134.03437499999998, Go = 16295499532821565e-27, P0 = (e) => {
    if (e < 0)
      return 0;
    let t = Math.pow(e / 1e4, qe);
    return Math.pow((Oe + Be * t) / (1 + De * t), Yo);
  }, S0 = (e = 0) => Math.max(e * 203, 0), Zo = ({ x: e, y: t, z: a, alpha: r }) => {
    e = S0(e), t = S0(t), a = S0(a);
    let o = 1.15 * e - 0.15 * a, i = 0.66 * t + 0.34 * e, n = P0(0.41478972 * o + 0.579999 * i + 0.014648 * a), l = P0(-0.20151 * o + 1.120649 * i + 0.0531008 * a), v = P0(-0.0166008 * o + 0.2648 * i + 0.6684799 * a), h = (n + l) / 2, d = {
      mode: "jab",
      j: 0.44 * h / (1 - 0.56 * h) - Go,
      a: 3.524 * n - 4.066708 * l + 0.542708 * v,
      b: 0.199076 * n + 1.096799 * l - 1.295875 * v
    };
    return r !== void 0 && (d.alpha = r), d;
  }, X0 = Zo, Fo = 134.03437499999998, ga = 16295499532821565e-27, H0 = (e) => {
    if (e < 0)
      return 0;
    let t = Math.pow(e, 1 / Fo);
    return 1e4 * Math.pow((Oe - t) / (De * t - Be), 1 / qe);
  }, N0 = (e) => e / 203, Wo = ({ j: e, a: t, b: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = (e + ga) / (0.44 + 0.56 * (e + ga)), i = H0(o + 0.13860504 * t + 0.058047316 * a), n = H0(o - 0.13860504 * t - 0.058047316 * a), l = H0(o - 0.096019242 * t - 0.8118919 * a), v = {
      mode: "xyz65",
      x: N0(
        1.661373024652174 * i - 0.914523081304348 * n + 0.23136208173913045 * l
      ),
      y: N0(
        -0.3250758611844533 * i + 1.571847026732543 * n - 0.21825383453227928 * l
      ),
      z: N0(-0.090982811 * i - 0.31272829 * n + 1.5227666 * l)
    };
    return r !== void 0 && (v.alpha = r), v;
  }, $0 = Wo, Uo = (e) => {
    let t = X0(Y(e));
    return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
  }, C0 = Uo, Ko = (e) => G($0(e)), I0 = Ko, Qo = {
    mode: "jab",
    channels: ["j", "a", "b", "alpha"],
    parse: ["--jzazbz"],
    serialize: "--jzazbz",
    fromMode: {
      rgb: C0,
      xyz65: X0
    },
    toMode: {
      rgb: I0,
      xyz65: $0
    },
    ranges: {
      j: [0, 0.222],
      a: [-0.109, 0.129],
      b: [-0.185, 0.134]
    },
    interpolate: {
      j: s,
      a: s,
      b: s,
      alpha: { use: s, fixup: z }
    }
  }, ma = Qo, Vo = ({ j: e, a: t, b: a, alpha: r }) => {
    t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = Math.sqrt(t * t + a * a), i = {
      mode: "jch",
      j: e,
      c: o
    };
    return o && (i.h = R(Math.atan2(a, t) * 180 / Math.PI)), r !== void 0 && (i.alpha = r), i;
  }, q0 = Vo, ei = ({ j: e, c: t, h: a, alpha: r }) => {
    a === void 0 && (a = 0);
    let o = {
      mode: "jab",
      j: e,
      a: t ? t * Math.cos(a / 180 * Math.PI) : 0,
      b: t ? t * Math.sin(a / 180 * Math.PI) : 0
    };
    return r !== void 0 && (o.alpha = r), o;
  }, O0 = ei, ti = {
    mode: "jch",
    parse: ["--jzczhz"],
    serialize: "--jzczhz",
    toMode: {
      jab: O0,
      rgb: (e) => I0(O0(e))
    },
    fromMode: {
      rgb: (e) => q0(C0(e)),
      jab: q0
    },
    channels: ["j", "c", "h", "alpha"],
    ranges: {
      j: [0, 0.221],
      c: [0, 0.19],
      h: [0, 360]
    },
    interpolate: {
      h: { use: s, fixup: B },
      c: s,
      j: s,
      alpha: { use: s, fixup: z }
    },
    difference: {
      h: ce
    },
    average: {
      h: D
    }
  }, Ma = ti, Ae = Math.pow(29, 3) / Math.pow(3, 3), B0 = Math.pow(6, 3) / Math.pow(29, 3), D0 = (e) => Math.pow(e, 3) > B0 ? Math.pow(e, 3) : (116 * e - 16) / Ae, ai = ({ l: e, a: t, b: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = (e + 16) / 116, i = t / 500 + o, n = o - a / 200, l = {
      mode: "xyz50",
      x: D0(i) * k.X,
      y: D0(o) * k.Y,
      z: D0(n) * k.Z
    };
    return r !== void 0 && (l.alpha = r), l;
  }, je = ai, ri = ({ x: e, y: t, z: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = K({
      r: e * 3.1341359569958707 - t * 1.6173863321612538 - 0.4906619460083532 * a,
      g: e * -0.978795502912089 + t * 1.916254567259524 + 0.03344273116131949 * a,
      b: e * 0.07195537988411677 - t * 0.2289768264158322 + 1.405386058324125 * a
    });
    return r !== void 0 && (o.alpha = r), o;
  }, ve = ri, oi = (e) => ve(je(e)), A0 = oi, ii = (e) => {
    let { r: t, g: a, b: r, alpha: o } = U(e), i = {
      mode: "xyz50",
      x: 0.436065742824811 * t + 0.3851514688337912 * a + 0.14307845442264197 * r,
      y: 0.22249319175623702 * t + 0.7168870538238823 * a + 0.06061979053616537 * r,
      z: 0.013923904500943465 * t + 0.09708128566574634 * a + 0.7140993584005155 * r
    };
    return o !== void 0 && (i.alpha = o), i;
  }, de = ii, j0 = (e) => e > B0 ? Math.cbrt(e) : (Ae * e + 16) / 116, ni = ({ x: e, y: t, z: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = j0(e / k.X), i = j0(t / k.Y), n = j0(a / k.Z), l = {
      mode: "lab",
      l: 116 * i - 16,
      a: 500 * (o - i),
      b: 200 * (i - n)
    };
    return r !== void 0 && (l.alpha = r), l;
  }, Je = ni, li = (e) => {
    let t = Je(de(e));
    return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
  }, J0 = li;
  function vi(e, t) {
    if (!t || t[0] !== "lab")
      return;
    const a = { mode: "lab" }, [, r, o, i, n] = t;
    if (!(r.type === f.Hue || o.type === f.Hue || i.type === f.Hue))
      return r.type !== f.None && (a.l = Math.min(Math.max(0, r.value), 100)), o.type !== f.None && (a.a = o.type === f.Number ? o.value : o.value * 125 / 100), i.type !== f.None && (a.b = i.type === f.Number ? i.value : i.value * 125 / 100), n.type !== f.None && (a.alpha = Math.min(
        1,
        Math.max(
          0,
          n.type === f.Number ? n.value : n.value / 100
        )
      )), a;
  }
  var ya = vi, di = {
    mode: "lab",
    toMode: {
      xyz50: je,
      rgb: A0
    },
    fromMode: {
      xyz50: Je,
      rgb: J0
    },
    channels: ["l", "a", "b", "alpha"],
    ranges: {
      l: [0, 100],
      a: [-100, 100],
      b: [-100, 100]
    },
    parse: [ya],
    serialize: (e) => `lab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
    interpolate: {
      l: s,
      a: s,
      b: s,
      alpha: { use: s, fixup: z }
    }
  }, Ee = di, ui = {
    ...Ee,
    mode: "lab65",
    parse: ["--lab-d65"],
    serialize: "--lab-d65",
    toMode: {
      xyz65: c0,
      rgb: ge
    },
    fromMode: {
      xyz65: m0,
      rgb: me
    },
    ranges: {
      l: [0, 100],
      a: [-86.182, 98.234],
      b: [-107.86, 94.477]
    }
  }, _a = ui;
  function fi(e, t) {
    if (!t || t[0] !== "lch")
      return;
    const a = { mode: "lch" }, [, r, o, i, n] = t;
    if (r.type !== f.None) {
      if (r.type === f.Hue)
        return;
      a.l = Math.min(Math.max(0, r.value), 100);
    }
    if (o.type !== f.None && (a.c = Math.max(
      0,
      o.type === f.Number ? o.value : o.value * 150 / 100
    )), i.type !== f.None) {
      if (i.type === f.Percentage)
        return;
      a.h = i.value;
    }
    return n.type !== f.None && (a.alpha = Math.min(
      1,
      Math.max(
        0,
        n.type === f.Number ? n.value : n.value / 100
      )
    )), a;
  }
  var Ta = fi, hi = {
    mode: "lch",
    toMode: {
      lab: J,
      rgb: (e) => A0(J(e))
    },
    fromMode: {
      rgb: (e) => j(J0(e)),
      lab: j
    },
    channels: ["l", "c", "h", "alpha"],
    ranges: {
      l: [0, 100],
      c: [0, 150],
      h: [0, 360]
    },
    parse: [Ta],
    serialize: (e) => `lch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
    interpolate: {
      h: { use: s, fixup: B },
      c: s,
      l: s,
      alpha: { use: s, fixup: z }
    },
    difference: {
      h: ce
    },
    average: {
      h: D
    }
  }, Ye = hi, si = {
    ...Ye,
    mode: "lch65",
    parse: ["--lch-d65"],
    serialize: "--lch-d65",
    toMode: {
      lab65: (e) => J(e, "lab65"),
      rgb: (e) => ge(J(e, "lab65"))
    },
    fromMode: {
      rgb: (e) => j(me(e), "lch65"),
      lab65: (e) => j(e, "lch65")
    },
    ranges: {
      l: [0, 100],
      c: [0, 133.807],
      h: [0, 360]
    }
  }, xa = si, pi = ({ l: e, u: t, v: a, alpha: r }) => {
    t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = Math.sqrt(t * t + a * a), i = {
      mode: "lchuv",
      l: e,
      c: o
    };
    return o && (i.h = R(Math.atan2(a, t) * 180 / Math.PI)), r !== void 0 && (i.alpha = r), i;
  }, E0 = pi, bi = ({ l: e, c: t, h: a, alpha: r }) => {
    a === void 0 && (a = 0);
    let o = {
      mode: "luv",
      l: e,
      u: t ? t * Math.cos(a / 180 * Math.PI) : 0,
      v: t ? t * Math.sin(a / 180 * Math.PI) : 0
    };
    return r !== void 0 && (o.alpha = r), o;
  }, Y0 = bi, za = (e, t, a) => 4 * e / (e + 15 * t + 3 * a), ka = (e, t, a) => 9 * t / (e + 15 * t + 3 * a), ci = za(k.X, k.Y, k.Z), gi = ka(k.X, k.Y, k.Z), mi = (e) => e <= B0 ? Ae * e : 116 * Math.cbrt(e) - 16, Mi = ({ x: e, y: t, z: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = mi(t / k.Y), i = za(e, t, a), n = ka(e, t, a);
    !isFinite(i) || !isFinite(n) ? o = i = n = 0 : (i = 13 * o * (i - ci), n = 13 * o * (n - gi));
    let l = {
      mode: "luv",
      l: o,
      u: i,
      v: n
    };
    return r !== void 0 && (l.alpha = r), l;
  }, Ge = Mi, yi = (e, t, a) => 4 * e / (e + 15 * t + 3 * a), _i = (e, t, a) => 9 * t / (e + 15 * t + 3 * a), Ti = yi(k.X, k.Y, k.Z), xi = _i(k.X, k.Y, k.Z), zi = ({ l: e, u: t, v: a, alpha: r }) => {
    if (e === void 0 && (e = 0), e === 0)
      return { mode: "xyz50", x: 0, y: 0, z: 0 };
    t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = t / (13 * e) + Ti, i = a / (13 * e) + xi, n = k.Y * (e <= 8 ? e / Ae : Math.pow((e + 16) / 116, 3)), l = n * (9 * o) / (4 * i), v = n * (12 - 3 * o - 20 * i) / (4 * i), h = { mode: "xyz50", x: l, y: n, z: v };
    return r !== void 0 && (h.alpha = r), h;
  }, Ze = zi, ki = (e) => E0(Ge(de(e))), wi = (e) => ve(Ze(Y0(e))), Li = {
    mode: "lchuv",
    toMode: {
      luv: Y0,
      rgb: wi
    },
    fromMode: {
      rgb: ki,
      luv: E0
    },
    channels: ["l", "c", "h", "alpha"],
    parse: ["--lchuv"],
    serialize: "--lchuv",
    ranges: {
      l: [0, 100],
      c: [0, 176.956],
      h: [0, 360]
    },
    interpolate: {
      h: { use: s, fixup: B },
      c: s,
      l: s,
      alpha: { use: s, fixup: z }
    },
    difference: {
      h: ce
    },
    average: {
      h: D
    }
  }, wa = Li, Ri = {
    ...W,
    mode: "lrgb",
    toMode: {
      rgb: K
    },
    fromMode: {
      rgb: U
    },
    parse: ["srgb-linear"],
    serialize: "srgb-linear"
  }, La = Ri, Pi = {
    mode: "luv",
    toMode: {
      xyz50: Ze,
      rgb: (e) => ve(Ze(e))
    },
    fromMode: {
      xyz50: Ge,
      rgb: (e) => Ge(de(e))
    },
    channels: ["l", "u", "v", "alpha"],
    parse: ["--luv"],
    serialize: "--luv",
    ranges: {
      l: [0, 100],
      u: [-84.936, 175.042],
      v: [-125.882, 87.243]
    },
    interpolate: {
      l: s,
      u: s,
      v: s,
      alpha: { use: s, fixup: z }
    }
  }, Ra = Pi, Si = ({ r: e, g: t, b: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = Math.cbrt(
      0.41222147079999993 * e + 0.5363325363 * t + 0.0514459929 * a
    ), i = Math.cbrt(
      0.2119034981999999 * e + 0.6806995450999999 * t + 0.1073969566 * a
    ), n = Math.cbrt(
      0.08830246189999998 * e + 0.2817188376 * t + 0.6299787005000002 * a
    ), l = {
      mode: "oklab",
      l: 0.2104542553 * o + 0.793617785 * i - 0.0040720468 * n,
      a: 1.9779984951 * o - 2.428592205 * i + 0.4505937099 * n,
      b: 0.0259040371 * o + 0.7827717662 * i - 0.808675766 * n
    };
    return r !== void 0 && (l.alpha = r), l;
  }, G0 = Si, Xi = (e) => {
    let t = G0(U(e));
    return e.r === e.b && e.b === e.g && (t.a = t.b = 0), t;
  }, ye = Xi, Hi = ({ l: e, a: t, b: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = Math.pow(
      e * 0.9999999984505198 + 0.39633779217376786 * t + 0.2158037580607588 * a,
      3
    ), i = Math.pow(
      e * 1.0000000088817609 - 0.10556134232365635 * t - 0.06385417477170591 * a,
      3
    ), n = Math.pow(
      e * 1.0000000546724108 - 0.08948418209496575 * t - 1.2914855378640917 * a,
      3
    ), l = {
      mode: "lrgb",
      r: 4.076741661347994 * o - 3.307711590408193 * i + 0.230969928729428 * n,
      g: -1.2684380040921763 * o + 2.6097574006633715 * i - 0.3413193963102197 * n,
      b: -0.004196086541837188 * o - 0.7034186144594493 * i + 1.7076147009309444 * n
    };
    return r !== void 0 && (l.alpha = r), l;
  }, ue = Hi, Ni = (e) => K(ue(e)), _e = Ni;
  function Z0(e) {
    const r = 1.170873786407767;
    return 0.5 * (r * e - 0.206 + Math.sqrt((r * e - 0.206) * (r * e - 0.206) + 4 * 0.03 * r * e));
  }
  function Fe(e) {
    return (e * e + 0.206 * e) / (1.170873786407767 * (e + 0.03));
  }
  function $i(e, t) {
    let a, r, o, i, n, l, v, h;
    -1.88170328 * e - 0.80936493 * t > 1 ? (a = 1.19086277, r = 1.76576728, o = 0.59662641, i = 0.75515197, n = 0.56771245, l = 4.0767416621, v = -3.3077115913, h = 0.2309699292) : 1.81444104 * e - 1.19445276 * t > 1 ? (a = 0.73956515, r = -0.45954404, o = 0.08285427, i = 0.1254107, n = 0.14503204, l = -1.2684380046, v = 2.6097574011, h = -0.3413193965) : (a = 1.35733652, r = -915799e-8, o = -1.1513021, i = -0.50559606, n = 692167e-8, l = -0.0041960863, v = -0.7034186147, h = 1.707614701);
    let d = a + r * e + o * t + i * e * e + n * e * t, u = 0.3963377774 * e + 0.2158037573 * t, b = -0.1055613458 * e - 0.0638541728 * t, p = -0.0894841775 * e - 1.291485548 * t;
    {
      let c = 1 + d * u, M = 1 + d * b, m = 1 + d * p, _ = c * c * c, x = M * M * M, w = m * m * m, S = 3 * u * c * c, X = 3 * b * M * M, H = 3 * p * m * m, N = 6 * u * u * c, te = 6 * b * b * M, Z = 6 * p * p * m, I = l * _ + v * x + h * w, A = l * S + v * X + h * H, ae = l * N + v * te + h * Z;
      d = d - I * A / (A * A - 0.5 * I * ae);
    }
    return d;
  }
  function F0(e, t) {
    let a = $i(e, t), r = ue({ l: 1, a: a * e, b: a * t }), o = Math.cbrt(1 / Math.max(r.r, r.g, r.b)), i = o * a;
    return [o, i];
  }
  function Ci(e, t, a, r, o, i = null) {
    i || (i = F0(e, t));
    let n;
    if ((a - o) * i[1] - (i[0] - o) * r <= 0)
      n = i[1] * o / (r * i[0] + i[1] * (o - a));
    else {
      n = i[1] * (o - 1) / (r * (i[0] - 1) + i[1] * (o - a));
      {
        let l = a - o, v = r, h = 0.3963377774 * e + 0.2158037573 * t, d = -0.1055613458 * e - 0.0638541728 * t, u = -0.0894841775 * e - 1.291485548 * t, b = l + v * h, p = l + v * d, c = l + v * u;
        {
          let M = o * (1 - n) + n * a, m = n * r, _ = M + m * h, x = M + m * d, w = M + m * u, S = _ * _ * _, X = x * x * x, H = w * w * w, N = 3 * b * _ * _, te = 3 * p * x * x, Z = 3 * c * w * w, I = 6 * b * b * _, A = 6 * p * p * x, ae = 6 * c * c * w, re = 4.0767416621 * S - 3.3077115913 * X + 0.2309699292 * H - 1, $ = 4.0767416621 * N - 3.3077115913 * te + 0.2309699292 * Z, Ve = 4.0767416621 * I - 3.3077115913 * A + 0.2309699292 * ae, e0 = $ / ($ * $ - 0.5 * re * Ve), ke = -re * e0, we = -1.2684380046 * S + 2.6097574011 * X - 0.3413193965 * H - 1, he = -1.2684380046 * N + 2.6097574011 * te - 0.3413193965 * Z, zt = -1.2684380046 * I + 2.6097574011 * A - 0.3413193965 * ae, t0 = he / (he * he - 0.5 * we * zt), Le = -we * t0, gr = -0.0041960863 * S - 0.7034186147 * X + 1.707614701 * H - 1, kt = -0.0041960863 * N - 0.7034186147 * te + 1.707614701 * Z, Gn = -0.0041960863 * I - 0.7034186147 * A + 1.707614701 * ae, mr = kt / (kt * kt - 0.5 * gr * Gn), wt = -gr * mr;
          ke = e0 >= 0 ? ke : 1e6, Le = t0 >= 0 ? Le : 1e6, wt = mr >= 0 ? wt : 1e6, n += Math.min(ke, Math.min(Le, wt));
        }
      }
    }
    return n;
  }
  function W0(e, t, a = null) {
    a || (a = F0(e, t));
    let r = a[0], o = a[1];
    return [o / r, o / (1 - r)];
  }
  function Pa(e, t, a) {
    let r = F0(t, a), o = Ci(t, a, e, 1, e, r), i = W0(t, a, r), n = 0.11516993 + 1 / (7.4477897 + 4.1590124 * a + t * (-2.19557347 + 1.75198401 * a + t * (-2.13704948 - 10.02301043 * a + t * (-4.24894561 + 5.38770819 * a + 4.69891013 * t)))), l = 0.11239642 + 1 / (1.6132032 - 0.68124379 * a + t * (0.40370612 + 0.90148123 * a + t * (-0.27087943 + 0.6122399 * a + t * (299215e-8 - 0.45399568 * a - 0.14661872 * t)))), v = o / Math.min(e * i[0], (1 - e) * i[1]), h = e * n, d = (1 - e) * l, u = 0.9 * v * Math.sqrt(
      Math.sqrt(
        1 / (1 / (h * h * h * h) + 1 / (d * d * d * d))
      )
    );
    return h = e * 0.4, d = (1 - e) * 0.8, [Math.sqrt(1 / (1 / (h * h) + 1 / (d * d))), u, o];
  }
  function U0(e) {
    const t = e.l !== void 0 ? e.l : 0, a = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, o = { mode: "okhsl", l: Z0(t) };
    e.alpha !== void 0 && (o.alpha = e.alpha);
    let i = Math.sqrt(a * a + r * r);
    if (!i)
      return o.s = 0, o;
    let [n, l, v] = Pa(t, a / i, r / i), h;
    if (i < l) {
      let d = 0, u = 0.8 * n, b = 1 - u / l;
      h = (i - d) / (u + b * (i - d)) * 0.8;
    } else {
      let d = l, u = 0.2 * l * l * 1.25 * 1.25 / n, b = 1 - u / (v - l);
      h = 0.8 + 0.2 * ((i - d) / (u + b * (i - d)));
    }
    return h && (o.s = h, o.h = R(Math.atan2(r, a) * 180 / Math.PI)), o;
  }
  function K0(e) {
    let t = e.h !== void 0 ? e.h : 0, a = e.s !== void 0 ? e.s : 0, r = e.l !== void 0 ? e.l : 0;
    const o = { mode: "oklab", l: Fe(r) };
    if (e.alpha !== void 0 && (o.alpha = e.alpha), !a || r === 1)
      return o.a = o.b = 0, o;
    let i = Math.cos(t / 180 * Math.PI), n = Math.sin(t / 180 * Math.PI), [l, v, h] = Pa(o.l, i, n), d, u, b, p;
    a < 0.8 ? (d = 1.25 * a, u = 0, b = 0.8 * l, p = 1 - b / v) : (d = 5 * (a - 0.8), u = v, b = 0.2 * v * v * 1.25 * 1.25 / l, p = 1 - b / (h - v));
    let c = u + d * b / (1 - p * d);
    return o.a = c * i, o.b = c * n, o;
  }
  var Ii = {
    ...M0,
    mode: "okhsl",
    channels: ["h", "s", "l", "alpha"],
    parse: ["--okhsl"],
    serialize: "--okhsl",
    fromMode: {
      oklab: U0,
      rgb: (e) => U0(ye(e))
    },
    toMode: {
      oklab: K0,
      rgb: (e) => _e(K0(e))
    }
  }, Sa = Ii;
  function Q0(e) {
    let t = e.l !== void 0 ? e.l : 0, a = e.a !== void 0 ? e.a : 0, r = e.b !== void 0 ? e.b : 0, o = Math.sqrt(a * a + r * r), i = o ? a / o : 1, n = o ? r / o : 1, [l, v] = W0(i, n), h = 0.5, d = 1 - h / l, u = v / (o + t * v), b = u * t, p = u * o, c = Fe(b), M = p * c / b, m = ue({ l: c, a: i * M, b: n * M }), _ = Math.cbrt(
      1 / Math.max(m.r, m.g, m.b, 0)
    );
    t = t / _, o = o / _ * Z0(t) / t, t = Z0(t);
    const x = {
      mode: "okhsv",
      s: o ? (h + v) * p / (v * h + v * d * p) : 0,
      v: t ? t / b : 0
    };
    return x.s && (x.h = R(Math.atan2(r, a) * 180 / Math.PI)), e.alpha !== void 0 && (x.alpha = e.alpha), x;
  }
  function V0(e) {
    const t = { mode: "oklab" };
    e.alpha !== void 0 && (t.alpha = e.alpha);
    const a = e.h !== void 0 ? e.h : 0, r = e.s !== void 0 ? e.s : 0, o = e.v !== void 0 ? e.v : 0, i = Math.cos(a / 180 * Math.PI), n = Math.sin(a / 180 * Math.PI), [l, v] = W0(i, n), h = 0.5, d = 1 - h / l, u = 1 - r * h / (h + v - v * d * r), b = r * v * h / (h + v - v * d * r), p = Fe(u), c = b * p / u, M = ue({
      l: p,
      a: i * c,
      b: n * c
    }), m = Math.cbrt(
      1 / Math.max(M.r, M.g, M.b, 0)
    ), _ = Fe(o * u), x = b * _ / u;
    return t.l = _ * m, t.a = x * i * m, t.b = x * n * m, t;
  }
  var qi = {
    ...T0,
    mode: "okhsv",
    channels: ["h", "s", "v", "alpha"],
    parse: ["--okhsv"],
    serialize: "--okhsv",
    fromMode: {
      oklab: Q0,
      rgb: (e) => Q0(ye(e))
    },
    toMode: {
      oklab: V0,
      rgb: (e) => _e(V0(e))
    }
  }, Xa = qi;
  function Oi(e, t) {
    if (!t || t[0] !== "oklab")
      return;
    const a = { mode: "oklab" }, [, r, o, i, n] = t;
    if (!(r.type === f.Hue || o.type === f.Hue || i.type === f.Hue))
      return r.type !== f.None && (a.l = Math.min(
        Math.max(0, r.type === f.Number ? r.value : r.value / 100),
        1
      )), o.type !== f.None && (a.a = o.type === f.Number ? o.value : o.value * 0.4 / 100), i.type !== f.None && (a.b = i.type === f.Number ? i.value : i.value * 0.4 / 100), n.type !== f.None && (a.alpha = Math.min(
        1,
        Math.max(
          0,
          n.type === f.Number ? n.value : n.value / 100
        )
      )), a;
  }
  var Ha = Oi, Bi = {
    ...Ee,
    mode: "oklab",
    toMode: {
      lrgb: ue,
      rgb: _e
    },
    fromMode: {
      lrgb: G0,
      rgb: ye
    },
    ranges: {
      l: [0, 1],
      a: [-0.4, 0.4],
      b: [-0.4, 0.4]
    },
    parse: [Ha],
    serialize: (e) => `oklab(${e.l !== void 0 ? e.l : "none"} ${e.a !== void 0 ? e.a : "none"} ${e.b !== void 0 ? e.b : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`
  }, Na = Bi;
  function Di(e, t) {
    if (!t || t[0] !== "oklch")
      return;
    const a = { mode: "oklch" }, [, r, o, i, n] = t;
    if (r.type !== f.None) {
      if (r.type === f.Hue)
        return;
      a.l = Math.min(
        Math.max(0, r.type === f.Number ? r.value : r.value / 100),
        1
      );
    }
    if (o.type !== f.None && (a.c = Math.max(
      0,
      o.type === f.Number ? o.value : o.value * 0.4 / 100
    )), i.type !== f.None) {
      if (i.type === f.Percentage)
        return;
      a.h = i.value;
    }
    return n.type !== f.None && (a.alpha = Math.min(
      1,
      Math.max(
        0,
        n.type === f.Number ? n.value : n.value / 100
      )
    )), a;
  }
  var $a = Di, Ai = {
    ...Ye,
    mode: "oklch",
    toMode: {
      oklab: (e) => J(e, "oklab"),
      rgb: (e) => _e(J(e, "oklab"))
    },
    fromMode: {
      rgb: (e) => j(ye(e), "oklch"),
      oklab: (e) => j(e, "oklch")
    },
    parse: [$a],
    serialize: (e) => `oklch(${e.l !== void 0 ? e.l : "none"} ${e.c !== void 0 ? e.c : "none"} ${e.h !== void 0 ? e.h : "none"}${e.alpha < 1 ? ` / ${e.alpha}` : ""})`,
    ranges: {
      l: [0, 1],
      c: [0, 0.4],
      h: [0, 360]
    }
  }, Ca = Ai, ji = (e) => {
    let { r: t, g: a, b: r, alpha: o } = U(e), i = {
      mode: "xyz65",
      x: 0.486570948648216 * t + 0.265667693169093 * a + 0.1982172852343625 * r,
      y: 0.2289745640697487 * t + 0.6917385218365062 * a + 0.079286914093745 * r,
      z: 0 * t + 0.0451133818589026 * a + 1.043944368900976 * r
    };
    return o !== void 0 && (i.alpha = o), i;
  }, et = ji, Ji = ({ x: e, y: t, z: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = K(
      {
        r: e * 2.4934969119414263 - t * 0.9313836179191242 - 0.402710784450717 * a,
        g: e * -0.8294889695615749 + t * 1.7626640603183465 + 0.0236246858419436 * a,
        b: e * 0.0358458302437845 - t * 0.0761723892680418 + 0.9568845240076871 * a
      },
      "p3"
    );
    return r !== void 0 && (o.alpha = r), o;
  }, tt = Ji, Ei = {
    ...W,
    mode: "p3",
    parse: ["display-p3"],
    serialize: "display-p3",
    fromMode: {
      rgb: (e) => tt(Y(e)),
      xyz65: tt
    },
    toMode: {
      rgb: (e) => G(et(e)),
      xyz65: et
    }
  }, Ia = Ei, at = (e) => {
    let t = Math.abs(e);
    return t >= 1 / 512 ? Math.sign(e) * Math.pow(t, 1 / 1.8) : 16 * e;
  }, Yi = ({ x: e, y: t, z: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = {
      mode: "prophoto",
      r: at(
        e * 1.3457868816471585 - t * 0.2555720873797946 - 0.0511018649755453 * a
      ),
      g: at(
        e * -0.5446307051249019 + t * 1.5082477428451466 + 0.0205274474364214 * a
      ),
      b: at(e * 0 + t * 0 + 1.2119675456389452 * a)
    };
    return r !== void 0 && (o.alpha = r), o;
  }, rt = Yi, ot = (e = 0) => {
    let t = Math.abs(e);
    return t >= 16 / 512 ? Math.sign(e) * Math.pow(t, 1.8) : e / 16;
  }, Gi = (e) => {
    let t = ot(e.r), a = ot(e.g), r = ot(e.b), o = {
      mode: "xyz50",
      x: 0.7977666449006423 * t + 0.1351812974005331 * a + 0.0313477341283922 * r,
      y: 0.2880748288194013 * t + 0.7118352342418731 * a + 899369387256e-16 * r,
      z: 0 * t + 0 * a + 0.8251046025104602 * r
    };
    return e.alpha !== void 0 && (o.alpha = e.alpha), o;
  }, it = Gi, Zi = {
    ...W,
    mode: "prophoto",
    parse: ["prophoto-rgb"],
    serialize: "prophoto-rgb",
    fromMode: {
      xyz50: rt,
      rgb: (e) => rt(de(e))
    },
    toMode: {
      xyz50: it,
      rgb: (e) => ve(it(e))
    }
  }, qa = Zi, Oa = 1.09929682680944, Fi = 0.018053968510807, nt = (e) => {
    const t = Math.abs(e);
    return t > Fi ? (Math.sign(e) || 1) * (Oa * Math.pow(t, 0.45) - (Oa - 1)) : 4.5 * e;
  }, Wi = ({ x: e, y: t, z: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    let o = {
      mode: "rec2020",
      r: nt(
        e * 1.7166511879712683 - t * 0.3556707837763925 - 0.2533662813736599 * a
      ),
      g: nt(
        e * -0.6666843518324893 + t * 1.6164812366349395 + 0.0157685458139111 * a
      ),
      b: nt(
        e * 0.0176398574453108 - t * 0.0427706132578085 + 0.9421031212354739 * a
      )
    };
    return r !== void 0 && (o.alpha = r), o;
  }, lt = Wi, Ba = 1.09929682680944, Ui = 0.018053968510807, vt = (e = 0) => {
    let t = Math.abs(e);
    return t < Ui * 4.5 ? e / 4.5 : (Math.sign(e) || 1) * Math.pow((t + Ba - 1) / Ba, 1 / 0.45);
  }, Ki = (e) => {
    let t = vt(e.r), a = vt(e.g), r = vt(e.b), o = {
      mode: "xyz65",
      x: 0.6369580483012911 * t + 0.1446169035862083 * a + 0.1688809751641721 * r,
      y: 0.262700212011267 * t + 0.6779980715188708 * a + 0.059301716469862 * r,
      z: 0 * t + 0.0280726930490874 * a + 1.0609850577107909 * r
    };
    return e.alpha !== void 0 && (o.alpha = e.alpha), o;
  }, dt = Ki, Qi = {
    ...W,
    mode: "rec2020",
    fromMode: {
      xyz65: lt,
      rgb: (e) => lt(Y(e))
    },
    toMode: {
      xyz65: dt,
      rgb: (e) => G(dt(e))
    },
    parse: ["rec2020"],
    serialize: "rec2020"
  }, Da = Qi, Q = 0.0037930732552754493, Aa = Math.cbrt(Q), ut = (e) => Math.cbrt(e) - Aa, Vi = (e) => {
    const { r: t, g: a, b: r, alpha: o } = U(e), i = ut(0.3 * t + 0.622 * a + 0.078 * r + Q), n = ut(0.23 * t + 0.692 * a + 0.078 * r + Q), l = ut(
      0.2434226892454782 * t + 0.2047674442449682 * a + 0.5518098665095535 * r + Q
    ), v = {
      mode: "xyb",
      x: (i - n) / 2,
      y: (i + n) / 2,
      /* Apply default chroma from luma (subtract Y from B) */
      b: l - (i + n) / 2
    };
    return o !== void 0 && (v.alpha = o), v;
  }, ja = Vi, ft = (e) => Math.pow(e + Aa, 3), e1 = ({ x: e, y: t, b: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    const o = ft(e + t) - Q, i = ft(t - e) - Q, n = ft(a + t) - Q, l = K({
      r: 11.031566904639861 * o - 9.866943908131562 * i - 0.16462299650829934 * n,
      g: -3.2541473810744237 * o + 4.418770377582723 * i - 0.16462299650829934 * n,
      b: -3.6588512867136815 * o + 2.7129230459360922 * i + 1.9459282407775895 * n
    });
    return r !== void 0 && (l.alpha = r), l;
  }, Ja = e1, t1 = {
    mode: "xyb",
    channels: ["x", "y", "b", "alpha"],
    parse: ["--xyb"],
    serialize: "--xyb",
    toMode: {
      rgb: Ja
    },
    fromMode: {
      rgb: ja
    },
    ranges: {
      x: [-0.0154, 0.0281],
      y: [0, 0.8453],
      b: [-0.2778, 0.388]
    },
    interpolate: {
      x: s,
      y: s,
      b: s,
      alpha: { use: s, fixup: z }
    }
  }, Ea = t1, a1 = {
    mode: "xyz50",
    parse: ["xyz-d50"],
    serialize: "xyz-d50",
    toMode: {
      rgb: ve,
      lab: Je
    },
    fromMode: {
      rgb: de,
      lab: je
    },
    channels: ["x", "y", "z", "alpha"],
    ranges: {
      x: [0, 0.964],
      y: [0, 0.999],
      z: [0, 0.825]
    },
    interpolate: {
      x: s,
      y: s,
      z: s,
      alpha: { use: s, fixup: z }
    }
  }, Ya = a1, r1 = (e) => {
    let { x: t, y: a, z: r, alpha: o } = e;
    t === void 0 && (t = 0), a === void 0 && (a = 0), r === void 0 && (r = 0);
    let i = {
      mode: "xyz50",
      x: 1.0479298208405488 * t + 0.0229467933410191 * a - 0.0501922295431356 * r,
      y: 0.0296278156881593 * t + 0.990434484573249 * a - 0.0170738250293851 * r,
      z: -0.0092430581525912 * t + 0.0150551448965779 * a + 0.7518742899580008 * r
    };
    return o !== void 0 && (i.alpha = o), i;
  }, Ga = r1, o1 = (e) => {
    let { x: t, y: a, z: r, alpha: o } = e;
    t === void 0 && (t = 0), a === void 0 && (a = 0), r === void 0 && (r = 0);
    let i = {
      mode: "xyz65",
      x: 0.9554734527042182 * t - 0.0230985368742614 * a + 0.0632593086610217 * r,
      y: -0.0283697069632081 * t + 1.0099954580058226 * a + 0.021041398966943 * r,
      z: 0.0123140016883199 * t - 0.0205076964334779 * a + 1.3303659366080753 * r
    };
    return o !== void 0 && (i.alpha = o), i;
  }, Za = o1, i1 = {
    mode: "xyz65",
    toMode: {
      rgb: G,
      xyz50: Ga
    },
    fromMode: {
      rgb: Y,
      xyz50: Za
    },
    ranges: {
      x: [0, 0.95],
      y: [0, 1],
      z: [0, 1.088]
    },
    channels: ["x", "y", "z", "alpha"],
    parse: ["xyz", "xyz-d65"],
    serialize: "xyz-d65",
    interpolate: {
      x: s,
      y: s,
      z: s,
      alpha: { use: s, fixup: z }
    }
  }, Fa = i1, n1 = ({ r: e, g: t, b: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    const o = {
      mode: "yiq",
      y: 0.29889531 * e + 0.58662247 * t + 0.11448223 * a,
      i: 0.59597799 * e - 0.2741761 * t - 0.32180189 * a,
      q: 0.21147017 * e - 0.52261711 * t + 0.31114694 * a
    };
    return r !== void 0 && (o.alpha = r), o;
  }, Wa = n1, l1 = ({ y: e, i: t, q: a, alpha: r }) => {
    e === void 0 && (e = 0), t === void 0 && (t = 0), a === void 0 && (a = 0);
    const o = {
      mode: "rgb",
      r: e + 0.95608445 * t + 0.6208885 * a,
      g: e - 0.27137664 * t - 0.6486059 * a,
      b: e - 1.10561724 * t + 1.70250126 * a
    };
    return r !== void 0 && (o.alpha = r), o;
  }, Ua = l1, v1 = {
    mode: "yiq",
    toMode: {
      rgb: Ua
    },
    fromMode: {
      rgb: Wa
    },
    channels: ["y", "i", "q", "alpha"],
    parse: ["--yiq"],
    serialize: "--yiq",
    ranges: {
      i: [-0.595, 0.595],
      q: [-0.522, 0.522]
    },
    interpolate: {
      y: s,
      i: s,
      q: s,
      alpha: { use: s, fixup: z }
    }
  }, Ka = v1, d1 = (e, t) => Math.round(e * (t = Math.pow(10, t))) / t, u1 = (e = 4) => (t) => typeof t == "number" ? d1(t, e) : t, Qa = u1, Te = Qa(2), xe = (e) => Math.max(0, Math.min(1, e || 0)), V = (e) => Math.round(xe(e) * 255), ht = T("rgb"), f1 = T("hsl"), st = (e) => {
    if (e === void 0)
      return;
    let t = V(e.r), a = V(e.g), r = V(e.b);
    return "#" + (1 << 24 | t << 16 | a << 8 | r).toString(16).slice(1);
  }, Va = (e) => {
    if (e === void 0)
      return;
    let t = V(e.alpha !== void 0 ? e.alpha : 1);
    return st(e) + (256 | t).toString(16).slice(1);
  }, er = (e) => {
    if (e === void 0)
      return;
    let t = V(e.r), a = V(e.g), r = V(e.b);
    return e.alpha === void 0 || e.alpha === 1 ? `rgb(${t}, ${a}, ${r})` : `rgba(${t}, ${a}, ${r}, ${Te(xe(e.alpha))})`;
  }, tr = (e) => {
    if (e === void 0)
      return;
    const t = Te(e.h || 0), a = Te(xe(e.s) * 100) + "%", r = Te(xe(e.l) * 100) + "%";
    return e.alpha === void 0 || e.alpha === 1 ? `hsl(${t}, ${a}, ${r})` : `hsla(${t}, ${a}, ${r}, ${Te(xe(e.alpha))})`;
  }, h1 = (e) => {
    const t = q(e);
    if (!t)
      return;
    const a = P(t.mode);
    if (!a.serialize || typeof a.serialize == "string") {
      let r = `color(${a.serialize || `--${t.mode}`} `;
      return a.channels.forEach((o, i) => {
        o !== "alpha" && (r += (i ? " " : "") + (t[o] !== void 0 ? t[o] : "none"));
      }), t.alpha !== void 0 && t.alpha < 1 && (r += ` / ${t.alpha}`), r + ")";
    }
    if (typeof a.serialize == "function")
      return a.serialize(t);
  }, s1 = (e) => st(ht(e)), p1 = (e) => Va(ht(e)), b1 = (e) => er(ht(e)), c1 = (e) => tr(f1(e)), g1 = {
    normal: (e, t) => t,
    multiply: (e, t) => e * t,
    screen: (e, t) => e + t - e * t,
    "hard-light": (e, t) => t < 0.5 ? e * 2 * t : 2 * t * (1 - e) - 1,
    overlay: (e, t) => e < 0.5 ? t * 2 * e : 2 * e * (1 - t) - 1,
    darken: (e, t) => Math.min(e, t),
    lighten: (e, t) => Math.max(e, t),
    "color-dodge": (e, t) => e === 0 ? 0 : t === 1 ? 1 : Math.min(1, e / (1 - t)),
    "color-burn": (e, t) => e === 1 ? 1 : t === 0 ? 0 : 1 - Math.min(1, (1 - e) / t),
    "soft-light": (e, t) => t < 0.5 ? e - (1 - 2 * t) * e * (1 - e) : e + (2 * t - 1) * ((e < 0.25 ? ((16 * e - 12) * e + 4) * e : Math.sqrt(e)) - e),
    difference: (e, t) => Math.abs(e - t),
    exclusion: (e, t) => e + t - 2 * e * t
  }, m1 = (e, t = "normal", a = "rgb") => {
    let r = typeof t == "function" ? t : g1[t], o = T(a), i = P(a).channels;
    return e.map((l) => {
      let v = o(l);
      return v.alpha === void 0 && (v.alpha = 1), v;
    }).reduce((l, v) => {
      if (l === void 0)
        return v;
      let h = v.alpha + l.alpha * (1 - v.alpha);
      return i.reduce(
        (d, u) => (u !== "alpha" && (h === 0 ? d[u] = 0 : (d[u] = v.alpha * (1 - l.alpha) * v[u] + v.alpha * l.alpha * r(l[u], v[u]) + (1 - v.alpha) * l.alpha * l[u], d[u] = Math.max(0, Math.min(1, d[u] / h)))), d),
        { mode: a, alpha: h }
      );
    });
  }, M1 = m1, y1 = ([e, t]) => e + Math.random() * (t - e), _1 = (e) => Object.keys(e).reduce((t, a) => {
    let r = e[a];
    return t[a] = Array.isArray(r) ? r : [r, r], t;
  }, {}), T1 = (e = "rgb", t = {}) => {
    let a = P(e), r = _1(t);
    return a.channels.reduce(
      (o, i) => ((r.alpha || i !== "alpha") && (o[i] = y1(r[i] || a.ranges[i])), o),
      { mode: e }
    );
  }, x1 = T1, ze = (e, t = "rgb", a = !1) => {
    let r = t ? P(t).channels : null, o = t ? T(t) : q;
    return (i) => {
      let n = o(i);
      if (!n)
        return;
      let l = (r || P(n.mode).channels).reduce(
        (h, d) => {
          let u = e(n[d], d, n, t);
          return u !== void 0 && !isNaN(u) && (h[d] = u), h;
        },
        { mode: n.mode }
      );
      if (!a)
        return l;
      let v = q(i);
      return v && v.mode !== l.mode ? T(v.mode)(l) : l;
    };
  }, ar = (e, t, a) => t !== "alpha" ? (e || 0) * (a.alpha !== void 0 ? a.alpha : 1) : e, rr = (e, t, a) => t !== "alpha" && a.alpha !== 0 ? (e || 0) / (a.alpha !== void 0 ? a.alpha : 1) : e, pt = (e = 1, t = 0) => (a, r) => r !== "alpha" ? a * e + t : a, z1 = (e = 1, t = 1, a = 0) => (r, o) => o !== "alpha" ? e * Math.pow(r, t) + a : r, k1 = (e) => {
    e[0] === void 0 && (e[0] = 0), e[e.length - 1] === void 0 && (e[e.length - 1] = 1);
    let t = 1, a, r, o, i;
    for (; t < e.length; ) {
      if (e[t] === void 0) {
        for (r = t, o = e[t - 1], a = t; e[a] === void 0; )
          a++;
        for (i = (e[a] - o) / (a - t + 1); t < a; )
          e[t] = o + (t + 1 - r) * i, t++;
      } else e[t] < e[t - 1] && (e[t] = e[t - 1]);
      t++;
    }
    return e;
  }, w1 = k1, L1 = (e = 0.5) => (t) => e <= 0 ? 1 : e >= 1 ? 0 : Math.pow(t, Math.log(0.5) / Math.log(e)), or = L1, We = (e) => typeof e == "function", ee = (e) => e && typeof e == "object", ir = (e) => typeof e == "number", nr = (e, t = "rgb", a, r) => {
    let o = P(t), i = T(t), n = [], l = [], v = {};
    e.forEach((b) => {
      Array.isArray(b) ? (n.push(i(b[0])), l.push(b[1])) : ir(b) || We(b) ? v[l.length] = b : (n.push(i(b)), l.push(void 0));
    }), w1(l);
    let h = o.channels.reduce((b, p) => {
      let c;
      return ee(a) && ee(a[p]) && a[p].fixup ? c = a[p].fixup : ee(o.interpolate[p]) && o.interpolate[p].fixup ? c = o.interpolate[p].fixup : c = (M) => M, b[p] = c(n.map((M) => M[p])), b;
    }, {});
    if (r) {
      let b = n.map((p, c) => o.channels.reduce(
        (M, m) => (M[m] = h[m][c], M),
        { mode: t }
      ));
      h = o.channels.reduce((p, c) => (p[c] = b.map((M) => {
        let m = r(M[c], c, M, t);
        return isNaN(m) ? void 0 : m;
      }), p), {});
    }
    let d = o.channels.reduce((b, p) => {
      let c;
      return We(a) ? c = a : ee(a) && We(a[p]) ? c = a[p] : ee(a) && ee(a[p]) && a[p].use ? c = a[p].use : We(o.interpolate[p]) ? c = o.interpolate[p] : ee(o.interpolate[p]) && (c = o.interpolate[p].use), b[p] = c(h[p]), b;
    }, {}), u = n.length - 1;
    return (b) => {
      if (b = Math.min(Math.max(0, b), 1), b <= l[0])
        return n[0];
      if (b > l[u])
        return n[u];
      let p = 0;
      for (; l[p] < b; )
        p++;
      let c = l[p - 1], M = l[p] - c, m = (b - c) / M, _ = v[p] || v[0];
      _ !== void 0 && (ir(_) && (_ = or((_ - c) / M)), m = _(m));
      let x = (p - 1 + m) / u;
      return o.channels.reduce(
        (w, S) => {
          let X = d[S](x);
          return X !== void 0 && (w[S] = X), w;
        },
        { mode: t }
      );
    };
  }, R1 = (e, t = "rgb", a) => nr(e, t, a), lr = (e, t) => (a, r = "rgb", o) => {
    let i = t ? ze(t, r) : void 0, n = nr(a, r, o, e);
    return i ? (l) => i(n(l)) : n;
  }, P1 = lr(
    ar,
    rr
  ), Ue = (e, t) => (e + t) % t, vr = (e, t, a, r, o) => {
    let i = o * o, n = i * o;
    return ((1 - 3 * o + 3 * i - n) * e + (4 - 6 * i + 3 * n) * t + (1 + 3 * o + 3 * i - 3 * n) * a + n * r) / 6;
  }, dr = (e) => (t) => {
    let a = e.length - 1, r = t >= 1 ? a - 1 : Math.max(0, Math.floor(t * a));
    return vr(
      r > 0 ? e[r - 1] : 2 * e[r] - e[r + 1],
      e[r],
      e[r + 1],
      r < a - 1 ? e[r + 2] : 2 * e[r + 1] - e[r],
      (t - r / a) * a
    );
  }, ur = (e) => (t) => {
    const a = e.length - 1, r = Math.floor(t * a);
    return vr(
      e[Ue(r - 1, e.length)],
      e[Ue(r, e.length)],
      e[Ue(r + 1, e.length)],
      e[Ue(r + 2, e.length)],
      (t - r / a) * a
    );
  }, fr = (e) => {
    let t, a = e.length - 1, r = new Array(a), o = new Array(a), i = new Array(a);
    for (r[1] = 1 / 4, o[1] = (6 * e[1] - e[0]) / 4, t = 2; t < a; ++t)
      r[t] = 1 / (4 - r[t - 1]), o[t] = (6 * e[t] - (t == a - 1 ? e[a] : 0) - o[t - 1]) * r[t];
    for (i[0] = e[0], i[a] = e[a], a - 1 > 0 && (i[a - 1] = o[a - 1]), t = a - 2; t > 0; --t)
      i[t] = o[t] - r[t] * i[t + 1];
    return i;
  }, S1 = (e) => dr(fr(e)), X1 = (e) => ur(fr(e)), fe = Math.sign, bt = Math.min, C = Math.abs, ct = (e) => {
    let t = e.length - 1, a = [], r = [], o = [];
    for (let i = 0; i < t; i++)
      a.push((e[i + 1] - e[i]) * t), r.push(i > 0 ? 0.5 * (e[i + 1] - e[i - 1]) * t : void 0), o.push(
        i > 0 ? (fe(a[i - 1]) + fe(a[i])) * bt(C(a[i - 1]), C(a[i]), 0.5 * C(r[i])) : void 0
      );
    return [a, r, o];
  }, gt = (e, t, a) => {
    let r = e.length - 1, o = r * r;
    return (i) => {
      let n;
      i >= 1 ? n = r - 1 : n = Math.max(0, Math.floor(i * r));
      let l = i - n / r, v = l * l, h = v * l;
      return (t[n] + t[n + 1] - 2 * a[n]) * o * h + (3 * a[n] - 2 * t[n] - t[n + 1]) * r * v + t[n] * l + e[n];
    };
  }, H1 = (e) => {
    if (e.length < 3)
      return s(e);
    let t = e.length - 1, [a, , r] = ct(e);
    return r[0] = a[0], r[t] = a[t - 1], gt(e, r, a);
  }, N1 = (e) => {
    if (e.length < 3)
      return s(e);
    let t = e.length - 1, [a, r, o] = ct(e);
    return r[0] = (e[1] * 2 - e[0] * 1.5 - e[2] * 0.5) * t, r[t] = (e[t] * 1.5 - e[t - 1] * 2 + e[t - 2] * 0.5) * t, o[0] = r[0] * a[0] <= 0 ? 0 : C(r[0]) > 2 * C(a[0]) ? 2 * a[0] : r[0], o[t] = r[t] * a[t - 1] <= 0 ? 0 : C(r[t]) > 2 * C(a[t - 1]) ? 2 * a[t - 1] : r[t], gt(e, o, a);
  }, $1 = (e) => {
    let t = e.length - 1, [a, r, o] = ct(e);
    r[0] = 0.5 * (e[1] - e[t]) * t, r[t] = 0.5 * (e[0] - e[t - 1]) * t;
    let i = (e[0] - e[t]) * t, n = i;
    return o[0] = (fe(i) + fe(a[0])) * bt(C(i), C(a[0]), 0.5 * C(r[0])), o[t] = (fe(a[t - 1]) + fe(n)) * bt(C(a[t - 1]), C(n), 0.5 * C(r[t])), gt(e, o, a);
  }, C1 = (e = 1) => e === 1 ? (t) => t : (t) => Math.pow(t, e), hr = C1, I1 = (e = 2, t = 1) => {
    let a = hr(t);
    if (e < 2)
      return e < 1 ? [] : [a(0.5)];
    let r = [];
    for (let o = 0; o < e; o++)
      r.push(a(o / (e - 1)));
    return r;
  }, q1 = I1, sr = T("rgb"), pr = (e) => {
    const t = {
      mode: e.mode,
      r: Math.max(0, Math.min(e.r !== void 0 ? e.r : 0, 1)),
      g: Math.max(0, Math.min(e.g !== void 0 ? e.g : 0, 1)),
      b: Math.max(0, Math.min(e.b !== void 0 ? e.b : 0, 1))
    };
    return e.alpha !== void 0 && (t.alpha = e.alpha), t;
  }, br = (e) => pr(sr(e)), cr = (e) => e !== void 0 && (e.r === void 0 || e.r >= 0 && e.r <= 1) && (e.g === void 0 || e.g >= 0 && e.g <= 1) && (e.b === void 0 || e.b >= 0 && e.b <= 1);
  function mt(e) {
    return cr(sr(e));
  }
  function Ke(e = "rgb") {
    const { gamut: t } = P(e);
    if (!t)
      return (r) => !0;
    const a = T(typeof t == "string" ? t : e);
    return (r) => cr(a(r));
  }
  function O1(e) {
    return e = q(e), e === void 0 || mt(e) ? e : T(e.mode)(br(e));
  }
  function Mt(e = "rgb") {
    const { gamut: t } = P(e);
    if (!t)
      return (i) => q(i);
    const a = typeof t == "string" ? t : e, r = T(a), o = Ke(a);
    return (i) => {
      const n = q(i);
      if (!n)
        return;
      const l = r(n);
      if (o(l))
        return n;
      const v = pr(l);
      return n.mode === v.mode ? v : T(n.mode)(v);
    };
  }
  function B1(e, t = "lch", a = "rgb") {
    e = q(e);
    let r = a === "rgb" ? mt : Ke(a), o = a === "rgb" ? br : Mt(a);
    if (e === void 0 || r(e))
      return e;
    let i = T(e.mode);
    e = T(t)(e);
    let n = { ...e, c: 0 };
    if (!r(n))
      return i(o(n));
    let l = 0, v = e.c !== void 0 ? e.c : 0, h = P(t).ranges.c, d = (h[1] - h[0]) / Math.pow(2, 13), u = n.c;
    for (; v - l > d; )
      n.c = l + (v - l) * 0.5, r(n) ? (u = n.c, l = n.c) : v = n.c;
    return i(
      r(n) ? n : { ...n, c: u }
    );
  }
  function D1(e = "rgb", t = "oklch", a = ne("oklch"), r = 0.02) {
    const o = T(e), i = P(e);
    if (!i.gamut)
      return (d) => o(d);
    const n = Ke(e), l = Mt(e), v = T(t), { ranges: h } = P(t);
    return (d) => {
      if (d = q(d), d === void 0)
        return;
      const u = { ...v(d) };
      if (u.l === void 0 && (u.l = 0), u.c === void 0 && (u.c = 0), u.l >= h.l[1]) {
        const m = { ...i.white, mode: e };
        return d.alpha !== void 0 && (m.alpha = d.alpha), m;
      }
      if (u.l <= h.l[0]) {
        const m = { ...i.black, mode: e };
        return d.alpha !== void 0 && (m.alpha = d.alpha), m;
      }
      if (n(u))
        return o(u);
      let b = 0, p = u.c, c = (h.c[1] - h.c[0]) / 4e3, M = l(u);
      for (; p - b > c; )
        u.c = (b + p) * 0.5, M = l(u), n(u) || a && r > 0 && a(u, M) <= r ? b = u.c : p = u.c;
      return o(n(u) ? u : M);
    };
  }
  var A1 = (e, t = ne(), a = (r) => r) => {
    let r = e.map((o, i) => ({ color: a(o), i }));
    return (o, i = 1, n = 1 / 0) => (isFinite(i) && (i = Math.max(1, Math.min(i, r.length - 1))), r.forEach((l) => {
      l.d = t(o, l.color);
    }), r.sort((l, v) => l.d - v.d).slice(0, i).filter((l) => l.d < n).map((l) => e[l.i]));
  }, j1 = A1, yt = (e) => Math.max(e, 0), _t = (e) => Math.max(Math.min(e, 1), 0), J1 = (e, t, a) => e === void 0 || t === void 0 ? void 0 : e + a * (t - e), E1 = (e) => {
    let t = 1 - _t(e);
    return [
      0.393 + 0.607 * t,
      0.769 - 0.769 * t,
      0.189 - 0.189 * t,
      0,
      0.349 - 0.349 * t,
      0.686 + 0.314 * t,
      0.168 - 0.168 * t,
      0,
      0.272 - 0.272 * t,
      0.534 - 0.534 * t,
      0.131 + 0.869 * t,
      0,
      0,
      0,
      0,
      1
    ];
  }, Y1 = (e) => {
    let t = yt(e);
    return [
      0.213 + 0.787 * t,
      0.715 - 0.715 * t,
      0.072 - 0.072 * t,
      0,
      0.213 - 0.213 * t,
      0.715 + 0.285 * t,
      0.072 - 0.072 * t,
      0,
      0.213 - 0.213 * t,
      0.715 - 0.715 * t,
      0.072 + 0.928 * t,
      0,
      0,
      0,
      0,
      1
    ];
  }, G1 = (e) => {
    let t = 1 - _t(e);
    return [
      0.2126 + 0.7874 * t,
      0.7152 - 0.7152 * t,
      0.0722 - 0.0722 * t,
      0,
      0.2126 - 0.2126 * t,
      0.7152 + 0.2848 * t,
      0.0722 - 0.0722 * t,
      0,
      0.2126 - 0.2126 * t,
      0.7152 - 0.7152 * t,
      0.0722 + 0.9278 * t,
      0,
      0,
      0,
      0,
      1
    ];
  }, Z1 = (e) => {
    let t = Math.PI * e / 180, a = Math.cos(t), r = Math.sin(t);
    return [
      0.213 + a * 0.787 - r * 0.213,
      0.715 - a * 0.715 - r * 0.715,
      0.072 - a * 0.072 + r * 0.928,
      0,
      0.213 - a * 0.213 + r * 0.143,
      0.715 + a * 0.285 + r * 0.14,
      0.072 - a * 0.072 - r * 0.283,
      0,
      0.213 - a * 0.213 - r * 0.787,
      0.715 - a * 0.715 + r * 0.715,
      0.072 + a * 0.928 + r * 0.072,
      0,
      0,
      0,
      0,
      1
    ];
  }, Qe = (e, t, a = !1) => {
    let r = T(t), o = P(t).channels;
    return (i) => {
      let n = r(i);
      if (!n)
        return;
      let l = { mode: t }, v, h = o.length;
      for (let u = 0; u < e.length; u++)
        v = o[Math.floor(u / h)], n[v] !== void 0 && (l[v] = (l[v] || 0) + e[u] * (n[o[u % h]] || 0));
      if (!a)
        return l;
      let d = q(i);
      return d && l.mode !== d.mode ? T(d.mode)(l) : l;
    };
  }, F1 = (e = 1, t = "rgb") => {
    let a = yt(e);
    return ze(pt(a), t, !0);
  }, W1 = (e = 1, t = "rgb") => {
    let a = yt(e);
    return ze(pt(a, (1 - a) / 2), t, !0);
  }, U1 = (e = 1, t = "rgb") => Qe(E1(e), t, !0), K1 = (e = 1, t = "rgb") => Qe(Y1(e), t, !0), Q1 = (e = 1, t = "rgb") => Qe(G1(e), t, !0), V1 = (e = 1, t = "rgb") => {
    let a = _t(e);
    return ze(
      (r, o) => o === "alpha" ? r : J1(a, 1 - a, r),
      t,
      !0
    );
  }, en = (e = 0, t = "rgb") => Qe(Z1(e), t, !0), tn = T("rgb"), an = [
    [1, 0, -0, 0, 1, 0, -0, -0, 1],
    [
      0.856167,
      0.182038,
      -0.038205,
      0.029342,
      0.955115,
      0.015544,
      -288e-5,
      -1563e-6,
      1.004443
    ],
    [
      0.734766,
      0.334872,
      -0.069637,
      0.05184,
      0.919198,
      0.028963,
      -4928e-6,
      -4209e-6,
      1.009137
    ],
    [
      0.630323,
      0.465641,
      -0.095964,
      0.069181,
      0.890046,
      0.040773,
      -6308e-6,
      -7724e-6,
      1.014032
    ],
    [
      0.539009,
      0.579343,
      -0.118352,
      0.082546,
      0.866121,
      0.051332,
      -7136e-6,
      -0.011959,
      1.019095
    ],
    [
      0.458064,
      0.679578,
      -0.137642,
      0.092785,
      0.846313,
      0.060902,
      -7494e-6,
      -0.016807,
      1.024301
    ],
    [
      0.38545,
      0.769005,
      -0.154455,
      0.100526,
      0.829802,
      0.069673,
      -7442e-6,
      -0.02219,
      1.029632
    ],
    [
      0.319627,
      0.849633,
      -0.169261,
      0.106241,
      0.815969,
      0.07779,
      -7025e-6,
      -0.028051,
      1.035076
    ],
    [
      0.259411,
      0.923008,
      -0.18242,
      0.110296,
      0.80434,
      0.085364,
      -6276e-6,
      -0.034346,
      1.040622
    ],
    [
      0.203876,
      0.990338,
      -0.194214,
      0.112975,
      0.794542,
      0.092483,
      -5222e-6,
      -0.041043,
      1.046265
    ],
    [
      0.152286,
      1.052583,
      -0.204868,
      0.114503,
      0.786281,
      0.099216,
      -3882e-6,
      -0.048116,
      1.051998
    ]
  ], rn = [
    [1, 0, -0, 0, 1, 0, -0, -0, 1],
    [
      0.866435,
      0.177704,
      -0.044139,
      0.049567,
      0.939063,
      0.01137,
      -3453e-6,
      7233e-6,
      0.99622
    ],
    [
      0.760729,
      0.319078,
      -0.079807,
      0.090568,
      0.889315,
      0.020117,
      -6027e-6,
      0.013325,
      0.992702
    ],
    [
      0.675425,
      0.43385,
      -0.109275,
      0.125303,
      0.847755,
      0.026942,
      -795e-5,
      0.018572,
      0.989378
    ],
    [
      0.605511,
      0.52856,
      -0.134071,
      0.155318,
      0.812366,
      0.032316,
      -9376e-6,
      0.023176,
      0.9862
    ],
    [
      0.547494,
      0.607765,
      -0.155259,
      0.181692,
      0.781742,
      0.036566,
      -0.01041,
      0.027275,
      0.983136
    ],
    [
      0.498864,
      0.674741,
      -0.173604,
      0.205199,
      0.754872,
      0.039929,
      -0.011131,
      0.030969,
      0.980162
    ],
    [
      0.457771,
      0.731899,
      -0.18967,
      0.226409,
      0.731012,
      0.042579,
      -0.011595,
      0.034333,
      0.977261
    ],
    [
      0.422823,
      0.781057,
      -0.203881,
      0.245752,
      0.709602,
      0.044646,
      -0.011843,
      0.037423,
      0.974421
    ],
    [
      0.392952,
      0.82361,
      -0.216562,
      0.263559,
      0.69021,
      0.046232,
      -0.01191,
      0.040281,
      0.97163
    ],
    [
      0.367322,
      0.860646,
      -0.227968,
      0.280085,
      0.672501,
      0.047413,
      -0.01182,
      0.04294,
      0.968881
    ]
  ], on = [
    [1, 0, -0, 0, 1, 0, -0, -0, 1],
    [
      0.92667,
      0.092514,
      -0.019184,
      0.021191,
      0.964503,
      0.014306,
      8437e-6,
      0.054813,
      0.93675
    ],
    [
      0.89572,
      0.13333,
      -0.02905,
      0.029997,
      0.9454,
      0.024603,
      0.013027,
      0.104707,
      0.882266
    ],
    [
      0.905871,
      0.127791,
      -0.033662,
      0.026856,
      0.941251,
      0.031893,
      0.01341,
      0.148296,
      0.838294
    ],
    [
      0.948035,
      0.08949,
      -0.037526,
      0.014364,
      0.946792,
      0.038844,
      0.010853,
      0.193991,
      0.795156
    ],
    [
      1.017277,
      0.027029,
      -0.044306,
      -6113e-6,
      0.958479,
      0.047634,
      6379e-6,
      0.248708,
      0.744913
    ],
    [
      1.104996,
      -0.046633,
      -0.058363,
      -0.032137,
      0.971635,
      0.060503,
      1336e-6,
      0.317922,
      0.680742
    ],
    [
      1.193214,
      -0.109812,
      -0.083402,
      -0.058496,
      0.97941,
      0.079086,
      -2346e-6,
      0.403492,
      0.598854
    ],
    [
      1.257728,
      -0.139648,
      -0.118081,
      -0.078003,
      0.975409,
      0.102594,
      -3316e-6,
      0.501214,
      0.502102
    ],
    [
      1.278864,
      -0.125333,
      -0.153531,
      -0.084748,
      0.957674,
      0.127074,
      -989e-6,
      0.601151,
      0.399838
    ],
    [
      1.255528,
      -0.076749,
      -0.178779,
      -0.078411,
      0.930809,
      0.147602,
      4733e-6,
      0.691367,
      0.3039
    ]
  ], Tt = (e, t) => {
    let a = Math.max(0, Math.min(1, t)), r = Math.round(a / 0.1), o = Math.round(a % 0.1), i = e[r];
    if (o > 0 && r < e.length - 1) {
      let n = e[r + 1];
      i = i.map((l, v) => F(i[v], n[v], o));
    }
    return (n) => {
      let l = q(n);
      if (l === void 0)
        return;
      let { r: v, g: h, b: d } = tn(l), u = {
        mode: "rgb",
        r: i[0] * v + i[1] * h + i[2] * d,
        g: i[3] * v + i[4] * h + i[5] * d,
        b: i[6] * v + i[7] * h + i[8] * d
      };
      return l.alpha !== void 0 && (u.alpha = l.alpha), T(l.mode)(u);
    };
  }, nn = (e = 1) => Tt(an, e), ln = (e = 1) => Tt(rn, e), vn = (e = 1) => Tt(on, e), dn = (e) => e * e * (3 - 2 * e), un = (e) => 0.5 - Math.sin(Math.asin(1 - 2 * e) / 3), fn = (e) => e * e * e * (e * (e * 6 - 15) + 10), hn = fn, sn = (e) => (1 - Math.cos(e * Math.PI)) / 2, pn = sn;
  function xt(e) {
    let t = T("lrgb")(e);
    return 0.2126 * t.r + 0.7152 * t.g + 0.0722 * t.b;
  }
  function bn(e, t) {
    let a = xt(e), r = xt(t);
    return (Math.max(a, r) + 0.05) / (Math.min(a, r) + 0.05);
  }
  var cn = y(Dt), gn = y(Ft), mn = y(ta), Mn = y(aa), yn = y(ia), _n = y(M0), Tn = y(T0), xn = y(sa), zn = y(ca), kn = y(ma), wn = y(Ma), Ln = y(Ee), Rn = y(_a), Pn = y(Ye), Sn = y(xa), Xn = y(wa), Hn = y(La), Nn = y(Ra), $n = y(Sa), Cn = y(Xa), In = y(Na), qn = y(Ca), On = y(Ia), Bn = y(qa), Dn = y(Da), An = y(W), jn = y(Ea), Jn = y(Ya), En = y(Fa), Yn = y(Ka);
  return zr(Lt);
})();
