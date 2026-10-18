// Transition 2 (black stepped bars wiping into white) + team reveal, held in one sticky stage:
// the funnel collapses at the top, "Meet the Team" blurs in, the cards fade in left to right
// and the counters run, all while the stage holds still.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { funnelRects, BAR_COUNT } from './funnel.js';
import { vp } from './viewport.js';

const sticky = () => window.innerWidth > 980;
const NF = new Intl.NumberFormat('en-US');

export function initTeam({ reduced }) {
  const section = document.querySelector('.team');
  const holder = section.querySelector('.team__bars');
  const head = section.querySelector('.team__head');
  const members = [...section.querySelectorAll('.member')];

  const bars = Array.from({ length: BAR_COUNT }, () => holder.appendChild(document.createElement('i')));
  const rects = [];
  let q = 0;
  const draw = () => {
    funnelRects(q, vp.w, vp.h, 0, rects);
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

  // the serif's digits are proportional: lock each counter to its final width so the labels
  // beside it hold still while it counts
  const final = (c) => NF.format(+c.dataset.count) + (c.dataset.suffix || '');
  const lock = () => counters.forEach((c) => {
    const shown = c.textContent;
    c.style.width = '';
    c.textContent = final(c);
    c.style.width = `${Math.ceil(c.getBoundingClientRect().width)}px`;
    c.textContent = shown;
  });

  const titleWords = head.querySelectorAll('.team__title, .team__sub');
  gsap.set(titleWords, { opacity: 0, filter: 'blur(14px)', y: 24, willChange: 'filter, transform' });
  gsap.set(members, { opacity: 0, y: 46 });
  counters.forEach((c) => { c.textContent = '0+'; });
  lock();
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(lock);

  ScrollTrigger.create({
    trigger: section,
    start: () => (sticky() ? 'top -38%' : 'top -10%'),
    once: true,
    onEnter: () => gsap.to(titleWords, {
      opacity: 1, filter: 'blur(0px)', y: 0, duration: 1.2, stagger: 0.16, ease: 'power3.out', clearProps: 'filter,willChange',
    }),
  });

  ScrollTrigger.create({
    trigger: section,
    start: () => (sticky() ? 'top -52%' : 'top -40%'),
    once: true,
    onEnter: () => {
      gsap.to(members, { opacity: 1, y: 0, duration: 1.1, stagger: 0.14, ease: 'power3.out' });
      counters.forEach((c, i) => {
        const o = { v: 0 };
        const suffix = c.dataset.suffix || '';
        let last = c.textContent;
        gsap.to(o, {
          v: +c.dataset.count, duration: 2.6, delay: 0.25 + i * 0.12, ease: 'power2.out',
          onUpdate: () => {
            const s = NF.format(Math.round(o.v)) + suffix;
            if (s !== last) { last = s; c.textContent = s; }
          },
        });
      });
    },
  });

  return { resize() { draw(); lock(); } };
}
