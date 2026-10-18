// Full-screen ribbed (fluted) glass gradient for the hero.
// The same shader paints the stepped funnel bars below the hero's bottom edge, so each bar
// reads as a slice of the glass. Everything outside the glass is transparent, so the About
// stage pinned underneath shows through.
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
uniform float uShift;       // css px the glass has scrolled up
uniform float uPitch;       // rib pitch, css px
uniform float uHyp;         // intro hourglass strength (0 = straight ribs)
uniform float uFlash;       // intro peach flash 0..1
uniform float uReveal;      // 0 dark red hand-off colour -> 1 full glass
uniform vec4 uBars[${BAR_COUNT}];

float hash2(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }

vec3 blob(vec3 col, vec2 q, vec2 c, float r, vec3 bc, float a, float aspect, float sx) {
  c.x *= aspect;
  vec2 d = q - c;
  d.x /= sx;
  float w = exp(-dot(d, d) / (r * r));
  return mix(col, bc, clamp(w * a, 0.0, 1.0));
}

vec3 field(vec2 p, float t, float m) {
  float aspect = uRes.x / uRes.y;
  vec2 q = vec2(p.x * aspect, p.y);
  vec2 dr = 0.015 * vec2(sin(t * 0.21), cos(t * 0.17));
  vec3 col = mix(vec3(0.76, 0.24, 0.19), vec3(0.79, 0.77, 0.94), m);
  // left band: saturated orange / lilac
  col = blob(col, q, mix(vec2(0.03, 0.45), vec2(0.0, 0.45), m) + dr, mix(0.30, 0.35, m),
             mix(vec3(0.84, 0.30, 0.13), vec3(0.67, 0.60, 0.88), m), mix(0.9, 0.8, m), aspect, 1.0);
  // bottom-left: light orange rising diagonally / periwinkle
  col = blob(col, q, mix(vec2(0.08, 0.97), vec2(0.20, 0.90), m) - dr, mix(0.45, 0.40, m),
             mix(vec3(0.87, 0.52, 0.30), vec3(0.78, 0.79, 0.96), m), mix(0.95, 0.85, m), aspect, 1.0);
  // deep crimson core / top-left violet
  col = blob(col, q, mix(vec2(0.45, 0.33), vec2(0.27, 0.02), m) + dr, mix(0.42, 0.30, m),
             mix(vec3(0.75, 0.20, 0.16), vec3(0.33, 0.24, 0.73), m), mix(0.9, 0.95, m), aspect, 1.0);
  // violet diagonal running down from the top-left (lavender only)
  col = blob(col, q, vec2(0.18, 0.36), 0.22, vec3(0.50, 0.42, 0.80), 0.7 * m, aspect, 1.0);
  // top-right: muted rose / grey violet
  col = blob(col, q, mix(vec2(0.88, 0.22), vec2(0.88, 0.04), m) - dr, mix(0.34, 0.22, m),
             mix(vec3(0.76, 0.36, 0.30), vec3(0.36, 0.30, 0.62), m), mix(0.85, 0.9, m), aspect, 1.0);
  // right edge violet (lavender only)
  col = blob(col, q, vec2(1.0, 0.32), 0.22, vec3(0.47, 0.40, 0.79), 0.7 * m, aspect, 1.0);
  // wide white dome (lavender only)
  col = blob(col, q, vec2(0.64, 0.33) + dr * 0.5, 0.40, vec3(0.93, 0.93, 0.98), 0.97 * m, aspect, 1.3);
  // right side: orange-red low / lilac
  col = blob(col, q, mix(vec2(1.0, 0.78), vec2(0.92, 0.80), m), mix(0.20, 0.32, m),
             mix(vec3(0.84, 0.36, 0.17), vec3(0.78, 0.68, 0.95), m), mix(0.9, 0.95, m), aspect, 1.0);
  // mid-right accent (lavender only)
  col = blob(col, q, vec2(0.82, 0.55), 0.22, vec3(0.74, 0.70, 0.95), 0.6 * m, aspect, 1.0);
  // orange-only corners: brown-rose top-right, salmon top-left
  col = blob(col, q, vec2(1.0, 0.0), 0.12, vec3(0.57, 0.29, 0.25), 0.8 * (1.0 - m), aspect, 1.0);
  col = blob(col, q, vec2(0.0, 0.0), 0.10, vec3(0.80, 0.42, 0.35), 0.6 * (1.0 - m), aspect, 1.0);
  // lower glass (only seen once it scrolls up): faint grey-blue curve at the right
  col = blob(col, q, vec2(1.0, 1.25), 0.25, vec3(0.62, 0.64, 0.80), 0.5 * m, aspect, 1.0);
  return col;
}

void main() {
  vec2 frag = gl_FragCoord.xy / uDpr;
  float W = uRes.x, H = uRes.y;
  float ypx = H - frag.y;

  // coverage: the glass above the edge, plus antialiased rounded bars below it
  float cover = ypx <= uHeroBottom ? 1.0 : 0.0;
  for (int i = 0; i < ${BAR_COUNT}; i++) {
    vec4 b = uBars[i];
    if (b.z > 0.5) {
      vec2 c = b.xy + b.zw * 0.5;
      float r = 0.27 * b.w;
      vec2 qd = abs(vec2(frag.x, ypx) - c) - (b.zw * 0.5 - r);
      float sd = length(max(qd, 0.0)) + min(max(qd.x, qd.y), 0.0) - r;
      cover = max(cover, clamp(0.5 - sd, 0.0, 1.0));
    }
  }
  if (cover <= 0.0) { gl_FragColor = vec4(0.0); return; }

  // rib coordinate: straight ribs at rest, an X-shaped hyperbola during the intro
  vec2 c = vec2(frag.x - W * 0.5, ypx - H * 0.5);
  float d2 = c.x * c.x - uHyp * c.y * c.y;
  float wedge = d2 < 0.0 ? 1.0 : 0.0;
  float xr = W * 0.5 + sign(c.x) * sqrt(abs(d2));
  float u = fract(xr / uPitch + 0.5);
  float hl = exp(-pow(u - 0.5, 2.0) / (2.0 * 0.11 * 0.11));

  vec3 col = field(vec2(frag.x / W, (ypx + uShift) / H), uTime, uMix);
  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col += hl * 0.042 * (1.0 - smoothstep(0.55, 0.95, l)) * (1.0 - wedge) * (1.0 + 1.5 * uFlash);
  col = 1.0 - (1.0 - col) * (1.0 - uFlash * vec3(0.83, 0.38, 0.25));
  col = mix(vec3(0.592, 0.192, 0.125), col, uReveal);
  col += (hash2(gl_FragCoord.xy + fract(uTime * 13.0) * 91.0) - 0.5) * 0.006;
  gl_FragColor = vec4(col * cover, cover);
}
`;

export class HeroGL {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = { mix: 0, heroBottom: 1, shift: 0, pitch: 1400, hyp: 12, flash: 0, reveal: 0 };
    this.bars = new Float32Array(BAR_COUNT * 4);
    const gl = canvas.getContext('webgl', { antialias: false, alpha: true, premultipliedAlpha: true, depth: false, stencil: false, powerPreference: 'high-performance' });
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
    gl.clearColor(0, 0, 0, 0);
    const u = (n) => gl.getUniformLocation(prog, n);
    this.u = {
      res: u('uRes'), dpr: u('uDpr'), time: u('uTime'), mix: u('uMix'), heroBottom: u('uHeroBottom'),
      shift: u('uShift'), pitch: u('uPitch'), hyp: u('uHyp'), flash: u('uFlash'), reveal: u('uReveal'), bars: u('uBars'),
    };
    this.resize();
  }

  // rib pitch at rest: 101 ribs across the viewport (13.8px at 1392px)
  get restPitch() { return (this.w || window.innerWidth) / 101; }

  resize() {
    if (this.failed) return;
    const w = this.canvas.clientWidth || window.innerWidth;
    const h = this.canvas.clientHeight || window.innerHeight;
    // the glass is soft by nature: cap the backing store around 2.2 MP so big/retina screens stay cheap
    const dpr = Math.max(0.75, Math.min(window.devicePixelRatio || 1, 1.25, Math.sqrt(2.2e6 / (w * h))));
    this.w = w; this.h = h; this.dpr = dpr;
    this.canvas.width = Math.round(w * dpr);
    this.canvas.height = Math.round(h * dpr);
    this.gl.viewport(0, 0, this.canvas.width, this.canvas.height);
  }

  setBars(rects) {
    for (let i = 0; i < BAR_COUNT; i++) {
      const r = rects[i];
      const on = r && r.w > 0;
      this.bars[i * 4] = on ? r.x : 0;
      this.bars[i * 4 + 1] = on ? r.y : 0;
      this.bars[i * 4 + 2] = on ? r.w : 0;
      this.bars[i * 4 + 3] = on ? r.h : 0;
    }
  }

  render(time) {
    if (this.failed) return;
    const { gl, u, state } = this;
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(u.res, this.canvas.width / this.dpr, this.canvas.height / this.dpr);
    gl.uniform1f(u.dpr, this.dpr);
    gl.uniform1f(u.time, time);
    gl.uniform1f(u.mix, state.mix);
    gl.uniform1f(u.heroBottom, state.heroBottom * this.h);
    gl.uniform1f(u.shift, state.shift);
    gl.uniform1f(u.pitch, state.pitch);
    gl.uniform1f(u.hyp, state.hyp);
    gl.uniform1f(u.flash, state.flash);
    gl.uniform1f(u.reveal, state.reveal);
    gl.uniform4fv(u.bars, this.bars);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
}
