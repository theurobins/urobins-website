// Full-screen ribbed (fluted) glass gradient for the hero.
// The same shader also paints the stepped funnel bars below the hero edge,
// so each bar reads as a slice of the hero glass.
import { BAR_COUNT } from './funnel.js';

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;          // css px
uniform float uDpr;
uniform float uTime;
uniform float uMix;         // 0 burnt orange -> 1 lavender
uniform float uHeroBottom;  // css px from top
uniform float uWarp;        // intro hourglass warp, 1 -> 0
uniform float uReveal;      // 0 solid flash colour -> 1 full glass
uniform vec3 uBlack;
uniform vec4 uBars[${BAR_COUNT}];

float hash(float n) { return fract(sin(n * 127.1) * 43758.5453); }
float hash2(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

vec3 blob(vec3 col, vec2 q, vec2 c, float r, vec3 bc, float a, float aspect) {
  c.x *= aspect;
  vec2 d = q - c;
  float w = exp(-dot(d, d) / (r * r));
  return mix(col, bc, clamp(w * a, 0.0, 1.0));
}

vec3 field(vec2 p, float t, float m) {
  float aspect = uRes.x / uRes.y;
  vec2 q = vec2(p.x * aspect, p.y);
  vec3 base = mix(vec3(0.80, 0.29, 0.19), vec3(0.79, 0.77, 0.94), m);
  vec3 col = base;
  // left band
  col = blob(col, q, mix(vec2(0.05, 0.52), vec2(0.04, 0.55), m) + 0.03 * vec2(sin(t * 0.23), cos(t * 0.19)),
             0.32, mix(vec3(0.86, 0.40, 0.22), vec3(0.70, 0.64, 0.93), m), 0.8, aspect);
  // bottom-left warm / periwinkle
  col = blob(col, q, mix(vec2(0.14, 0.88), vec2(0.20, 0.90), m) + 0.04 * vec2(cos(t * 0.17), sin(t * 0.21)),
             0.42, mix(vec3(0.89, 0.50, 0.28), vec3(0.78, 0.79, 0.96), m), 0.85, aspect);
  // top-left deep red / violet
  col = blob(col, q, mix(vec2(0.32, 0.22), vec2(0.20, 0.10), m) + 0.05 * vec2(sin(t * 0.13 + 1.0), cos(t * 0.16)),
             mix(0.40, 0.34, m), mix(vec3(0.74, 0.17, 0.14), vec3(0.33, 0.22, 0.80), m), 0.95, aspect);
  // top-right red / violet
  col = blob(col, q, mix(vec2(0.80, 0.18), vec2(0.93, 0.05), m) + 0.04 * vec2(cos(t * 0.15 + 2.0), sin(t * 0.12)),
             mix(0.36, 0.28, m), mix(vec3(0.77, 0.22, 0.17), vec3(0.40, 0.28, 0.86), m), 0.92, aspect);
  // centre glow (salmon -> near white dome)
  col = blob(col, q, mix(vec2(0.55, 0.52), vec2(0.57, 0.40), m) + 0.035 * vec2(sin(t * 0.11), cos(t * 0.14 + 1.0)),
             mix(0.34, 0.40, m), mix(vec3(0.84, 0.40, 0.32), vec3(0.95, 0.95, 0.99), m), mix(0.7, 0.97, m), aspect);
  // bottom-right hot corner / lilac
  col = blob(col, q, mix(vec2(0.98, 0.96), vec2(0.92, 0.80), m) + 0.03 * vec2(cos(t * 0.2), sin(t * 0.18 + 2.0)),
             mix(0.24, 0.32, m), mix(vec3(0.96, 0.50, 0.15), vec3(0.78, 0.68, 0.95), m), 0.95, aspect);
  // mid-right accent
  col = blob(col, q, mix(vec2(0.86, 0.62), vec2(0.82, 0.55), m) + 0.03 * vec2(sin(t * 0.16 + 3.0), cos(t * 0.13)),
             0.22, mix(vec3(0.83, 0.33, 0.20), vec3(0.74, 0.70, 0.95), m), 0.6, aspect);
  return col;
}

void main() {
  vec2 frag = gl_FragCoord.xy / uDpr;
  float ypx = uRes.y - frag.y;

  bool inside = ypx <= uHeroBottom;
  float barTop = 0.0;
  for (int i = 0; i < ${BAR_COUNT}; i++) {
    vec4 b = uBars[i];
    if (b.z > 0.5 && frag.x >= b.x && frag.x <= b.x + b.z && ypx >= b.y && ypx <= b.y + b.w) {
      inside = true;
      barTop = ypx - b.y;
    }
  }
  if (!inside) { gl_FragColor = vec4(uBlack, 1.0); return; }

  float W = uRes.x, H = uRes.y;
  // intro hourglass: flutes bow outward top and bottom, then relax straight
  float cx = frag.x - W * 0.5;
  float yy = ypx / H - 0.5;
  float warped = cx / (1.0 + uWarp * 7.0 * yy * yy);
  float fw = mix(11.0, 46.0, uWarp);
  float fx = (warped + W * 0.5) / fw;
  float cell = floor(fx);
  float u = fract(fx);
  float jit = hash(cell);

  // convex flute: each rib shows a mirrored, compressed slice of the gradient
  float spread = (1.7 + jit * 1.1) * (1.0 + uWarp * 1.5);
  float sx = frag.x - (u - 0.5) * fw * spread;
  vec2 sp = vec2(sx / W, ypx / H);
  vec3 col = field(sp, uTime, uMix);

  // rib shading: soft highlight on the leading edge, hairline shadow on the trailing edge
  float shade = 1.0;
  shade += 0.05 * (1.0 - smoothstep(0.0, 0.22, u));
  shade -= 0.06 * smoothstep(0.82, 1.0, u);
  shade += (jit - 0.5) * 0.035;
  col *= mix(shade, 1.0 + (shade - 1.0) * 3.0, uWarp);
  col += 0.03 * (1.0 - smoothstep(0.0, 0.06, u)) * (1.0 + 3.0 * uWarp);

  // reveal from the solid flash colour
  col = mix(vec3(0.784, 0.263, 0.184), col, uReveal);

  // bars: faint lip on the top edge
  if (barTop > 0.0 && barTop < 1.2) col *= 0.82;

  // grain
  float g = hash2(gl_FragCoord.xy + fract(uTime * 13.0) * 91.0) - 0.5;
  col += g * 0.028;
  gl_FragColor = vec4(col, 1.0);
}
`;

export class HeroGL {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = { mix: 0, heroBottom: 1, warp: 1, reveal: 0 };
    this.bars = new Float32Array(BAR_COUNT * 4);
    const gl = canvas.getContext('webgl', { antialias: false, alpha: false, depth: false, stencil: false, powerPreference: 'high-performance' });
    if (!gl) { this.failed = true; canvas.classList.add('is-fallback'); return; }
    this.gl = gl;
    const prog = gl.createProgram();
    const compile = (type, src) => {
      const s = gl.createShader(type);
      gl.shaderSource(s, src);
      gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s));
      gl.attachShader(prog, s);
    };
    try {
      compile(gl.VERTEX_SHADER, VERT);
      compile(gl.FRAGMENT_SHADER, FRAG);
      gl.linkProgram(prog);
      if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(prog));
    } catch (e) {
      console.warn('[hero] shader failed, using CSS fallback', e);
      this.failed = true;
      canvas.classList.add('is-fallback');
      return;
    }
    gl.useProgram(prog);
    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, 'aPos');
    gl.enableVertexAttribArray(loc);
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const u = (n) => gl.getUniformLocation(prog, n);
    this.u = {
      res: u('uRes'), dpr: u('uDpr'), time: u('uTime'), mix: u('uMix'), heroBottom: u('uHeroBottom'),
      warp: u('uWarp'), reveal: u('uReveal'), black: u('uBlack'), bars: u('uBars'),
    };
    gl.uniform3f(this.u.black, 11 / 255, 11 / 255, 12 / 255);
    this.resize();
  }

  resize() {
    if (this.failed) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    this.w = w; this.h = h; this.dpr = dpr;
    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  setBars(rects) {
    for (let i = 0; i < BAR_COUNT; i++) {
      const r = rects[i];
      this.bars[i * 4] = r ? r.x : 0;
      this.bars[i * 4 + 1] = r ? r.y : 0;
      this.bars[i * 4 + 2] = r ? r.w : 0;
      this.bars[i * 4 + 3] = r ? r.h : 0;
    }
  }

  render(time) {
    if (this.failed) return;
    const { gl, u, state } = this;
    gl.uniform2f(u.res, this.canvas.width / this.dpr, this.canvas.height / this.dpr);
    gl.uniform1f(u.dpr, this.dpr);
    gl.uniform1f(u.time, time);
    gl.uniform1f(u.mix, state.mix);
    gl.uniform1f(u.heroBottom, state.heroBottom * this.h);
    gl.uniform1f(u.warp, state.warp);
    gl.uniform1f(u.reveal, state.reveal);
    gl.uniform4fv(u.bars, this.bars);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
}
