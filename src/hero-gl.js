// Full-screen ribbed (fluted) glass gradient for the hero.
// The same shader paints the stepped funnel bars below the hero's bottom edge, so each bar
// reads as a slice of the glass. Everything outside the glass is transparent, so the About
// stage pinned underneath shows through.
import { BAR_COUNT } from './funnel.js';

// palette blobs, orange (mix 0) -> lavender (mix 1), painted in order:
// [c0x, c0y, c1x, c1y, drift, r0, r1, col0, col1, a0, a1, stretchX, hardness]
// drift scales the shared slow wander; stretchX widens a blob horizontally; hardness > 1 gives a
// crisper rim (exp(-d^2k))
const BLOBS = [
  // left band: saturated orange / lilac
  [0.03, 0.45, 0.0, 0.45, 1, 0.30, 0.35, [0.84, 0.30, 0.13], [0.67, 0.60, 0.88], 0.9, 0.8, 1, 1],
  // bottom-left: light orange rising diagonally / periwinkle
  [0.08, 0.97, 0.20, 0.90, -1, 0.45, 0.40, [0.87, 0.52, 0.30], [0.78, 0.79, 0.96], 0.95, 0.85, 1, 1],
  // wide white dome with a crisp rim (lavender only), under the violet corners
  [0.64, 0.36, 0.64, 0.36, 0.5, 0.40, 0.40, [0.93, 0.93, 0.98], [0.93, 0.93, 0.98], 0, 0.97, 1.35, 2.4],
  // deep crimson core (upper middle only) / top-left violet
  [0.43, 0.30, 0.27, 0.0, 1, 0.30, 0.30, [0.75, 0.20, 0.16], [0.36, 0.25, 0.76], 0.9, 1.0, 1, 1],
  // orange only: rose lower middle, salmon top centre
  [0.50, 0.86, 0.50, 0.86, 0, 0.32, 0.32, [0.76, 0.34, 0.27], [0.76, 0.34, 0.27], 0.8, 0, 1, 1],
  [0.55, 0.0, 0.55, 0.0, 0, 0.20, 0.20, [0.78, 0.40, 0.33], [0.78, 0.40, 0.33], 0.75, 0, 1, 1],
  // violet diagonal running down from the top-left (lavender only)
  [0.18, 0.36, 0.18, 0.36, 0, 0.22, 0.22, [0.50, 0.42, 0.80], [0.50, 0.42, 0.80], 0, 0.7, 1, 1],
  // top-right: muted rose / violet
  [0.88, 0.22, 0.86, 0.0, -1, 0.34, 0.22, [0.76, 0.36, 0.30], [0.40, 0.33, 0.80], 0.85, 1.0, 1, 1],
  // right edge violet (lavender only)
  [1.0, 0.32, 1.0, 0.32, 0, 0.22, 0.22, [0.47, 0.40, 0.79], [0.47, 0.40, 0.79], 0, 0.7, 1, 1],
  // right side: orange-red low / lilac
  [1.0, 0.78, 0.92, 0.80, 0, 0.20, 0.32, [0.84, 0.36, 0.17], [0.78, 0.68, 0.95], 0.9, 0.95, 1, 1],
  // mid-right accent (lavender only)
  [0.82, 0.55, 0.82, 0.55, 0, 0.22, 0.22, [0.74, 0.70, 0.95], [0.74, 0.70, 0.95], 0, 0.3, 1, 1],
  // orange-only corners: brown-rose top-right, salmon top-left
  [1.0, 0.0, 1.0, 0.0, 0, 0.12, 0.12, [0.57, 0.29, 0.25], [0.57, 0.29, 0.25], 0.8, 0, 1, 1],
  [0.0, 0.0, 0.0, 0.0, 0, 0.10, 0.10, [0.80, 0.42, 0.35], [0.80, 0.42, 0.35], 0.6, 0, 1, 1],
  // lower glass (only seen once it scrolls up): faint grey-blue curve at the right
  [1.0, 1.25, 1.0, 1.25, 0, 0.25, 0.25, [0.62, 0.64, 0.80], [0.62, 0.64, 0.80], 0, 0.5, 1, 1],
  // darker lilac lower left (lavender only)
  [0.17, 0.62, 0.17, 0.62, 0, 0.18, 0.18, [0.60, 0.56, 0.84], [0.60, 0.56, 0.84], 0, 0.75, 1, 1],
];
const MAX_BLOBS = BLOBS.length;
const lerp = (a, b, t) => a + (b - a) * t;

const VERT = `
attribute vec2 aPos;
void main() { gl_Position = vec4(aPos, 0.0, 1.0); }
`;

const FRAG = `
precision highp float;
uniform vec2 uRes;          // css px
uniform float uDpr;
uniform float uHeroBottom;  // css px from top
uniform float uShift;       // css px the glass has scrolled up
uniform float uPitch;       // rib pitch, css px
uniform float uHyp;         // intro hourglass strength (0 = straight ribs)
uniform float uFlash;       // intro peach flash 0..1
uniform float uReveal;      // 0 dark red hand-off colour -> 1 full glass
uniform float uLg;          // log2 of the rib zoom length: small = spacing grows fast away from the centre
uniform float uWedge;       // 1 = no ribs in the hourglass's top/bottom wedges
uniform vec4 uBars[${BAR_COUNT}];

// the colour field is a stack of soft blobs; their centres, radii, colours and weights depend only
// on time and the palette mix, so they're worked out once per frame in JS (see BLOBS above)
uniform vec3 uBase;
uniform int uN;
uniform vec2 uC[${MAX_BLOBS}];
uniform vec2 uK[${MAX_BLOBS}];
uniform vec3 uBC[${MAX_BLOBS}];
uniform float uA[${MAX_BLOBS}];
uniform float uP[${MAX_BLOBS}];

vec3 field(vec2 p) {
  vec2 q = vec2(p.x * uRes.x / uRes.y, p.y);
  vec3 col = uBase;
  for (int i = 0; i < ${MAX_BLOBS}; i++) {
    if (i >= uN) break;
    vec2 d = q - uC[i];
    col = mix(col, uBC[i], clamp(exp(-pow(dot(d * d, uK[i]), uP[i])) * uA[i], 0.0, 1.0));
  }
  return col;
}

void main() {
  vec2 frag = gl_FragCoord.xy / uDpr;
  float W = uRes.x, H = uRes.y;
  float ypx = H - frag.y;

  // coverage: the glass above the edge, plus antialiased rounded bars below it
  float cover = ypx <= uHeroBottom ? 1.0 : 0.0;
  // the bars always sit below the hero's edge, so pixels inside the glass skip them
  if (cover < 1.0) for (int i = 0; i < ${BAR_COUNT}; i++) {
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
  // ribs counted out from the centre; during the intro their spacing grows geometrically outward
  float R = sqrt(abs(d2));
  float lam = exp2(uLg) * W / 1392.0;
  float n = lam > 1e5 ? R / uPitch : (lam / uPitch) * log(1.0 + R / lam);
  float u = fract(n);
  // keep each rib a thin line of its resting width while the zoom spreads them apart
  float spread = lam > 1e5 ? 1.0 : 1.0 + R / lam;
  float sig = max(0.11 / spread, 0.6 / (uPitch * spread));
  float hl = exp(-pow(u - 0.5, 2.0) / (2.0 * sig * sig));

  vec3 col = field(vec2(frag.x / W, (ypx + uShift) / H));
  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col += hl * 0.042 * (1.0 - smoothstep(0.55, 0.95, l)) * (1.0 - wedge * uWedge) * (1.0 + 1.5 * uFlash);
  col = 1.0 - (1.0 - col) * (1.0 - uFlash * vec3(0.83, 0.4, 0.31));
  col = mix(vec3(0.592, 0.192, 0.125), col, uReveal);
  gl_FragColor = vec4(col * cover, cover);
}
`;

export class HeroGL {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = { mix: 0, heroBottom: 1, shift: 0, pitch: 1400, hyp: 12, flash: 0, reveal: 0, lg: 30, wedge: 0 };
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
      res: u('uRes'), dpr: u('uDpr'), heroBottom: u('uHeroBottom'),
      shift: u('uShift'), pitch: u('uPitch'), hyp: u('uHyp'), flash: u('uFlash'), reveal: u('uReveal'), bars: u('uBars'),
      lg: u('uLg'), wedge: u('uWedge'),
      base: u('uBase'), n: u('uN'), C: u('uC'), K: u('uK'), BC: u('uBC'), A: u('uA'), P: u('uP'),
    };
    this.fC = new Float32Array(MAX_BLOBS * 2);
    this.fK = new Float32Array(MAX_BLOBS * 2);
    this.fBC = new Float32Array(MAX_BLOBS * 3);
    this.fA = new Float32Array(MAX_BLOBS);
    this.fP = new Float32Array(MAX_BLOBS);
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

  // per-frame blob parameters; blobs with no weight at this mix are dropped
  setField(t, m) {
    const { gl, u, fC, fK, fBC, fA, fP } = this;
    const aspect = this.w / this.h;
    const dx = 0.015 * Math.sin(t * 0.21), dy = 0.015 * Math.cos(t * 0.17);
    let n = 0;
    for (let i = 0; i < MAX_BLOBS; i++) {
      const b = BLOBS[i];
      let a = lerp(b[9], b[10], m);
      // the change washes through a light mauve: the core dips mid-way and the right-hand violets
      // arrive last
      if (i === 3) a *= 1 - 3.6 * m * (1 - m);
      if (i === 7 || i === 8) {
        // only the lavender share is delayed; the orange state's corner is untouched
        const x = Math.min(1, Math.max(0, (m - 0.93) / 0.07));
        a = b[9] * (1 - m) + b[10] * m * x * x * (3 - 2 * x);
      }
      if (a <= 0.002) continue;
      const r = lerp(b[5], b[6], m);
      fC[n * 2] = (lerp(b[0], b[2], m) + b[4] * dx) * aspect;
      fC[n * 2 + 1] = lerp(b[1], b[3], m) + b[4] * dy;
      fK[n * 2] = 1 / (r * r * b[11] * b[11]);
      fK[n * 2 + 1] = 1 / (r * r);
      for (let j = 0; j < 3; j++) fBC[n * 3 + j] = lerp(b[7][j], b[8][j], m);
      fA[n] = a;
      fP[n] = b[12];
      n++;
    }
    gl.uniform3f(u.base, lerp(0.76, 0.79, m), lerp(0.24, 0.77, m), lerp(0.19, 0.94, m));
    gl.uniform1i(u.n, n);
    gl.uniform2fv(u.C, fC);
    gl.uniform2fv(u.K, fK);
    gl.uniform3fv(u.BC, fBC);
    gl.uniform1fv(u.A, fA);
    gl.uniform1fv(u.P, fP);
  }

  render(time) {
    if (this.failed) return;
    const { gl, u, state } = this;
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.uniform2f(u.res, this.canvas.width / this.dpr, this.canvas.height / this.dpr);
    gl.uniform1f(u.dpr, this.dpr);
    this.setField(time, state.mix);
    gl.uniform1f(u.heroBottom, state.heroBottom * this.h);
    gl.uniform1f(u.shift, state.shift);
    gl.uniform1f(u.pitch, state.pitch);
    gl.uniform1f(u.hyp, state.hyp);
    gl.uniform1f(u.flash, state.flash);
    gl.uniform1f(u.reveal, state.reveal);
    gl.uniform1f(u.lg, state.lg);
    gl.uniform1f(u.wedge, state.wedge);
    gl.uniform4fv(u.bars, this.bars);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
}
