// Loading screen on phones (breakpoints.js, either way up). The giants' two-lamp stage is a wide
// shot that crops badly on a phone, so phones get a scene of their own with the same story, light
// finding the logo: a torch catches at the top edge with a few sparks and its beam sweeps the dark
// wall, searching; the logo assembles as faint glass in the dark and is lit wherever the light
// crosses it, with a glint and a shadow from each beam (logo-light.js, shared with the desktop
// scene); the beam finds it and settles over it while a softer counter-beam rises from below to cross
// it; then the beam opens and the camera dives into the light, ending on the wash the hero's glass
// fades in from.
// A pure function of time in screen space, drawn from sprites built once (no per-frame gradients,
// shadows, filters or pixel reads). The camera zooms about the logo's centre, so the logo DOM only
// ever scales in place and nothing is painted behind it but soft light.
import gsap from 'gsap';
import { createLogoLight } from './logo-light.js';

const HOLD = 5.4;                     // seconds: the settled pose the scene holds until the fonts are in
const DIVE_DUR = 0.95;                // seconds: the dive into the light
const LOGO_Y = 0.47;                  // the logo's centre, as a fraction of the height
const TORCH = [0.72, 0.09];           // the torch, as fractions of the viewport
const COUNTER = [0.02, 1.2];         // the counter-beam's lamp, below the frame
const IGNITE = 0.55;
const DEG = Math.PI / 180;

const ease = {
  io: (x) => (x < 0.5 ? 2 * x * x : 1 - Math.pow(-2 * x + 2, 2) / 2),
  out2: (x) => 1 - (1 - x) * (1 - x),
  in2: (x) => x * x,
  in3: (x) => x * x * x,
};
const clamp01 = (x) => Math.min(1, Math.max(0, x));
function kf(table, t, e = ease.io) {
  if (t <= table[0][0]) return table[0][1];
  for (let i = 1; i < table.length; i++) {
    const [t1, v1] = table[i];
    if (t <= t1) {
      const [t0, v0] = table[i - 1];
      return v0 + (v1 - v0) * e((t - t0) / (t1 - t0));
    }
  }
  return table[table.length - 1][1];
}
// a smooth path through a table of points: a cubic spline flattened at turning points, so the beam
// never overshoots a key (the same spline the desktop scene moves its lamps with)
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

// ---------- keyframes (seconds; points are fractions of the viewport) ----------
// the torch searches the dark wall (up and left, down the left side, across the bottom), crossing the
// logo as it goes, then rises onto it, aimed just under its centre so the hot spot pools beneath it
const AIM = [
  [IGNITE, [0.5, 0.2]], [1.55, [0.16, 0.3]], [2.5, [0.2, 0.7]], [3.35, [0.82, 0.67]], [4.25, [0.5, 0.5]],
];
// narrow while it searches; it opens to take in the whole logo, then closes snugly on it
const HALF = [[0, 10], [3.4, 11], [4.2, 30], [5.0, 26.5]];
// the beam stretches out of the lamp as the torch catches
const REACH = [[IGNITE, 0.15], [1.7, 1]];
// the softer counter-beam rises from below the frame and swings across onto the logo
const AIM_B = [[2.9, [0.3, 0.3]], [4.5, [0.62, 0.48]]];
const POWER_B = [[2.9, 0], [4.1, 1]];
const HALF_B = 11;

export function runMobilePreloader({ el, reduced, onReveal, onDone, wash, grain }) {
  const canvas = el.querySelector('.preloader__canvas');
  const ctx = canvas.getContext('2d', { alpha: false });
  const logo = el.querySelector('.preloader__logo');
  const lighting = createLogoLight(el);
  const { pieces, wordClip } = lighting;
  const bar = el.querySelector('.preloader__bar');
  const fill = bar.querySelector('i');
  const count = el.querySelector('.preloader__count');
  const num = el.querySelector('.preloader__num');
  el.style.setProperty('--grain', `url(${grain().toDataURL()})`);
  const washRgb = `rgb(${wash.map((v) => Math.round(v * 255)).join(',')})`;

  // the logo's SVG is a 430x120 box with its artwork centred on (210, 60); the settled beam's angle is
  // sized from each piece's centre and four points along the word
  const MARK_S = 0.3636;
  const pieceBox = [[122, 42], [208, 83], [58, 138], [282, 164], [133, 219], [220, 261]].map(([x, y]) => [x * MARK_S, 5 + y * MARK_S]);
  const wordBox = [[160, 60], [245, 60], [330, 60], [415, 60]];

  let W = 0, H = 0, dpr = 1, cx = 0, cy = 0, ls = 1, hk = 1, logoTr = '', logoOp = '';
  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    cx = W / 2; cy = H * LOGO_Y;
    // about three quarters of a phone's width, never oversized on a small tablet or a landscape phone
    ls = Math.min(W * 0.74, 440, H * 0.9) / 420;
    // the settled beam must take in the whole logo; on a phone in landscape the logo spans a wider
    // angle from the torch, so every beam angle opens up in proportion
    const tx = TORCH[0] * W, ty = TORCH[1] * H;
    const aimAng = Math.atan2(0.5 * H - ty, 0.5 * W - tx);
    const span = [...pieceBox, ...wordBox].map(([bx, by]) => {
      const d = Math.atan2(cy + (by - 60) * ls - ty, cx + (bx - 210) * ls - tx) - aimAng;
      return Math.abs(Math.atan2(Math.sin(d), Math.cos(d))) / DEG;
    });
    hk = Math.max(1, (Math.max(...span) + 2) / 25.5);
  }

  // ---- sprites built once ----
  const sprite = (w, h, paint) => {
    const c = document.createElement('canvas');
    c.width = w; c.height = h;
    paint(c.getContext('2d'));
    return c;
  };
  // a smooth falloff curve sampled densely: a few hand-placed stops leave visible creases where the
  // slope changes
  const falloff = (g, rgb, curve) => {
    for (let i = 0; i <= 24; i++) g.addColorStop(i / 24, `rgba(${rgb},${curve(i / 24).toFixed(4)})`);
  };
  // the light's long, faint falloffs fall between 8-bit steps and show as rings once scaled up: dither
  // each sprite's alpha once, here, so the steps break into the grain
  const dither = (c, rgb) => {
    const x = c.getContext('2d');
    const img = x.getImageData(0, 0, c.width, c.height), d = img.data;
    for (let i = 0; i < d.length; i += 4) {
      if (d[i + 3] === 0) continue;
      d[i] = rgb[0]; d[i + 1] = rgb[1]; d[i + 2] = rgb[2];
      d[i + 3] = Math.max(0, Math.min(255, d[i + 3] + (Math.random() + Math.random() - 1) * 2.5));
    }
    x.putImageData(img, 0, 0);
    return c;
  };
  // a cone of light pointing right from (0, BH/2), with its edges at a slope of BT. Stacked cones of
  // slowly widening angle give an edge that is crisp by the lamp and softens with distance, like real
  // light, and a few faint shafts inside give it some air. The shape is built as a white mask first and
  // the light's falloff (in rings from the lamp, so the far end is round, not a straight cut) is laid
  // over it in one pass: painting the falloff into every layer rounds each one at the same radii,
  // which stacks into visible rings
  const BL = 512, BH = 512, BT = 0.4;
  const beamSpr = sprite(BL, BH, (x) => {
    x.fillStyle = '#fff';
    const cone = (lo, hi, a) => {
      x.globalAlpha = a;
      x.beginPath();
      x.moveTo(0, BH / 2 - 2); x.lineTo(BL, BH / 2 + lo * BL); x.lineTo(BL, BH / 2 + hi * BL); x.lineTo(0, BH / 2 + 2);
      x.closePath(); x.fill();
    };
    for (let i = 0; i < 12; i++) { const tn = BT * (0.8 + (0.4 * i) / 11); cone(-tn, tn, 0.1); }
    cone(-BT * 0.4, BT * 0.4, 0.2);
    for (const [c, w, a] of [[-0.62, 0.05, 0.1], [-0.3, 0.08, 0.07], [-0.05, 0.035, 0.12], [0.22, 0.06, 0.08], [0.5, 0.04, 0.1], [0.7, 0.07, 0.06]]) {
      cone(BT * (c - w), BT * (c + w), a);
    }
    const g = x.createRadialGradient(0, BH / 2, 0, 0, BH / 2, BL);
    falloff(g, [228, 226, 255], (r) => Math.pow(1 - r, 1.8) * (0.62 + 0.38 * Math.exp(-12 * r)));
    x.globalAlpha = 1;
    x.globalCompositeOperation = 'source-in';
    x.fillStyle = g;
    x.fillRect(0, 0, BL, BH);
  });
  dither(beamSpr, [228, 226, 255]);
  const radial = (rgb, curve) => dither(sprite(256, 256, (x) => {
    const g = x.createRadialGradient(128, 128, 0, 128, 128, 128);
    falloff(g, rgb, curve);
    x.fillStyle = g;
    x.fillRect(0, 0, 256, 256);
  }), rgb);
  const glowSpr = radial([214, 210, 255], (r) => Math.pow(1 - r, 2.6));
  const ambSpr = radial([40, 34, 108], (r) => Math.pow(1 - r, 1.6));
  // the torch's lens: a hot core sitting towards the beam (+x) on a face that cools to its rim
  const lensSpr = sprite(128, 128, (x) => {
    const g = x.createRadialGradient(86, 64, 0, 64, 64, 64);
    g.addColorStop(0, '#fff');
    g.addColorStop(0.3, '#fbfbff');
    g.addColorStop(0.75, '#d9d8ff');
    g.addColorStop(1, '#a9abef');
    x.fillStyle = g;
    x.beginPath(); x.arc(64, 64, 64, 0, Math.PI * 2); x.fill();
  });
  const specks = sprite(256, 256, (x) => {
    x.fillStyle = 'rgba(176,184,255,0.5)';
    for (let i = 0; i < 120; i++) {
      const a = Math.random() * Math.PI * 2, r = (1 + Math.random() * 1.2) * 58;
      x.fillRect(128 + Math.cos(a) * r, 128 + Math.sin(a) * r, 1.6, 1.6);
    }
  });
  // ignition sparks (velocity in widths per second) and dust that only shows where the light is
  const sparks = Array.from({ length: 30 }, () => {
    const a = Math.random() * Math.PI * 2, v = 0.35 + Math.random() * 0.75;
    return { vx: Math.cos(a) * v, vy: Math.sin(a) * v * 0.8 + 0.12, life: 0.7 + Math.random() * 0.6, r: 1 + Math.random() * 1.3, c: Math.random() < 0.5 ? '#9ea6ff' : '#eef0ff' };
  });
  const dust = Array.from({ length: 70 }, () => ({
    x: Math.random(), y: Math.random(), ph: Math.random() * 6.3, sp: 0.5 + Math.random(), r: 0.8 + Math.random() * 1.2,
  }));

  // ---- light ----
  // 0..1: how far inside a beam a point is; `soft` widens the edge (degrees) and `fade` dims it along the beam
  function inBeam(px, py, b, soft = 5, fade = false) {
    const dx = px - b.x, dy = py - b.y, d = Math.hypot(dx, dy);
    // the drawn beam fades out just past its pool, but its light carries on a little further
    if (d > (fade ? 1 : 1.6) * b.len) return 0;
    const diff = Math.abs(((((Math.atan2(dy, dx) - b.ang) / DEG) % 360) + 540) % 360 - 180);
    const v = diff < b.half - 1 ? 1 : diff < b.half - 1 + soft ? 1 - (diff - b.half + 1) / soft : 0;
    return v * (fade ? 1 - d / b.len : clamp01((1.6 * b.len - d) / (0.4 * b.len)));
  }
  function aimBeam(lamp, p, half, reach, power) {
    const dx = p[0] - lamp[0], dy = p[1] - lamp[1], dist = Math.hypot(dx, dy);
    return { x: lamp[0], y: lamp[1], ang: Math.atan2(dy, dx), half, dist, len: dist * 1.3 * reach, power, reach };
  }
  function drawBeam(b, alpha) {
    if (alpha <= 0.005 || b.len < 1) return;
    const sx = b.len / BL, sy = (Math.tan(Math.min(b.half, 75) * DEG) / BT) * sx;
    ctx.save();
    ctx.translate(b.x, b.y);
    ctx.rotate(b.ang);
    ctx.scale(sx, sy);
    ctx.globalAlpha = alpha;
    ctx.drawImage(beamSpr, 0, -BH / 2);
    ctx.restore();
  }
  // where the beam meets the wall: a soft pool, longer along the beam than across it
  function drawPool(b, alpha) {
    if (alpha <= 0.005) return;
    const r = b.dist * Math.tan(b.half * DEG);
    const px = b.x + Math.cos(b.ang) * b.dist * b.reach, py = b.y + Math.sin(b.ang) * b.dist * b.reach;
    ctx.save();
    ctx.translate(px, py);
    ctx.rotate(b.ang);
    ctx.globalAlpha = alpha;
    ctx.drawImage(glowSpr, -r * 1.35, -r * 1.05, r * 2.7, r * 2.1);
    ctx.restore();
  }
  function drawTorch(x, y, r, power, flare, ang) {
    if (power <= 0.01) return;
    ctx.globalCompositeOperation = 'lighter';
    const hr = r * (4.2 + 2.4 * flare);
    ctx.globalAlpha = Math.min(1, 0.8 * power + 0.3 * flare);
    ctx.drawImage(glowSpr, x - hr, y - hr, hr * 2, hr * 2);
    ctx.globalCompositeOperation = 'source-over';
    ctx.globalAlpha = power * 0.8;
    const sr = (r / 58) * 128 * 2.2;
    ctx.drawImage(specks, x - sr, y - sr, sr * 2, sr * 2);
    // the head turned towards the beam: its housing shows as a dark crescent behind the lens, and the
    // lens's hot core sits on the side the light leaves from, so it reads as a torch, not a ball
    const ux = Math.cos(ang), uy = Math.sin(ang);
    ctx.globalAlpha = Math.min(1, 1.4 * power);
    ctx.fillStyle = '#25266a';
    ctx.beginPath(); ctx.arc(x - ux * 0.2 * r, y - uy * 0.2 * r, 1.08 * r, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = 1;
    ctx.fillStyle = `rgb(${Math.round(176 + 79 * power)},${Math.round(184 + 71 * power)},255)`;
    ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
    ctx.globalAlpha = power;
    ctx.save();
    ctx.translate(x, y);
    ctx.rotate(ang);
    ctx.drawImage(lensSpr, -r, -r, 2 * r, 2 * r);
    ctx.restore();
    ctx.globalAlpha = 1;
  }

  // ---- the frame ----
  function draw(tau, dive) {
    const t = Math.min(tau, HOLD);
    // the settled pose breathes a little while the fonts load
    const idle = Math.max(0, tau - HOLD);
    // a slow pull-back across the whole scene, so the frame is never quite still, then the dive
    const k = (1 + 0.12 * Math.pow(1 - t / HOLD, 2)) * (1 + 5.5 * ease.in3(dive));
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalAlpha = 1;
    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = '#08071a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.setTransform(dpr * k, 0, 0, dpr * k, dpr * cx * (1 - k), dpr * cy * (1 - k));

    const power = ease.out2(clamp01((t - IGNITE) / 0.6));
    const flare = Math.sin(Math.PI * clamp01((t - IGNITE) / 0.7)) * (t < IGNITE + 0.7 ? 1 : 0);
    // the stage only comes up as the torch catches
    const R = Math.max(W, H * 0.6) * 0.95;
    ctx.globalAlpha = 0.2 + 0.55 * power;
    ctx.drawImage(ambSpr, cx - R, cy + H * 0.03 - R * 1.1, R * 2, R * 2.2);

    const torch = [TORCH[0] * W, TORCH[1] * H];
    const aim = spline(AIM, t);
    aim[0] = (aim[0] + Math.sin(idle * 0.7) * 0.012) * W;
    aim[1] = (aim[1] + Math.sin(idle * 0.5 + 1) * 0.006) * H;
    const main = aimBeam(torch, aim, kf(HALF, t) * hk + 34 * ease.in2(dive), kf(REACH, t, ease.out2), power);
    const powerB = kf(POWER_B, t);
    const aimB = spline(AIM_B, t);
    const counter = aimBeam([COUNTER[0] * W, COUNTER[1] * H], [aimB[0] * W, aimB[1] * H], HALF_B + 20 * ease.in2(dive), 1, powerB);

    ctx.globalCompositeOperation = 'lighter';
    ctx.globalAlpha = 0.16 * power;
    const tg = W * 0.6;
    ctx.drawImage(glowSpr, torch[0] - tg, torch[1] - tg, tg * 2, tg * 2);
    drawBeam(main, power * (0.62 + 0.38 * dive));
    drawPool(main, power * main.reach * (0.3 + 0.4 * dive));
    drawBeam(counter, powerB * (0.47 + 0.3 * dive));
    drawPool(counter, powerB * (0.21 + 0.25 * dive));

    // dust drifting up through the light
    ctx.fillStyle = '#eceaff';
    for (const m of dust) {
      const x = (m.x + Math.sin(tau * 0.35 * m.sp + m.ph) * 0.03) * W;
      const y = ((((m.y - tau * 0.012 * m.sp) % 1) + 1) % 1) * H;
      const v = power * inBeam(x, y, main, 8, true) + powerB * 0.6 * inBeam(x, y, counter, 8, true);
      if (v < 0.03) continue;
      ctx.globalAlpha = Math.min(1, v) * 0.75;
      ctx.fillRect(x - m.r / 2, y - m.r / 2, m.r, m.r);
    }

    // the torch catches with a burst of sparks that drift and fall
    const ds = t - IGNITE - 0.05;
    if (ds > 0 && ds < 1.4) {
      const drag = (1 - Math.exp(-3.2 * ds)) / 3.2;
      for (const p of sparks) {
        if (ds > p.life) continue;
        ctx.globalAlpha = Math.pow(1 - ds / p.life, 1.4) * 0.95;
        ctx.fillStyle = p.c;
        ctx.fillRect(torch[0] + p.vx * W * drag - p.r / 2, torch[1] + (p.vy * drag + 0.16 * ds * ds) * W - p.r / 2, p.r, p.r);
      }
    }
    ctx.globalCompositeOperation = 'source-over';
    // the logo's light, in its own units (the camera's pre-zoom space shifted to the logo and divided by
    // its scale): each beam as drawn, its light carrying a little past the drawn beam's end, as above,
    // and the shadows it casts on the wall, fading with the logo in the dive
    const lo = dive > 0 ? 1 - clamp01((dive - 0.22) / 0.38) : 1;
    const lamp = (b, size) => ({
      x: 210 + (b.x - cx) / ls, y: 60 + (b.y - cy) / ls, ang: b.ang, half: b.half * DEG, size: size / ls,
      power: b.power * clamp01((1.6 * b.len - Math.hypot(cx - b.x, cy - b.y)) / (0.4 * b.len || 1)),
    });
    const torchR = Math.min(W, H) * 0.036;
    const lamps = [lamp(main, torchR * 2), lamp(counter, torchR * 3)];
    // the dive scales the logo up: its light holds still from here, so the masks are not redrawn at
    // every new size
    if (!dive) lighting.update(lamps);
    ctx.save();
    ctx.translate(cx - 210 * ls, cy - 60 * ls);
    ctx.scale(ls, ls);
    lighting.shadows(ctx, lamps, lo);
    ctx.restore();
    drawTorch(torch[0], torch[1], torchR, power, flare, main.ang);

    // the dive: the light fills the frame
    const washA = dive > 0 ? clamp01((dive - 0.4) / 0.45) : 0;
    if (washA > 0) {
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.globalAlpha = washA;
      ctx.fillStyle = washRgb;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
    ctx.globalAlpha = 1;

    // the logo scales in place with the camera, lit by the beams
    const tr = `translate(${cx.toFixed(2)}px, ${cy.toFixed(2)}px) scale(${(ls * k).toFixed(4)}) translate(-210px, -60px)`;
    if (tr !== logoTr) { logoTr = tr; logo.style.transform = tr; }
    const op = lo.toFixed(3);
    if (op !== logoOp) { logoOp = op; logo.style.opacity = op; }
  }

  // ---- clocks ----
  const st = { tau: 0, dive: 0 };
  const tick = () => draw(st.tau, st.dive);
  resize();
  window.addEventListener('resize', resize);
  let clock = null;
  const finish = () => {
    gsap.ticker.remove(tick);
    clock && clock.kill();
    window.removeEventListener('resize', resize);
    // free the canvas's backing store now rather than whenever it is collected
    canvas.width = canvas.height = 1;
    el.remove();
    onDone && onDone();
  };

  // the logo assembles in the dark: pieces slide in along their own slants (each layer's copy of a
  // piece together), the wordmark is revealed left to right
  const OFF = [[-0.485, -0.875], [-0.485, 0.875], [0.485, -0.875], [-0.485, 0.875], [0.485, -0.875], [0.485, 0.875]];
  if (reduced) {
    wordClip.setAttribute('width', '290');
    draw(HOLD, 0);
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
  // the scene clock runs through the settled pose and idles there until the exit
  clock = gsap.to(st, { tau: 40, duration: 40, ease: 'none' });

  const c = { v: 0 };
  let shown = -1;
  const setCount = () => {
    const v = Math.round(c.v);
    if (v !== shown) { shown = v; num.textContent = v; }
    fill.style.transform = `scaleX(${(c.v / 100).toFixed(4)})`;
  };
  const tl = gsap.timeline();
  tl.fromTo(el, { opacity: 0 }, { opacity: 1, duration: 0.25, ease: 'none' }, 0)
    .to(count, { opacity: 1, y: 0, duration: 0.9, ease: 'expo.out' }, 0.5)
    .to(c, { v: 100, duration: HOLD - 0.6, ease: 'power2.inOut', onUpdate: setCount }, 0.6)
    .to(pieces, { x: 0, y: 0, opacity: 1, duration: 1.3, ease: 'expo.out', stagger: (i) => (i % 6) * 0.09 }, 1.1)
    .to(wordClip, { attr: { width: 290 }, duration: 1.1, ease: 'power3.inOut' }, 1.7);

  const exit = () => {
    const r = count.getBoundingClientRect();
    el.classList.add('is-out');
    gsap.timeline()
      .to(st, { dive: 1, duration: DIVE_DUR, ease: 'none' }, 0)
      .to(count, { scale: 5, opacity: 0, transformOrigin: `${cx - r.left}px ${cy - r.top}px`, duration: 0.6, ease: 'power2.in' }, 0.1)
      .to(bar, { opacity: 0, duration: 0.3 }, 0.2)
      // the frame is a flat wash now: the hero starts drawing in the same colour underneath
      .add(() => { onReveal && onReveal(); }, DIVE_DUR - 0.18)
      .to(el, { opacity: 0, duration: 0.3, ease: 'none' }, DIVE_DUR - 0.1)
      .add(finish);
  };
  // leave once the scene has settled and the fonts the hero needs are in (but never wait long)
  const posed = new Promise((r) => tl.call(r, null, HOLD));
  const fonts = document.fonts && document.fonts.ready ? document.fonts.ready.catch(() => { }) : Promise.resolve();
  const cap = new Promise((r) => setTimeout(r, HOLD * 1000 + 1500));
  Promise.all([posed, Promise.race([fonts, cap])]).then(exit);
  return tl;
}
