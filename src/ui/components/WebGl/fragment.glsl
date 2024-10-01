#version 300 es
precision mediump float;

// Uniform 변수들
uniform vec2 u_Resolution;    // 캔버스 해상도
uniform float u_FromHue;      // hues.from (도 단위)
uniform float u_ToHue;        // hues.to (도 단위)
uniform int u_ColorSpace;     // 0: sRGB, 1: Display P3

// 출력 색상
out vec4 outColor;

// 상수 정의
const float PI = 3.1415926535897932384626433832795;
const float DEG2RAD = PI / 180.0;
const int COLOR_SPACE_SRGB = 0;
const int COLOR_SPACE_DISPLAY_P3 = 1;

// 색 공간 내 여부 확인 함수
bool isInGamut(vec3 v) {
  return all(greaterThanEqual(v, vec3(0.0))) && all(lessThanEqual(v, vec3(1.0)));
}

// 행렬의 전치와 벡터의 곱셈 함수
vec3 mulMat3TVec3(mat3 m, vec3 v) {
  return vec3(
    dot(v, m[0]),
    dot(v, m[1]),
    dot(v, m[2])
  );
}

// LCH를 Lab으로 변환
vec3 lchToLab(vec3 lch) {
  return vec3(
    lch.x,
    lch.y * cos(lch.z),
    lch.y * sin(lch.z)
  );
}

// OKLab을 sRGB Linear로 변환
vec3 oklabToLrgbSrgb(vec3 lab) {
  mat3 labToLms = mat3(
    0.9999999984505198,  0.39633779217376786,  0.2158037580607588,
    1.0000000088817609, -0.10556134232365635, -0.06385417477170591,
    1.0000000546724108, -0.08948418209496575, -1.2914855378640917
  );

  vec3 lmsNonLinear = mulMat3TVec3(labToLms, lab);
  vec3 lms = pow(abs(lmsNonLinear), vec3(3.0)) * sign(lmsNonLinear);

  mat3 lmsToLrgb = mat3(
    4.076741661347994,   -3.307711590408193,    0.230969928729428,
   -1.2684380040921763,   2.6097574006633715,  -0.3413193963102197,
   -0.004196086541837188, -0.7034186144594493,  1.7076147009309444
  );

  return mulMat3TVec3(lmsToLrgb, lms);
}

// OKLab을 Display P3 Linear로 직접 변환
vec3 oklabToLrgbDisplayP3(vec3 lab) {
  mat3 labToLms = mat3(
    0.9999999984505198,  0.39633779217376786,  0.2158037580607588,
    1.0000000088817609, -0.10556134232365635, -0.06385417477170591,
    1.0000000546724108, -0.08948418209496575, -1.2914855378640917
  );

  vec3 lmsNonLinear = mulMat3TVec3(labToLms, lab);
  vec3 lms = pow(abs(lmsNonLinear), vec3(3.0)) * sign(lmsNonLinear);

  // LMS에서 XYZ로 변환
  mat3 lmsToXyz = mat3(
    1.2270138511035211, -0.5577999806518222,  0.2812561489664683,
   -0.0405801784232806,  1.1122568696168301, -0.0716766786656012,
   -0.0763812845057069, -0.4214819784180127,  1.5861632204407947
  );

  vec3 xyz = mulMat3TVec3(lmsToXyz, lms);

  // XYZ에서 Display P3 Linear로 변환
  mat3 xyzToDisplayP3 = mat3(
    2.4934969119414250, -0.9313836179191240, -0.4027107844507168,
   -0.8294889695615747,  1.7626640603183463,  0.0236246858419436,
    0.0358458302437845, -0.0761723892680418,  0.9568845240076872
  );

  return mulMat3TVec3(xyzToDisplayP3, xyz);
}

// Linear RGB를 Gamma 보정 RGB로 변환
vec3 lrgbToRgb(vec3 rgb) {
  vec3 absRgb = abs(rgb);
  vec3 signRgb = sign(rgb);
  vec3 threshold = vec3(0.0031308);

  vec3 belowThreshold = rgb * 12.92;
  vec3 aboveThreshold = signRgb * (1.055 * pow(absRgb, vec3(1.0 / 2.4)) - 0.055);

  return mix(belowThreshold, aboveThreshold, step(threshold, absRgb));
}

// OKLCH를 RGB로 변환
vec3 oklchToRgb(vec3 lch, int colorSpace) {
  vec3 lab = lchToLab(lch);
  vec3 lrgbInSpace;

  if (colorSpace == COLOR_SPACE_SRGB) {
    lrgbInSpace = oklabToLrgbSrgb(lab);
  } else if (colorSpace == COLOR_SPACE_DISPLAY_P3) {
    lrgbInSpace = oklabToLrgbDisplayP3(lab);
  }

  vec3 rgbInSpace = lrgbToRgb(lrgbInSpace);
  return rgbInSpace;
}

void main() {
  vec2 coord = gl_FragCoord.xy / u_Resolution;
  float x = coord.x;
  float y = coord.y;

  // Y축 매핑: 아래쪽이 0, 위쪽이 0.4
  float y_mapped = y * 0.4;

  // l과 c 값 설정
  float l = x;
  float c = y_mapped;

  // h 값 보간
  float h_from = u_FromHue;
  float h_to = u_ToHue;

  if (h_to < h_from) {
    h_to += 360.0;
  }

  float h = h_from + (h_to - h_from) * x;
  h = mod(h, 360.0);
  float h_rad = h * DEG2RAD;

  // OKLCH 색상 생성
  vec3 oklch = vec3(l, c, h_rad);

  // RGB 변환
  vec3 oklchRgb = oklchToRgb(oklch, u_ColorSpace);

  // 색공간 내 여부 확인 및 색상 출력
  if (isInGamut(oklchRgb)) {
    outColor = vec4(oklchRgb, 1.0);
  } else {
    outColor = vec4(0.0, 0.0, 0.0, 0.0);
  }
}
