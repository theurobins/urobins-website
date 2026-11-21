// How we work: a pinned stage. The four stages sit in a column that slides up as the visitor
// scrolls, each one resting at the centre of the frame while the others dim; beside it a tilted
// wall of project mockups drifts past in two columns at different speeds. Everything is scrubbed,
// so it reads the same at any speed and simply runs backwards on the way up. Below 981px the stage
// unpins and stacks; on phones (breakpoints.js, either way up) it becomes a timeline whose rail fills
// with the scroll, and the wall is only built once the page is not a phone (a window widened past
// one builds it then). The mockups are CSS wireframes built here from a small spec.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { vp } from './viewport.js';
import { revealLines } from './reveal.js';
import { PHONE, NOT_PHONE, TABLET, DESKTOP, isPhone } from './breakpoints.js';

const bars = (n, seed) => Array.from({ length: n }, (_, i) => `<i style="--h:${(0.22 + 0.78 * Math.abs(Math.sin(seed + i * 1.7))).toFixed(2)}"></i>`).join('');
const lines = (ws) => ws.map((w) => `<s style="--w:${w}"></s>`).join('');
const UI = {
  dash: () => `<div class="ui__top"><i></i><i></i><i></i><b></b></div><div class="ui__side">${lines([1, 1, 1, 1, 1])}</div>` +
    `<div class="ui__main"><div class="ui__kpis"><div>${lines([0.5])}<b></b></div><div>${lines([0.6])}<b></b></div><div>${lines([0.4])}<b></b></div></div><div class="ui__chart">${bars(18, 1)}</div></div>`,
  phone: () => `<div class="ui__phone"><div class="ui__phone-hd"><i></i>${lines([0.5])}</div>` +
    Array.from({ length: 4 }, () => `<div class="ui__row ui__row--card"><i></i><div>${lines([0.7, 0.45])}</div></div>`).join('') + `<b class="ui__phone-cta"></b></div>`,
  site: () => `<div class="ui__nav"><i></i>${lines([0.1, 0.1, 0.1])}<b></b></div><div class="ui__hero"><u style="--w:.72"></u><u style="--w:.52"></u>${lines([0.46, 0.4])}<b></b></div><div class="ui__cards"><div></div><div></div><div></div></div>`,
  table: () => `<div class="ui__top"><i></i><i></i><i></i><b></b></div><div class="ui__rows">` +
    Array.from({ length: 6 }, (_, i) => `<div class="ui__row"><i></i>${lines([0.3, 0.5, 0.2])}<em style="--p:${(0.3 + 0.6 * Math.abs(Math.sin(i * 2.3))).toFixed(2)}"></em></div>`).join('') + `</div>`,
  shop: () => `<div class="ui__nav"><i></i>${lines([0.1, 0.1])}<b></b></div><div class="ui__grid">` +
    Array.from({ length: 6 }, () => `<div class="ui__prod"><div></div>${lines([0.7, 0.4])}</div>`).join('') + `</div>`,
  crm: () => `<div class="ui__top"><i></i><i></i><i></i><b></b></div><div class="ui__kanban">` +
    [3, 2, 4].map((n) => `<div class="ui__col">${lines([0.5])}${Array.from({ length: n }, () => `<div class="ui__tick">${lines([0.8, 0.5])}</div>`).join('')}</div>`).join('') + `</div>`,
};

export function initProcess({ reduced }) {
  const section = document.querySelector('.process');
  if (!section) return { resize() {} };
  const mobile = isPhone();
  let walled = false;
  const buildWall = () => {
    if (walled) return;
    walled = true;
    section.querySelectorAll('.mock').forEach((m) => {
      const ui = document.createElement('div');
      ui.className = `ui ui--${m.dataset.kind}`;
      ui.innerHTML = (UI[m.dataset.kind] || UI.dash)();
      m.prepend(ui);
    });
  };
  const left = section.querySelector('.process__left');
  const scroller = section.querySelector('.process__scroller');
  const stages = [...section.querySelectorAll('.stage')];
  const dots = [...section.querySelectorAll('.process__dots i')];
  const colA = section.querySelector('.wall__col--a');
  const colB = section.querySelector('.wall__col--b');
  const fill = section.querySelector('.process__fill');
  const n = stages.length;
  let cur = -1;
  const setDot = (i) => {
    if (i === cur) return;
    cur = i;
    dots.forEach((d, k) => d.classList.toggle('is-on', k === i));
    stages.forEach((s, k) => s.classList.toggle('is-on', k === i));
  };

  const mm = gsap.matchMedia();
  mm.add(NOT_PHONE, buildWall);
  mm.add(DESKTOP, () => {
    // where each stage's centre sits in the column, and the frame's centre
    let offs = [], centre = 0;
    const measure = () => {
      offs = stages.map((s) => s.offsetTop + s.offsetHeight / 2);
      centre = left.clientHeight / 2;
    };
    // raw scroll r (0..n-1) -> position p: the first 30% of each step rests on a stage, the middle
    // 42% travels to the next one on a smooth curve, and the rest rests again
    const settle = (r) => {
      const i = Math.floor(r);
      if (i >= n - 1) return n - 1;
      const t = Math.min(1, Math.max(0, (r - i - 0.3) / 0.42));
      return i + t * t * (3 - 2 * t);
    };
    const prog = { r: 0 };
    // most frames move only the column: skip the style writes whose value hasn't changed
    const shown = stages.map(() => ''); let fillShown = '';
    const apply = () => {
      const p = settle(prog.r);
      const i = Math.min(n - 2, Math.floor(p)), f = p - i;
      const off = offs[i] + (offs[i + 1] - offs[i]) * f;
      scroller.style.transform = `translate3d(0, ${(centre - off).toFixed(2)}px, 0)`;
      for (let k = 0; k < n; k++) {
        const o = (1 - 0.84 * Math.min(1, Math.abs(p - k))).toFixed(3);
        if (o !== shown[k]) stages[k].style.opacity = shown[k] = o;
      }
      const fx = `scaleX(${(prog.r / (n - 1)).toFixed(4)})`;
      if (fx !== fillShown) fill.style.transform = fillShown = fx;
      setDot(Math.round(p));
    };
    const tl = gsap.timeline({ defaults: { ease: 'none' } });
    tl.to(prog, { r: n - 1, duration: 1, onUpdate: apply }, 0);
    // the two mockup columns drift up at different speeds (a little parallax between them)
    tl.fromTo(colA, { yPercent: 0 }, { yPercent: -46, duration: 1 }, 0);
    tl.fromTo(colB, { yPercent: -18 }, { yPercent: -58, duration: 1 }, 0);
    const st = ScrollTrigger.create({
      trigger: section, start: 'top top', end: 'bottom bottom', animation: tl, scrub: true,
      onRefresh: () => { measure(); apply(); },
    });
    measure();
    apply();
    return () => {
      st.kill();
      tl.kill();
      scroller.style.transform = '';
      stages.forEach((s, k) => { s.style.opacity = ''; shown[k] = ''; });
      fillShown = '';
      setDot(-1);
      gsap.set([colA, colB, fill], { clearProps: 'all' });
    };
  });
  mm.add(TABLET, () => {
    setDot(0);
    stages.forEach((s) => s.classList.add('is-on'));
    return () => setDot(-1);
  });
  mm.add(PHONE, () => {
    // the rail runs from the first step's node to the last. Its fill follows a reading line at 60% of
    // the screen; a step lights once the line reaches its node and dims again only once the line is
    // 48px back above it, so a scroll resting on a node never flickers it
    const rail = section.querySelector('.process__rail');
    const nums = stages.map((s) => s.querySelector('.stage__num'));
    const lit = stages.map(() => false);
    let nodes = [], railTop = 0, len = 1, shown = '';
    // cur starts at -1 too, so force the reset: it clears the markup's lit first node
    cur = null;
    setDot(-1);
    const measure = () => {
      const top = left.getBoundingClientRect().top;
      nodes = nums.map((el) => { const r = el.getBoundingClientRect(); return r.top + r.height / 2 - top; });
      len = Math.max(1, nodes[n - 1] - nodes[0]);
      railTop = top + window.scrollY + nodes[0];
      rail.style.top = `${nodes[0].toFixed(1)}px`;
      rail.style.height = `${len.toFixed(1)}px`;
      dots.forEach((d, k) => { d.style.top = `${(nodes[k] - nodes[0]).toFixed(1)}px`; });
    };
    const apply = (scroll) => {
      const y = scroll + 0.6 * vp.h - railTop;
      const f = Math.min(1, Math.max(0, y / len)).toFixed(4);
      if (f !== shown) { shown = f; fill.style.transform = `scaleY(${f})`; }
      for (let k = 0; k < n; k++) {
        const at = nodes[k] - nodes[0];
        const on = lit[k] ? y >= at - 48 : y >= at;
        if (on === lit[k]) continue;
        lit[k] = on;
        stages[k].classList.toggle('is-lit', on);
        dots[k].classList.toggle('is-on', on);
      }
    };
    const st = ScrollTrigger.create({
      trigger: left, start: 'top bottom', end: 'bottom top',
      onUpdate: (self) => apply(self.scroll()),
      onRefresh: (self) => { measure(); apply(self.scroll()); },
    });
    measure();
    apply(window.scrollY);
    return () => {
      st.kill();
      gsap.set([rail, fill, ...dots], { clearProps: 'all' });
      stages.forEach((s) => s.classList.remove('is-lit'));
    };
  });
  if (mobile) revealLines(section.querySelector('.process__title'));

  return { resize() {} };
}
