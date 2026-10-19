// Impact metrics. On desktop the stage pins the moment the Services fade reaches black and the whole
// reveal plays in place (time-based, ~3 s): the headline rises out of a vertical motion blur while it
// counts, the aside rises line by line, the button pops, each column's text rises on its own, and
// every column's stripes grow in a fast staggered wave from left to right.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { vp } from './viewport.js';
import { splitLines } from './lines.js';

const formatters = {};
const fmt = (v, min, max = min) => {
  const key = `${min}-${max}`;
  const f = formatters[key] ||
    (formatters[key] = new Intl.NumberFormat('en-US', { minimumFractionDigits: min, maximumFractionDigits: max }));
  return f.format(v);
};

// stripes: 34 per column, each growing on its own curve, started left to right
// (eases are GSAP's: powerN.out = 1 - (1 - x)^(N + 1))
const N = 34, SW = 3.25, GROW = 1.08, FADE = 1.0;
// per column: when its stripes start (s after T0) and how long the wave takes to cross it
const START = [0.7, 0.79, 0.89, 1.01], SPREAD = [0.97, 1.02, 1.045, 1.06], SHAPE = [0.75, 0.84, 0.9, 0.93];
// when each column's text block starts to rise (s after T0)
const TEXT_AT = [0.65, 0.775, 0.9, 1.05];
const P4 = (x) => 1 - Math.pow(1 - x, 4);
const P3 = (x) => 1 - Math.pow(1 - x, 3);

// counters run as target * g^4: a near-linear climb, then a soft landing
const land = (x, x1) => {
  const k = 2 / (1 + x1);
  return x <= x1 ? k * x : 1 - (k / (2 * (1 - x1))) * (1 - x) * (1 - x);
};
const COUNT = [{ at: 0.27, dur: 0.93, x1: 0.65 }, null, { at: 0.34, dur: 2.3, x1: 0.85 }, { at: 0.47, dur: 2.3, x1: 0.85 }];

export function initMetrics({ reduced }) {
  const section = document.querySelector('.metrics');
  const big = section.querySelector('.metrics__num');
  const bigEm = section.querySelector('.metrics__big em');
  const asideP = section.querySelector('.metrics__aside p');
  const cta = section.querySelector('.metrics__cta');
  const blurs = [...section.querySelectorAll('.metrics__fx feGaussianBlur')];
  const cols = [...section.querySelectorAll('.stat')].map((stat, k) => {
    const bars = stat.querySelector('.stat__bars');
    const value = stat.querySelector('.stat__value');
    const suffix = value.dataset.suffix || '';
    const target = parseFloat(value.dataset.count);
    const dec = +(value.dataset.decimals || 0);
    value.textContent = '';
    const num = value.appendChild(document.createElement('span'));
    num.className = 'stat__n';
    num.textContent = fmt(target, dec);
    value.appendChild(document.createTextNode(suffix));
    bars.textContent = '';
    const cv = bars.appendChild(document.createElement('canvas'));
    return {
      stat, bars, cv, ctx: cv.getContext('2d'), num, text: stat.querySelector('.stat__text'),
      target, dec, count: COUNT[k] || null, spread: SPREAD[k], shape: SHAPE[k], shown: '', t: 0, p: 0, w: 0, d: 1, tone: 1,
    };
  });

  const measure = () => cols.forEach((c) => {
    const r = c.bars.getBoundingClientRect();
    c.d = Math.min(window.devicePixelRatio || 1, 2);
    c.w = r.width;
    c.cv.width = Math.max(1, Math.round(r.width * c.d));
    c.cv.height = Math.max(1, Math.round(r.height * c.d));
    c.tone = parseFloat(getComputedStyle(c.stat).getPropertyValue('--tone')) || 1;
  });

  const render = (c) => {
    const { ctx, cv, d, w } = c;
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = '#fff';
    const pitch = (w - SW) / (N - 1);
    for (let i = 0; i < N; i++) {
      const u = i / (N - 1);
      const lt = c.t - c.spread * (c.shape * u + (1 - c.shape) * u * u);
      if (lt <= 0) break;
      const h = P4(Math.min(1, lt / GROW)) * cv.height;
      ctx.globalAlpha = c.tone * (0.25 + 0.75 * P3(Math.min(1, lt / FADE)));
      ctx.fillRect(i * pitch * d, cv.height - h, SW * d, h);
    }
    ctx.globalAlpha = 1;
  };
  const setCount = (c) => {
    const v = c.count ? c.target * Math.pow(land(c.p, c.count.x1), 4) : c.target;
    const s = fmt(v, c.dec);
    if (s !== c.shown) { c.shown = s; c.num.textContent = s; }
  };

  let lines = splitLines(asideP, 'm-line');
  measure();
  if (reduced) {
    cols.forEach((c) => { c.t = 2.2; c.p = 1; render(c); });
    return { resize() { lines = splitLines(asideP, 'm-line'); measure(); cols.forEach(render); } };
  }

  // hidden until the reveal
  const counter = { v: 3 };
  let lastBig = '';
  const setBig = () => {
    const s = '$' + fmt(counter.v, 0, 1);
    if (s !== lastBig) { lastBig = s; big.textContent = s; }
  };
  setBig();
  const rise = () => 0.097 * vp.h;
  gsap.set([big, bigEm], { opacity: 0, y: 0.0588 * vp.h });
  gsap.set(lines, { opacity: 0, y: 0.0256 * vp.h });
  gsap.set(cta, { scale: 0 });
  cols.forEach((c) => { gsap.set(c.text, { opacity: 0, y: rise() }); setCount(c); render(c); });
  let played = false;
  // line breaks depend on the web font: split again once it is in
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(() => {
      if (!played) { lines = splitLines(asideP, 'm-line'); gsap.set(lines, { opacity: 0, y: 0.0256 * vp.h }); }
      measure();
      cols.forEach(render);
    });
  }

  const play = () => {
    if (played) return;
    played = true;
    const T0 = 0.05; // a beat of pure black first
    const tl = gsap.timeline();
    // headline: rises out of a vertical-only blur; "Billion" follows 0.4 s later
    [big, bigEm].forEach((el, i) => {
      const at = T0 + 0.4 * i;
      const blur = blurs[i];
      el.style.filter = `url(#${blur.parentNode.id})`;
      tl.to(el, { y: 0, duration: 1.25, ease: 'power3.out' }, at)
        .to(el, { opacity: 1, duration: 1.175, ease: 'power3.out' }, at + 0.04)
        .fromTo(blur, { attr: { stdDeviation: '0 11' } }, {
          attr: { stdDeviation: '0 0' }, duration: 1.6, ease: 'power4.out',
          onComplete: () => { el.style.filter = ''; },
        }, at + 0.05);
    });
    tl.to(counter, { v: 8, duration: 0.23, ease: 'none', onUpdate: setBig }, T0)
      .to(counter, { v: 11.2, duration: 2.4, ease: 'power3.out', onUpdate: setBig }, T0 + 0.23)
      .to(lines, { y: 0, duration: 1.25, ease: 'power3.out', stagger: 0.07 }, T0 + 0.47)
      .to(lines, { opacity: 1, duration: 1.15, ease: 'power3.out', stagger: 0.07 }, T0 + 0.47)
      .to(cta, { scale: 1, duration: 0.6, ease: 'back.out(1.3)' }, T0 + 0.72);
    cols.forEach((c, k) => {
      const at = T0 + TEXT_AT[k];
      tl.to(c.text, { y: 0, duration: 1.0, ease: 'power3.out' }, at)
        .to(c.text, { opacity: 1, duration: 0.8, ease: 'power1.out' }, at)
        .to(c, { t: 2.2, duration: 2.2, ease: 'none', onUpdate: () => render(c) }, T0 + START[k]);
      if (c.count) tl.to(c, { p: 1, duration: c.count.dur, ease: 'none', onUpdate: () => setCount(c) }, T0 + c.count.at);
    });
  };

  // desktop: the stage pins as the Services fade completes and reveals in place;
  // phones (no sticky stage): as the grid comes into view
  ScrollTrigger.create({ trigger: section, start: () => (window.innerWidth <= 980 ? 'top 65%' : 'top top'), once: true, onEnter: play });

  return {
    resize() {
      lines = splitLines(asideP, 'm-line');
      gsap.set(lines, played ? { opacity: 1, y: 0 } : { opacity: 0, y: 0.0256 * vp.h });
      measure();
      cols.forEach(render);
    },
  };
}
