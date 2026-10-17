// Impact metrics: the headline counter blurs in and counts up while four striped bars grow.
// Each bar rises with a curved quarter-ellipse crest that sweeps to the right and settles flat;
// the column's value and labels ride on top of the bar as it grows.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const fmt = (v, decimals) =>
  v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

function buildStripes(bars) {
  const n = Math.max(14, Math.round((bars.clientWidth || 300) / 8.6));
  if (bars.childElementCount === n) return [...bars.children];
  bars.textContent = '';
  return Array.from({ length: n }, () => bars.appendChild(document.createElement('i')));
}

// height fraction of stripe at u (0 = left, 1 = right) when the column is g (0..1) grown
function crest(u, g) {
  const a = 1 - Math.pow(1 - g, 2.2);
  const reach = 0.22 + 2.4 * Math.pow(g, 1.6);
  const curve = u < reach ? Math.sqrt(1 - (u / reach) * (u / reach)) : 0;
  const flat = Math.min(1, Math.max(0, (g - 0.78) / 0.22));
  return a * (curve + (1 - curve) * flat * flat * (3 - 2 * flat));
}

export function initMetrics({ reduced }) {
  const section = document.querySelector('.metrics');
  const big = section.querySelector('.metrics__num');
  const bigEm = section.querySelector('.metrics__big em');
  const aside = section.querySelector('.metrics__aside');
  const cols = [...section.querySelectorAll('.stat')].map((stat) => {
    const bars = stat.querySelector('.stat__bars');
    const value = stat.querySelector('.stat__value');
    return {
      bars, value,
      text: stat.querySelector('.stat__text'),
      stripes: buildStripes(bars),
      target: parseFloat(value.dataset.count),
      dec: +(value.dataset.decimals || 0),
      suffix: value.dataset.suffix || '',
      g: 0,
      h: 0,
    };
  });
  const measure = () => cols.forEach((c) => { c.h = c.bars.offsetHeight; });
  measure();

  const render = (c) => {
    const n = c.stripes.length;
    for (let i = 0; i < n; i++) c.stripes[i].style.transform = `scaleY(${crest(i / (n - 1), c.g).toFixed(4)})`;
    const lead = crest(0, c.g);
    c.text.style.transform = `translate3d(0, ${((1 - lead) * c.h).toFixed(1)}px, 0)`;
    const v = c.target * Math.min(1, c.g * 1.05);
    c.value.textContent = fmt(v, c.g < 1 && c.target < 10 ? Math.max(c.dec, 2) : c.dec) + c.suffix;
  };

  if (reduced) return { resize() {} };

  const counter = { v: 7.2 };
  gsap.set([big, bigEm], { opacity: 0, filter: 'blur(14px)' });
  gsap.set(aside, { opacity: 0, y: 20 });
  gsap.set(cols.map((c) => c.text), { opacity: 0 });
  big.textContent = '$7.2';
  cols.forEach(render);

  let played = false;
  const play = () => {
    if (played) return;
    played = true;
    const tl = gsap.timeline();
    tl.to([big, bigEm], { opacity: 1, filter: 'blur(0px)', duration: 1.1, ease: 'power2.out', stagger: 0.2 }, 0)
      .to(counter, {
        v: 11.2, duration: 2.4, ease: 'power3.out',
        onUpdate: () => { big.textContent = '$' + fmt(counter.v, 1); },
      }, 0)
      .to(aside, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.3);
    cols.forEach((c, i) => {
      const at = 0.2 + i * 0.2;
      tl.to(c.text, { opacity: 1, duration: 0.6, ease: 'power1.out' }, at)
        .to(c, {
          g: 1, duration: 2.0, ease: 'power1.inOut',
          onUpdate: () => render(c),
          onComplete: () => { c.value.textContent = fmt(c.target, c.dec) + c.suffix; },
        }, at);
    });
  };

  // desktop: fires as the sticky stage settles; phones (no sticky stage): as the grid comes into view
  ScrollTrigger.create({ trigger: section, start: () => (window.innerWidth <= 980 ? 'top 65%' : 'top 22%'), once: true, onEnter: play });

  return {
    resize() {
      cols.forEach((c) => { c.stripes = buildStripes(c.bars); });
      measure();
      cols.forEach(render);
    },
  };
}
