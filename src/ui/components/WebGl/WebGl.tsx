import { DocumentColorSpace, Hues } from '../../../common/types';
import { useRef, useEffect } from 'react';
import st from './_WebGl.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(st);

type WebGlProps = {
  documentColorSpace: DocumentColorSpace;
  hues: Hues;
  className?: string;
};

const vertexShaderSource = `#version 300 es
in vec4 a_Position;
void main() {
  gl_Position = a_Position;
}
`;

const fragmentShaderSource = `#version 300 es
precision highp float;

uniform vec2 u_Resolution;    // Canvas resolution
uniform float u_FromHue;      // hues.from
uniform float u_ToHue;        // hues.to
uniform int u_ColorSpace;     // 0: sRGB, 1: Display P3

out vec4 outColor;

// OKLCH to OKLab conversion
vec3 oklch_to_oklab(vec3 oklch) {
  float L = oklch.x;
  float C = oklch.y;
  float h_rad = radians(oklch.z); // Convert degrees to radians
  float a = cos(h_rad) * C;
  float b = sin(h_rad) * C;
  return vec3(L, a, b);
}

// OKLab to linear sRGB conversion
vec3 oklab_to_linear_srgb(vec3 lab) {
  float l = lab.x;
  float a = lab.y;
  float b = lab.z;

  // Intermediate variables
  float l_ = pow(l + 0.3963377774 * a + 0.2158037573 * b, 3.0);
  float m_ = pow(l - 0.1055613458 * a - 0.0638541728 * b, 3.0);
  float s_ = pow(l - 0.0894841775 * a - 1.2914855480 * b, 3.0);

  // Linear sRGB values
  vec3 linear_rgb = vec3(
    +4.0767416621 * l_ - 3.3077115913 * m_ + 0.2309699292 * s_,
    -1.2684380046 * l_ + 2.6097574011 * m_ - 0.3413193965 * s_,
    -0.0041960863 * l_ - 0.7034186147 * m_ + 1.7076147000 * s_
  );

  return linear_rgb;
}

// OKLab to linear Display P3 conversion
vec3 oklab_to_linear_display_p3(vec3 lab) {
  float l = lab.x;
  float a = lab.y;
  float b = lab.z;

  // Intermediate variables
  float l_ = pow(l + 0.3963377774 * a + 0.2158037573 * b, 3.0);
  float m_ = pow(l - 0.1055613458 * a - 0.0638541728 * b, 3.0);
  float s_ = pow(l - 0.0894841775 * a - 1.2914855480 * b, 3.0);

  // XYZ values
  vec3 xyz = vec3(
    +1.2270138511 * l_ - 0.5577999807 * m_ + 0.2812561490 * s_,
    -0.0405801784 * l_ + 1.1122568696 * m_ - 0.0716766787 * s_,
    -0.0763812845 * l_ - 0.4214819784 * m_ + 1.5861632204 * s_
  );

  // Linear Display P3 RGB
  mat3 xyz_to_p3 = mat3(
    2.493496911941425, -0.931383617919124, -0.402710784450716,
    -0.829488969561574, 1.762664060318346, 0.023624685841943,
    0.035845830243784, -0.076172389268041, 0.956884524007687
  );

  return xyz_to_p3 * xyz;
}

// Linear to gamma-corrected RGB
vec3 linear_to_rgb(vec3 linear_rgb) {
  vec3 rgb = mix(
    linear_rgb * 12.92,
    1.055 * pow(linear_rgb, vec3(1.0 / 2.4)) - 0.055,
    step(0.0031308, linear_rgb)
  );
  return rgb;
}

void main() {
  vec2 coord = gl_FragCoord.xy / u_Resolution;
  float x = coord.x;
  float y_mapped = coord.y * 0.4;

  float l = x;
  float c = y_mapped;

  float h_from = u_FromHue;
  float h_to = u_ToHue;

  if (h_to < h_from) {
    h_to += 360.0;
  }

  float h = h_from + (h_to - h_from) * x;
  h = mod(h, 360.0);

  vec3 oklch = vec3(l, c, h);
  vec3 oklab = oklch_to_oklab(oklch);

  vec3 linear_rgb;
  if (u_ColorSpace == 0) {
    linear_rgb = oklab_to_linear_srgb(oklab);
  } else {
    linear_rgb = oklab_to_linear_display_p3(oklab);
  }

  vec3 rgb = linear_to_rgb(linear_rgb);

  bool in_gamut = all(greaterThanEqual(rgb, vec3(0.0))) && all(lessThanEqual(rgb, vec3(1.0)));

  if (in_gamut) {
    outColor = vec4(rgb, 1.0);
  } else {
    outColor = vec4(0.0, 0.0, 0.0, 0.0);
  }
}
`;

const WebGl = ({
  documentColorSpace,
  hues,
  className = '',
  ...props
}: WebGlProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const gl = canvas?.getContext('webgl2');

    if (!canvas || !container || !gl) return;

    // 셰이더 및 프로그램 변수 선언
    let program: WebGLProgram | null = null;

    // 셰이더 컴파일 및 프로그램 생성
    const createShader = (
      gl: WebGL2RenderingContext,
      type: number,
      source: string
    ): WebGLShader | null => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS);
      if (!success) {
        console.error('Failed to compile shader:', gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const createProgram = (
      gl: WebGL2RenderingContext,
      vertexShader: WebGLShader,
      fragmentShader: WebGLShader
    ): WebGLProgram | null => {
      const program = gl.createProgram();
      if (!program) return null;
      gl.attachShader(program, vertexShader);
      gl.attachShader(program, fragmentShader);
      gl.linkProgram(program);
      const success = gl.getProgramParameter(program, gl.LINK_STATUS);
      if (!success) {
        console.error('Failed to link program:', gl.getProgramInfoLog(program));
        gl.deleteProgram(program);
        return null;
      }
      return program;
    };

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );

    if (!vertexShader || !fragmentShader) return;

    program = createProgram(gl, vertexShader, fragmentShader);
    if (!program) return;

    gl.useProgram(program);

    // 버퍼 및 속성 설정
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const vertices = new Float32Array([
      -1.0, -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, 1.0,
    ]);
    gl.bufferData(gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, 'a_Position');
    gl.enableVertexAttribArray(positionLocation);
    gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

    // 렌더 함수 정의
    const render = () => {
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.uniform2f(
        gl.getUniformLocation(program!, 'u_Resolution'),
        canvas.width,
        canvas.height
      );
      gl.uniform1f(gl.getUniformLocation(program!, 'u_FromHue'), hues.from);
      gl.uniform1f(gl.getUniformLocation(program!, 'u_ToHue'), hues.to);

      const colorSpaceValue = documentColorSpace === 'DISPLAY_P3' ? 1 : 0;
      gl.uniform1i(
        gl.getUniformLocation(program!, 'u_ColorSpace'),
        colorSpaceValue
      );

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
    };

    // 캔버스 리사이즈 함수 정의
    const resizeCanvas = () => {
      const { width, height } = container.getBoundingClientRect();
      canvas.width = width;
      canvas.height = height;
      gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      render();
    };

    resizeCanvas();

    const resizeObserver = new ResizeObserver(resizeCanvas);
    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, [documentColorSpace, hues]);

  return (
    <div className={cx('web-gl-container', className)} ref={containerRef}>
      <canvas className={cx('web-gl')} ref={canvasRef}></canvas>
    </div>
  );
};

export default WebGl;
