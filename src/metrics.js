// Impact metrics: a headline counter plus four striped bar charts that grow
// left to right (the stagger draws a curved crest that settles flat).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const fmt = (v, decimals) =>
  v.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals });

function buildStripes(stat) {
  const bars = stat.querySelector('.stat__bars');
  const width = bars.clientWidth || 300;
  const n = Math.max(14, Math.round(width / 8.6));
  if (bars.childElementCount === n) return [...bars.children];
  bars.textContent = '';
  const slope = stat.dataset.slope === 'true';
  const out = [];
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    let h = 1;
    if (slope && t > 0.58) {
      const u = (t - 0.58) / 0.42;
      h = Math.sqrt(1 - u * u * 0.5);
    }
    const el = document.createElement('i');
    el.style.height = `${h * 100}%`;
    bars.appendChild(el);
    out.push(el);
  }
  return out;
}

export function initMetrics({ reduced }) {
  const section = document.querySelector('.metrics');
  const big = section.querySelector('.metrics__num');
  const bigEm = section.querySelector('.metrics__big em');
  const aside = section.querySelector('.metrics__aside');
  const stats = [...section.querySelectorAll('.stat')];
  let stripes = stats.map(buildStripes);

  if (reduced) return { resize() {} };

  const counter = { v: 7.2 };
  gsap.set(stripes.flat(), { scaleY: 0 });
  gsap.set([big, bigEm], { opacity: 0, filter: 'blur(14px)' });
  gsap.set(aside, { opacity: 0, y: 20 });
  stats.forEach((s) => gsap.set(s.querySelectorAll('.stat__value, .stat__label, .stat__sub'), { opacity: 0, y: 14 }));
  big.textContent = '$7.2';
  stats.forEach((s) => {
    const v = s.querySelector('.stat__value');
    v.textContent = fmt(0, +(v.dataset.decimals || 0)) + (v.dataset.suffix || '');
  });

  let played = false;
  const play = () => {
    if (played) return;
    played = true;
    const tl = gsap.timeline();
    tl.to([big, bigEm], { opacity: 1, filter: 'blur(0px)', duration: 1.2, ease: 'power2.out', stagger: 0.25 }, 0)
      .to(counter, {
        v: 11.2, duration: 2.6, ease: 'power3.out',
        onUpdate: () => { big.textContent = '$' + fmt(counter.v, 1); },
      }, 0)
      .to(aside, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 0.5);

    stats.forEach((s, i) => {
      const at = 0.45 + i * 0.22;
      const v = s.querySelector('.stat__value');
      const target = parseFloat(v.dataset.count);
      const dec = +(v.dataset.decimals || 0);
      const live = { v: 0 };
      tl.to(s.querySelectorAll('.stat__value, .stat__label, .stat__sub'), { opacity: 1, y: 0, duration: 0.8, stagger: 0.08, ease: 'power3.out' }, at)
        .to(live, {
          v: target, duration: 2.2, ease: 'power3.out',
          onUpdate: () => { v.textContent = fmt(live.v, live.v < target ? Math.max(dec, target < 10 ? 2 : 0) : dec) + (v.dataset.suffix || ''); },
          onComplete: () => { v.textContent = fmt(target, dec) + (v.dataset.suffix || ''); },
        }, at)
        .to(stripes[i], { scaleY: 1, duration: 1.5, ease: 'power3.out', stagger: { each: 0.028 } }, at + 0.05);
    });
  };

  ScrollTrigger.create({ trigger: section, start: 'top 62%', once: true, onEnter: play });

  return {
    resize() {
      const before = stripes.map((s) => s.length);
      stripes = stats.map(buildStripes);
      if (stripes.some((s, i) => s.length !== before[i])) gsap.set(stripes.flat(), { scaleY: played ? 1 : 0 });
    },
  };
}
