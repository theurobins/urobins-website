// About + Services: one sticky stage driven by a single scrubbed timeline.
// Timeline units are "vh of scroll" inside the stage (the stage is 980vh tall,
// so 880 units of sticky travel).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sculpture } from './sculpture.js';

const TOTAL = 880;
export const STORY_MARKS = { about: 125, services: 350 };

// card path keyframes at u = -1 .. 4 (x: vw, y: vh, z: px, ry/rz: deg)
const PATH = [
  { x: 72, y: 58, z: -240, ry: 42, rz: -5, s: 0.9, o: 0 },
  { x: 35, y: 29, z: -60, ry: 24, rz: -3, s: 0.95, o: 1 },
  { x: 3, y: 11, z: 60, ry: 0, rz: 0, s: 1, o: 1 },
  { x: -30, y: -6, z: -140, ry: -30, rz: 1.5, s: 0.92, o: 1 },
  { x: -50, y: -21, z: -380, ry: -96, rz: 3, s: 0.86, o: 0.8 },
  { x: -64, y: -33, z: -640, ry: -150, rz: 4, s: 0.8, o: 0 },
];
const KEYS = Object.keys(PATH[0]);

function cr(p0, p1, p2, p3, t) {
  const t2 = t * t, t3 = t2 * t;
  return 0.5 * (2 * p1 + (-p0 + p2) * t + (2 * p0 - 5 * p1 + 4 * p2 - p3) * t2 + (-p0 + 3 * p1 - 3 * p2 + p3) * t3);
}
function pathAt(u, out) {
  const f = Math.min(PATH.length - 1.0001, Math.max(0, u + 1));
  const i = Math.floor(f), t = f - i;
  const a = PATH[Math.max(0, i - 1)], b = PATH[i], c = PATH[i + 1], d = PATH[Math.min(PATH.length - 1, i + 2)];
  for (const k of KEYS) out[k] = cr(a[k], b[k], c[k], d[k], t);
  return out;
}

function splitChars(el) {
  const words = el.textContent.trim().split(/\s+/);
  el.textContent = '';
  const chars = [];
  words.forEach((w, wi) => {
    const ws = document.createElement('span');
    ws.className = 'word';
    for (const c of w) {
      const cs = document.createElement('span');
      cs.className = 'ch';
      cs.textContent = c;
      ws.appendChild(cs);
      chars.push(cs);
    }
    el.appendChild(ws);
    if (wi < words.length - 1) el.appendChild(document.createTextNode(' '));
  });
  return chars;
}

export function initStory({ reduced }) {
  const section = document.querySelector('.story');
  const pin = section.querySelector('.story__pin');
  const title = section.querySelector('.about__title');
  const pill = section.querySelector('.about__video');
  const video = pill.querySelector('video');
  const services = section.querySelector('.services');
  const svcTitle = services.querySelector('.services__title');
  const cards = [...services.querySelectorAll('.svc-card')];
  const fade = section.querySelector('.story__fade');
  const path = section.querySelector('.about__line path');

  // ---- letters: each line starts scattered on its own arc in depth ----
  const lines = [...title.querySelectorAll('.aline')];
  const lineCfg = [
    { spread: 0.55, rise: -0.16, curve: 0.02, z: -260, ry: 34, rx: 18, rz: -12 },
    { spread: 0.42, rise: -0.05, curve: 0.03, z: -520, ry: -26, rx: 30, rz: -6 },
    { spread: 0.9, rise: 0.06, curve: 0.05, z: -1100, ry: 40, rx: 50, rz: 8 },
  ];
  const fs = () => parseFloat(getComputedStyle(title).fontSize) || 100;
  const letterGroups = lines.map((line, li) => {
    const chars = [];
    line.querySelectorAll('.split').forEach((sp) => chars.push(...splitChars(sp)));
    return { chars, cfg: lineCfg[li] };
  });

  const pillWidth = () => Math.min(Math.max(window.innerWidth * (window.innerWidth < 640 ? 0.26 : 0.215), 96), 460);

  const portal = { fade: 0, t: 0 };
  const deck = { c: 0 };
  let sculpture = null;

  const applyPortal = () => {
    if (portal.fade <= 0.001) {
      services.classList.remove('is-open');
      return;
    }
    services.classList.add('is-open');
    const r = pill.getBoundingClientRect();
    const s = pin.getBoundingClientRect();
    const k = portal.t;
    const top = (r.top - s.top) * (1 - k);
    const left = (r.left - s.left) * (1 - k);
    const right = (s.right - r.right) * (1 - k);
    const bottom = (s.bottom - r.bottom) * (1 - k);
    services.style.clipPath = `inset(${top}px ${right}px ${bottom}px ${left}px round ${2 * (1 - k)}px)`;
    services.style.opacity = portal.fade;
  };

  const pt = {};
  const layoutCards = () => {
    const narrow = window.innerWidth < 760;
    const n = cards.length;
    cards.forEach((card, i) => {
      const u = 0.25 + deck.c * (n - 1 + 1.45) - i;
      if (u < -1 || u > 4) {
        card.style.opacity = 0;
        card.style.visibility = 'hidden';
        return;
      }
      pathAt(u, pt);
      const x = narrow ? pt.x * 0.55 : pt.x;
      const y = narrow ? pt.y * 1.05 : pt.y;
      card.style.visibility = 'visible';
      card.style.opacity = Math.max(0, Math.min(1, pt.o));
      card.style.zIndex = String(Math.round(1000 + pt.z));
      card.style.transform =
        `translate(-50%, -50%) translate3d(${x}vw, ${y}vh, ${pt.z}px) rotateY(${pt.ry}deg) rotateZ(${pt.rz}deg) scale(${pt.s})`;
    });
    if (sculpture) sculpture.setProgress(deck.c);
  };

  // ---- build the timeline ----
  const tl = gsap.timeline({ defaults: { ease: 'none' } });

  letterGroups.forEach(({ chars, cfg }, li) => {
    const mid = (chars.length - 1) / 2;
    tl.fromTo(chars, {
      x: (i) => (i - mid) * cfg.spread * fs(),
      y: (i) => ((i - mid) * cfg.rise + Math.pow(i - mid, 2) * cfg.curve) * fs(),
      z: (i) => cfg.z - Math.abs(i - mid) * 30,
      rotationY: (i) => cfg.ry + (i - mid) * 4,
      rotationX: cfg.rx,
      rotationZ: (i) => cfg.rz + (i - mid) * 1.5,
      opacity: 0.35,
    }, {
      x: 0, y: 0, z: 0, rotationY: 0, rotationX: 0, rotationZ: 0, opacity: 1,
      duration: 62,
      ease: 'power2.out',
      stagger: { each: 1.1, from: 'center' },
    }, li * 6);
  });

  const L = path.getTotalLength();
  gsap.set(path, { strokeDasharray: L, strokeDashoffset: L });
  tl.to(path, { strokeDashoffset: 0, duration: 190, ease: 'power1.inOut' }, 0);

  const gridItems = section.querySelectorAll('.about__grid .eyebrow, .founder, .about__copy p');
  tl.fromTo(gridItems, { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 40, stagger: 7, ease: 'power2.out' }, 52);

  tl.fromTo(pill, { width: 0 }, { width: pillWidth, duration: 80, ease: 'power2.inOut' }, 112);

  // the video pill turns into the services stage, then opens to full screen
  tl.to(portal, { fade: 1, duration: 26, onUpdate: applyPortal }, 214);
  tl.to(portal, { t: 1, duration: 104, ease: 'power3.inOut', onUpdate: applyPortal }, 236);
  tl.fromTo(svcTitle, { opacity: 0.25, y: 40 }, { opacity: 1, y: 0, duration: 80, ease: 'power2.out' }, 262);
  tl.to(deck, { c: 1, duration: 520, onUpdate: layoutCards }, 300);
  tl.to(fade, { opacity: 1, duration: 54 }, 826);
  tl.set({}, {}, TOTAL);

  const st = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    animation: tl,
    scrub: reduced ? true : 0.6,
    invalidateOnRefresh: true,
    onRefresh: () => { applyPortal(); layoutCards(); },
  });

  // video plays only while its pill is on screen
  let playing = false;
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: () => `top+=${window.innerHeight * 3.4} top`,
    onToggle: (self) => {
      if (reduced) return;
      if (self.isActive && !playing) { playing = true; video.play().catch(() => {}); }
      else if (!self.isActive && playing) { playing = false; video.pause(); }
    },
  });

  // sculpture is created lazily as the stage approaches
  ScrollTrigger.create({
    trigger: section,
    start: 'top 200%',
    once: true,
    onEnter: () => {
      sculpture = new Sculpture(services.querySelector('.services__gl'));
      sculpture.setProgress(deck.c);
    },
  });

  layoutCards();

  return {
    st,
    anchor(name) {
      const units = STORY_MARKS[name];
      return st.start + (st.end - st.start) * (units / TOTAL);
    },
    resize() {
      if (sculpture) sculpture.resize();
      layoutCards();
      applyPortal();
    },
    tick(time, scrollY) {
      if (!sculpture) return;
      const vh = window.innerHeight;
      sculpture.visible = portal.fade > 0.01 && scrollY > st.start - vh && scrollY < st.end + vh;
      sculpture.render(time);
    },
  };
}
