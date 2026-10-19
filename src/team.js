// Transition 2 + team. As Metrics scrolls away the screen below it stays black; then a stepped edge
// climbs from the bottom to the top (one 0.046vh slot at a time, riding with the page between steps)
// with a funnel of black bars under it. The bars are slices of the Metrics world, so where they cross
// into the Metrics section its charts show through them. Once the edge is off the top, the funnel
// rides up with the page, narrows and vanishes. Everything is drawn on one fixed overlay canvas.
// The team block itself scrolls normally and reveals on its own clock when its title is mid-screen.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { vp } from './viewport.js';

const NF = new Intl.NumberFormat('en-US');

// Scroll offsets s are px at a 782px-tall viewport (scaled by vh/782), counted from where the top of
// .team meets the bottom of the viewport. The funnel lives on a page-fixed grid of 36px slots:
// line j sits ANCHOR + 36j below that point, and the funnel's tail is always slot 16.
const ANCHOR = 653;
const HOLD = 473;        // black hold while Metrics scrolls away
const RIDE = 621;        // the edge has reached the top; from here the funnel rides with the page
const END = 920;         // funnel gone
const TAIL = 16;
// the edge's slot by scroll offset, after a quick self-building burst up to slot 9 (each step sits
// inside the pair of reference frames that brackets it)
const CLIMB = [[491, 8], [504, 7], [526, 6], [535, 5], [556, 4], [578, 3], [601, 2], [621, 0]];
const BURST = 0.25;      // s: the burst's bars settle from edge-indexed to page-slot widths
const slotAt = (sk) => { let j = 9; for (const [a, jj] of CLIMB) if (sk >= a) j = jj; return j; };
// bar widths (fraction of the viewport width) per page slot, from slot j0 down, keyed by scroll
const KEYS = [
  { s: 479, j0: 9, w: [0.981, 0.95, 0.917, 0.882, 0.846, 0.812, 0.78, 0.75] },
  { s: 501, j0: 8, w: [0.968, 0.935, 0.898, 0.861, 0.822, 0.784, 0.749, 0.716, 0.685] },
  { s: 530, j0: 6, w: [0.976, 0.941, 0.902, 0.861, 0.818, 0.776, 0.734, 0.695, 0.659, 0.628, 0.599] },
  { s: 572, j0: 4, w: [0.964, 0.924, 0.879, 0.832, 0.782, 0.733, 0.684, 0.638, 0.595, 0.557, 0.523, 0.494, 0.47] },
  { s: 616, j0: 2, w: [0.963, 0.917, 0.865, 0.809, 0.751, 0.694, 0.638, 0.583, 0.533, 0.486, 0.444, 0.408, 0.378, 0.353, 0.335] },
  { s: 654, j0: 0, w: [0.977, 0.955, 0.897, 0.833, 0.767, 0.701, 0.635, 0.572, 0.511, 0.457, 0.405, 0.361, 0.321, 0.289, 0.263, 0.243, 0.23] },
  { s: 730, j0: 2, w: [0.766, 0.677, 0.591, 0.51, 0.434, 0.366, 0.303, 0.249, 0.2, 0.159, 0.126, 0.101, 0.083, 0.073, 0.069] },
  { s: 768, j0: 3, w: [0.619, 0.527, 0.443, 0.365, 0.296, 0.233, 0.18, 0.134, 0.095, 0.063, 0.042, 0.029, 0.021, 0.019] },
  { s: 806, j0: 4, w: [0.5, 0.415, 0.338, 0.269, 0.207, 0.153, 0.108, 0.07, 0.042, 0.019] },
  { s: 843, j0: 5, w: [0.384, 0.31, 0.244, 0.185, 0.135, 0.092, 0.059, 0.032] },
  { s: 880, j0: 6, w: [0.228, 0.171, 0.123, 0.083, 0.05, 0.027] },
  { s: 902, j0: 7, w: [0.106, 0.069, 0.039, 0.019] },
  { s: 920, j0: 7, w: [] },
];
// width of page slot j (may be fractional) in one key; slots above its first listed bar continue
// its taper upward, so the top bar is always the widest
const pick = (key, j) => {
  const i = j - key.j0, w = key.w;
  if (!w.length) return 0;
  if (i < 0) return Math.min(0.985, w[0] + (w.length > 1 ? w[0] - w[1] : 0) * -i);
  const i0 = Math.floor(i), f = i - i0;
  const a = i0 < w.length ? w[i0] : 0;
  if (!f) return a;
  return a + ((i0 + 1 < w.length ? w[i0 + 1] : 0) - a) * f;
};
const widthAt = (j, sk) => {
  let a = KEYS[0], b = KEYS[0];
  for (let n = 0; n < KEYS.length; n++) {
    if (KEYS[n].s <= sk) a = KEYS[n];
    if (KEYS[n].s >= sk) { b = KEYS[n]; break; }
    b = KEYS[n];
  }
  const t = b.s === a.s ? 0 : (sk - a.s) / (b.s - a.s);
  return pick(a, j) + (pick(b, j) - pick(a, j)) * t;
};

// counters run as target * g^4: a slow climb, then a soft landing
const land = (x, x1) => {
  const k = 2 / (1 + x1);
  return x <= x1 ? k * x : 1 - (k / (2 * (1 - x1))) * (1 - x) * (1 - x);
};

export function initTeam({ reduced }) {
  const section = document.querySelector('.team');
  const canvas = section.querySelector('.team__fx');
  const ctx = canvas.getContext('2d');
  const members = [...section.querySelectorAll('.member')];
  const words = [...section.querySelectorAll('.team__title .tw')];
  const sub = section.querySelector('.team__sub');
  const counters = members.map((m) => m.querySelector('.member__num'));
  const INK = getComputedStyle(document.documentElement).getPropertyValue('--ink').trim() || '#090909';
  const PAPER = '#ffffff';

  // ---- the transition overlay ----
  let W = 1, H = 1, d = 1, k = 1, shown = false, last = -1;
  const size = () => {
    W = vp.w; H = vp.h; k = H / 782;
    d = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * d);
    canvas.height = Math.round(H * d);
    mode = ''; // resizing cleared it
  };
  // screen y of page grid line j at offset s
  const lineY = (j, s) => Math.round((ANCHOR + 36 * j) * k - s);
  // the edge's slot: it builds up from the tail one slot every 1/30 s when the hold ends (even if
  // the scroll stops), then follows the scroll; going back it follows straight away
  // While it builds, the bars are indexed from the edge (the top one always widest) and slide
  // into their page slots over BURST seconds.
  let cur = TAIL + 1, target = TAIL + 1, acc = 0, burst0 = -1;
  const burstShift = () => (burst0 < 0 ? 0 : 7.5 * Math.max(0, 1 - (gsap.ticker.time - burst0) / BURST));
  const stepper = (time, dt) => {
    acc += dt / 1000;
    while (acc >= 1 / 30 && cur > target) { acc -= 1 / 30; cur--; }
    if (cur <= target) acc = 0;
    if (cur <= target && burstShift() === 0) gsap.ticker.remove(stepper);
    draw(last);
  };
  const setTarget = (sk) => {
    target = sk < HOLD ? TAIL + 1 : slotAt(sk);
    if (target > TAIL) burst0 = -1;
    if (target >= cur) { cur = target; return; }
    if (cur === TAIL + 1) { cur = TAIL; burst0 = gsap.ticker.time; } // the first bar appears at once
    if (cur > target || burstShift() > 0) { gsap.ticker.remove(stepper); gsap.ticker.add(stepper); }
  };
  const roundRect = (x, y, w, h) => {
    if (ctx.roundRect) ctx.roundRect(x, y, w, h, Math.min(2, h / 2));
    else ctx.rect(x, y, w, h);
  };
  // during the black hold the canvas is filled once and moved with the page as a layer
  let mode = '', holdY = '';
  const clear = () => {
    if (!shown) return;
    shown = false;
    if (mode === 'hold') { mode = ''; holdY = ''; canvas.style.transform = ''; }
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.visibility = 'hidden';
  };
  const draw = (s) => {
    last = s;
    const sk = s / k;
    if (s < 0 || sk >= END) { clear(); return; }
    if (!shown) { shown = true; canvas.style.visibility = 'visible'; }
    if (cur > TAIL) {
      // black hold (no edge yet): black from the top of .team down, i.e. the whole canvas shifted
      if (mode !== 'hold') {
        mode = 'hold';
        ctx.setTransform(1, 0, 0, 1, 0, 0);
        ctx.fillStyle = INK;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }
      const ty = `translate3d(0, ${Math.max(0, Math.round(H - s))}px, 0)`;
      if (ty !== holdY) { holdY = ty; canvas.style.transform = ty; }
      return;
    }
    if (mode === 'hold') { mode = ''; holdY = ''; canvas.style.transform = ''; }
    ctx.setTransform(d, 0, 0, d, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const top = Math.round(H - s); // screen y of the top of .team
    const edge = cur > TAIL ? H : lineY(cur, s);
    // bars: page slots from the edge down to the tail, each centred in its slot; the first one
    // reaches up to the edge so no hairline opens under the panel
    const bars = [];
    if (cur <= TAIL) {
      const o = burstShift(), skw = Math.max(sk, KEYS[0].s);
      for (let j = cur; j <= TAIL; j++) {
        const y0 = lineY(j, s);
        if (y0 > H) break;
        const w = Math.round(widthAt(j - o, skw) * W);
        if (w < 12 || lineY(j + 1, s) < 0) continue;
        const h = Math.max(1, Math.round(w / 40));
        let y = y0 + Math.round((lineY(j + 1, s) - y0 - h) / 2);
        let hh = h;
        if (j === cur) { hh += y - y0; y = y0; }
        bars.push([Math.round((W - w) / 2), y, w, hh]);
      }
    }
    // inside .team: black above the edge, black bars below it (the white is the section itself)
    ctx.save();
    ctx.beginPath(); ctx.rect(0, Math.max(0, top), W, H); ctx.clip();
    ctx.fillStyle = INK;
    if (edge > top) ctx.fillRect(0, Math.max(0, top), W, Math.min(H, edge) - Math.max(0, top));
    ctx.beginPath();
    bars.forEach((b) => roundRect(...b));
    ctx.fill();
    ctx.restore();
    // over Metrics: white below the edge, with the bars cut through it so Metrics shows inside them
    if (edge < top && top > 0) {
      ctx.save();
      ctx.beginPath(); ctx.rect(0, 0, W, Math.min(H, top)); ctx.clip();
      ctx.fillStyle = PAPER;
      ctx.fillRect(0, Math.max(0, edge), W, Math.min(H, top) - Math.max(0, edge));
      ctx.globalCompositeOperation = 'destination-out';
      ctx.beginPath();
      bars.forEach((b) => roundRect(...b));
      ctx.fill();
      ctx.restore();
    }
  };

  size();
  canvas.style.visibility = 'hidden';
  let span = null;
  const update = (self) => { span = self; const s = self.scroll() - self.start; setTarget(s / k); draw(s); };
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: () => `top+=${(END * vp.h) / 782} bottom`,
    onRefresh: update,
    onUpdate: update,
    onLeave: clear,
    onLeaveBack: (self) => { setTarget(-1); clear(); },
  });

  // ---- the team block's reveal ----
  const final = (c) => NF.format(+c.dataset.count) + (c.dataset.suffix || '');
  // the serif's digits are proportional: lock each counter to its final width so the label beside
  // it holds still while it counts
  const lock = () => counters.forEach((c) => {
    const shownText = c.textContent;
    c.style.width = '';
    c.textContent = final(c);
    c.style.width = `${Math.ceil(c.getBoundingClientRect().width)}px`;
    c.textContent = shownText;
  });
  const api = { resize() { size(); if (span) update(span); lock(); } };
  if (reduced) { lock(); return api; }

  gsap.set(words, { opacity: 0, y: 8 });
  gsap.set(sub, { opacity: 0 });
  gsap.set(members, { opacity: 0, y: 60 });
  counters.forEach((c) => { c.textContent = '0+'; });
  lock();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(lock);

  const play = () => {
    const tl = gsap.timeline();
    // counters start first and crawl, then land (2.45 s), staggered slightly per column
    counters.forEach((c, i) => {
      const o = { p: 0 };
      const suffix = c.dataset.suffix || '';
      const target = +c.dataset.count;
      let last = c.textContent;
      tl.to(o, {
        p: 1, duration: 2.45, ease: 'none',
        onUpdate: () => {
          const s = NF.format(Math.round(target * Math.pow(land(o.p, 0.8), 4))) + suffix;
          if (s !== last) { last = s; c.textContent = s; }
        },
      }, [0.08, 0.11, 0.18, 0.21][i] || 0);
    });
    // title word by word: a short blur clears while each word fades and settles
    tl.to(words, { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.1 }, 0.25)
      .fromTo(words, { filter: 'blur(10px)' }, { filter: 'blur(0px)', duration: 0.35, ease: 'power2.out', stagger: 0.1, clearProps: 'filter' }, 0.25)
      .to(sub, { opacity: 1, duration: 0.3, ease: 'power1.out' }, 0.6)
      // cards fade in left to right while rising into place
      .to(members, { opacity: 1, duration: 0.75, ease: 'power2.out', stagger: 0.067 }, 0.57)
      .to(members, { y: 0, duration: 1.0, ease: 'power4.out', stagger: 0.067 }, 0.57);
  };
  ScrollTrigger.create({ trigger: section.querySelector('.team__title'), start: 'top 50%', once: true, onEnter: play });

  return api;
}
