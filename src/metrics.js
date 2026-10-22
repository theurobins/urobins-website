// Impact: a bento of metric cards. The cards rise into place as the section scrolls into view,
// every number counts up on a near-linear climb with a soft landing, the uptime card's stripes
// grow in a staggered wave, and the tag icons run small CSS loops only while the section is on screen.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { isPhone } from './breakpoints.js';

const formatters = {};
const fmt = (v, dec) => (formatters[dec] || (formatters[dec] = new Intl.NumberFormat('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec }))).format(v);
// counters run as target * g^4: a near-linear climb, then a soft landing
const land = (x, x1) => {
  const k = 2 / (1 + x1);
  return x <= x1 ? k * x : 1 - (k / (2 * (1 - x1))) * (1 - x) * (1 - x);
};

// stripes: 34 per column, each growing on its own curve, started left to right
const N = 34, SW = 3, GROW = 1.08, FADE = 1.0, SPREAD = 1.0, SHAPE = 0.8;
const P4 = (x) => 1 - Math.pow(1 - x, 4);
const P3 = (x) => 1 - Math.pow(1 - x, 3);

export function initMetrics({ reduced }) {
  // phones read the cards as a ledger (see the mobile CSS); decided once, like the layout
  const mobile = isPhone();
  const section = document.querySelector('.metrics');
  const cards = [...section.querySelectorAll('.card')];
  const counts = [...section.querySelectorAll('.count')].map((el) => ({
    el, target: parseFloat(el.dataset.count), dec: +(el.dataset.decimals || 0),
    prefix: el.dataset.prefix || '', suffix: el.dataset.suffix || '', shown: '', fixed: 'static' in el.dataset,
  }));
  // small whole numbers ("2 weeks") read wrong mid-count, so those are shown fixed
  const setCount = (c, p) => {
    const s = c.prefix + fmt(c.fixed ? c.target : c.target * Math.pow(land(p, 0.7), 4), c.dec) + c.suffix;
    if (s !== c.shown) { c.shown = s; c.el.textContent = s; }
  };
  // the serif's digits are proportional: hold each counter at its final width so nothing shifts
  const lock = () => counts.forEach((c) => {
    const t = c.el.textContent;
    c.el.style.minWidth = '';
    c.el.textContent = c.prefix + fmt(c.target, c.dec) + c.suffix;
    c.el.style.minWidth = `${Math.ceil(c.el.getBoundingClientRect().width)}px`;
    c.el.textContent = t;
  });

  // the uptime card's stripes (on phones a slim sparkline: fewer, finer stripes)
  const NB = mobile ? 16 : N, BW = mobile ? 2.5 : SW;
  const barsEl = section.querySelector('.card__bars');
  const cv = barsEl.appendChild(document.createElement('canvas'));
  const ctx = cv.getContext('2d');
  const bars = { t: 0, w: 0, d: 1 };
  const measure = () => {
    const r = barsEl.getBoundingClientRect();
    bars.d = Math.min(window.devicePixelRatio || 1, 2);
    bars.w = r.width;
    cv.width = Math.max(1, Math.round(r.width * bars.d));
    cv.height = Math.max(1, Math.round(r.height * bars.d));
  };
  const render = () => {
    const { d, w, t } = bars;
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = '#fff';
    const pitch = (w - BW) / (NB - 1);
    for (let i = 0; i < NB; i++) {
      const u = i / (NB - 1);
      const lt = t - SPREAD * (SHAPE * u + (1 - SHAPE) * u * u);
      if (lt <= 0) break;
      const h = P4(Math.min(1, lt / GROW)) * cv.height * (0.35 + 0.65 * (1 - u * 0.55));
      ctx.globalAlpha = 0.25 + 0.75 * P3(Math.min(1, lt / FADE));
      ctx.fillRect(i * pitch * d, cv.height - h, BW * d, h);
    }
    ctx.globalAlpha = 1;
  };

  // the tag icons loop in CSS while the section is on screen (.is-live)
  ScrollTrigger.create({ trigger: section, start: 'top bottom', end: 'bottom top', toggleClass: { targets: section, className: 'is-live' } });

  measure();
  lock();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { lock(); measure(); render(); });

  if (reduced) {
    counts.forEach((c) => setCount(c, 1));
    bars.t = 2.2;
    render();
    cards.forEach((card) => card.classList.add('is-in'));
    return { resize() { measure(); render(); lock(); } };
  }

  if (mobile) {
    // phones: each row arrives on its own as it scrolls in, its hairline drawing in above it
    gsap.set(cards, { opacity: 0, y: 28 });
    counts.forEach((c) => setCount(c, 0));
    cards.forEach((card) => {
      const own = counts.filter((c) => card.contains(c.el));
      ScrollTrigger.create({
        trigger: card, start: 'top 90%', once: true,
        onEnter: () => {
          card.classList.add('is-in');
          const tl = gsap.timeline();
          tl.to(card, { opacity: 1, y: 0, duration: 1.1, ease: 'power3.out', clearProps: 'transform' }, 0);
          own.forEach((c) => {
            const o = { p: 0 };
            tl.to(o, { p: 1, duration: 1.8, ease: 'none', onUpdate: () => setCount(c, o.p) }, 0.15);
          });
          if (card.contains(barsEl)) tl.to(bars, { t: 2.2, duration: 2.2, ease: 'none', onUpdate: render }, 0.3);
        },
      });
    });
    return { resize() { measure(); render(); lock(); } };
  }

  gsap.set(cards, { opacity: 0, y: 48 });
  counts.forEach((c) => setCount(c, 0));
  let played = false;
  const play = () => {
    if (played) return;
    played = true;
    // .is-in only draws the phone rows' hairlines: set here too, so a window narrowed to phone
    // width after the cards played still shows them
    cards.forEach((card) => card.classList.add('is-in'));
    const tl = gsap.timeline();
    tl.to(cards, { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out', stagger: 0.09, clearProps: 'transform' }, 0);
    counts.forEach((c, i) => {
      const o = { p: 0 };
      tl.to(o, { p: 1, duration: 2.1, ease: 'none', onUpdate: () => setCount(c, o.p) }, 0.25 + i * 0.08);
    });
    tl.to(bars, { t: 2.2, duration: 2.2, ease: 'none', onUpdate: render }, 0.55);
  };
  ScrollTrigger.create({ trigger: section, start: 'top 94%', once: true, onEnter: play });

  return { resize() { measure(); render(); lock(); } };
}
