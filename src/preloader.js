// Preloader: one continuous camera shot drawn as a pure function of time (tau, seconds).
// Close-up on the right lamp -> pull back -> two giants rise from below carrying lamps ->
// the left lamp ignites -> they lean in, blink and re-pose -> hard cut to a wide shot ->
// a 0.12s dive into the crossing beams hands over to the hero.
// All coordinates are in a 1600x900 design space ("D") that is cover-fitted to the screen.
import gsap from 'gsap';

const DW = 1600, DH = 900;
const END = 4.97;         // preloader length
const DIVE = 4.63;        // counter hits 100% and the camera dives
const CUT = 4.37;         // hard cut to the wide shot
const BACK_O = { x: 858, y: 200 };  // zoom origin of the wall/desk layer
const DIVE_O = { x: 805, y: 500 };  // dive origin

// ---------- keyframe tables: [tau, value | [values]] ----------
const ease = {
  io: (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2),
  out2: (x) => 1 - (1 - x) * (1 - x),
  out3: (x) => 1 - Math.pow(1 - x, 3),
  in2: (x) => x * x,
};
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

// wall/desk layer scale (zooms about BACK_O); slight dolly after the cut
const DESK_S = [[0, 1.62], [0.08, 1.62], [2.4, 1.0], [CUT - 0.001, 1.0], [CUT, 1.09], [DIVE, 1.15]];

// right lamp (x, y, diameter); before 1.03 the opening close-up drives it
const LAMP_R = [
  [1.03, [1374, 505, 58]], [1.23, [1378, 489, 58]], [1.43, [1383, 435, 59]], [1.63, [1387, 378, 60]],
  [1.83, [1388, 342, 61]], [2.03, [1393, 318, 62]], [2.33, [1396, 310, 62]], [2.53, [1427, 309, 70]],
  [2.63, [1422, 362, 98]], [2.73, [1410, 380, 102]], [3.03, [1399, 392, 105]], [3.23, [1393, 393, 113]],
  [3.33, [1364, 396, 118]], [3.43, [1323, 394, 124]], [3.53, [1200, 394, 118]], [3.63, [1152, 393, 113]],
  [3.83, [1122, 392, 103]], [3.93, [1114, 390, 90]], [4.23, [1114, 390, 90]], [CUT - 0.001, [1126, 396, 88]],
  [CUT, [1236, 444, 72]], [4.43, [1243, 446, 70]], [4.53, [1259, 451, 69]], [DIVE, [1276, 452, 68]],
];
const LAMP_L = [
  [1.9, [266, 475, 30]], [2.03, [272, 385, 46]], [2.13, [278, 334, 52]], [2.33, [280, 309, 56]],
  [2.53, [270, 317, 58]], [2.63, [220, 367, 66]], [2.73, [165, 425, 90]], [3.03, [141, 452, 99]],
  [3.23, [141, 452, 99]], [3.33, [155, 435, 74]], [3.43, [161, 425, 66]], [3.53, [166, 417, 59]],
  [4.03, [170, 414, 57]], [4.13, [186, 419, 52]], [4.23, [240, 437, 46]], [CUT - 0.001, [259, 443, 41]],
  [CUT, [270, 447, 40]], [4.53, [276, 450, 40]], [DIVE, [276, 450, 40]],
];
// beam aim (deg, clockwise from +x) and half-angle
const BEAM_R = [
  [0, [165, 13]], [0.35, [165, 13]], [0.43, [161, 13]], [0.63, [151, 12.8]], [0.83, [141, 12.5]],
  [1.43, [140.5, 13.3]], [1.83, [148.5, 13.4]], [2.13, [151.5, 13.4]], [2.43, [151.5, 13.4]],
  [3.03, [148, 23.9]], [3.43, [143, 24]], [3.83, [131, 20]], [4.23, [135.5, 16.6]], [CUT - 0.001, [137, 16]],
  [CUT, [150, 8.5]], [4.43, [151.5, 8]], [DIVE, [164, 5.5]],
];
const BEAM_L = [
  [1.93, [36, 8]], [2.03, [31, 12.7]], [2.23, [30, 13.4]], [2.43, [30, 13.4]], [3.03, [19.5, 24]],
  [3.43, [24.5, 18]], [3.83, [26, 15]], [4.23, [22.5, 13]], [CUT - 0.001, [22, 12.5]], [CUT, [21, 11]],
  [DIVE, [14.5, 10]],
];
// giants: eye-pair centre (x, y), eye separation k, tilt (deg)
const GIANT_R = [
  [1.2, [1300, 900, 181, 4]], [1.43, [1320, 480, 181, 5]], [1.63, [1328, 280, 181, 6]], [1.73, [1331, 178, 181, 6.6]],
  [1.93, [1341, 145, 175, 9]], [2.33, [1351, 127, 177, 11]], [2.45, [1351, 127, 177, 11]], [2.63, [1403, 160, 238, 16]],
  [2.9, [1395, 178, 258, 18.5]], [3.23, [1393, 181, 261, 18.8]], [3.33, [1343, 175, 259, 16]], [3.43, [1276, 172, 256, 12.8]],
  [3.75, [1060, 200, 190, 0]], [3.93, [1039, 205, 176, -2]], [4.23, [1039, 205, 176, -2]], [CUT - 0.001, [1087, 211, 174, -3]],
  [CUT, [1450, 326, 160, -4.7]], [4.43, [1454, 328, 160, -4.7]], [4.53, [1490, 350, 160, -4]], [DIVE, [1505, 356, 160, -4]],
];
const GIANT_L = [
  [1.45, [500, 1000, 176, -1]], [1.63, [470, 540, 176, -1.5]], [1.73, [488, 280, 176, -1.5]], [1.93, [478, 236, 176, -2]],
  [2.03, [472, 200, 176, -2]], [2.33, [467, 172, 176, -2]], [2.45, [467, 172, 176, -2]], [2.63, [370, 259, 193, -4.7]],
  [2.9, [290, 292, 230, -10]], [3.23, [275, 300, 238, -11]], [3.33, [230, 270, 225, -9]], [3.45, [150, 210, 205, -6]],
  [3.53, [138, 194, 200, -5.5]], [4.03, [137, 178, 197, -5.5]], [4.23, [128, 261, 172, -3]], [CUT - 0.001, [137, 289, 163, -2.5]],
  [CUT, [145, 308, 154, -2.5]], [DIVE, [150, 314, 154, -2.5]],
];
// eye openness (0 closed .. 1 open); values below 1 are squints
const OPEN_R = [[1.7, 0], [1.95, 1], [3.3, 1], [3.43, 0], [3.88, 0], [4.06, 0.75], [CUT, 0.75], [DIVE, 0.6]];
const OPEN_L = [[1.73, 0], [2.0, 1], [3.2, 1], [3.33, 0], [3.45, 0], [3.63, 0.85], [4.1, 0.85], [4.23, 0.5], [CUT, 0.5], [DIVE, 0.45]];
// red "pillar" above the desk: left, right, bottom
const PILLAR = [[0, [667, 1115, 195]], [2.4, [667, 1115, 195]], [3.03, [579, 1113, 230]], [3.9, [345, 1320, 300]], [CUT - 0.001, [345, 1320, 300]], [CUT, [690, 1130, 205]]];

// figure key poses (desk-local D, origin = tabletop top-left)
const POSES = {
  work: { head: [104, -30], sh: [94, -16], hip: [82, 70], knee: [150, 78], ankle: [142, 124], el: [120, 10], ha: [146, -2], el2: [112, 14], ha2: [138, 0] },
  up: { head: [88, -40], sh: [86, -24], hip: [82, 70], knee: [150, 78], ankle: [142, 124], el: [104, 14], ha: [100, -18], el2: [110, 16], ha2: [140, 0] },
  stretch: { head: [80, -44], sh: [83, -26], hip: [84, 70], knee: [152, 80], ankle: [146, 126], el: [62, -52], ha: [78, -50], el2: [104, -56], ha2: [86, -50] },
  yawn: { head: [94, -36], sh: [91, -20], hip: [84, 70], knee: [150, 78], ankle: [142, 124], el: [108, 4], ha: [96, -34], el2: [116, 12], ha2: [140, 0] },
  leap: { head: [132, 8], sh: [120, 18], hip: [84, 56], knee: [128, 44], ankle: [104, 84], el: [102, -6], ha: [118, -16], el2: [140, 30], ha2: [152, 14] },
};
const POSE_KEYS = [[0, 'work'], [1.82, 'work'], [1.98, 'up'], [2.2, 'up'], [2.36, 'stretch'], [3.25, 'stretch'], [3.4, 'yawn'], [3.47, 'yawn'], [3.6, 'leap']];

const lerp = (a, b, k) => a + (b - a) * k;
const hex = (h) => [parseInt(h.slice(1, 3), 16), parseInt(h.slice(3, 5), 16), parseInt(h.slice(5, 7), 16)];
const mix = (a, b, k) => `rgb(${Math.round(lerp(a[0], b[0], k))},${Math.round(lerp(a[1], b[1], k))},${Math.round(lerp(a[2], b[2], k))})`;
const C = {
  dark: hex('#4a1d14'), lit: hex('#e88a76'), legLit: hex('#d17261'),
  topDark: hex('#5c2618'), topLit: hex('#c0624e'),
  chairDark: hex('#361a14'), chairLit: hex('#562014'),
  hairDark: hex('#2a0f09'), hairLit: hex('#8a3a28'),
  lampOff: hex('#e8a090'), lampOn: [254, 254, 252],
};
const AXIS_STOPS = [
  [0, 'rgba(255,254,252,1)'], [85 / 700, 'rgba(253,229,220,1)'], [170 / 700, 'rgba(249,210,195,1)'],
  [290 / 700, 'rgba(248,186,168,1)'], [400 / 700, 'rgba(232,140,117,0.85)'], [460 / 700, 'rgba(210,118,95,0.6)'],
  [520 / 700, 'rgba(175,80,60,0.4)'], [575 / 700, 'rgba(153,58,38,0.2)'], [1, 'rgba(120,40,25,0)'],
];

export function runPreloader({ el, reduced, onReveal, onDone }) {
  const canvas = el.querySelector('.preloader__canvas');
  const flash = el.querySelector('.preloader__flash');
  const count = el.querySelector('.preloader__count');
  const num = el.querySelector('.preloader__num');
  const ctx = canvas.getContext('2d', { alpha: false });
  el.style.setProperty('--grain', `url(${makeGrain().toDataURL()})`);

  let W = 0, H = 0, dpr = 1, s = 1, ox = 0, oy = 0;
  const sprites = {};

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    if (W / H < 0.9) {
      // portrait: keep both lamps and the desk in frame
      s = W / 1250;
      ox = W / 2 - 800 * s; oy = H * 0.44 - 420 * s;
    } else {
      s = Math.max(W / DW, H / DH);
      ox = (W - DW * s) / 2; oy = (H - DH * s) / 2;
    }
  }

  // ---------- static sprites, built once ----------
  // a shape blurred once into its own canvas (shadowBlur is fine when it only runs at build time)
  function softShape(w, h, blur, path, color) {
    const c = document.createElement('canvas');
    c.width = w + blur * 4; c.height = h + blur * 4;
    const x = c.getContext('2d');
    x.translate(blur * 2 - 10000, blur * 2);
    x.shadowColor = color;
    x.shadowBlur = blur;
    x.shadowOffsetX = 10000;
    x.fillStyle = color;
    path(x);
    x.fill();
    return c;
  }
  function roundRect(c, x, y, w, h, r) {
    c.beginPath();
    c.moveTo(x + r, y);
    c.arcTo(x + w, y, x + w, y + h, r);
    c.arcTo(x + w, y + h, x, y + h, r);
    c.arcTo(x, y + h, x, y, r);
    c.arcTo(x, y, x + w, y, r);
    c.closePath();
  }
  sprites.pillar = softShape(600, 600, 40, (c) => roundRect(c, 0, 0, 600, 600, 150), 'rgb(78,8,16)');
  sprites.shadow = softShape(494, 40, 14, (c) => { c.beginPath(); c.ellipse(247, 20, 247, 20, 0, 0, Math.PI * 2); }, 'rgb(25,8,5)');
  {
    // lamp speck halo: fine salmon dots between 1.0 and 2.2 radii (radius 58 in a 256 sprite)
    const sp = document.createElement('canvas');
    sp.width = sp.height = 256;
    const x = sp.getContext('2d');
    x.fillStyle = 'rgba(192,96,72,0.55)';
    for (let i = 0; i < 160; i++) {
      const a = Math.random() * Math.PI * 2;
      const r = (1.0 + Math.random() * 1.2) * 58;
      x.fillRect(128 + Math.cos(a) * r, 128 + Math.sin(a) * r, 1.4, 1.4);
    }
    sprites.specks = sp;
  }

  // ---------- layer transforms ----------
  // design point p -> p*k + t (scale S1 about O1, then S2 about O2), then cover-fit and dpr
  function layer(S1, O1, S2, O2) {
    const k = S1 * S2;
    const tx = O2.x * (1 - S2) + O1.x * (1 - S1) * S2;
    const ty = O2.y * (1 - S2) + O1.y * (1 - S1) * S2;
    ctx.setTransform(dpr * s * k, 0, 0, dpr * s * k, dpr * (ox + s * tx), dpr * (oy + s * ty));
  }

  // ---------- drawing ----------
  // flat-topped bell head with shoulders, fading into the wall below the eye line
  function drawHead(g) {
    const [x, y, k, tilt] = g;
    if (y > 1040) return;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate((tilt * Math.PI) / 180);
    const grad = ctx.createLinearGradient(0, -1.6 * k, 0, 0.45 * k);
    grad.addColorStop(0, '#231816');
    grad.addColorStop(0.45, '#2d1a13');
    grad.addColorStop(0.8, 'rgba(56,29,20,0.6)');
    grad.addColorStop(1, 'rgba(62,29,20,0)');
    ctx.fillStyle = grad;
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
    ctx.fill();
    ctx.restore();
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
  // almond leaf: blunt outer end, sharp inner point set lower, so each pair frowns
  function drawEye(cx, cy, w, h, open, right) {
    ctx.save();
    ctx.translate(cx, cy);
    if (right) ctx.scale(-1, 1);
    ctx.rotate((16 * Math.PI) / 180);
    // hot orange bloom hugging the eye
    ctx.save();
    ctx.scale(1, 0.62);
    const gr = ctx.createRadialGradient(0, -0.08 * w, 0.1 * w, 0, -0.08 * w, 0.78 * w);
    gr.addColorStop(0, `rgba(255,128,88,${0.75 * open})`);
    gr.addColorStop(0.42, `rgba(214,72,42,${0.42 * open})`);
    gr.addColorStop(1, 'rgba(120,36,22,0)');
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
    ctx.fillStyle = '#fdf9f8';
    ctx.fill();
    ctx.restore();
  }

  // crisp near-white trapezoid from the lamp disc, fading along its axis
  function drawBeam(lx, ly, d, aimDeg, halfDeg, len, power) {
    if (power <= 0.01) return;
    const a = (aimDeg * Math.PI) / 180;
    const h = (halfDeg * Math.PI) / 180;
    const ax = Math.cos(a), ay = Math.sin(a), nx = -ay, ny = ax;
    const b0 = 0.4 * d, b1 = 0.4 * d + len * Math.tan(h);
    const g = ctx.createLinearGradient(lx, ly, lx + ax * len, ly + ay * len);
    for (const [o, c] of AXIS_STOPS) g.addColorStop(o, c);
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
    const zf = Math.min(1, Math.max(0, (zoom - 1.3) / 4));
    // soft halo (huge and salmon in the close-up, a tight bright bloom at rest)
    const hr = r * (2.1 + 1.6 * zf);
    const gl = ctx.createRadialGradient(x, y, r * 0.85, x, y, hr);
    gl.addColorStop(0, `rgba(255,236,228,${0.85 * power})`);
    gl.addColorStop(0.35, `rgba(255,170,148,${(0.38 + 0.3 * zf) * power})`);
    gl.addColorStop(1, 'rgba(226,116,96,0)');
    ctx.fillStyle = gl;
    ctx.beginPath(); ctx.arc(x, y, hr, 0, Math.PI * 2); ctx.fill();
    if (zf > 0) {
      ctx.strokeStyle = `rgba(150,72,60,${0.1 * zf})`;
      ctx.lineWidth = r * 0.05;
      for (const f of [1.3, 1.55, 1.85]) { ctx.beginPath(); ctx.arc(x, y, r * f, 0, Math.PI * 2); ctx.stroke(); }
    }
    ctx.globalAlpha = power * (1 - 0.6 * zf);
    const sr = (r / 58) * 128;
    ctx.drawImage(sprites.specks, x - sr, y - sr, sr * 2, sr * 2);
    ctx.globalAlpha = 1;
    if (zf > 0) {
      // out-of-focus disc: solid core with a feathered edge
      const dg = ctx.createRadialGradient(x, y, r * 0.8, x, y, r * 1.18);
      dg.addColorStop(0, 'rgba(255,254,252,1)');
      dg.addColorStop(1, 'rgba(255,240,234,0)');
      ctx.fillStyle = dg;
      ctx.beginPath(); ctx.arc(x, y, r * 1.18, 0, Math.PI * 2); ctx.fill();
    } else {
      ctx.fillStyle = power < 1 ? mix(C.lampOff, C.lampOn, power) : '#fefefc';
      ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
      // sketchy housing strokes just inside the rim, away from the beam
      ctx.globalAlpha = power * 0.45;
      ctx.strokeStyle = '#7a3628';
      ctx.lineWidth = 0.04 * d;
      ctx.lineCap = 'round';
      const back = ((aimDeg + 180) * Math.PI) / 180;
      for (const off of [-0.75, -0.1, 0.55]) { ctx.beginPath(); ctx.arc(x, y, 0.42 * d, back + off - 0.28, back + off + 0.1); ctx.stroke(); }
      ctx.globalAlpha = 1;
    }
  }

  // 0..1: how far inside a beam a point is
  function inBeam(p, lamp, beam) {
    const ang = (Math.atan2(p[1] - lamp[1], p[0] - lamp[0]) * 180) / Math.PI;
    const diff = Math.abs((((ang - beam[0]) % 360) + 540) % 360 - 180);
    return diff < beam[1] + 3 ? 1 : diff < beam[1] + 9 ? 1 - (diff - beam[1] - 3) / 6 : 0;
  }

  function poseAt(t) {
    let i = 0;
    while (i < POSE_KEYS.length - 1 && POSE_KEYS[i + 1][0] <= t) i++;
    const [t0, a] = POSE_KEYS[i];
    const next = POSE_KEYS[i + 1];
    const A = POSES[a];
    if (!next) return A;
    const [t1, b] = next;
    const k = ease.io(Math.min(1, Math.max(0, (t - t0) / (t1 - t0))));
    const B = POSES[b], out = {};
    for (const j in A) out[j] = [lerp(A[j][0], B[j][0], k), lerp(A[j][1], B[j][1], k)];
    return out;
  }
  function line(x1, y1, x2, y2) { ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke(); }

  // solid brown desk, dark chair seen from behind, slender cut-out figure
  function drawDesk(t, light) {
    ctx.save();
    ctx.translate(711, 594);
    ctx.globalAlpha = 0.55;
    ctx.drawImage(sprites.shadow, 30 - 247 - 28, 127 - 20 - 28);
    ctx.globalAlpha = 1;
    ctx.fillStyle = '#3d190f';
    ctx.fillRect(283, 17, 5, 97);
    ctx.fillStyle = mix(C.topDark, C.topLit, light.desk);
    ctx.fillRect(0, 0, 295, 11);
    ctx.fillStyle = '#892f1c';
    ctx.fillRect(0, 11, 295, 6);
    ctx.fillStyle = '#fee7e3';
    ctx.fillRect(158, -1, 28, 7);
    ctx.fillStyle = '#5a2016';
    ctx.fillRect(109, -3, 16, 20);
    ctx.fillStyle = '#3d190f';
    for (const lx of [28, 50, 84, 104]) ctx.fillRect(lx, 98, 3, 62);
    ctx.fillStyle = mix(C.chairDark, C.chairLit, light.fig);
    roundRect(ctx, 20, 17, 55, 61, 10); ctx.fill();
    ctx.fillRect(24, 84, 83, 14);

    const P = poseAt(t);
    const bob = t > 3.6 && t < DIVE ? Math.sin((t - 3.6) * 12.5) * 2.5 : 0;
    const body = mix(C.dark, C.lit, light.fig);
    const legs = mix(C.dark, C.legLit, light.fig);
    const Y = (p) => p[1] + bob;
    ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    ctx.strokeStyle = legs;
    ctx.lineWidth = 11; line(P.hip[0], Y(P.hip), P.knee[0], Y(P.knee));
    ctx.lineWidth = 7; line(P.knee[0], Y(P.knee), P.ankle[0], Y(P.ankle));
    ctx.fillStyle = '#2a0f09';
    ctx.beginPath(); ctx.ellipse(P.ankle[0] + 5, Y(P.ankle) + 2, 7, 3, 0, 0, Math.PI * 2); ctx.fill();
    const sx = P.sh[0], sy = Y(P.sh), hx = P.hip[0], hy = Y(P.hip);
    const len = Math.hypot(hx - sx, hy - sy) || 1;
    const nx = -(hy - sy) / len, ny = (hx - sx) / len;
    ctx.fillStyle = body;
    ctx.beginPath();
    ctx.moveTo(sx + nx * 10, sy + ny * 10);
    ctx.lineTo(hx + nx * 8, hy + ny * 8);
    ctx.lineTo(hx - nx * 8, hy - ny * 8);
    ctx.lineTo(sx - nx * 10, sy - ny * 10);
    ctx.closePath();
    ctx.fill();
    ctx.strokeStyle = body;
    ctx.lineWidth = 6; line(sx, sy, P.el2[0], Y(P.el2));
    ctx.lineWidth = 5; line(P.el2[0], Y(P.el2), P.ha2[0], Y(P.ha2));
    ctx.lineWidth = 6; line(sx, sy, P.el[0], Y(P.el));
    ctx.lineWidth = 5; line(P.el[0], Y(P.el), P.ha[0], Y(P.ha));
    line(sx, sy, P.head[0], Y(P.head));
    ctx.beginPath(); ctx.arc(P.head[0], Y(P.head), 7.5, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = mix(C.hairDark, C.hairLit, light.fig);
    ctx.beginPath(); ctx.arc(P.head[0] - 5, Y(P.head) - 4, 4, 0, Math.PI * 2); ctx.fill();
    if (light.fig < 0.5) {
      // pale rim on the lamp-facing edge while the figure is in the dark
      ctx.strokeStyle = `rgba(232,160,140,${0.8 * (1 - light.fig * 2)})`;
      ctx.lineWidth = 1.5;
      line(sx + 9, sy, hx + 7, hy);
    }
    ctx.fillStyle = '#3d190f';
    ctx.fillRect(-4, 17, 8, 92);
    ctx.fillRect(290, 17, 7, 114);
    ctx.restore();
  }

  // left lamp ignition sparks
  const sparks = Array.from({ length: 320 }, (_, i) => ({
    a: (i / 320) * Math.PI * 2 + Math.random() * 0.3,
    f: 1.5 + Math.random() * 3,
    r: 0.6 + Math.random() * 1.4,
    c: Math.random() < 0.5 ? '#d27a62' : '#f0a088',
  }));
  function drawSparks(t, lamp) {
    if (t < 1.9 || t > 2.36) return;
    const e = ease.out2(Math.min(1, (t - 1.9) / 0.45));
    const alpha = t < 1.98 ? ((t - 1.9) / 0.08) * 0.9 : 0.9 * (1 - (t - 1.98) / 0.38);
    const R = lamp[2] / 2;
    ctx.globalAlpha = Math.max(0, alpha);
    for (const p of sparks) {
      const d = R * (1.2 + (p.f - 1.2) * e);
      ctx.fillStyle = p.c;
      ctx.fillRect(lamp[0] + Math.cos(p.a) * d - 20 * e, lamp[1] + Math.sin(p.a) * d - 25 * e, p.r, p.r);
    }
    ctx.globalAlpha = 1;
  }

  function draw(t) {
    // dive zoom (0.12s) with per-layer depth
    const zc = t <= DIVE ? 1 : 1 + 5 * ease.in2(Math.min(1, (t - DIVE) / 0.12));
    const zWall = 1 + (zc - 1) * 0.6, zDesk = zc, zFront = 1 + (zc - 1) * 1.6;
    const sd = kf(DESK_S, t, ease.out3);

    // wall, warm glow behind the desk, darker floor
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = '#3e1d14';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    layer(sd, BACK_O, zWall, DIVE_O);
    const glow = ctx.createRadialGradient(820, 560, 0, 820, 560, 620);
    glow.addColorStop(0, '#742a16');
    glow.addColorStop(1, 'rgba(116,42,22,0)');
    ctx.fillStyle = glow;
    ctx.fillRect(200, -60, 1240, 1240);
    const fl = ctx.createLinearGradient(0, 690, 0, 900);
    fl.addColorStop(0, 'rgba(30,12,8,0)');
    fl.addColorStop(1, 'rgba(30,12,8,0.25)');
    ctx.fillStyle = fl;
    ctx.fillRect(-400, 690, 2400, 600);

    // giant heads, with the red pillar laid over them
    layer(1, BACK_O, zFront, DIVE_O);
    const gR = kf(GIANT_R, t), gL = kf(GIANT_L, t);
    const fadeR = Math.min(1, Math.max(0, (t - 1.2) / 0.15)), fadeL = Math.min(1, Math.max(0, (t - 1.45) / 0.15));
    ctx.globalAlpha = fadeL; drawHead(gL);
    ctx.globalAlpha = fadeR; drawHead(gR);
    ctx.globalAlpha = 0.45;
    layer(sd, BACK_O, zWall, DIVE_O);
    const [px0, px1, pb] = kf(PILLAR, t);
    const psx = (px1 - px0) / 600, psy = (pb + 300) / 600;
    ctx.drawImage(sprites.pillar, px0 - 80 * psx, -300 - 80 * psy, 760 * psx, 760 * psy);
    ctx.globalAlpha = 1;

    // lamps and beams
    let lampR, beamR, zoom = 1;
    if (t < 1.03) {
      // opening: extreme close-up on the right lamp, pulling back while it slides into place
      zoom = Math.exp(2.95 * (1 - ease.out2(Math.min(1, Math.max(0, (t - 0.08) / 1.05)))));
      const pk = ease.io(Math.min(1, Math.max(0, (t - 0.05) / 0.75)));
      lampR = [lerp(906, 1370, pk), lerp(434, 510, pk), 58 * zoom];
      beamR = kf(BEAM_R, t, ease.out2);
    } else {
      lampR = kf(LAMP_R, t);
      beamR = kf(BEAM_R, t);
    }
    const lampL = kf(LAMP_L, t, ease.out2);
    const beamL = kf(BEAM_L, t);
    const powerL = t < 1.9 ? 0 : Math.min(1, 0.35 + (0.65 * (t - 1.9)) / 0.13);

    // light on the desk and figure, tested in front-layer coordinates
    const toFront = (x, y) => [BACK_O.x + (711 + x - BACK_O.x) * sd, BACK_O.y + (594 + y - BACK_O.y) * sd];
    const lit = (p) => Math.min(1, inBeam(p, lampR, beamR) + (powerL > 0.5 ? inBeam(p, lampL, beamL) : 0));
    const light = { fig: lit(toFront(90, 20)), desk: Math.max(lit(toFront(150, 4)), lit(toFront(260, 0))) };

    layer(sd, BACK_O, zDesk, DIVE_O);
    drawDesk(t, light);

    layer(1, BACK_O, zFront, DIVE_O);
    ctx.globalCompositeOperation = 'screen';
    drawBeam(lampR[0], lampR[1], lampR[2], beamR[0], beamR[1], 700 * zoom, 1);
    drawBeam(lampL[0], lampL[1], lampL[2], beamL[0], beamL[1], 700, powerL);
    ctx.globalCompositeOperation = 'source-over';
    drawLamp(lampR[0], lampR[1], lampR[2], 1, beamR[0], zoom);
    drawLamp(lampL[0], lampL[1], lampL[2], powerL, beamL[0]);
    drawSparks(t, lampL);

    ctx.globalAlpha = fadeL; drawEyes(gL, kf(OPEN_L, t), [0.29, 0.38]);
    ctx.globalAlpha = fadeR; drawEyes(gR, kf(OPEN_R, t), [0.45, 0.29]);
    ctx.globalAlpha = 1;
  }

  // ---------- timeline ----------
  const st = { tau: 0 };
  let shown = -1;
  const pct = gsap.parseEase('power4.inOut');
  const setCount = () => {
    const v = st.tau >= DIVE ? 100 : Math.round(100 * pct(Math.min(1, (st.tau + 0.78) / 6.48)));
    if (v !== shown) { shown = v; num.textContent = v; }
  };
  // once the red field covers the scene there's nothing left to redraw
  const tick = () => {
    if (st.tau < DIVE + 0.12) draw(st.tau);
    setCount();
  };

  resize();
  window.addEventListener('resize', resize);
  gsap.ticker.add(tick);

  const finish = () => {
    gsap.ticker.remove(tick);
    window.removeEventListener('resize', resize);
    el.remove();
    onDone && onDone();
  };

  if (reduced) {
    st.tau = 2.33;
    tick();
    gsap.set(flash, { opacity: 0 });
    gsap.timeline({ delay: 0.5 })
      .to(el, { opacity: 0, duration: 0.5 })
      .add(() => { onReveal && onReveal(); finish(); });
    return;
  }

  const diveOrigin = () => {
    const r = count.getBoundingClientRect();
    return `${ox + DIVE_O.x * s - r.left}px ${oy + DIVE_O.y * s - r.top}px`;
  };
  const tl = gsap.timeline();
  tl.set(flash, { opacity: 0, backgroundColor: '#6a241a' })
    .fromTo(count, { y: 60, opacity: 0, filter: 'blur(6px)' }, { y: 0, opacity: 1, filter: 'blur(0px)', duration: 0.9, ease: 'expo.out', clearProps: 'filter' }, 0)
    .to(st, { tau: END, duration: END, ease: 'none' }, 0)
    .add(() => { gsap.to(count, { scale: 6, opacity: 0, transformOrigin: diveOrigin(), duration: 0.12, ease: 'power2.in' }); }, DIVE)
    // red field after the dive: dark first, then ramps to the hero red underneath
    .set(flash, { opacity: 1 }, DIVE + 0.12)
    .to(flash, { backgroundColor: '#97311f', duration: 0.15, ease: 'power1.in' }, DIVE + 0.12)
    .add(() => { onReveal && onReveal(); }, 4.78)
    // the whole preloader fades off the hero glass, which starts on the same red and brightens
    .to(el, { opacity: 0, duration: 0.07, ease: 'none' }, 4.9)
    .add(finish, END);
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
