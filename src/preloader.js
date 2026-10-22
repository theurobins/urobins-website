// Loading screen, after the reference film: a hard close-up on the right lamp pulls back to reveal
// a dark indigo stage; the right giant rises out of the dark and opens its eyes, the left lamp
// ignites with a burst of sparks, and both beams swing onto the logo at the centre, which assembles
// as faint glass in the dark and is lit by the beams: its colours, glints and shadows come from where
// each lamp is and where it points (logo-light.js). The giants lean in for a closer look, blink,
// settle back, and the camera dives into the crossing beams: the light fills the frame and the hero's
// glass fades in from that same colour.
// The scene is drawn on a canvas as a pure function of time in a 1600x900 design space; the logo
// is DOM on top, mapped into the same space, so no light is ever painted behind or over it; its
// shadows are painted on the wall, under it.
import gsap from 'gsap';
import { runMobilePreloader } from './preloader-mobile.js';
import { createLogoLight } from './logo-light.js';
import { isPhone } from './breakpoints.js';

const DW = 1600, DH = 900;
const TS = 1.1;                       // the reference's beats, stretched a little
const LOGO = { x: 800, y: 490 };      // the logo's centre
const TARGET = { x: 800, y: 548 };    // where the beams cross: just under the logo, so the hot spot
// is a pool below it, not a wash behind it
const HOLD = 5.05;                    // reference seconds: the wide shot the scene holds until the fonts are in
const DIVE_DUR = 0.95;                // seconds: the dive into the light
export const WASH = [0.812, 0.8, 1.0];   // the light's colour at the end of the dive (#cfccff)

const ease = {
  io: (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2),
  out2: (x) => 1 - (1 - x) * (1 - x),
  out3: (x) => 1 - Math.pow(1 - x, 3),
  in2: (x) => x * x,
  in3: (x) => x * x * x,
};
const clamp01 = (x) => Math.min(1, Math.max(0, x));
// the pieces fly in like masses on a damped spring, launched at their slots: fast in, about 7% past,
// then settled (zeta 0.85, launch speed 1.3, eight natural periods' worth of time over the tween)
const SNAP = (() => {
  const z = 0.85, v = 1.3, T = 8, wd = Math.sqrt(1 - z * z), k = (z - v) / wd;
  return (p) => (p >= 1 ? 1 : 1 - Math.exp(-z * p * T) * (Math.cos(wd * p * T) + k * Math.sin(wd * p * T)));
})();
const lerp = (a, b, k) => a + (b - a) * k;
function kf(table, t, e = ease.io) {
  if (t <= table[0][0]) return table[0][1];
  for (let i = 1; i < table.length; i++) {
    const [t1, v1] = table[i];
    if (t <= t1) {
      const [t0, v0] = table[i - 1];
      const k = t1 === t0 ? 1 : e((t - t0) / (t1 - t0));
      if (Array.isArray(v0)) return v0.map((a, j) => a + (v1[j] - a) * k);
      return v0 + (v1 - v0) * k;
    }
  }
  return table[table.length - 1][1];
}
// Smooth motion through a table of poses: a cubic spline with tangents from the neighbouring keys,
// flattened wherever a key is a turning point or a hold, so nothing overshoots. The reference's
// poses were measured frame by frame; easing each segment on its own made the lamps pulse.
function spline(table, t) {
  const n = table.length;
  if (t <= table[0][0]) return table[0][1].slice();
  if (t >= table[n - 1][0]) return table[n - 1][1].slice();
  let i = 0;
  while (i < n - 2 && table[i + 1][0] <= t) i++;
  const [t0, p0] = table[i], [t1, p1] = table[i + 1];
  const h = t1 - t0, u = (t - t0) / h;
  const tan = (j, k) => {
    const [ta, a] = table[Math.max(0, j - 1)], [tb, b] = table[j], [tc, c] = table[Math.min(n - 1, j + 1)];
    const d1 = tb === ta ? 0 : (b[k] - a[k]) / (tb - ta), d2 = tc === tb ? 0 : (c[k] - b[k]) / (tc - tb);
    return d1 === 0 || d2 === 0 || d1 * d2 < 0 ? 0 : (d1 + d2) / 2;
  };
  const u2 = u * u, u3 = u2 * u;
  const h00 = 2 * u3 - 3 * u2 + 1, h10 = u3 - 2 * u2 + u, h01 = -2 * u3 + 3 * u2, h11 = u3 - u2;
  return p0.map((v, k) => h00 * v + h10 * h * tan(i, k) + h01 * p1[k] + h11 * h * tan(i + 1, k));
}

// ---------- keyframes (reference seconds): [t, value | [values]] ----------
// giants: eye-pair centre (x, y), eye separation, tilt (deg). They rise from below the frame, lean
// in close over the logo, then settle back a little.
const GIANT_R = [
  [1.2, [1300, 900, 181, 4]], [1.45, [1320, 480, 181, 5]], [1.65, [1328, 280, 181, 6]], [1.78, [1331, 178, 181, 6.6]],
  [1.98, [1341, 145, 175, 9]], [2.35, [1351, 127, 177, 11]], [2.5, [1351, 127, 177, 11]], [2.75, [1403, 160, 238, 16]],
  [3.05, [1395, 178, 258, 18.5]], [3.4, [1393, 181, 261, 18.8]], [3.75, [1060, 200, 190, 0]], [3.93, [1039, 205, 176, -2]],
  [4.23, [1039, 205, 176, -2]], [4.45, [1087, 211, 174, -3]], [4.8, [1450, 326, 160, -4.7]], [HOLD, [1470, 334, 160, -4.5]],
];
const GIANT_L = [
  [1.45, [500, 1000, 176, -1]], [1.65, [470, 540, 176, -1.5]], [1.78, [488, 280, 176, -1.5]], [1.98, [478, 236, 176, -2]],
  [2.1, [472, 200, 176, -2]], [2.4, [467, 172, 176, -2]], [2.55, [467, 172, 176, -2]], [2.78, [370, 259, 193, -4.7]],
  [3.05, [290, 292, 230, -10]], [3.4, [275, 300, 238, -11]], [3.53, [138, 194, 200, -5.5]], [4.03, [137, 178, 197, -5.5]],
  [4.23, [128, 261, 172, -3]], [4.45, [137, 289, 163, -2.5]], [4.8, [145, 308, 154, -2.5]], [HOLD, [150, 314, 154, -2.5]],
];
// eye openness (0 closed .. 1 open): the left giant blinks first, the right one a beat later, both
// quickly; the right reopens a little narrowed as it leans over the logo, and both settle half-lidded
const OPEN_R = [[1.7, 0], [1.98, 1], [3.46, 1], [3.58, 0], [3.68, 0], [3.84, 0.82], [4.45, 0.82], [4.8, 0.6], [HOLD, 0.6]];
const OPEN_L = [[1.73, 0], [2.02, 1], [3.2, 1], [3.33, 0], [3.45, 0], [3.63, 0.85], [4.1, 0.85], [4.23, 0.5], [4.8, 0.5], [HOLD, 0.45]];
// lamps (x, y, diameter): they ride up with the giants and come in closer with the lean
const LAMP_R = [
  [1.05, [1374, 505, 58]], [1.25, [1378, 489, 58]], [1.45, [1383, 435, 59]], [1.65, [1387, 378, 60]],
  [1.85, [1388, 342, 61]], [2.05, [1393, 318, 62]], [2.35, [1396, 310, 62]], [2.55, [1427, 309, 70]],
  [2.68, [1422, 362, 98]], [2.78, [1410, 380, 102]], [3.05, [1399, 392, 105]], [3.4, [1393, 393, 113]],
  [3.53, [1200, 394, 118]], [3.63, [1152, 393, 113]], [3.83, [1122, 392, 103]], [3.93, [1114, 390, 90]],
  [4.23, [1114, 390, 90]], [4.45, [1126, 396, 88]], [4.8, [1236, 444, 72]], [HOLD, [1260, 450, 70]],
];
const LAMP_L = [
  [1.9, [266, 475, 30]], [1.96, [268, 450, 36]], [2.03, [272, 385, 46]], [2.13, [278, 334, 52]], [2.35, [280, 309, 56]],
  [2.55, [270, 317, 58]], [2.68, [220, 367, 66]], [2.78, [165, 425, 90]], [3.05, [141, 452, 99]],
  [3.4, [141, 452, 99]], [3.53, [166, 417, 59]], [4.03, [170, 414, 57]], [4.23, [240, 437, 46]],
  [4.45, [259, 443, 41]], [4.8, [270, 447, 40]], [HOLD, [276, 450, 40]],
];
const POWER_L = [[1.9, 0], [2.03, 1]];
// beam aim offsets from the line to TARGET (deg; the right beam starts steeply at the floor) and half-angles
const AIM_R = [[0, -30], [1.3, -30], [2.25, 0]];
const AIM_L = [[1.9, 20], [2.45, 0]];
// the beams open wide as the lamps come in close, then tighten for the wide shot
const HALF = [[0, 13], [2.45, 13.4], [3.05, 18], [3.45, 18], [3.85, 16], [4.25, 14.5], [4.45, 14], [4.8, 8.5], [HOLD, 8]];
// the opening close-up: camera zoom and the design point at the screen's centre
const ZOOM_IN = 14;
const CAM_T0 = 0.1, CAM_T1 = 1.45;

// the light is strongest by the lamps and has mostly fallen off by the time it reaches the logo, so
// the mark keeps its contrast against a deep ground while still reading as lit
const BEAM_STOPS = [
  [0, 'rgba(255,254,255,1)'], [0.1, 'rgba(236,234,255,0.92)'], [0.26, 'rgba(214,210,255,0.66)'],
  [0.44, 'rgba(186,182,255,0.34)'], [0.62, 'rgba(150,142,245,0.13)'], [0.8, 'rgba(110,100,225,0.04)'], [1, 'rgba(80,70,200,0)'],
];
const toDeg = (r) => (r * 180) / Math.PI;

export function runPreloader({ el, reduced, onReveal, onDone }) {
  // phones get a scene of their own (preloader-mobile.js): this stage is a landscape shot
  if (isPhone()) return runMobilePreloader({ el, reduced, onReveal, onDone, grain: makeGrain });
  const canvas = el.querySelector('.preloader__canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const logo = el.querySelector('.preloader__logo');
  const lighting = createLogoLight(el);
  const { pieces, wordClip } = lighting;
  const bar = el.querySelector('.preloader__bar');
  const fill = bar.querySelector('i');
  const count = el.querySelector('.preloader__count');
  const num = el.querySelector('.preloader__num');
  el.style.setProperty('--grain', `url(${makeGrain().toDataURL()})`);

  // ---- the logo in design space: the SVG is a 430x120 box centred on LOGO, and its units are design
  // units, so the lamps reach it by a shift ----
  const LX = LOGO.x - 215, LY = LOGO.y - 60;

  let W = 0, H = 0, dpr = 1, s = 1, portrait = false, lastBlur = 0, logoTr = '', logoOp = '';
  const rest = { x: 800, y: 450 };
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    portrait = W / H < 0.9;
    // cover-fit the design space; portrait keeps both lamps in frame and centres on the logo
    s = portrait ? W / 1200 : Math.max(W / DW, H / DH);
    rest.y = portrait ? LOGO.y : 450;
  }

  // ---- sprites built once ----
  const specks = document.createElement('canvas');
  specks.width = specks.height = 256;
  {
    const x = specks.getContext('2d');
    x.fillStyle = 'rgba(176,184,255,0.5)';
    for (let i = 0; i < 160; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = (1.0 + Math.random() * 1.2) * 58;
      x.fillRect(128 + Math.cos(a) * r, 128 + Math.sin(a) * r, 1.4, 1.4);
    }
  }
  const sparks = Array.from({ length: 300 }, (_, i) => ({
    a: (i / 300) * Math.PI * 2 + Math.random() * 0.3,
    f: 1.5 + Math.random() * 3,
    r: 0.6 + Math.random() * 1.4,
    c: Math.random() < 0.5 ? '#9ea6ff' : '#eef0ff',
  }));

  // ---- camera: the design point at the screen's centre and the magnification ----
  const cam = { x: rest.x, y: rest.y, k: 1 };
  const LAMP0 = LAMP_R[0][1];
  function setCamera(t, dive) {
    const u = clamp01((t - CAM_T0) / (CAM_T1 - CAM_T0));
    // the close-up opens on the right lamp and pulls back onto the stage; the lamp slides from the
    // frame's centre to its place in one monotonic move (the camera's centre is solved from that)
    cam.k = Math.exp(Math.log(ZOOM_IN) * (1 - ease.out2(u)));
    const g = ease.out2(u);
    cam.x = LAMP0[0] - 40 - (LAMP0[0] - 40 - rest.x) * g / cam.k;
    cam.y = LAMP0[1] - (LAMP0[1] - rest.y) * g / cam.k;
    if (dive > 0) {
      // dive into the light at the logo
      const d = ease.in3(dive);
      cam.k = 1 + 6.5 * d;
      cam.x = lerp(rest.x, LOGO.x, ease.out2(dive));
      cam.y = lerp(rest.y, LOGO.y, ease.out2(dive));
    }
    const kk = s * cam.k;
    ctx.setTransform(dpr * kk, 0, 0, dpr * kk, dpr * (W / 2 - cam.x * kk), dpr * (H / 2 - cam.y * kk));
  }
  const toScreen = (x, y) => [W / 2 + (x - cam.x) * s * cam.k, H / 2 + (y - cam.y) * s * cam.k];

  // ---- drawing ----
  // flat-topped bell head with shoulders: a silhouette darker than the lit wall, fading into it below the eyes
  // drawn four times, each pass a little larger and fainter, so the edge is soft like something
  // close to the camera and out of its focus
  function drawHead(g) {
    const [x, y, k, tilt] = g;
    if (y > 1040) return;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((tilt * Math.PI) / 180);
    const grad = ctx.createLinearGradient(0, -1.6 * k, 0, 0.5 * k);
    grad.addColorStop(0, 'rgba(5,5,16,0.92)');
    grad.addColorStop(0.45, 'rgba(7,7,22,0.9)');
    grad.addColorStop(0.8, 'rgba(9,9,28,0.5)');
    grad.addColorStop(1, 'rgba(12,12,34,0)');
    ctx.fillStyle = grad;
    const base = ctx.globalAlpha;
    for (const [sc, a] of [[1.085, 0.08], [1.055, 0.1], [1.025, 0.16], [1, 0.75]]) {
      ctx.globalAlpha = base * a;
      ctx.save();
      ctx.translate(0, -1.5 * k);
      ctx.scale(sc, sc);
      ctx.translate(0, 1.5 * k);
      headPath(k);
      ctx.fill();
      ctx.restore();
    }
    ctx.globalAlpha = base;
    ctx.restore();
  }
  function headPath(k) {
    ctx.beginPath();
    ctx.moveTo(-3.5 * k, 0.75 * k);
    ctx.bezierCurveTo(-2.4 * k, 0.5 * k, -1.6 * k, 0.3 * k, -1.38 * k, 0.2 * k);
    ctx.lineTo(-1.3 * k, -1.15 * k);
    ctx.quadraticCurveTo(-1.3 * k, -1.5 * k, -0.95 * k, -1.52 * k);
    ctx.quadraticCurveTo(0, -1.6 * k, 0.95 * k, -1.52 * k);
    ctx.quadraticCurveTo(1.3 * k, -1.5 * k, 1.3 * k, -1.15 * k);
    ctx.lineTo(1.38 * k, 0.2 * k);
    ctx.bezierCurveTo(1.6 * k, 0.3 * k, 2.4 * k, 0.5 * k, 3.5 * k, 0.75 * k);
    ctx.lineTo(3.5 * k, 1.2 * k);
    ctx.lineTo(-3.5 * k, 1.2 * k);
    ctx.closePath();
  }
  function drawEyes(g, open, ratios) {
    if (open <= 0.02 || g[1] > 1040) return;
    const [x, y, k, tilt] = g;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((tilt * Math.PI) / 180);
    const w = 0.76 * k;
    drawEye(-0.5 * k, 0, w, w * ratios[0], open, false);
    drawEye(0.5 * k, 0, w, w * ratios[1], open, true);
    ctx.restore();
  }
  // almond leaf: blunt outer end, sharp inner point set lower, so each pair frowns a little
  function drawEye(cx, cy, w, h, open, right) {
    ctx.save();
    ctx.translate(cx, cy);
    if (right) ctx.scale(-1, 1);
    ctx.rotate((16 * Math.PI) / 180);
    ctx.save();
    ctx.scale(1, 0.62);
    const gr = ctx.createRadialGradient(0, -0.08 * w, 0.1 * w, 0, -0.08 * w, 0.78 * w);
    gr.addColorStop(0, `rgba(160,170,255,${0.7 * open})`);
    gr.addColorStop(0.42, `rgba(96,100,240,${0.38 * open})`);
    gr.addColorStop(1, 'rgba(50,50,170,0)');
    ctx.fillStyle = gr;
    ctx.fillRect(-0.8 * w, -0.9 * w, 1.6 * w, 1.6 * w);
    ctx.restore();
    ctx.scale(1, Math.max(0.04, open));
    ctx.beginPath();
    ctx.moveTo(-0.5 * w, 0.02 * h);
    ctx.bezierCurveTo(-0.4 * w, -0.78 * h, 0.22 * w, -0.66 * h, 0.5 * w, 0.2 * h);
    ctx.bezierCurveTo(0.12 * w, 0.42 * h, -0.3 * w, 0.48 * h, -0.47 * w, 0.3 * h);
    ctx.quadraticCurveTo(-0.56 * w, 0.18 * h, -0.5 * w, 0.02 * h);
    ctx.closePath();
    ctx.fillStyle = '#f8f8ff';
    ctx.fill();
    ctx.restore();
  }
  // crisp near-white trapezoid from the lamp disc, fading along its axis
  function drawBeam(lx, ly, d, aimDeg, halfDeg, len, power) {
    if (power <= 0.01) return;
    const a = (aimDeg * Math.PI) / 180, h = (halfDeg * Math.PI) / 180;
    const ax = Math.cos(a), ay = Math.sin(a), nx = -ay, ny = ax;
    const b0 = 0.4 * d, b1 = 0.4 * d + len * Math.tan(h);
    const g = ctx.createLinearGradient(lx, ly, lx + ax * len, ly + ay * len);
    for (const [o, c] of BEAM_STOPS) g.addColorStop(o, c);
    ctx.globalAlpha = power;
    ctx.fillStyle = g;
    ctx.beginPath();
    ctx.moveTo(lx + nx * b0, ly + ny * b0);
    ctx.lineTo(lx + ax * len + nx * b1, ly + ay * len + ny * b1);
    ctx.lineTo(lx + ax * len - nx * b1, ly + ay * len - ny * b1);
    ctx.lineTo(lx - nx * b0, ly - ny * b0);
    ctx.closePath();
    ctx.fill();
    ctx.globalAlpha = 1;
  }
  // zoom > 1 only during the opening close-up, where the lamp is out of focus
  function drawLamp(x, y, d, power, aimDeg, zoom = 1) {
    if (power <= 0.01) return;
    const r = d / 2;
    const zf = clamp01((zoom - 1.3) / 4);
    const hr = r * (2.2 + 1.6 * zf);
    const gl = ctx.createRadialGradient(x, y, r * 0.85, x, y, hr);
    gl.addColorStop(0, `rgba(242,244,255,${0.85 * power})`);
    gl.addColorStop(0.35, `rgba(178,186,255,${(0.38 + 0.3 * zf) * power})`);
    gl.addColorStop(1, 'rgba(120,126,255,0)');
    ctx.fillStyle = gl;
    ctx.beginPath(); ctx.arc(x, y, hr, 0, Math.PI * 2); ctx.fill();
    if (zf > 0) {
      ctx.strokeStyle = `rgba(120,126,220,${0.1 * zf})`;
      ctx.lineWidth = r * 0.05;
      for (const f of [1.3, 1.55, 1.85]) { ctx.beginPath(); ctx.arc(x, y, r * f, 0, Math.PI * 2); ctx.stroke(); }
    }
    ctx.globalAlpha = power * (1 - 0.6 * zf);
    const sr = (r / 58) * 128;
    ctx.drawImage(specks, x - sr, y - sr, sr * 2, sr * 2);
    ctx.globalAlpha = 1;
    if (zf > 0) {
      // out-of-focus disc: solid core with a feathered edge
      const dg = ctx.createRadialGradient(x, y, r * 0.8, x, y, r * 1.18);
      dg.addColorStop(0, 'rgba(255,255,255,1)');
      dg.addColorStop(1, 'rgba(240,240,255,0)');
      ctx.fillStyle = dg;
      ctx.beginPath(); ctx.arc(x, y, r * 1.18, 0, Math.PI * 2); ctx.fill();
    } else {
      ctx.fillStyle = power < 1 ? `rgb(${Math.round(176 + 79 * power)},${Math.round(184 + 71 * power)},255)` : '#fdfdff';
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      // sketchy housing strokes just inside the rim, away from the beam
      ctx.globalAlpha = power * 0.5;
      ctx.strokeStyle = '#3e4190';
      ctx.lineWidth = 0.04 * d;
      ctx.lineCap = 'round';
      const back = ((aimDeg + 180) * Math.PI) / 180;
      for (const off of [-0.75, -0.1, 0.55]) { ctx.beginPath(); ctx.arc(x, y, 0.42 * d, back + off - 0.28, back + off + 0.1); ctx.stroke(); }
      ctx.globalAlpha = 1;
    }
  }
  // ignition: a ring of specks flung out of the lamp over 0.45 s
  function drawSparks(t0, t, lamp) {
    if (t < t0 || t > t0 + 0.46) return;
    const e = ease.out2(Math.min(1, (t - t0) / 0.45));
    const alpha = t < t0 + 0.08 ? ((t - t0) / 0.08) * 0.9 : 0.9 * (1 - (t - t0 - 0.08) / 0.38);
    const R = lamp[2] / 2;
    ctx.globalAlpha = Math.max(0, alpha);
    for (const p of sparks) {
      const d = R * (1.2 + (p.f - 1.2) * e);
      ctx.fillStyle = p.c;
      ctx.fillRect(lamp[0] + Math.cos(p.a) * d - 20 * e, lamp[1] + Math.sin(p.a) * d - 25 * e, p.r, p.r);
    }
    ctx.globalAlpha = 1;
  }
  const aimTo = (lamp) => toDeg(Math.atan2(TARGET.y - lamp[1], TARGET.x - lamp[0]));

  // ---- the frame ----
  let washA = 0;
  function draw(tau, dive) {
    const t = Math.min(tau / TS, HOLD);
    // the hold pose breathes a little while the fonts load
    const idle = Math.max(0, tau / TS - HOLD);
    const sway = Math.sin(idle * 1.3) * 3, bob = Math.sin(idle * 0.9 + 1) * 2;
    const blur = dive > 0 ? Math.round(16 * ease.in2(dive)) : 0;
    if (blur !== lastBlur) { lastBlur = blur; canvas.style.filter = blur ? `blur(${blur}px)` : ''; }
    setCamera(t, dive);

    // wall, a violet glow behind the stage, the darker floor
    ctx.fillStyle = '#10102a';
    ctx.fillRect(-2400, -1800, 6400, 5400);
    const glow = ctx.createRadialGradient(800, 560, 0, 800, 560, 720);
    glow.addColorStop(0, '#2d2772');
    glow.addColorStop(0.55, 'rgba(37,32,105,0.55)');
    glow.addColorStop(1, 'rgba(37,32,105,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(-400, -400, 2400, 1800);
    const fl = ctx.createLinearGradient(0, 640, 0, 900);
    fl.addColorStop(0, 'rgba(6,6,18,0)');
    fl.addColorStop(1, 'rgba(6,6,18,0.6)');
    ctx.fillStyle = fl;
    ctx.fillRect(-2400, 640, 6400, 2000);

    // the lamps light the wall around them, so the giants read as silhouettes against it
    const lampR = spline(LAMP_R, t), lampL = spline(LAMP_L, t);
    lampR[0] += sway * 0.6; lampR[1] += bob; lampL[0] -= sway * 0.6; lampL[1] += bob * 0.8;
    const powerL = kf(POWER_L, t);
    const wallGlow = (l, p) => {
      if (p <= 0.01) return;
      const g = ctx.createRadialGradient(l[0], l[1], 0, l[0], l[1], 420);
      g.addColorStop(0, `rgba(96,92,220,${0.34 * p})`);
      g.addColorStop(0.5, `rgba(70,64,190,${0.14 * p})`);
      g.addColorStop(1, 'rgba(60,54,170,0)');
      ctx.fillStyle = g;
      ctx.fillRect(l[0] - 420, l[1] - 420, 840, 840);
    };
    wallGlow(lampR, 1);
    wallGlow(lampL, powerL);

    // giants
    const gR = spline(GIANT_R, t), gL = spline(GIANT_L, t);
    gR[0] += sway; gR[1] += bob; gL[0] -= sway; gL[1] += bob * 0.8;
    const fadeR = clamp01((t - 1.42) / 0.32), fadeL = clamp01((t - 1.62) / 0.32);
    ctx.globalAlpha = fadeL; drawHead(gL);
    ctx.globalAlpha = fadeR; drawHead(gR);
    ctx.globalAlpha = 1;

    // lamps and beams
    const half = kf(HALF, t);
    const aimR = aimTo(lampR) + kf(AIM_R, t, ease.out2);
    const aimL = aimTo(lampL) + kf(AIM_L, t, ease.out2);
    const zoom = cam.k > 1.02 && dive === 0 ? cam.k : 1;
    const len = 760 + 300 * dive;
    ctx.globalCompositeOperation = 'screen';
    drawBeam(lampR[0], lampR[1], lampR[2], aimR, half, len, 1);
    drawBeam(lampL[0], lampL[1], lampL[2], aimL, half, len, powerL);
    ctx.globalCompositeOperation = 'source-over';
    // the logo's light, in its own units: each lamp as it is drawn, and the shadows it casts on the
    // wall, fading with the logo in the dive
    const lo = dive > 0 ? 1 - clamp01((dive - 0.22) / 0.38) : 1;
    const lamp = (l, aim, power) => ({ x: l[0] - LX, y: l[1] - LY, ang: (aim * Math.PI) / 180, half: (half * Math.PI) / 180, power, size: l[2] });
    const lamps = [lamp(lampR, aimR, 1), lamp(lampL, aimL, powerL)];
    // the dive scales the logo up: its light holds still from here, so the masks are not redrawn at
    // every new size (the lamps barely move now anyway)
    if (!dive) lighting.update(lamps);
    ctx.save();
    ctx.translate(LX, LY);
    lighting.shadows(ctx, lamps, lo);
    ctx.restore();
    drawLamp(lampR[0], lampR[1], lampR[2], 1, aimR, zoom);
    drawLamp(lampL[0], lampL[1], lampL[2], powerL, aimL);
    drawSparks(1.9, t, lampL);

    ctx.globalAlpha = fadeL; drawEyes(gL, kf(OPEN_L, t), [0.29, 0.38]);
    ctx.globalAlpha = fadeR; drawEyes(gR, kf(OPEN_R, t), [0.45, 0.29]);
    ctx.globalAlpha = 1;

    // the dive: the light fills the frame
    washA = dive > 0 ? clamp01((dive - 0.4) / 0.45) : 0;
    if (washA > 0) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = `rgba(207,204,255,${washA})`;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }

    // the logo rides the camera, lit by the lamps
    const [lx, ly] = toScreen(LOGO.x, LOGO.y);
    const lk = s * cam.k;
    const tr = `translate(${lx.toFixed(2)}px, ${ly.toFixed(2)}px) scale(${lk.toFixed(4)}) translate(-50%, -50%)`;
    if (tr !== logoTr) { logoTr = tr; logo.style.transform = tr; }
    const op = lo.toFixed(3);
    if (op !== logoOp) { logoOp = op; logo.style.opacity = op; }
  }

  // ---- clocks ----
  const st = { tau: 0, dive: 0 };
  const tick = () => draw(st.tau, st.dive);
  let clock = null;
  resize();
  window.addEventListener('resize', resize);
  // like the phone scene: stop the scene clock and let the canvas's backing store go with it
  const finish = () => {
    gsap.ticker.remove(tick);
    window.removeEventListener('resize', resize);
    if (clock) clock.kill();
    canvas.width = canvas.height = 1;
    el.remove();
    onDone && onDone();
  };

  // the logo assembles in the dark: pieces slide in along their own slants (each layer's copy of a
  // piece together), the wordmark is revealed left to right
  const OFF = [[-0.485, -0.875], [-0.485, 0.875], [0.485, -0.875], [-0.485, 0.875], [0.485, -0.875], [0.485, 0.875]];
  if (reduced) {
    st.tau = HOLD * TS;
    wordClip.setAttribute('width', '290');
    draw(st.tau, 0);
    num.textContent = '100';
    fill.style.transform = 'scaleX(1)';
    gsap.timeline({ delay: 0.6 })
      .add(() => { onReveal && onReveal(); })
      .to(el, { opacity: 0, duration: 0.5, ease: 'none' })
      .add(finish);
    return null;
  }

  pieces.forEach((p, i) => gsap.set(p, { x: OFF[i % 6][0] * 60, y: OFF[i % 6][1] * 60, opacity: 0 }));
  gsap.set(wordClip, { attr: { width: 0 } });
  gsap.set(fill, { scaleX: 0, transformOrigin: '0% 50%' });
  gsap.set(count, { opacity: 0, y: 40 });
  gsap.ticker.add(tick);
  // the scene clock runs through the hold pose and idles there until the exit
  clock = gsap.to(st, { tau: 40, duration: 40, ease: 'none' });

  const c = { v: 0 };
  let shown = -1;
  const setCount = () => {
    const v = Math.round(c.v);
    if (v !== shown) { shown = v; num.textContent = v; }
    fill.style.transform = `scaleX(${(c.v / 100).toFixed(4)})`;
  };
  const T = (ref) => ref * TS;
  const tl = gsap.timeline();
  tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'none' }, 0)
    .to(count, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out' }, T(0.5))
    .to(c, { v: 100, duration: T(HOLD) - T(0.6), ease: 'power2.inOut', onUpdate: setCount }, T(0.6))
    .to(pieces, { x: 0, y: 0, duration: 1.3, ease: SNAP, stagger: (i) => (i % 6) * 0.08 }, T(0.9))
    .to(pieces, { opacity: 1, duration: 0.35, ease: 'power1.out', stagger: (i) => (i % 6) * 0.08 }, T(0.9))
    .to(wordClip, { attr: { width: 290 }, duration: 1.0, ease: 'power3.inOut' }, T(1.45));

  const exit = () => {
    const [lx, ly] = toScreen(LOGO.x, LOGO.y);
    const r = count.getBoundingClientRect();
    gsap.timeline()
      .to(st, { dive: 1, duration: DIVE_DUR, ease: 'none' }, 0)
      .to(count, { scale: 5, opacity: 0, transformOrigin: `${lx - r.left}px ${ly - r.top}px`, duration: 0.6, ease: 'power2.in' }, 0.1)
      .to(bar, { opacity: 0, duration: 0.3 }, 0.2)
      // the frame is a flat wash now: the hero starts drawing in the same colour underneath
      .add(() => { onReveal && onReveal(); }, DIVE_DUR - 0.18)
      .to(el, { opacity: 0, duration: 0.3, ease: 'none' }, DIVE_DUR - 0.1)
      .add(finish);
  };
  // leave once the scene has reached its hold pose and the fonts the hero needs are in (but never wait long)
  const posed = new Promise((r) => tl.call(r, null, T(HOLD)));
  const fonts = document.fonts && document.fonts.ready ? document.fonts.ready.catch(() => { }) : Promise.resolve();
  const cap = new Promise((r) => setTimeout(r, T(HOLD) * 1000 + 1500));
  Promise.all([posed, Promise.race([fonts, cap])]).then(exit);
  return tl;
}

function makeGrain() {
  const c = document.createElement('canvas');
  c.width = c.height = 160;
  const x = c.getContext('2d');
  const img = x.createImageData(160, 160);
  for (let i = 0; i < img.data.length; i += 4) {
    const v = Math.random() * 255;
    img.data[i] = img.data[i + 1] = img.data[i + 2] = v;
    img.data[i + 3] = 255;
  }
  x.putImageData(img, 0, 0);
  return c;
}
