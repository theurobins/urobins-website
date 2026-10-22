// Entrance reveals. Headings are marked up as .line > .line__in and slide up out of their own
// line masks; paragraphs are split into rendered lines that rise one after another; blocks rise
// and fade in sequence. Every reveal plays once, when its element scrolls into view.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { splitLines } from './lines.js';

let reduced = false;
export const setReduced = (r) => { reduced = r; };

export const LINE_FROM = { yPercent: 108, rotate: 2.2, transformOrigin: '0% 100%' };

export function revealLines(el, { start = 'top 85%', stagger = 0.1, duration = 1.25, delay = 0, trigger } = {}) {
  const ins = [...el.querySelectorAll('.line__in')];
  if (!ins.length || reduced) return null;
  gsap.set(ins, { ...LINE_FROM, willChange: 'transform' });
  const tl = gsap.timeline({ paused: true, delay })
    .to(ins, { yPercent: 0, rotate: 0, duration, ease: 'expo.out', stagger, clearProps: 'willChange' });
  ScrollTrigger.create({ trigger: trigger || el, start, once: true, onEnter: () => tl.play() });
  return tl;
}

const texts = [];
export function revealText(p, { start = 'top 88%', stagger = 0.07, trigger } = {}) {
  if (reduced) return;
  const entry = { played: false, lines: [] };
  // line breaks depend on the font and the width: split again on resize (and once the font is in)
  entry.split = () => {
    entry.lines = splitLines(p, 'rl');
    gsap.set(entry.lines, entry.played ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 });
  };
  entry.split();
  texts.push(entry);
  ScrollTrigger.create({
    trigger: trigger || p, start, once: true,
    onEnter: () => {
      entry.played = true;
      gsap.to(entry.lines, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger, overwrite: true });
    },
  });
}
export function resplitTexts() { texts.forEach((t) => t.split()); }

export function revealRise(targets, { start = 'top 85%', y = 40, stagger = 0.1, duration = 1.15, trigger } = {}) {
  const els = gsap.utils.toArray(targets);
  if (!els.length || reduced) return;
  gsap.set(els, { opacity: 0, y });
  ScrollTrigger.create({
    trigger: trigger || els[0], start, once: true,
    onEnter: () => gsap.to(els, { opacity: 1, y: 0, duration, ease: 'power3.out', stagger, clearProps: 'transform' }),
  });
}
