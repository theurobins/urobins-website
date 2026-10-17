// Transition 2 (black stepped bars wiping into white) + team reveal, held in one sticky stage:
// the funnel collapses at the top, "Meet the Team" blurs in, the cards fade in left to right
// and the counters run, all while the stage holds still.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { funnelRects, BAR_COUNT } from './funnel.js';

const sticky = () => window.innerWidth > 980;

export function initTeam({ reduced }) {
  const section = document.querySelector('.team');
  const holder = section.querySelector('.team__bars');
  const head = section.querySelector('.team__head');
  const members = [...section.querySelectorAll('.member')];

  const bars = Array.from({ length: BAR_COUNT }, () => holder.appendChild(document.createElement('i')));
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

  // the funnel holds its full shape while the stage scrolls in, then collapses over the next 60vh
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: 'top -60%',
    scrub: true,
    onUpdate: (self) => {
      q = gsap.utils.clamp(0, 1, (self.progress - 100 / 160) / (60 / 160));
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
    trigger: section,
    start: () => (sticky() ? 'top -38%' : 'top -10%'),
    once: true,
    onEnter: () => gsap.to(titleWords, { opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.2, stagger: 0.16, ease: 'power3.out' }),
  });

  ScrollTrigger.create({
    trigger: section,
    start: () => (sticky() ? 'top -52%' : 'top -40%'),
    once: true,
    onEnter: () => {
      gsap.to(members, { opacity: 1, y: 0, duration: 1.1, stagger: 0.14, ease: 'power3.out' });
      counters.forEach((c, i) => {
        const target = parseFloat(c.dataset.count);
        const o = { v: 0 };
        gsap.to(o, {
          v: target, duration: 2.6, delay: 0.25 + i * 0.12, ease: 'power2.out',
          onUpdate: () => { c.textContent = Math.round(o.v).toLocaleString('en-US') + (c.dataset.suffix || ''); },
        });
      });
    },
  });

  return { resize: draw };
}
