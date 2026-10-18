// About + Services: one sticky stage driven by a single scrubbed timeline.
// Timeline units are "vh of scroll" inside the stage (the stage is 1096vh tall, so 996 units of
// sticky travel: LEAD idle units under the hero funnel, then 880 of About + Services).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { vp } from './viewport.js';

// The stage pins under the hero from 73.5vh of scroll, so it idles for LEAD units while the
// hero's funnel plays over it; the blue line starts as the last bars collapse.
const LEAD = 116;

// three.js and the Services scene ship as a separate script (js/sculpture.js), fetched after the
// intro so the first paint only has to parse the small main bundle
const here = document.currentScript && document.currentScript.src;
const SCULPTURE_SRC = here ? new URL('sculpture.js', here).href : 'js/sculpture.js';
function loadSculpture() {
  if (window.UrobinsSculpture) return Promise.resolve(window.UrobinsSculpture);
  return new Promise((resolve, reject) => {
    const s = document.createElement('script');
    s.src = SCULPTURE_SRC;
    s.async = true;
    s.onload = () => (window.UrobinsSculpture ? resolve(window.UrobinsSculpture) : reject(new Error('sculpture missing')));
    s.onerror = reject;
    document.head.appendChild(s);
  });
}
const TOTAL = 880 + LEAD;
export const STORY_MARKS = { about: 125 + LEAD, services: 350 + LEAD };

// card path keyframes at u = -1 .. 7 (x: vw, y: vh, z: px, ry/rz: deg; perspective 1400px from the
// viewport centre). Cards come in from the bottom-right, sit at the centre (u = 1), recede up the
// left edge, then turn past edge-on and drift back across the top-left mirrored.
const PATH = [
  { x: 63.2, y: 61.4, z: 0, ry: 40, rz: -2, s: 0.95, o: 1 },
  { x: 32.4, y: 41.6, z: 0, ry: 34, rz: -1, s: 0.96, o: 1 },
  { x: 1.8, y: 21.9, z: 0, ry: 0, rz: 0, s: 1, o: 1 },
  { x: -30.2, y: 0, z: 0, ry: -36, rz: 0.5, s: 0.97, o: 1 },
  { x: -71.4, y: -25.2, z: -787, ry: -75, rz: 1, s: 1, o: 1 },
  { x: -92.8, y: -61.6, z: -1400, ry: -100, rz: 1, s: 1, o: 1 },
  { x: -90, y: -88.6, z: -1933, ry: -150, rz: 0, s: 1, o: 0.95 },
  { x: -58.5, y: -99.6, z: -1856, ry: -175, rz: 0, s: 1, o: 0.9 },
  { x: -25, y: -110, z: -1900, ry: -185, rz: 0, s: 1, o: 0 },
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

export function initStory({ reduced, smooth }) {
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
  const aboutLayer = section.querySelector('.about');
  // the About block assembles 24.3vh lower, then glides up into place while the pill opens
  const LIFT = 0.243;
  const lift = { k: 0 };
  const shiftPx = () => (1 - lift.k) * LIFT * vp.h;
  const applyLift = () => { aboutLayer.style.transform = `translate3d(0, ${shiftPx().toFixed(2)}px, 0)`; };

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
  // the pill keeps its final width in layout; it opens with a clip while the two words slide apart,
  // so nothing re-lays-out while scrolling
  const midWords = [...title.querySelectorAll('.aline--mid > .split')];
  const pillOpen = { k: 0 };
  let pillW = 0, em = 100;
  const sizePill = () => {
    em = fs();
    pillW = pillWidth();
    pill.style.width = `${pillW}px`;
  };
  const applyPill = () => {
    // closed: the two words sit a normal word-space apart; open: 0.22em either side of the pill
    const shift = ((pillW + 0.44 * em - 0.26 * em) / 2) * (1 - pillOpen.k);
    midWords[0].style.transform = `translate3d(${shift.toFixed(2)}px, 0, 0)`;
    midWords[1].style.transform = `translate3d(${(-shift).toFixed(2)}px, 0, 0)`;
    const inset = (50 * (1 - pillOpen.k)).toFixed(3);
    pill.style.clipPath = `inset(0 ${inset}% 0 ${inset}%)`;
  };
  sizePill();

  // the teal stage first wipes across the open pill (left to right), then the rect grows to full
  // screen with everything inside it scaling up from 0.3 + 0.7 * (rect width / stage width)
  const portal = { wipe: 0, t: 0 };
  const deck = { c: 0 };
  let sculpture = null;
  const inner = services.querySelector('.services__inner');
  const PILL_R = 2;

  // pill position inside the stage, measured on refresh (the stage is sticky, so it never moves while stuck)
  let pillBox = null;
  let pinW = 1;
  const measurePill = () => {
    const r = pill.getBoundingClientRect();
    const s = pin.getBoundingClientRect();
    // remove the current glide offset so the box is the pill's resting position
    const sh = shiftPx();
    pinW = s.width || 1;
    pillBox = { top: r.top - s.top - sh, left: r.left - s.left, right: s.right - r.right, bottom: s.bottom - r.bottom + sh };
  };
  let covered = false, growing = false, masked = false;
  const setMask = (m) => { services.style.webkitMaskImage = m; services.style.maskImage = m; };
  const applyPortal = () => {
    // fully open: drop the clip (no extra render surface) and stop painting About underneath
    const full = portal.t >= 0.999 && portal.wipe >= 0.999;
    if (full !== covered) { covered = full; aboutLayer.classList.toggle('is-covered', full); }
    if (portal.wipe <= 0.001) {
      services.classList.remove('is-open');
      return;
    }
    services.classList.add('is-open');
    if (!pillBox) measurePill();
    const k = portal.t;
    // the content layer only holds a composited layer while it is actually scaling
    const g = k > 0.001 && k < 0.999;
    if (g !== growing) { growing = g; inner.classList.toggle('is-growing', g); }
    if (full) {
      services.style.clipPath = 'none';
      inner.style.transform = '';
      return;
    }
    const pw = pinW - pillBox.left - pillBox.right;
    const top = pillBox.top * (1 - k);
    const left = pillBox.left * (1 - k);
    const right = pillBox.right * (1 - k) + (1 - portal.wipe) * pw;
    const bottom = pillBox.bottom * (1 - k);
    services.style.clipPath =
      `inset(${top.toFixed(1)}px ${right.toFixed(1)}px ${bottom.toFixed(1)}px ${left.toFixed(1)}px round ${(PILL_R * (1 - k)).toFixed(2)}px)`;
    // soft leading edge while the wipe crosses the pill
    if (portal.wipe < 0.999) {
      const x = pillBox.left + portal.wipe * pw;
      setMask(`linear-gradient(90deg, #000 ${(x - 26).toFixed(1)}px, transparent ${x.toFixed(1)}px)`);
      masked = true;
    } else if (masked) {
      setMask('');
      masked = false;
    }
    const rectW = pinW - (pillBox.left + pillBox.right) * (1 - k);
    inner.style.transform = `scale(${(0.3 + 0.7 * (rectW / pinW)).toFixed(4)})`;
  };

  // titles stay on one line: if any is too long for its card, all of them step down to the same size
  const cardTitles = cards.map((c) => c.querySelector('.svc-card__title'));
  const fitTitles = () => {
    cardTitles.forEach((t) => { t.style.fontSize = ''; });
    let k = 1;
    cardTitles.forEach((t) => { if (t.scrollWidth > t.clientWidth) k = Math.min(k, t.clientWidth / t.scrollWidth); });
    if (k >= 1) return;
    const size = Math.floor(parseFloat(getComputedStyle(cardTitles[0]).fontSize) * k * 10) / 10;
    cardTitles.forEach((t) => { t.style.fontSize = `${size}px`; });
  };

  const pt = {};
  const layoutCards = () => {
    const narrow = window.innerWidth < 760;
    cards.forEach((card, i) => {
      // 110 scroll units per slot; card 0 reaches the centre as the portal finishes opening
      const u = -0.05 + deck.c * 5.35 - i;
      const on = u >= -1 && u <= 7;
      if (card._on !== on) {
        card._on = on;
        card.style.visibility = on ? 'visible' : 'hidden';
        if (!on) card.style.opacity = 0;
      }
      if (!on) return;
      pathAt(u, pt);
      const x = narrow ? pt.x * 0.55 : pt.x;
      const y = narrow ? pt.y * 1.05 : pt.y;
      card.style.opacity = Math.max(0, Math.min(1, pt.o)).toFixed(3);
      card.style.transform = `translate(-50%, -50%) translate3d(${x.toFixed(2)}vw, ${y.toFixed(2)}vh, ${pt.z.toFixed(1)}px) ` +
        `rotateY(${pt.ry.toFixed(2)}deg) rotateZ(${pt.rz.toFixed(2)}deg) scale(${pt.s.toFixed(4)})`;
    });
    if (sculpture) sculpture.setProgress(deck.c);
  };

  // ---- build the timeline (positions below are relative to the end of the lead-in) ----
  const master = gsap.timeline({ defaults: { ease: 'none' } });
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
      opacity: 0,
    }, {
      x: 0, y: 0, z: 0, rotationY: 0, rotationX: 0, rotationZ: 0, opacity: 1,
      duration: 62,
      ease: 'power2.out',
      stagger: { each: 1.1, from: 'center' },
    }, 6 + li * 6);
  });

  const L = path.getTotalLength();
  gsap.set(path, { strokeDasharray: L, strokeDashoffset: L });
  tl.to(path, { strokeDashoffset: 0, duration: 190, ease: 'power1.inOut' }, 0);

  const gridItems = section.querySelectorAll('.about__grid .eyebrow, .founder, .about__copy p');
  tl.fromTo(gridItems, { opacity: 0, y: 34 }, { opacity: 1, y: 0, duration: 40, stagger: 9, ease: 'power2.out' }, 40);
  tl.to(lift, { k: 1, duration: 95, ease: 'power2.out', onUpdate: applyLift }, 100);

  tl.to(pillOpen, { k: 1, duration: 82, ease: 'power2.inOut', onUpdate: applyPill }, 104);

  // the video pill turns into the services stage, then opens to full screen
  const portalEase = CustomEase.create('svcPortal', '0.35,0.05,0.1,0.95');
  tl.to(portal, { wipe: 1, duration: 13, onUpdate: applyPortal }, 213);
  tl.to(portal, { t: 1, duration: 111, ease: portalEase, onUpdate: applyPortal }, 236);
  tl.fromTo(svcTitle, { opacity: 0 }, { opacity: 1, duration: 52, ease: 'power1.out' }, 256);
  tl.to(deck, { c: 1, duration: 590, onUpdate: layoutCards }, 236);
  // quick fade to black, then a black hold before Metrics
  const tail = { f: 0 };
  tl.to(tail, { f: 1, duration: 26, ease: 'power2.out', onUpdate: () => { fade.style.opacity = tail.f; } }, 826);
  tl.set({}, {}, TOTAL - LEAD);
  master.add(tl, LEAD);

  const st = ScrollTrigger.create({
    trigger: section,
    start: 'top top',
    end: 'bottom bottom',
    animation: master,
    // Lenis already smooths the scroll; a second scrub lag on top reads as rubber-banding
    scrub: smooth || reduced ? true : 0.5,
    invalidateOnRefresh: true,
    onRefreshInit: () => { sizePill(); fitTitles(); },
    // measure once layout has settled, never in the middle of a scrub
    onRefresh: () => { measurePill(); applyLift(); applyPill(); applyPortal(); layoutCards(); },
  });

  // video plays only while its pill is on screen
  let playing = false;
  ScrollTrigger.create({
    trigger: section,
    start: 'top bottom',
    end: () => `top+=${vp.h * (3.4 + LEAD / 100)} top`,
    onToggle: (self) => {
      if (reduced) return;
      if (self.isActive && !playing) { playing = true; video.play().catch(() => {}); }
      else if (!self.isActive && playing) { playing = false; video.pause(); }
    },
  });

  // the 3D scene (and three.js itself) loads once the intro has settled, in idle time;
  // this trigger is only a fallback for visitors who start scrolling straight away
  let warming = null;
  const warm = () => {
    if (!warming) {
      warming = loadSculpture().then(({ Sculpture }) => {
        sculpture = new Sculpture(services.querySelector('.services__gl'), services.querySelector('.services__gl--front'));
        sculpture.setProgress(deck.c);
        return sculpture.warm();
      }).catch((e) => console.warn('[services] 3D scene unavailable', e));
    }
    return warming;
  };
  ScrollTrigger.create({ trigger: section, start: 'top 200%', once: true, onEnter: warm });

  // the About smoke loop only runs while the stage is on screen
  ScrollTrigger.create({ trigger: section, start: 'top bottom', end: 'bottom top', toggleClass: { targets: section, className: 'is-live' } });

  fitTitles();
  applyPill();
  applyLift();
  measurePill();
  applyPortal();
  layoutCards();

  return {
    st,
    anchor(name) {
      const units = STORY_MARKS[name];
      return st.start + (st.end - st.start) * (units / TOTAL);
    },
    warm,
    resize() {
      if (sculpture) sculpture.resize();
      sizePill();
      applyPill();
      layoutCards();
      applyPortal();
    },
    tick(time, scrollY) {
      if (!sculpture) return;
      // nothing to draw before the portal opens or once the black fade has covered the stage
      sculpture.visible = portal.wipe > 0.01 && tail.f < 0.995 && scrollY > st.start - vp.h && scrollY <= st.end;
      sculpture.render(time);
    },
  };
}
