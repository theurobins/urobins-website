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

// scroll offsets in px at a 782px viewport (scaled by vh/782), counted from where the top of .team
// meets the bottom of the viewport
const HOLD = 472;        // black hold while Metrics scrolls away
const CLIMB = 169;       // the edge climbs from the bottom to the top
const TOP = HOLD + CLIMB;  // 641: edge at the top; from here the funnel rides with the page
const END = 882;         // funnel gone
// bar widths (fraction of the viewport width) per slot, keyed by scroll offset. Up to TOP they count
// down from the edge; after TOP they are listed from the slot crossing the top of the viewport.
const KEYS = [
  { s: 472, w: [0.97, 0.94] },
  { s: 508, w: [0.968, 0.934, 0.898, 0.859, 0.82, 0.783, 0.747, 0.716, 0.685] },
  { s: 561, w: [0.963, 0.924, 0.879, 0.831, 0.782, 0.733, 0.684, 0.638, 0.595, 0.556, 0.522, 0.493, 0.469] },
  { s: 641, w: [0.955, 0.897, 0.833, 0.767, 0.7, 0.635, 0.572, 0.511, 0.455, 0.405, 0.359, 0.32, 0.287, 0.261, 0.243, 0.23] },
  { s: 713, w: [0.766, 0.677, 0.591, 0.51, 0.434, 0.366, 0.303, 0.249, 0.2, 0.159, 0.126, 0.101, 0.083, 0.073, 0.069] },
  { s: 751, w: [0.619, 0.527, 0.443, 0.365, 0.296, 0.233, 0.18, 0.134, 0.095, 0.063] },
  { s: 787, w: [0.5, 0.415, 0.338, 0.269, 0.207, 0.153, 0.108, 0.07] },
  { s: 824, w: [0.384, 0.31, 0.244, 0.185, 0.135, 0.092, 0.032] },
  { s: 857, w: [0.228, 0.171, 0.123, 0.083, 0.05] },
  { s: 882, w: [] },
];
const SLOT = 36 / 782;   // slot pitch as a fraction of the viewport height
const easeOut2 = (x) => 1 - (1 - x) * (1 - x);

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
  let W = 1, H = 1, d = 1, k = 1, P = 36, teamTop = 0, shown = false;
  const size = () => {
    W = vp.w; H = vp.h; k = H / 782; P = SLOT * H;
    d = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = Math.round(W * d);
    canvas.height = Math.round(H * d);
  };
  // the slot grid is fixed to the page: at s = TOP its boundaries sit at multiples of P from the top
  const gridY = (j, s) => j * P - (s - TOP * k);
  // width fraction for keyframe list index i, interpolated between the keyframes around s
  const widthAt = (i, s, mode) => {
    const sk = s / k;
    let a = KEYS[0], b = KEYS[KEYS.length - 1];
    for (let n = 0; n < KEYS.length - 1; n++) {
      if (sk >= KEYS[n].s && sk <= KEYS[n + 1].s) { a = KEYS[n]; b = KEYS[n + 1]; break; }
    }
    const t = b.s === a.s ? 0 : Math.min(1, Math.max(0, (sk - a.s) / (b.s - a.s)));
    const pick = (key) => {
      // in the ride-up phase lists start at the slot crossing the top, so shift them onto page slots
      const off = mode === 'page' ? Math.floor(Math.max(0, key.s - TOP) * k / P) : 0;
      const j = i - off;
      if (j < 0) return 0;
      if (j < key.w.length) return key.w[j];
      return mode === 'edge' && key.w.length ? key.w[key.w.length - 1] : 0;
    };
    const count = (key) => {
      const off = mode === 'page' ? Math.floor(Math.max(0, key.s - TOP) * k / P) : 0;
      return key.w.length + off;
    };
    // a slot only carries a bar while both neighbouring keyframes give it one (or it is growing in)
    const n = Math.floor(count(a) + (count(b) - count(a)) * t);
    if (i >= Math.max(1, n)) return 0;
    return pick(a) + (pick(b) - pick(a)) * t;
  };
  const bar = (y0, f) => {
    const w = Math.round(f * W);
    const h = Math.max(1, Math.round(w / 40));
    return { x: Math.round((W - w) / 2), y: Math.round(y0 + P / 2 - h / 2), w, h };
  };
  const roundRect = (r) => {
    if (ctx.roundRect) ctx.roundRect(r.x, r.y, r.w, r.h, Math.min(2, r.h / 2));
    else ctx.rect(r.x, r.y, r.w, r.h);
  };
  const clear = () => {
    if (!shown) return;
    shown = false;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.style.visibility = 'hidden';
  };
  const draw = (s) => {
    if (s < 0 || s >= END * k) { clear(); return; }
    if (!shown) { shown = true; canvas.style.visibility = 'visible'; }
    ctx.setTransform(d, 0, 0, d, 0, 0);
    ctx.clearRect(0, 0, W, H);
    const top = H - s; // screen y of the top of .team
    // the stepped edge: a continuous climb quantised onto the page-fixed slot grid
    let edge = H;
    let mode = 'edge';
    if (s >= TOP * k) {
      mode = 'page';
      edge = gridY(0, s); // above the viewport, riding up with the page
    } else if (s >= HOLD * k) {
      const x = (s - HOLD * k) / (CLIMB * k);
      const ec = H * (1 - easeOut2(x));
      edge = gridY(Math.floor((ec + (s - TOP * k)) / P), s);
    }
    const bars = [];
    if (s >= HOLD * k) {
      if (mode === 'edge') {
        for (let i = 0; edge + i * P < H; i++) {
          const f = widthAt(i, s, 'edge');
          if (f <= 0) break;
          bars.push(bar(edge + i * P, f));
        }
      } else {
        for (let i = 0; i < 40; i++) {
          const y0 = gridY(i, s);
          if (y0 > H) break;
          const f = widthAt(i, s, 'page');
          if (f * W < 12) continue;
          if (y0 + P < 0) continue;
          bars.push(bar(y0, f));
        }
      }
    }
    // inside .team: black above the edge, black bars below it (the white is the section itself)
    ctx.save();
    ctx.beginPath(); ctx.rect(0, Math.max(0, top), W, H); ctx.clip();
    ctx.fillStyle = INK;
    if (edge > top) ctx.fillRect(0, Math.max(0, top), W, Math.min(H, edge) - Math.max(0, top));
    ctx.beginPath();
    bars.forEach(roundRect);
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
      bars.forEach(roundRect);
      ctx.fill();
      ctx.restore();
    }
  };

  size();
  canvas.style.visibility = 'hidden';
  let span = null;
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: () => `top+=${(END * vp.h) / 782} bottom`,
    onRefresh: (self) => { span = self; draw(self.scroll() - self.start); },
    onUpdate: (self) => draw(self.scroll() - self.start),
    onLeave: clear,
    onLeaveBack: clear,
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
  const api = { resize() { size(); if (span) draw(span.scroll() - span.start); lock(); } };
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
      }, [0, 0.03, 0.1, 0.13][i] || 0);
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
