// Impact metrics: the headline counter blurs in and counts up while four striped bars grow.
// Each bar rises with a curved quarter-ellipse crest that sweeps to the right and settles flat;
// the column's value and labels ride on top of the bar as it grows.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const formatters = {};
const fmt = (v, decimals) => {
  const f = formatters[decimals] ||
    (formatters[decimals] = new Intl.NumberFormat('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }));
  return f.format(v);
};

// height fraction of stripe at u (0 = left, 1 = right) when the column is g (0..1) grown
function crest(u, g) {
  const a = 1 - Math.pow(1 - g, 2.2);
  const reach = 0.22 + 2.4 * Math.pow(g, 1.6);
  const curve = u < reach ? Math.sqrt(1 - (u / reach) * (u / reach)) : 0;
  const flat = Math.min(1, Math.max(0, (g - 0.78) / 0.22));
  return a * (curve + (1 - curve) * flat * flat * (3 - 2 * flat));
}

// lock an inline-block to the width it needs for `text`, then show `shown`
function lockWidth(el, text, shown) {
  el.style.width = '';
  el.textContent = text;
  el.style.width = `${Math.ceil(el.getBoundingClientRect().width)}px`;
  el.textContent = shown;
}

export function initMetrics({ reduced }) {
  const section = document.querySelector('.metrics');
  const big = section.querySelector('.metrics__num');
  const bigEm = section.querySelector('.metrics__big em');
  const aside = section.querySelector('.metrics__aside');
  const cols = [...section.querySelectorAll('.stat')].map((stat) => {
    const bars = stat.querySelector('.stat__bars');
    const value = stat.querySelector('.stat__value');
    const suffix = value.dataset.suffix || '';
    const target = parseFloat(value.dataset.count);
    const dec = +(value.dataset.decimals || 0);
    // the number counts in its own fixed-width box; the suffix after it never moves
    value.textContent = '';
    const num = value.appendChild(document.createElement('span'));
    num.className = 'stat__n';
    num.textContent = fmt(target, dec);
    value.appendChild(document.createTextNode(suffix));
    // the stripes are painted on one canvas per column, not 35 elements
    bars.textContent = '';
    const cv = bars.appendChild(document.createElement('canvas'));
    return { bars, cv, ctx: cv.getContext('2d'), num, text: stat.querySelector('.stat__text'), target, dec, shown: '', g: 0, h: 0, w: 0, d: 1, n: 14 };
  });

  const measure = () => cols.forEach((c) => {
    const r = c.bars.getBoundingClientRect();
    c.d = Math.min(window.devicePixelRatio || 1, 2);
    c.w = r.width;
    c.h = r.height;
    c.cv.width = Math.max(1, Math.round(r.width * c.d));
    c.cv.height = Math.max(1, Math.round(r.height * c.d));
    c.n = Math.max(14, Math.round(r.width / 8.6));
    c.color = getComputedStyle(c.bars).color;
    lockWidth(c.num, fmt(c.target, c.dec), c.shown || fmt(c.target, c.dec));
  });

  const render = (c) => {
    const { ctx, cv, d, w, n } = c;
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = c.color;
    const sw = Math.max(1, Math.round(3 * d));
    for (let i = 0; i < n; i++) {
      const h = Math.round(crest(i / (n - 1), c.g) * cv.height);
      if (h <= 0) continue;
      ctx.fillRect(Math.round((i * (w - 3) / (n - 1)) * d), cv.height - h, sw, h);
    }
    const lead = crest(0, c.g);
    c.text.style.transform = `translate3d(0, ${((1 - lead) * c.h).toFixed(1)}px, 0)`;
    const s = fmt(c.target * Math.min(1, c.g * 1.05), c.dec);
    if (s !== c.shown) { c.shown = s; c.num.textContent = s; }
  };

  measure();
  if (reduced) {
    cols.forEach((c) => { c.g = 1; render(c); });
    return { resize() { measure(); cols.forEach(render); } };
  }

  const counter = { v: 7.2 };
  let lastBig = '$7.2';
  gsap.set([big, bigEm], { opacity: 0, filter: 'blur(14px)', willChange: 'filter, opacity' });
  gsap.set(aside, { opacity: 0, y: 20 });
  gsap.set(cols.map((c) => c.text), { opacity: 0 });
  const lockBig = () => lockWidth(big, '$11.2', lastBig);
  lockBig();
  cols.forEach(render);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { lockBig(); measure(); cols.forEach(render); });

  let played = false;
  const play = () => {
    if (played) return;
    played = true;
    const tl = gsap.timeline();
    tl.to([big, bigEm], { opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power2.out', stagger: 0.2, clearProps: 'filter,willChange' }, 0)
      .to(counter, {
        v: 11.2, duration: 2.4, ease: 'power3.out',
        onUpdate: () => {
          const s = '$' + fmt(counter.v, 1);
          if (s !== lastBig) { lastBig = s; big.textContent = s; }
        },
      }, 0)
      .to(aside, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.3);
    cols.forEach((c, i) => {
      const at = 0.2 + i * 0.2;
      tl.to(c.text, { opacity: 1, duration: 0.6, ease: 'power1.out' }, at)
        .to(c, { g: 1, duration: 2.0, ease: 'power1.inOut', onUpdate: () => render(c) }, at);
    });
  };

  // desktop: fires as the sticky stage settles; phones (no sticky stage): as the grid comes into view
  ScrollTrigger.create({ trigger: section, start: () => (window.innerWidth <= 980 ? 'top 65%' : 'top 22%'), once: true, onEnter: play });

  return {
    resize() {
      lockBig();
      measure();
      cols.forEach(render);
    },
  };
}
