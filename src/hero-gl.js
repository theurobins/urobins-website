// Full-screen ribbed (fluted) glass gradient for the hero: electric blue, cobalt and violet.
// The same shader paints the stepped funnel bars below the hero's bottom edge, so each bar
// reads as a slice of the glass. Everything outside the glass is transparent, so the About
// stage pinned underneath shows through.
import { BAR_COUNT } from './funnel.js';

// palette blobs, electric (mix 0) -> violet (mix 1), painted in order:
// [c0x, c0y, c1x, c1y, drift, r0, r1, col0, col1, a0, a1, stretchX, hardness]
// drift scales the shared slow wander; stretchX widens a blob horizontally; hardness > 1 gives a
// crisper rim (exp(-d^2k)). y runs past 1: the lower glass is what the funnel bars are cut from.
const BLOBS = [
  // electric-blue core, left of centre, drifting
  [0.24, 0.52, 0.20, 0.48, 1, 0.42, 0.46, [0.10, 0.09, 1.00], [0.22, 0.18, 1.00], 0.96, 0.94, 1.15, 1],
  // cobalt dome upper-middle with a crisp rim; periwinkle in the second state
  [0.60, 0.26, 0.62, 0.28, 0.5, 0.32, 0.36, [0.24, 0.36, 1.00], [0.56, 0.54, 1.00], 0.82, 0.92, 1.3, 2.2],
  // violet top-right
  [0.92, 0.10, 0.90, 0.08, -1, 0.40, 0.42, [0.36, 0.20, 0.96], [0.52, 0.28, 0.98], 0.92, 0.95, 1, 1],
  // cyan glint top-left, small and crisp; lilac later
  [0.12, 0.10, 0.14, 0.12, 1, 0.24, 0.27, [0.30, 0.80, 1.00], [0.74, 0.68, 1.00], 0.55, 0.62, 1.2, 1.1],
  // indigo lower-right
  [0.98, 0.80, 0.95, 0.78, 0, 0.36, 0.36, [0.20, 0.14, 0.80], [0.30, 0.18, 0.88], 0.85, 0.85, 1, 1],
  // navy band under the headline (keeps the white type readable)
  [0.50, 1.00, 0.50, 1.00, 0, 0.45, 0.45, [0.03, 0.03, 0.14], [0.04, 0.03, 0.16], 0.55, 0.55, 2.0, 1.2],
  // magenta accent mid-right (second state only)
  [0.78, 0.55, 0.78, 0.55, 0, 0.20, 0.22, [0.82, 0.32, 0.92], [0.82, 0.32, 0.92], 0, 0.55, 1, 1],
  // periwinkle lower-left, brightening in the second state
  [0.06, 0.92, 0.10, 0.90, 0, 0.26, 0.30, [0.44, 0.50, 1.00], [0.56, 0.60, 1.00], 0.30, 0.80, 1, 1],
  // soft white sheen upper-centre (second state only)
  [0.45, 0.16, 0.45, 0.16, 0.5, 0.17, 0.20, [0.92, 0.92, 1.00], [0.92, 0.92, 1.00], 0, 0.34, 1.6, 1.4],
  // lower glass: vivid cobalt, violet and cyan (seen once the hero scrolls up and in the funnel bars)
  [0.50, 1.50, 0.50, 1.50, 0, 0.50, 0.50, [0.22, 0.30, 1.00], [0.40, 0.42, 1.00], 0.95, 0.95, 1.8, 1],
  [0.12, 1.30, 0.12, 1.30, 0, 0.30, 0.30, [0.50, 0.30, 1.00], [0.62, 0.42, 1.00], 0.9, 0.9, 1, 1],
  [0.88, 1.65, 0.88, 1.65, 0, 0.30, 0.30, [0.36, 0.86, 1.00], [0.70, 0.76, 1.00], 0.8, 0.85, 1, 1.4],
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
uniform float uReveal;      // 0 hand-off colour -> 1 full glass
uniform vec3 uHand;         // the colour the preloader ends on
uniform float uLg;          // log2 of the rib zoom length: small = spacing grows fast away from the centre
uniform float uFan;         // px (at 1392 wide): ribs closer than this to the centre fan out instead of
                            // sharing the hourglass's asymptotes; 0 leaves its top/bottom wedges blank
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

  // rib coordinate R: straight ribs (R = |x|) at rest. During the intro rib R is the curve
  // x^2 = R^2 + k(R) y^2 with k(R) = uHyp R^2 / (R^2 + L^2): ribs far from the centre are
  // hyperbolas sharing an X of asymptotes, ribs within ~L of it fan through the centre.
  vec2 c = vec2(frag.x - W * 0.5, ypx - H * 0.5);
  float x2 = c.x * c.x, L = uFan * W / 1392.0, L2 = L * L;
  float b = L2 + uHyp * c.y * c.y - x2;
  float q = sqrt(b * b + 4.0 * x2 * L2);
  float R = sqrt(b > 0.0 ? 2.0 * x2 * L2 / (b + q) : 0.5 * (q - b));
  // ribs counted out from the centre; during the intro their spacing grows geometrically outward
  float lam = exp2(uLg) * W / 1392.0;
  float n = lam > 1e5 ? R / uPitch : (lam / uPitch) * log(1.0 + R / lam);
  // nearest rib's curve, and the screen-space distance to it (first order), so a line keeps its
  // width all along its length (near the asymptotes R changes ~20x faster than distance)
  float m = floor(n) + 0.5;
  float Rm = lam > 1e5 ? m * uPitch : lam * (exp(m * uPitch / lam) - 1.0);
  float km = uHyp * Rm * Rm / max(Rm * Rm + L2, 1e-6);
  float F = x2 - Rm * Rm - km * c.y * c.y;
  float dpx = F / max(2.0 * sqrt(x2 + km * km * c.y * c.y), 1e-3);
  // lines widen with the zoom's spreading, but no more than 2.5x their resting width
  float wpx = 0.11 * uPitch * min(lam > 1e5 ? 1.0 : 1.0 + Rm / lam, 2.5);
  float hl = exp(-dpx * dpx / (2.0 * wpx * wpx));

  vec3 col = field(vec2(frag.x / W, (ypx + uShift) / H));
  float l = dot(col, vec3(0.299, 0.587, 0.114));
  col += hl * 0.07 * (1.0 - smoothstep(0.55, 0.95, l)) * (1.0 + 1.5 * uFlash);
  col = 1.0 - (1.0 - col) * (1.0 - uFlash * vec3(0.83, 0.4, 0.31));
  col = mix(uHand, col, uReveal);
  gl_FragColor = vec4(col * cover, cover);
}
`;

export class HeroGL {
  constructor(canvas) {
    this.canvas = canvas;
    this.state = { mix: 0, heroBottom: 1, shift: 0, pitch: 1400, hyp: 12, flash: 0, reveal: 0, lg: 30, fan: 0, hand: [0.035, 0.035, 0.043] };
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
      lg: u('uLg'), fan: u('uFan'), hand: u('uHand'),
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
      const a = lerp(b[9], b[10], m);
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
    gl.uniform3f(u.base, lerp(0.035, 0.05, m), lerp(0.035, 0.035, m), lerp(0.10, 0.13, m));
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
    gl.uniform3f(u.hand, state.hand[0], state.hand[1], state.hand[2]);
    gl.uniform1f(u.lg, state.lg);
    gl.uniform1f(u.fan, state.fan);
    gl.uniform4fv(u.bars, this.bars);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  }
}
