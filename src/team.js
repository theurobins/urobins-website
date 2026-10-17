// Transition 2 (black stepped bars wiping into white) + team grid reveal.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { funnelRects, BAR_COUNT } from './funnel.js';

export function initTeam({ reduced }) {
  const section = document.querySelector('.team');
  const shift = section.querySelector('.team__shift');
  const holder = section.querySelector('.team__bars');
  const head = section.querySelector('.team__head');
  const members = [...section.querySelectorAll('.member')];

  const bars = Array.from({ length: BAR_COUNT }, () => {
    const el = document.createElement('i');
    holder.appendChild(el);
    return el;
  });
  const rects = [];
  let q = 0;
  const draw = () => {
    funnelRects(q, window.innerWidth, window.innerHeight, 0, rects);
    // 100x100 tiles scaled into place: transform-only, so the compositor does all the work
    rects.forEach((r, i) => {
      bars[i].style.transform = `translate3d(${r.x.toFixed(1)}px, ${r.y.toFixed(1)}px, 0) scale(${(r.w / 100).toFixed(4)}, ${(r.h / 100).toFixed(4)})`;
    });
  };
  draw();

  ScrollTrigger.create({
    trigger: shift,
    start: 'top bottom',
    end: 'bottom bottom',
    scrub: true,
    onUpdate: (self) => {
      // bars hold their full funnel while entering (100vh), then collapse during the sticky phase (70vh)
      q = gsap.utils.clamp(0, 1, (self.progress - 100 / 170) / (70 / 170));
      draw();
    },
  });

  const counters = members.map((m) => m.querySelector('.member__num'));
  if (reduced) return { resize: draw };

  const titleWords = head.querySelectorAll('.team__title, .team__sub');
  gsap.set(titleWords, { opacity: 0, filter: 'blur(14px)', y: 24 });
  gsap.set(members, { opacity: 0, y: 46 });
  counters.forEach((c) => { c.textContent = '0+'; });

  ScrollTrigger.create({
    trigger: head,
    start: 'top 86%',
    once: true,
    onEnter: () => gsap.to(titleWords, { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.3, stagger: 0.18, ease: 'power3.out' }),
  });

  ScrollTrigger.create({
    trigger: section.querySelector('.team__grid'),
    start: 'top 88%',
    once: true,
    onEnter: () => {
      gsap.to(members, { opacity: 1, y: 0, duration: 1.2, stagger: 0.16, ease: 'power3.out' });
      counters.forEach((c, i) => {
        const target = parseFloat(c.dataset.count);
        const o = { v: 0 };
        gsap.to(o, {
          v: target, duration: 2.4, delay: 0.35 + i * 0.16, ease: 'power3.out',
          onUpdate: () => { c.textContent = Math.round(o.v).toLocaleString('en-US') + (c.dataset.suffix || ''); },
        });
      });
    },
  });

  return { resize: draw };
}
