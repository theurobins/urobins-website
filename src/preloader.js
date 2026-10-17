// Preloader: a dark stage lit by two spotlights. A lone engineer works at a desk
// while two giant silhouettes watch from the dark. Counter runs 1% -> 99%,
// then the camera dives into the crossing beams and hands over to the hero.
import gsap from 'gsap';

const DW = 1600, DH = 900; // design space
const STEPS = [1, 2, 4, 6, 8, 12, 17, 23, 31, 41, 52, 63, 72, 80, 85, 89, 93, 95, 97, 98, 99];
const SRC_R = { x: 1338, y: 515 };
const SRC_L = { x: 268, y: 520 };
const DESK = { x: 800, y: 760 };

export function runPreloader({ el, reduced, onReveal, onDone }) {
  const canvas = el.querySelector('.preloader__canvas');
  const flash = el.querySelector('.preloader__flash');
  const count = el.querySelector('.preloader__count');
  const num = el.querySelector('.preloader__num');
  const ctx = canvas.getContext('2d');
  const soft = document.createElement('canvas');
  const sctx = soft.getContext('2d');
  const grain = makeGrain();

  let W = 0, H = 0, dpr = 1, s = 1, ox = 0, oy = 0;
  const X = (x) => ox + x * s;
  const Y = (y) => oy + y * s;

  const st = {
    p: 0, right: 0, left: 0, giants: 0, eyes: 0,
    aimR: 188, aimL: -24, spread: 0.7, glow: 1,
  };

  const dust = Array.from({ length: 90 }, (_, i) => ({
    x: 300 + Math.random() * 1000,
    y: 450 + Math.random() * 420,
    r: 0.6 + Math.random() * 1.6,
    v: 4 + Math.random() * 10,
    ph: Math.random() * Math.PI * 2,
  }));

  function resize() {
    dpr = Math.min(window.devicePixelRatio || 1, 2);
    W = window.innerWidth; H = window.innerHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    if (W / H < 0.9) {
      // portrait: keep both spotlights and the desk in frame
      s = Math.max(W / 1180, H / 2400);
      ox = W / 2 - 800 * s; oy = H * 0.47 - 560 * s;
    } else {
      s = Math.max(W / DW, H / DH);
      ox = (W - DW * s) / 2; oy = (H - DH * s) / 2;
    }
    soft.width = Math.max(2, Math.ceil(W / 4)); soft.height = Math.max(2, Math.ceil(H / 4));
  }
  resize();
  window.addEventListener('resize', resize);

  // ---------- drawing ----------
  function beam(c, k, src, aimDeg, half, len, power) {
    if (power <= 0.001) return;
    const a = (aimDeg * Math.PI) / 180;
    const h = (half * Math.PI) / 180;
    const sx = X(src.x) * k, sy = Y(src.y) * k, L = len * s * k;
    const ex = sx + Math.cos(a) * L, ey = sy + Math.sin(a) * L;
    const g = c.createLinearGradient(sx, sy, ex, ey);
    g.addColorStop(0, `rgba(255,222,210,${0.95 * power})`);
    g.addColorStop(0.3, `rgba(255,170,145,${0.62 * power})`);
    g.addColorStop(0.7, `rgba(232,110,88,${0.34 * power})`);
    g.addColorStop(1, 'rgba(200,70,50,0)');
    c.fillStyle = g;
    for (const [hh, alpha] of [[h, 0.55], [h * 0.72, 0.6]]) {
      c.globalAlpha = alpha;
      c.beginPath();
      const n0 = a + Math.PI / 2;
      c.moveTo(sx + Math.cos(n0) * 6 * s * k, sy + Math.sin(n0) * 6 * s * k);
      c.lineTo(sx + Math.cos(a - hh) * L, sy + Math.sin(a - hh) * L);
      c.lineTo(sx + Math.cos(a + hh) * L, sy + Math.sin(a + hh) * L);
      c.lineTo(sx - Math.cos(n0) * 6 * s * k, sy - Math.sin(n0) * 6 * s * k);
      c.closePath();
      c.fill();
    }
    c.globalAlpha = 1;
  }

  function drawSoft(t) {
    const k = soft.width / W;
    const c = sctx;
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.globalCompositeOperation = 'source-over';
    // backdrop
    const bg = c.createRadialGradient(X(810) * k, Y(330) * k, 0, X(810) * k, Y(330) * k, 980 * s * k);
    bg.addColorStop(0, '#6e2016');
    bg.addColorStop(0.45, '#3d110c');
    bg.addColorStop(1, '#170605');
    c.fillStyle = bg;
    c.fillRect(0, 0, soft.width, soft.height);
    // red pillar of light behind the desk
    c.save();
    c.translate(X(810) * k, Y(150) * k);
    c.scale(1, 2.6);
    const pg = c.createRadialGradient(0, 0, 0, 0, 0, 230 * s * k);
    pg.addColorStop(0, 'rgba(150,34,24,0.55)');
    pg.addColorStop(1, 'rgba(150,34,24,0)');
    c.fillStyle = pg;
    c.beginPath(); c.arc(0, 0, 230 * s * k, 0, Math.PI * 2); c.fill();
    c.restore();

    // giant silhouettes
    if (st.giants > 0) {
      c.fillStyle = `rgba(16,4,3,${0.88 * st.giants})`;
      const sway = Math.sin(t * 0.6) * 6;
      ell(c, k, 300 + sway, 395, 235, 270);
      ell(c, k, 330 + sway, 960, 560, 360);
      ell(c, k, 1325 - sway, 300, 300, 335);
      ell(c, k, 1310 - sway, 930, 640, 400);
    }

    // floor
    const fl = c.createLinearGradient(0, Y(780) * k, 0, Y(900) * k);
    fl.addColorStop(0, 'rgba(25,6,5,0)');
    fl.addColorStop(1, 'rgba(25,6,5,0.65)');
    c.fillStyle = fl;
    c.fillRect(0, Y(780) * k, soft.width, soft.height);

    // beams
    c.globalCompositeOperation = 'lighter';
    const flick = 0.96 + 0.04 * Math.sin(t * 23.0) * Math.sin(t * 7.0);
    beam(c, k, SRC_R, st.aimR + Math.sin(t * 0.7) * 1.2, 21 * st.spread, 1050, st.right * flick);
    beam(c, k, SRC_L, st.aimL - Math.sin(t * 0.8) * 1.2, 21 * st.spread, 1050, st.left * flick);
    // pool of light on the floor
    const pool = (st.right + st.left) * 0.5;
    if (pool > 0) {
      c.save();
      c.translate(X(DESK.x) * k, Y(842) * k);
      c.scale(1, 0.17);
      const pg2 = c.createRadialGradient(0, 0, 0, 0, 0, 420 * s * k);
      pg2.addColorStop(0, `rgba(255,170,150,${0.5 * pool})`);
      pg2.addColorStop(1, 'rgba(255,170,150,0)');
      c.fillStyle = pg2;
      c.beginPath(); c.arc(0, 0, 420 * s * k, 0, Math.PI * 2); c.fill();
      c.restore();
    }
    c.globalCompositeOperation = 'source-over';
  }

  function ell(c, k, x, y, rx, ry) {
    c.beginPath();
    c.ellipse(X(x) * k, Y(y) * k, rx * s * k, ry * s * k, 0, 0, Math.PI * 2);
    c.fill();
  }

  function eye(x, y, w, h, rot, open) {
    if (open <= 0.02) return;
    ctx.save();
    ctx.translate(X(x), Y(y));
    ctx.rotate(rot);
    ctx.scale(1, open);
    ctx.beginPath();
    ctx.moveTo(-w * s, 0);
    ctx.quadraticCurveTo(-w * 0.1 * s, -h * 2 * s, w * s, -h * 0.2 * s);
    ctx.quadraticCurveTo(w * 0.1 * s, h * 1.4 * s, -w * s, 0);
    ctx.closePath();
    ctx.shadowColor = 'rgba(255,120,90,0.9)';
    ctx.shadowBlur = 26 * s;
    ctx.fillStyle = '#fff4ee';
    ctx.fill();
    ctx.restore();
  }

  function source(src, power, t) {
    if (power <= 0.01) return;
    const x = X(src.x), y = Y(src.y);
    const g = ctx.createRadialGradient(x, y, 0, x, y, 70 * s);
    g.addColorStop(0, `rgba(255,255,255,${power})`);
    g.addColorStop(0.25, `rgba(255,226,214,${0.85 * power})`);
    g.addColorStop(1, 'rgba(255,150,120,0)');
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(x, y, 70 * s, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = `rgba(255,255,255,${power})`;
    ctx.beginPath(); ctx.arc(x, y, (13 + Math.sin(t * 9) * 0.6) * s, 0, Math.PI * 2); ctx.fill();
  }

  function figure(t) {
    const lit = Math.min(1, st.right + st.left * 0.6);
    const a = 0.25 + 0.7 * lit;
    const col = `rgba(255,228,218,${a})`;
    const dim = `rgba(255,214,200,${a * 0.55})`;
    const lw = 6.5 * s;
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    // shadow
    ctx.fillStyle = 'rgba(20,4,3,0.5)';
    ctx.beginPath(); ctx.ellipse(X(DESK.x), Y(850), 190 * s, 14 * s, 0, 0, Math.PI * 2); ctx.fill();
    // desk
    ctx.fillStyle = col;
    ctx.fillRect(X(700), Y(726), 272 * s, 8 * s);
    ctx.fillStyle = dim;
    ctx.fillRect(X(708), Y(734), 6 * s, 112 * s);
    ctx.fillRect(X(958), Y(734), 6 * s, 112 * s);
    ctx.fillStyle = `rgba(255,214,200,${a * 0.18})`;
    ctx.fillRect(X(714), Y(736), 244 * s, 62 * s);
    // laptop
    ctx.strokeStyle = col; ctx.lineWidth = 3 * s;
    ctx.beginPath(); ctx.moveTo(X(838), Y(723)); ctx.lineTo(X(900), Y(723)); ctx.lineTo(X(912), Y(688)); ctx.stroke();
    ctx.fillStyle = `rgba(255,255,255,${0.35 + 0.25 * Math.sin(t * 3)})`;
    ctx.beginPath(); ctx.arc(X(905), Y(706), 10 * s, 0, Math.PI * 2); ctx.fill();
    // mug
    ctx.fillStyle = col; ctx.fillRect(X(930), Y(712), 12 * s, 14 * s);
    // chair
    ctx.strokeStyle = dim; ctx.lineWidth = 6 * s;
    ctx.beginPath();
    ctx.moveTo(X(742), Y(742)); ctx.lineTo(X(748), Y(796));
    ctx.lineTo(X(800), Y(796));
    ctx.moveTo(X(752), Y(796)); ctx.lineTo(X(746), Y(846));
    ctx.moveTo(X(796), Y(796)); ctx.lineTo(X(800), Y(846));
    ctx.stroke();
    // person: filled torso, head with hair, thick limbs
    const bob = Math.sin(t * 2.2) * 1.2;
    const type = Math.sin(t * 14) * 1.6;
    const skin = col;
    const shirt = `rgba(255,236,228,${a})`;
    ctx.fillStyle = shirt;
    ctx.beginPath();
    ctx.moveTo(X(768), Y(724 + bob));
    ctx.quadraticCurveTo(X(781), Y(716 + bob), X(795), Y(726 + bob));
    ctx.quadraticCurveTo(X(800), Y(760), X(797), Y(792));
    ctx.lineTo(X(770), Y(794));
    ctx.quadraticCurveTo(X(760), Y(758), X(768), Y(724 + bob));
    ctx.fill();
    ctx.strokeStyle = `rgba(255,214,200,${a * 0.9})`;
    ctx.lineWidth = 10 * s;
    ctx.beginPath(); // thigh + shin
    ctx.moveTo(X(780), Y(788)); ctx.lineTo(X(836), Y(790)); ctx.lineTo(X(840), Y(838));
    ctx.stroke();
    ctx.fillStyle = `rgba(255,214,200,${a})`;
    ctx.beginPath(); ctx.ellipse(X(848), Y(842), 12 * s, 4.5 * s, 0, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = skin; ctx.lineWidth = 7 * s;
    ctx.beginPath(); // arm reaching to the keyboard
    ctx.moveTo(X(786), Y(732 + bob)); ctx.lineTo(X(806), Y(762)); ctx.lineTo(X(846 + type * 0.3), Y(721 + type));
    ctx.stroke();
    ctx.fillStyle = skin;
    ctx.beginPath(); ctx.ellipse(X(784), Y(699 + bob), 13 * s, 15 * s, 0.15, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = `rgba(60,16,12,${0.55 + 0.3 * lit})`;
    ctx.beginPath(); ctx.ellipse(X(780), Y(693 + bob), 13.5 * s, 10 * s, 0.25, Math.PI * 0.95, Math.PI * 2.05); ctx.fill();
    ctx.lineWidth = 6 * s; ctx.strokeStyle = skin;
    ctx.beginPath(); ctx.moveTo(X(782), Y(712 + bob)); ctx.lineTo(X(781), Y(722 + bob)); ctx.stroke();
    ctx.restore();
  }

  function frame(t) {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    drawSoft(t);
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';
    ctx.drawImage(soft, 0, 0, canvas.width, canvas.height);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

    figure(t);

    // dust in the light
    ctx.globalCompositeOperation = 'lighter';
    const lightAmt = Math.max(st.right, st.left);
    for (const d of dust) {
      const y = 450 + ((d.y - 450 - t * d.v) % 420 + 420) % 420;
      const x = d.x + Math.sin(t * 0.8 + d.ph) * 8;
      const tw = 0.5 + 0.5 * Math.sin(t * 3 + d.ph);
      ctx.fillStyle = `rgba(255,220,205,${0.35 * tw * lightAmt})`;
      ctx.beginPath(); ctx.arc(X(x), Y(y), d.r * s, 0, Math.PI * 2); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';

    source(SRC_R, st.right, t);
    source(SRC_L, st.left, t + 1.3);

    // eyes, with an occasional blink
    const blink = (ph) => {
      const c = (t + ph) % 4.2;
      return c < 0.16 ? Math.abs(c - 0.08) / 0.08 : 1;
    };
    const look = Math.sin(t * 0.5) * 6;
    const eL = st.eyes * blink(0.7);
    const eR = st.eyes * blink(2.1);
    eye(300 + look, 410, 46, 12, 0.18, eL);
    eye(452 + look, 398, 46, 12, -0.12, eL);
    eye(1205 + look, 310, 60, 15, 0.32, eR);
    eye(1440 + look, 372, 60, 15, -0.05, eR);

    // grain + vignette
    ctx.globalAlpha = 0.07;
    ctx.fillStyle = ctx.createPattern(grain, 'repeat');
    ctx.save();
    ctx.translate(Math.random() * 200, Math.random() * 200);
    ctx.fillRect(-200, -200, W + 400, H + 400);
    ctx.restore();
    ctx.globalAlpha = 1;
    const vg = ctx.createRadialGradient(W / 2, H * 0.55, Math.min(W, H) * 0.3, W / 2, H * 0.55, Math.max(W, H) * 0.8);
    vg.addColorStop(0, 'rgba(0,0,0,0)');
    vg.addColorStop(1, 'rgba(8,2,1,0.55)');
    ctx.fillStyle = vg;
    ctx.fillRect(0, 0, W, H);
  }

  let running = true;
  const t0 = performance.now();
  function loop() {
    if (!running) return;
    frame((performance.now() - t0) / 1000);
    requestAnimationFrame(loop);
  }
  requestAnimationFrame(loop);

  const setCount = () => {
    const i = Math.min(STEPS.length - 1, Math.floor(st.p * STEPS.length));
    num.textContent = STEPS[i];
  };

  const finish = () => {
    running = false;
    window.removeEventListener('resize', resize);
    el.remove();
    onDone && onDone();
  };

  if (reduced) {
    st.right = st.left = st.giants = st.eyes = 1; st.aimR = 152; st.aimL = 28; st.p = 1;
    setCount();
    gsap.set(flash, { opacity: 0 });
    gsap.timeline({ delay: 0.4 })
      .to(el, { opacity: 0, duration: 0.5 })
      .add(() => { onReveal && onReveal(); finish(); });
    return;
  }

  const origin = (pt) => `${X(pt.x)}px ${Y(pt.y)}px`;
  const tl = gsap.timeline();
  tl.set(canvas, { scale: 7, transformOrigin: origin(SRC_R) })
    .set(flash, { opacity: 1, backgroundColor: '#ffe9e0' })
    .set(count, { opacity: 0, y: 30 })
    .set(st, { right: 1 })
    .to(canvas, { scale: 1, duration: 1.5, ease: 'power3.out' }, 0)
    .to(flash, { opacity: 0, duration: 1.0, ease: 'power2.out' }, 0.05)
    .to(count, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, 0.35)
    .to(st, { aimR: 152, duration: 2.2, ease: 'power2.inOut' }, 0.2)
    .to(st, { p: 1, duration: 4.6, ease: 'power1.inOut', onUpdate: setCount }, 0.3)
    .to(st, { giants: 1, duration: 1.6, ease: 'power2.out' }, 1.0)
    .to(st, { eyes: 0.25, duration: 0.35, ease: 'power2.out' }, 1.25)
    .to(st, { eyes: 1, duration: 0.9, ease: 'power2.inOut' }, 2.0)
    .to(st, { left: 0.7, duration: 0.08, repeat: 3, yoyo: true, ease: 'none' }, 1.55)
    .to(st, { left: 1, duration: 0.3 }, 1.9)
    .to(st, { aimL: 29, duration: 1.8, ease: 'power2.inOut' }, 1.6)
    .to(st, { spread: 1, duration: 2.6, ease: 'power2.inOut' }, 1.4)
    // dive into the crossing beams
    .addLabel('zoom', 5.2)
    .to(count, { opacity: 0, y: -20, duration: 0.35, ease: 'power2.in' }, 'zoom')
    .to(canvas, { scale: 18, duration: 1.15, ease: 'power3.in', transformOrigin: origin({ x: 805, y: 655 }) }, 'zoom')
    .to(flash, { backgroundColor: '#c8432f', opacity: 1, duration: 0.55, ease: 'power2.in' }, 'zoom+=0.6')
    .add(() => { onReveal && onReveal(); }, 'zoom+=1.15')
    .add(finish, 'zoom+=1.2');

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
