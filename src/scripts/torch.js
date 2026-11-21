// Torch-lit nav logo. At rest the logo is plain solid white. A torch near it (the cursor on fine
// pointers, a tap on touch) gives it a sheen: the side away from the light cools a touch while the
// edges facing it stay white like a bevel catching it, a pure white glint runs square to the light's
// direction through the point nearest it, a shadow falls on the glass away from the light and
// lengthens as the light backs off, and a faint pool of light shows on the bar. The light only comes
// up over the last 240px towards the logo, so a cursor reading the hero leaves it white. A frame
// writes a dozen SVG attributes and moves the pool's own layer (transform and opacity only, never a
// repaint of the blurred bar), and the ticker only runs while the light is still moving.
import gsap from 'gsap';

const W = 91.02, H = 21; // the logo's viewBox, in CSS px at its desktop size
const NEAR = 70, FAR = 240; // a torch's distance from the logo's box: full light within NEAR, none past FAR
const REST = { dx: -150, dy: -80 }; // where the unlit light waits, px from the logo's centre
const SHADE = [0.4, 0.7, 1]; // the shadow copies' share of the shadow's length
const RIM = 1.1; // the lit rim's width, in logo units

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (a, b, v) => { const t = clamp((v - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const r2 = (v) => Math.round(v * 100) / 100;

export function initTorch({ reduced }) {
  const nav = document.getElementById('nav');
  const bar = nav.querySelector('.nav__bar');
  const pool = bar.querySelector('.nav__pool i');
  const logo = nav.querySelector('.nav__logo');
  const svg = logo && logo.querySelector('.nav__torch');
  // reduced motion: the logo stays plain white, which is how the markup draws it
  if (!svg || reduced) return { resize() {} };
  const far = svg.querySelector('#nt-far');
  const band = svg.querySelector('#nt-band');
  const rim = svg.querySelector('#nt-rim use');
  const lit = svg.querySelector('.nav__lit');
  const shade = svg.querySelector('.nav__shade');
  const shadows = [...shade.children];

  // the logo's box in viewport px, from layout offsets: the nav is fixed, so they only change on a
  // resize, and they ignore the bar's intro slide and the nav's hide translate. (bx, by): the logo's
  // origin in the bar's padding box, where the glass's pool of light is drawn
  const box = { x: 0, y: 0, w: W, h: H, bx: 0, by: 0 };
  const origin = (el) => {
    let x = 0, y = 0;
    for (; el; el = el.offsetParent) { x += el.offsetLeft; y += el.offsetTop; }
    return [x, y];
  };
  // the artwork's box, inside the link's padding (phones pad it into a taller tap target)
  const measure = () => {
    const [x, y] = origin(logo);
    const [bx, by] = origin(bar);
    const cs = getComputedStyle(logo);
    const pl = parseFloat(cs.paddingLeft) || 0, pt = parseFloat(cs.paddingTop) || 0;
    box.x = x + pl; box.y = y + pt;
    box.w = logo.clientWidth - pl - (parseFloat(cs.paddingRight) || 0) || W;
    box.h = logo.clientHeight - pt - (parseFloat(cs.paddingBottom) || 0) || H;
    box.bx = box.x - bx - bar.clientLeft; box.by = box.y - by - bar.clientTop;
  };

  const ptr = { x: 0, y: 0, on: false };
  const tap = { x: 0, y: 0, s: 0 }; // a tap's brief flash
  const tgt = { x: 0, y: 0, i: 0 };
  const cur = { x: 0, y: 0, i: 0 }; // the light as drawn: eased toward tgt, like a held torch
  const centre = () => [box.x + box.w / 2, box.y + box.h / 2];

  // 0-1: how much a torch at (x, y) lights the logo, by its distance from the logo's box
  const dist = (x, y) => Math.hypot(Math.max(box.x - x, 0, x - box.x - box.w), Math.max(box.y - y, 0, y - box.y - box.h));
  const reach = (x, y) => 1 - smooth(NEAR, FAR, dist(x, y));
  // blend the sources: the strongest leads the position (weights are intensity squared), and their
  // intensities add like screens. Unlit, the light waits off the upper left so it eases in from there
  const aim = () => {
    const [cx, cy] = centre();
    let wx = 0, wy = 0, w = 0, dark = 1;
    const add = (x, y, i) => { const k = i * i + 1e-6; wx += x * k; wy += y * k; w += k; dark *= 1 - i; };
    add(cx + REST.dx, cy + REST.dy, 0);
    if (ptr.on) add(ptr.x, ptr.y, reach(ptr.x, ptr.y));
    if (tap.s > 0) add(tap.x, tap.y, tap.s * reach(tap.x, tap.y));
    tgt.x = wx / w; tgt.y = wy / w; tgt.i = 1 - dark;
  };

  let poolTr = '', poolOp = '';
  const draw = () => {
    const k = W / box.w; // viewport px -> logo units
    const lx = (cur.x - box.x) * k, ly = (cur.y - box.y) * k;
    let vx = W / 2 - lx, vy = H / 2 - ly;
    const d = Math.hypot(vx, vy) || 1e-3;
    vx /= d; vy /= d; // the way the light travels: from the torch through the logo's centre
    // the warm spot sits on the side facing the torch, never further out than just past that edge, and
    // spreads as the torch backs off; the logo cools a touch away from it
    const out = Math.min(d, Math.abs(vx) * W / 2 + Math.abs(vy) * H / 2 + 8);
    const sx = W / 2 - vx * out, sy = H / 2 - vy * out;
    far.setAttribute('cx', r2(sx));
    far.setAttribute('cy', r2(sy));
    far.setAttribute('r', r2(52 + Math.min(d, 320) * 0.3));
    lit.setAttribute('opacity', r2(cur.i));
    // the glint: a band square to the light through the point of the logo nearest the torch
    const gx = clamp(lx, 4, W - 4), gy = clamp(ly, 3, H - 3);
    const hw = 3.5 + Math.min(d, 200) * 0.025;
    band.setAttribute('x1', r2(gx - vx * hw));
    band.setAttribute('y1', r2(gy - vy * hw));
    band.setAttribute('x2', r2(gx + vx * hw));
    band.setAttribute('y2', r2(gy + vy * hw));
    // the edges facing the torch catch it, and the shadow falls away from it, longer the further off
    // (lower) it is held; right over the logo the direction is unsteady, so both shrink to nothing there
    const near = smooth(0, 14, d);
    const len = (0.6 + 4.4 * smooth(0, 300, d)) * near;
    rim.setAttribute('transform', `translate(${r2(vx * RIM * near)} ${r2(vy * RIM * near)})`);
    shadows.forEach((el, j) => el.setAttribute('transform', `translate(${r2(vx * len * SHADE[j])} ${r2(vy * len * SHADE[j])})`));
    shade.setAttribute('opacity', r2(cur.i));
    const tr = `translate3d(${r2(box.bx + sx / k)}px, ${r2(box.by + sy / k)}px, 0)`;
    if (tr !== poolTr) pool.style.transform = poolTr = tr;
    const po = String(r2(cur.i));
    if (po !== poolOp) pool.style.opacity = poolOp = po;
  };

  measure();
  let flash = null, running = false;
  const tick = (time, dt) => {
    aim();
    const a = 1 - Math.pow(0.88, Math.min(dt, 64) / 16.67); // frame-rate independent ease
    cur.x += (tgt.x - cur.x) * a;
    cur.y += (tgt.y - cur.y) * a;
    cur.i += (tgt.i - cur.i) * a;
    if (!(flash && flash.isActive()) && Math.abs(tgt.x - cur.x) + Math.abs(tgt.y - cur.y) < 0.2 && Math.abs(tgt.i - cur.i) < 0.002) {
      Object.assign(cur, tgt);
      running = false;
      gsap.ticker.remove(tick);
    }
    draw();
  };
  const wake = () => {
    if (running || document.hidden) return;
    running = true;
    gsap.ticker.add(tick);
  };
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { running = false; gsap.ticker.remove(tick); } else wake();
  });

  if (window.matchMedia('(pointer: fine)').matches) {
    window.addEventListener('pointermove', (e) => {
      if (e.pointerType !== 'mouse') return;
      const was = ptr.on ? reach(ptr.x, ptr.y) : 0;
      ptr.x = e.clientX; ptr.y = e.clientY; ptr.on = true;
      if (was > 0 || reach(ptr.x, ptr.y) > 0) wake();
    }, { passive: true });
    document.addEventListener('pointerout', (e) => {
      if (e.relatedTarget || !ptr.on) return; // left the window
      ptr.on = false;
      wake();
    });
  }
  // a tap on or near the logo flashes the torch from the finger, then lets it fade back to white
  window.addEventListener('pointerdown', (e) => {
    if (e.pointerType === 'mouse' || nav.classList.contains('is-hidden') || dist(e.clientX, e.clientY) > NEAR) return;
    if (flash) flash.kill();
    flash = gsap.timeline({ onUpdate: wake })
      .set(tap, { x: e.clientX, y: e.clientY })
      .to(tap, { s: 1, duration: 0.35, ease: 'power2.out' })
      .to(tap, { s: 0, duration: 1.2, ease: 'sine.inOut' }, '+=0.4');
  }, { passive: true });

  aim();
  Object.assign(cur, tgt);
  draw();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { measure(); wake(); });

  return {
    resize() {
      measure();
      wake();
    },
  };
}
