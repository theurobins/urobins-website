// Loading screen on phones (breakpoints.js, either way up). The giants' two-lamp stage is a wide shot,
// so phones get a scene of their own, made for a tall screen: the logo is machined. It starts as a
// blueprint on a dot grid (its construction box, dashed outlines and the 61deg slant every piece shares),
// then a laser from above cuts the six pieces out one by one and rasters the wordmark. Every cut glows
// hot and cools into plain, near-white metal, and throws sparks that fly, fall under gravity and bounce on the
// progress bar. A glint runs across the finished metal, and then the laser slices the screen open along
// the logo's own slant and the two halves part over the page.
// Drawn on the canvas in screen space: the metal is baked once into a sprite (a plain fill and
// bevels) and lit per frame on a small working canvas; the blueprint is cached once it has drawn in; the
// sparks are a small particle simulation.
import gsap from 'gsap';

const DEG = Math.PI / 180;
const INK = [8, 7, 26];
// the plate's colour, which the page's glass fades in from (main.js)
export const MOBILE_HAND = INK.map((v) => v / 255);
const LOGO_Y = 0.46;                  // the logo's centre, as a fraction of the height
const PAD = 6;                        // logo units of margin round the metal sprites
const MS = 0.3636, WS = 0.3064;       // the mark's and the word's scale inside the 430x120 logo box
// the six pieces in logo units (the #logo-mark parallelograms, placed as in the loader's SVG)
const PIECES = [
  [[70, 0], [127, 0], [175, 84], [117, 84]], [[150, 136], [208, 31], [266, 31], [208, 136]],
  [[0, 191], [58, 86], [116, 86], [58, 191]], [[224, 217], [282, 112], [340, 112], [282, 217]],
  [[75, 272], [133, 167], [191, 167], [133, 272]], [[165, 219], [223, 219], [270, 303], [213, 303]],
].map((pts) => pts.map(([x, y]) => [x * MS, 5 + y * MS]));
const WORD = { l: 150.5, r: 419.2, t: 27.6, b: 90.9 };
const BOX = { l: 0, r: 419.2, t: 5, b: 115.2 };
// the slant every piece shares: up and to the right at 61deg
const SLANT = Math.atan2(-105, 58);
const TI = '#eef0f4';                 // the metal: plain and near-white

// ---------- timeline (seconds) ----------
const DRAFT = [0.2, 1.05];            // the blueprint draws in
const CUT0 = 0.85, CUT = 0.24, HOP = 0.06;
const pieceAt = (k) => CUT0 + k * (CUT + HOP);
const CUT_END = pieceAt(5) + CUT;
const RASTER = [CUT_END + 0.1, CUT_END + 1.1];
const GLINT = [RASTER[1] + 0.12, RASTER[1] + 0.85];
const HOLD = GLINT[1] + 0.1;          // the finished logo the scene holds until the fonts are in
const SLICE = 0.32;                   // the exit: the laser crosses the screen, the cut glows a beat,
const PART = [0.48, 1.12];            // then the halves part
const EXIT = 1.18;

const clamp01 = (x) => Math.min(1, Math.max(0, x));
const lerp = (a, b, k) => a + (b - a) * k;
const smooth = (x) => x * x * (3 - 2 * x);
const io3 = (x) => (x < 0.5 ? 4 * x * x * x : 1 - Math.pow(-2 * x + 2, 3) / 2);

// a closed outline measured along its length, so the laser can stop anywhere on it
function outline(pts) {
  const seg = [];
  let L = 0;
  pts.forEach((a, j) => {
    const b = pts[(j + 1) % pts.length], l = Math.hypot(b[0] - a[0], b[1] - a[1]);
    seg.push({ a, b, d: L, l });
    L += l;
  });
  return { seg, L };
}
function pointAt(P, d) {
  d = Math.min(Math.max(d, 0), P.L);
  for (const s of P.seg) {
    if (d <= s.d + s.l) { const k = (d - s.d) / s.l; return [lerp(s.a[0], s.b[0], k), lerp(s.a[1], s.b[1], k)]; }
  }
  return P.seg[0].a;
}
function trace(x, P, d0, d1) {
  x.beginPath();
  const p = pointAt(P, d0);
  x.moveTo(p[0], p[1]);
  for (const s of P.seg) if (s.d > d0 && s.d < d1) x.lineTo(s.a[0], s.a[1]);
  const q = pointAt(P, d1);
  x.lineTo(q[0], q[1]);
}
const OUTLINES = PIECES.map(outline);

export function runMobilePreloader({ el, reduced, onReveal, onDone, grain }) {
  const canvas = el.querySelector('.preloader__canvas');
  const ctx = canvas.getContext('2d');
  const bar = el.querySelector('.preloader__bar');
  const fill = bar.querySelector('i');
  const count = el.querySelector('.preloader__count');
  const num = el.querySelector('.preloader__num');
  el.style.setProperty('--grain', `url(${grain().toDataURL()})`);
  const wordPath = new Path2D(document.querySelector('#logo-word path').getAttribute('d'));
  const mk = (w, h) => { const c = document.createElement('canvas'); c.width = w; c.height = h; return c; };

  let W = 0, H = 0, dpr = 1, cx = 0, cy = 0, ls = 1, floor = 0, k = 1, SW = 1, SH = 1;
  let metal, work, gridSpr, bg, bgReady = false;
  const glowSpr = mk(128, 128);
  {
    const x = glowSpr.getContext('2d');
    const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
    for (let i = 0; i <= 16; i++) g.addColorStop(i / 16, `rgba(214,210,255,${Math.pow(1 - i / 16, 2.4).toFixed(4)})`);
    x.fillStyle = g;
    x.fillRect(0, 0, 128, 128);
  }

  // logo units -> screen (css px), and the transform that draws in logo units
  const sx = (x) => cx + (x - 210) * ls, sy = (y) => cy + (y - 60) * ls;
  const toLogo = (c) => c.setTransform(dpr * ls, 0, 0, dpr * ls, dpr * (cx - 210 * ls), dpr * (cy - 60 * ls));
  const poly = (x, pts) => { x.moveTo(pts[0][0], pts[0][1]); for (let i = 1; i < pts.length; i++) x.lineTo(pts[i][0], pts[i][1]); x.closePath(); };
  const fillLogo = (x) => {
    x.beginPath();
    PIECES.forEach((p) => poly(x, p));
    x.fill();
    x.save();
    x.translate(150, 27);
    x.scale(WS, WS);
    x.fill(wordPath, 'evenodd');
    x.restore();
  };

  // ---- sprites, rebuilt for each size ----
  function build() {
    k = ls * dpr;
    SW = Math.ceil((430 + 2 * PAD) * k); SH = Math.ceil((120 + 2 * PAD) * k);
    const inLogo = (x) => x.setTransform(k, 0, 0, k, PAD * k, PAD * k);
    // the silhouette, then the metal: a plain fill and bevels (the edges facing the upper left catch the
    // light, the others fall into shade)
    const sil = mk(SW, SH);
    { const x = sil.getContext('2d'); inLogo(x); x.fillStyle = '#fff'; fillLogo(x); }
    metal = mk(SW, SH);
    const m = metal.getContext('2d');
    m.drawImage(sil, 0, 0);
    m.globalCompositeOperation = 'source-in';
    m.fillStyle = TI;
    m.fillRect(0, 0, SW, SH);
    m.globalCompositeOperation = 'source-atop';
    const b = Math.max(1, 0.9 * dpr);
    const edge = (dx, dy, col) => {
      const e = mk(SW, SH), x = e.getContext('2d');
      x.drawImage(sil, 0, 0);
      x.globalCompositeOperation = 'destination-out';
      x.drawImage(sil, dx, dy);
      x.globalCompositeOperation = 'source-in';
      x.fillStyle = col;
      x.fillRect(0, 0, SW, SH);
      return e;
    };
    m.drawImage(edge(b, b, 'rgba(255,255,255,0.85)'), 0, 0);
    m.drawImage(edge(-b, -b, 'rgba(8,8,24,0.6)'), 0, 0);
    work = mk(SW, SH);

    // the dot grid, centred on the logo and fading towards the edges
    gridSpr = mk(canvas.width, canvas.height);
    const gx = gridSpr.getContext('2d');
    const step = 22, R = Math.hypot(W, H) * 0.62;
    for (let x = cx % step; x < W; x += step) {
      for (let y = cy % step; y < H; y += step) {
        const a = 0.3 * (1 - smooth(clamp01((Math.hypot(x - cx, y - cy) / R - 0.15) / 0.8)));
        if (a < 0.01) continue;
        gx.fillStyle = `rgba(150,150,255,${a.toFixed(3)})`;
        gx.fillRect((x - 0.6) * dpr, (y - 0.6) * dpr, 1.2 * dpr, 1.2 * dpr);
      }
    }
    bg = mk(canvas.width, canvas.height);
    bgReady = false;
  }

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    cx = W / 2; cy = H * LOGO_Y;
    // about three quarters of a phone's width, never oversized on a small tablet or a phone on its side
    ls = Math.min(W * 0.74, 440, H * 0.9) / 420;
    floor = bar.getBoundingClientRect().top;
    build();
  }

  // ---- the blueprint: the plate, the grid, the construction drawing and its notes ----
  const LABEL = '500 9.5px "Inter Tight", "Helvetica Neue", Arial, sans-serif';
  function renderBg(t) {
    const x = bg.getContext('2d');
    const q = smooth(clamp01((t - DRAFT[0]) / (DRAFT[1] - DRAFT[0])));
    x.setTransform(1, 0, 0, 1, 0, 0);
    x.globalAlpha = 1;
    x.fillStyle = `rgb(${INK})`;
    x.fillRect(0, 0, bg.width, bg.height);
    const amb = x.createRadialGradient(cx * dpr, cy * dpr, 0, cx * dpr, cy * dpr, Math.max(W, H) * 0.75 * dpr);
    amb.addColorStop(0, 'rgba(44,38,120,0.55)');
    amb.addColorStop(0.5, 'rgba(30,26,90,0.25)');
    amb.addColorStop(1, 'rgba(20,18,60,0)');
    x.fillStyle = amb;
    x.fillRect(0, 0, bg.width, bg.height);
    x.globalAlpha = clamp01((t - 0.05) / 0.5);
    x.drawImage(gridSpr, 0, 0);
    if (q <= 0) { x.globalAlpha = 1; return; }

    toLogo(x);
    const px = 1 / ls;
    x.lineCap = 'round';
    // the construction box: its lines run out from the logo across the whole screen
    const reachX = (W / ls) * q, reachY = (H / ls) * q;
    x.globalAlpha = 0.2;
    x.strokeStyle = '#9d9bff';
    x.lineWidth = 0.6 * px;
    x.beginPath();
    for (const y of [BOX.t, BOX.b]) { x.moveTo(BOX.l - reachX, y); x.lineTo(BOX.r + reachX, y); }
    for (const v of [BOX.l, BOX.r]) { x.moveTo(v, BOX.t - reachY); x.lineTo(v, BOX.b + reachY); }
    x.stroke();
    // a cross at each corner
    x.globalAlpha = 0.55 * q;
    x.lineWidth = 0.8 * px;
    x.beginPath();
    for (const [v, y] of [[BOX.l, BOX.t], [BOX.r, BOX.t], [BOX.l, BOX.b], [BOX.r, BOX.b]]) {
      x.moveTo(v - 5 * px, y); x.lineTo(v + 5 * px, y); x.moveTo(v, y - 5 * px); x.lineTo(v, y + 5 * px);
    }
    x.stroke();
    // the pieces as dashed outlines, drawn round from their first corner
    x.globalAlpha = 0.5;
    x.strokeStyle = '#a9a7ff';
    x.lineWidth = 0.75 * px;
    x.setLineDash([3 * px, 2.5 * px]);
    OUTLINES.forEach((P) => { trace(x, P, 0, P.L * q); x.stroke(); });
    x.setLineDash([]);
    // the wordmark in hairline, left to right
    x.save();
    x.beginPath();
    x.rect(WORD.l - 2, WORD.t - 4, (WORD.r - WORD.l + 4) * q, WORD.b - WORD.t + 8);
    x.clip();
    x.globalAlpha = 0.32;
    x.translate(150, 27);
    x.scale(WS, WS);
    x.lineWidth = (0.7 * px) / WS;
    x.stroke(wordPath);
    x.restore();
    // the slant, measured off the left piece's lower corner: both edges run on outside it
    const a = clamp01((q - 0.55) / 0.45);
    if (a > 0) {
      const [vx, vy] = PIECES[2][0];
      x.globalAlpha = 0.5 * a;
      x.strokeStyle = '#a9a7ff';
      x.lineWidth = 0.7 * px;
      x.setLineDash([2 * px, 2 * px]);
      x.beginPath();
      x.moveTo(vx, vy); x.lineTo(vx - 20, vy);
      x.moveTo(vx, vy); x.lineTo(vx + Math.cos(Math.PI + SLANT) * 20, vy + Math.sin(Math.PI + SLANT) * 20);
      x.stroke();
      x.setLineDash([]);
      x.beginPath();
      x.arc(vx, vy, 12, Math.PI + SLANT, Math.PI);
      x.stroke();
    }
    // the notes, in screen space so they stay at reading size
    x.setTransform(dpr, 0, 0, dpr, 0, 0);
    x.font = LABEL;
    x.fillStyle = '#b4b2ff';
    x.globalAlpha = 0.6 * a;
    if (a > 0) {
      const [vx, vy] = PIECES[2][0];
      const m = Math.PI + SLANT / 2;
      x.textAlign = 'right';
      x.fillText('61°', sx(vx + Math.cos(m) * 16) - 2, sy(vy + Math.sin(m) * 16) + 8);
    }
    x.globalAlpha = 0.5 * clamp01((q - 0.3) / 0.5);
    x.textAlign = 'left';
    x.fillText('URB-01  ·  MARK + WORDMARK', sx(BOX.l), sy(BOX.t) - 10);
    x.textAlign = 'right';
    x.fillText('Ti-6Al-4V  ·  Grade 5', sx(BOX.r), sy(BOX.b) + 18);
    x.globalAlpha = 1;
    bgReady = q >= 1;
  }

  // ---- the laser: where its head is (logo units), how hard it fires, and whether it is cutting ----
  function laser(t) {
    if (t < CUT0 - 0.22) return null;
    const p0 = PIECES[0][0];
    // it fires up on the first corner
    if (t < CUT0) return { x: p0[0], y: p0[1], p: smooth(clamp01((t - CUT0 + 0.22) / 0.2)), cut: false };
    for (let i = 0; i < 6; i++) {
      const s = pieceAt(i);
      if (t < s) {
        // a quick, dim hop to the next piece's corner
        const a = PIECES[i - 1][0], b = PIECES[i][0], u = smooth(clamp01((t - s + HOP) / HOP));
        return { x: lerp(a[0], b[0], u), y: lerp(a[1], b[1], u), p: 0.35, cut: false };
      }
      if (t < s + CUT) {
        const [x, y] = pointAt(OUTLINES[i], OUTLINES[i].L * ((t - s) / CUT));
        return { x, y, p: 1, cut: true };
      }
    }
    if (t < RASTER[0]) {
      const a = PIECES[5][0], u = smooth(clamp01((t - CUT_END) / (RASTER[0] - CUT_END)));
      return { x: lerp(a[0], WORD.l, u), y: lerp(a[1], WORD.t, u), p: 0.35, cut: false };
    }
    // the wordmark is rastered: the head sweeps up and down as it crosses
    if (t < RASTER[1]) {
      const u = (t - RASTER[0]) / (RASTER[1] - RASTER[0]);
      return { x: lerp(WORD.l, WORD.r, u), y: lerp(WORD.t, WORD.b, 0.5 - 0.5 * Math.cos(u * Math.PI * 14)), p: 1, cut: true };
    }
    // then it shuts off and the beam draws back up
    const off = 1 - clamp01((t - RASTER[1]) / 0.25);
    return off > 0 ? { x: WORD.r, y: WORD.t, p: off, cut: false } : null;
  }

  // ---- sparks: flung from the cut, slowed by the air, pulled down, bouncing on the bar ----
  const sparks = [];
  let spawn = 0;
  function emit(x, y, rate, dt) {
    spawn += rate * dt;
    while (spawn >= 1 && sparks.length < 360) {
      spawn -= 1;
      // most fly out in a fan above the cut, the rest any way at all
      const fan = Math.random() < 0.7;
      const ang = fan ? -Math.PI / 2 + (Math.random() * 2 - 1) * 1.3 : Math.random() * Math.PI * 2;
      const v = 120 + 620 * Math.pow(Math.random(), 1.4);
      sparks.push({ x, y, vx: Math.cos(ang) * v, vy: Math.sin(ang) * v, age: 0, life: 0.3 + Math.random() * 0.65 });
    }
    if (spawn >= 1) spawn = 0;
  }
  function stepSparks(dt) {
    const drag = Math.exp(-0.9 * dt);
    for (let i = sparks.length - 1; i >= 0; i--) {
      const s = sparks[i];
      s.age += dt;
      if (s.age >= s.life) { sparks.splice(i, 1); continue; }
      s.vx *= drag;
      s.vy = s.vy * drag + 1500 * dt;
      s.x += s.vx * dt;
      s.y += s.vy * dt;
      if (s.y > floor && s.vy > 0) {
        s.y = floor - (s.y - floor) * 0.3;
        s.vy *= -0.32;
        s.vx *= 0.72;
        s.age += 0.08;
      }
    }
  }
  function drawSparks(fade = 1) {
    if (!sparks.length || fade <= 0) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';
    for (const s of sparks) {
      // white-hot, then lilac, then the brand blue as it cools
      const T = 1 - s.age / s.life;
      ctx.strokeStyle = T > 0.55 ? '#fff' : T > 0.25 ? '#c4c0ff' : '#6461ff';
      ctx.globalAlpha = Math.min(1, T * 2) * fade;
      ctx.lineWidth = 0.8 + 0.9 * T;
      // a streak as long as the distance it covers in a frame or so, like a spark on film
      ctx.beginPath();
      ctx.moveTo(s.x - s.vx * 0.018, s.y - s.vy * 0.018);
      ctx.lineTo(s.x, s.y);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  // ---- the metal, lit on the working canvas: cut pieces, the rastered word, heat, the laser's own
  // reflection and the glint ----
  function renderMetal(t, head) {
    const w = work.getContext('2d');
    w.setTransform(1, 0, 0, 1, 0, 0);
    w.globalCompositeOperation = 'source-over';
    w.globalAlpha = 1;
    w.clearRect(0, 0, SW, SH);
    const inLogo = () => w.setTransform(k, 0, 0, k, PAD * k, PAD * k);
    let any = false;
    PIECES.forEach((p, i) => {
      const e = pieceAt(i) + CUT;
      if (t <= e) return;
      w.save();
      inLogo();
      w.beginPath(); poly(w, p); w.clip();
      w.setTransform(1, 0, 0, 1, 0, 0);
      w.globalAlpha = smooth(clamp01((t - e) / 0.14));
      w.drawImage(metal, 0, 0);
      w.restore();
      any = true;
    });
    const scan = t > RASTER[0] ? lerp(WORD.l, WORD.r, clamp01((t - RASTER[0]) / (RASTER[1] - RASTER[0]))) : 0;
    if (scan > WORD.l) {
      w.save();
      inLogo();
      w.beginPath(); w.rect(WORD.l - 3, -PAD, scan - WORD.l + 3, 120 + 2 * PAD); w.clip();
      w.setTransform(1, 0, 0, 1, 0, 0);
      w.drawImage(metal, 0, 0);
      w.restore();
      any = true;
    }
    if (!any) return false;
    inLogo();
    w.globalCompositeOperation = 'source-atop';
    // fresh cuts glow white and cool through violet into the metal
    PIECES.forEach((p, i) => {
      const h = Math.exp(-(t - pieceAt(i) - CUT) / 0.38);
      if (t <= pieceAt(i) + CUT || h < 0.01) return;
      w.fillStyle = `rgba(${Math.round(lerp(150, 255, h))},${Math.round(lerp(130, 250, h))},255,${(0.9 * h).toFixed(3)})`;
      w.beginPath(); poly(w, p); w.fill();
    });
    if (scan > WORD.l) {
      const h = t < RASTER[1] ? 1 : Math.exp(-(t - RASTER[1]) / 0.35);
      if (h > 0.01) {
        const g = w.createLinearGradient(scan - 70, 0, scan, 0);
        g.addColorStop(0, 'rgba(150,130,255,0)');
        g.addColorStop(0.7, `rgba(190,175,255,${(0.45 * h).toFixed(3)})`);
        g.addColorStop(1, `rgba(255,250,255,${(0.9 * h).toFixed(3)})`);
        w.fillStyle = g;
        w.fillRect(scan - 70, -PAD, 70, 120 + 2 * PAD);
      }
    }
    // the laser's point is the brightest thing in the room: the metal round it reflects it
    if (head && head.p > 0.05) {
      const g = w.createRadialGradient(head.x, head.y, 0, head.x, head.y, 55);
      g.addColorStop(0, `rgba(235,233,255,${(0.5 * head.p).toFixed(3)})`);
      g.addColorStop(1, 'rgba(235,233,255,0)');
      w.fillStyle = g;
      w.fillRect(head.x - 55, head.y - 55, 110, 110);
    }
    // the glint: a band of light sweeps across the finished logo, leaning with the slant a little,
    // then a slow sheen keeps the metal alive while the scene holds
    const glint = (gx, a) => {
      const tilt = Math.tan(14 * DEG) * 60;
      const g = w.createLinearGradient(gx - 70 - tilt, 0, gx + 70 + tilt, 120);
      g.addColorStop(0, 'rgba(255,255,255,0)');
      g.addColorStop(0.36, `rgba(255,255,255,${(0.08 * a).toFixed(3)})`);
      g.addColorStop(0.47, `rgba(255,255,255,${(0.55 * a).toFixed(3)})`);
      g.addColorStop(0.5, `rgba(255,255,255,${(0.95 * a).toFixed(3)})`);
      g.addColorStop(0.53, `rgba(255,255,255,${(0.55 * a).toFixed(3)})`);
      g.addColorStop(0.64, `rgba(255,255,255,${(0.08 * a).toFixed(3)})`);
      g.addColorStop(1, 'rgba(255,255,255,0)');
      w.fillStyle = g;
      w.fillRect(-PAD, -PAD, 430 + 2 * PAD, 120 + 2 * PAD);
    };
    if (t > GLINT[0] && t < GLINT[1]) glint(lerp(-90, 520, io3((t - GLINT[0]) / (GLINT[1] - GLINT[0]))), 1);
    if (t > HOLD) glint(210 + 150 * Math.sin((t - HOLD) * 0.9 - Math.PI / 2), 0.35 * clamp01((t - HOLD) / 0.6));
    w.globalCompositeOperation = 'source-over';
    return true;
  }
  function drawMetal(t, head, scale = 1, alpha = 1) {
    if (!renderMetal(t, head) || alpha <= 0) return;
    const ox = cx + (-PAD - 210) * ls * scale, oy = cy + (-PAD - 60) * ls * scale;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = alpha;
    ctx.drawImage(work, ox * dpr, oy * dpr, SW * scale, SH * scale);
    ctx.globalAlpha = 1;
  }

  // the kerf: the cut line round each piece, white-hot at the head and cooling behind it, fading out
  // once the piece has turned to metal
  function drawKerfs(t) {
    toLogo(ctx);
    ctx.globalCompositeOperation = 'lighter';
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const px = 1 / ls;
    OUTLINES.forEach((P, i) => {
      const s = pieceAt(i), f = clamp01((t - s) / CUT);
      if (f <= 0) return;
      const done = t - s - CUT;
      const cool = f < 1 ? 0.5 : 0.5 * clamp01(1 - (done - 0.25) / 0.6);
      if (cool > 0.01) {
        ctx.globalAlpha = cool;
        ctx.strokeStyle = '#aaa8ff';
        ctx.lineWidth = 1 * px;
        trace(ctx, P, 0, P.L * f);
        ctx.stroke();
      }
      const hot = f < 1 ? 1 : Math.exp(-done / 0.18);
      if (hot < 0.02) return;
      const d1 = P.L * f, d0 = f < 1 ? Math.max(0, d1 - 0.3 * P.L) : 0;
      for (const [lw, a, c] of [[5, 0.22, '#9c98ff'], [1.5, 0.95, '#fff']]) {
        ctx.globalAlpha = a * hot;
        ctx.strokeStyle = c;
        ctx.lineWidth = lw * px;
        trace(ctx, P, d0, d1);
        ctx.stroke();
      }
    });
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  // the beam comes straight down from above the screen onto its point, which flares and lights the
  // plate round it
  function drawBeam(hx, hy, p, t) {
    if (p <= 0.01) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.globalCompositeOperation = 'lighter';
    const flick = 0.85 + 0.15 * Math.sin(t * 97) * Math.sin(t * 61);
    ctx.globalAlpha = 0.2 * p;
    ctx.drawImage(glowSpr, hx - 120, hy - 120, 240, 240);
    const g = ctx.createLinearGradient(0, 0, 0, hy);
    g.addColorStop(0, 'rgba(150,146,255,0)');
    g.addColorStop(0.75, `rgba(180,176,255,${(0.3 * p).toFixed(3)})`);
    g.addColorStop(1, `rgba(255,255,255,${(0.95 * p).toFixed(3)})`);
    ctx.fillStyle = g;
    ctx.globalAlpha = 0.28;
    ctx.fillRect(hx - 4, 0, 8, hy);
    ctx.globalAlpha = 1;
    ctx.fillRect(hx - 0.7, 0, 1.4, hy);
    const r = 24 * flick * (0.4 + 0.6 * p);
    ctx.globalAlpha = p;
    ctx.drawImage(glowSpr, hx - r, hy - r, 2 * r, 2 * r);
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.arc(hx, hy, 2.1 * p, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
  }

  // ---- the frame ----
  function draw(t, dt) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    if (!bgReady) renderBg(t);
    ctx.drawImage(bg, 0, 0);
    const head = laser(t);
    const hx = head ? sx(head.x) : 0, hy = head ? sy(head.y) : 0;
    drawMetal(t, head);
    drawKerfs(t);
    if (head && head.cut) emit(hx, hy, 240, dt);
    stepSparks(dt);
    drawSparks();
    if (head) drawBeam(hx, hy, head.p, t);
  }

  // the exit: the laser slices the plate along the logo's slant, and the two halves part along the
  // line square to it, the bar and the counter riding off with the lower one
  const ux = Math.cos(SLANT), uy = Math.sin(SLANT), nx = -uy, ny = ux;
  function drawExit(t, e, dt) {
    const Lc = Math.hypot(W, H) * 0.6;
    const cut = clamp01(e / SLICE);
    const s = lerp(-Lc, Lc, smooth(cut));
    const hx = cx + ux * s, hy = cy + uy * s;
    const D = io3(clamp01((e - PART[0]) / (PART[1] - PART[0]))) * Math.hypot(W, H) * 0.58;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const edgeHot = cut < 1 ? 1 : Math.exp(-(e - SLICE) / 0.3);
    for (const side of [-1, 1]) {
      const ox = side * nx * D, oy = side * ny * D;
      ctx.save();
      ctx.setTransform(dpr, 0, 0, dpr, dpr * ox, dpr * oy);
      ctx.beginPath();
      ctx.moveTo(cx - ux * Lc * 2, cy - uy * Lc * 2);
      ctx.lineTo(cx + ux * Lc * 2, cy + uy * Lc * 2);
      ctx.lineTo(cx + ux * Lc * 2 + side * nx * Lc * 3, cy + uy * Lc * 2 + side * ny * Lc * 3);
      ctx.lineTo(cx - ux * Lc * 2 + side * nx * Lc * 3, cy - uy * Lc * 2 + side * ny * Lc * 3);
      ctx.closePath();
      ctx.clip();
      ctx.setTransform(1, 0, 0, 1, dpr * ox, dpr * oy);
      ctx.drawImage(bg, 0, 0);
      // the cut edge, glowing and cooling
      if (D > 0.5 && edgeHot > 0.02) {
        ctx.setTransform(dpr, 0, 0, dpr, dpr * ox, dpr * oy);
        ctx.globalCompositeOperation = 'lighter';
        ctx.strokeStyle = '#c9c6ff';
        ctx.globalAlpha = 0.8 * edgeHot;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(cx - ux * Lc * 2, cy - uy * Lc * 2);
        ctx.lineTo(cx + ux * Lc * 2, cy + uy * Lc * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
        ctx.globalCompositeOperation = 'source-over';
      }
      ctx.restore();
    }
    // the slice itself, white behind the head and cooling back along the line
    if (D < 1) {
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.globalCompositeOperation = 'lighter';
      const g = ctx.createLinearGradient(cx - ux * Lc, cy - uy * Lc, hx, hy);
      g.addColorStop(0, 'rgba(160,156,255,0.25)');
      g.addColorStop(0.8, 'rgba(200,198,255,0.6)');
      g.addColorStop(1, 'rgba(255,255,255,1)');
      ctx.strokeStyle = g;
      ctx.lineWidth = 1.6;
      ctx.beginPath();
      ctx.moveTo(cx - ux * Lc, cy - uy * Lc);
      ctx.lineTo(hx, hy);
      ctx.stroke();
      ctx.globalCompositeOperation = 'source-over';
    }
    // the finished logo lifts towards the camera and fades as the plate opens
    const lift = smooth(clamp01((e - 0.25) / 0.6));
    drawMetal(t, null, 1 + 0.12 * lift, 1 - lift);
    if (cut < 1) emit(hx, hy, 320, dt);
    stepSparks(dt);
    drawSparks(1 - clamp01((e - 0.75) / 0.4));
    if (cut < 1) drawBeam(hx, hy, 1, t);
    const by = { x: nx * D, y: ny * D };
    gsap.set([count, bar], by);
  }

  // ---- clocks ----
  const st = { t: 0, e: -1 };
  const tick = (time, deltaTime) => {
    const dt = Math.min((deltaTime || 16) / 1000, 1 / 30);
    if (st.e >= 0) drawExit(st.t, st.e, dt);
    else draw(st.t, dt);
  };
  resize();
  const onResize = () => { resize(); };
  window.addEventListener('resize', onResize);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { bgReady = false; });
  let clock = null;
  const finish = () => {
    gsap.ticker.remove(tick);
    clock && clock.kill();
    window.removeEventListener('resize', onResize);
    // free the canvases' backing stores now rather than whenever they are collected
    for (const c of [canvas, metal, work, gridSpr, bg]) if (c) c.width = c.height = 1;
    el.remove();
    onDone && onDone();
  };

  if (reduced) {
    st.t = HOLD;
    renderBg(DRAFT[1] + 1);
    draw(HOLD, 0);
    num.textContent = '100';
    fill.style.transform = 'scaleX(1)';
    gsap.timeline({ delay: 0.6 })
      .add(() => { onReveal && onReveal(MOBILE_HAND); })
      .to(el, { opacity: 0, duration: 0.5, ease: 'none' })
      .add(finish);
    return null;
  }

  gsap.set(fill, { scaleX: 0, transformOrigin: '0% 50%' });
  gsap.set(count, { opacity: 0, y: 40 });
  gsap.ticker.add(tick);
  // the scene clock runs through the finished pose and idles there until the exit
  clock = gsap.to(st, { t: 40, duration: 40, ease: 'none' });

  const c = { v: 0 };
  let shown = -1;
  const setCount = () => {
    const v = Math.round(c.v);
    if (v !== shown) { shown = v; num.textContent = v; }
    fill.style.transform = `scaleX(${(c.v / 100).toFixed(4)})`;
  };
  const tl = gsap.timeline();
  tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'none' }, 0)
    .to(count, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out' }, 0.4)
    .to(c, { v: 100, duration: HOLD - 0.5, ease: 'power1.inOut', onUpdate: setCount }, 0.5);

  const exit = () => {
    el.classList.add('is-out');
    // the canvas draws the plate itself from here, so the page can show where it opens
    el.style.background = 'transparent';
    gsap.timeline()
      .fromTo(st, { e: 0 }, { e: EXIT, duration: EXIT, ease: 'none' }, 0)
      // the glass starts fading in from the plate's colour under it as the slice begins, so it is
      // there when the halves part
      .add(() => { onReveal && onReveal(MOBILE_HAND); }, 0)
      .add(finish, EXIT);
  };
  // leave once the logo is finished and the fonts the hero needs are in (but never wait long)
  const posed = new Promise((r) => tl.call(r, null, HOLD));
  const fonts = document.fonts && document.fonts.ready ? document.fonts.ready.catch(() => { }) : Promise.resolve();
  const cap = new Promise((r) => setTimeout(r, HOLD * 1000 + 1500));
  Promise.all([posed, Promise.race([fonts, cap])]).then(exit);
  return tl;
}
