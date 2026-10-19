// About + Services: one sticky stage driven by a single scrubbed timeline.
// Timeline units are "vh of scroll" inside the stage (the stage is 1096vh tall, so 996 units of
// sticky travel: LEAD idle units under the hero funnel, then 880 of About + Services).
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import { vp } from './viewport.js';
import { splitLines } from './lines.js';

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
// (rotations and scales solved through the off-axis perspective, so each rest pose projects to the
// reference's card box)
const PATH = [
  { x: 63.2, y: 61.4, z: 0, ry: 20, rz: -2, s: 0.85, o: 1 },
  { x: 34.0, y: 40.6, z: 0, ry: 17, rz: -1, s: 0.86, o: 1 },
  { x: 1.8, y: 21.9, z: 0, ry: 0, rz: 0, s: 1, o: 1 },
  { x: -29.8, y: 0.6, z: 0, ry: -23, rz: 0.5, s: 0.9, o: 1 },
  { x: -62.5, y: -21.5, z: -500, ry: -49, rz: 1, s: 1, o: 1 },
  { x: -92.8, y: -61.6, z: -1400, ry: -66, rz: 1, s: 1, o: 1 },
  { x: -90, y: -88.6, z: -1933, ry: -150, rz: 0, s: 0.78, o: 0.95 },
  { x: -58.5, y: -99.6, z: -1856, ry: -175, rz: 0, s: 1, o: 0.9 },
  { x: -25, y: -110, z: -1900, ry: -185, rz: 0, s: 1, o: 0 },
];
// the cards step one slot at a time on their own clock at these story units, resting between steps
const STEPS = [389, 496, 602, 709, 815];
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

  // ---- letters: tiny and fully opaque, each grows in place while its word swings down from a tilted
  // arc onto the baseline, word by word in reading order ----
  const fs = () => parseFloat(getComputedStyle(title).fontSize) || 100;
  const [line1, line2, line3] = [...title.querySelectorAll('.aline')];
  const tan = (d) => Math.tan((d * Math.PI) / 180);
  // dy(xe): start offset in em for a letter xe em from its word's centre (+ = down); hump: extra lift
  // at 35% of the way; settle: offset at `at` (62%: the tilt has flattened by then)
  const groups = [
    { chars: splitChars(line1.querySelector('.split')), from: 12, to: 54, dy: (xe) => -(xe - 0.3) * tan(45), hump: -0.4, settle: -0.12 },
    { chars: splitChars(line2.querySelectorAll('.split')[0]), from: 17.6, to: 54, dy: (xe) => -xe * tan(16), hump: -0.05, settle: -0.015 },
    { chars: splitChars(line2.querySelectorAll('.split')[1]), from: 28.6, to: 54, dy: (xe) => 0.55 - (xe + 0.45) * tan(40), hump: -0.15, settle: -0.045 },
    // last line: one sagging curve across the whole line (shape measured on a 4.3em line, so xe is
    // normalised to that), the first word leading the rest by 2.6 units, overshooting down at 75%
    {
      chars: splitChars(line3.querySelector('.split')), from: 31.4, lag: 2.6, to: 55.5,
      dy: (xe, hw) => { const x = (xe * 2.15) / hw; return 0.5 - (0.62 * (x - 0.5) * (x - 0.5)) / (2.3 * 2.3) + 0.05 * x; },
      hump: 0, settle: 0.1, at: 0.75,
    },
  ];
  const letterData = [];
  groups.forEach((g) => g.chars.forEach((el) => letterData.push({ el, g, xe: 0, y0: 0, on: false })));
  const measureLetters = () => {
    em = fs();
    groups.forEach((g) => {
      let lo = Infinity, hi = -Infinity;
      g.chars.forEach((c) => { lo = Math.min(lo, c.offsetLeft); hi = Math.max(hi, c.offsetLeft + c.offsetWidth); });
      g.centre = (lo + hi) / 2;
      g.hw = Math.max(0.5, (hi - lo) / 2 / em);
    });
    const firstWord = groups[3].chars[0].parentNode;
    letterData.forEach((d) => {
      const c = d.el;
      d.xe = (c.offsetLeft + c.offsetWidth / 2 - d.g.centre) / em;
      d.y0 = d.g.dy(d.xe, d.g.hw);
      d.from = d.g.from + (d.g.lag && c.parentNode !== firstWord ? d.g.lag : 0);
    });
  };
  // smooth path through (0, y0) (0.35, y0*0.38 + hump) (at, settle) (1, 0), ending at rest
  const hermite = (p0, p1, m0, m1, t) => {
    const t2 = t * t, t3 = t2 * t;
    return (2 * t3 - 3 * t2 + 1) * p0 + (t3 - 2 * t2 + t) * m0 + (-2 * t3 + 3 * t2) * p1 + (t3 - t2) * m1;
  };
  const yAt = (d, k) => {
    const KT = [0, 0.35, d.g.at || 0.62, 1];
    const v = [d.y0, d.y0 * 0.38 + d.g.hump, d.g.settle, 0];
    const m = [(v[1] - v[0]) / KT[1], (v[2] - v[0]) / KT[2], (v[3] - v[1]) / (1 - KT[1]), 0];
    const i = k < KT[1] ? 0 : k < KT[2] ? 1 : 2;
    const h = KT[i + 1] - KT[i];
    return hermite(v[i], v[i + 1], m[i] * h, m[i + 1] * h, (k - KT[i]) / h);
  };
  const letters = { u: 0 };
  const renderLetters = () => {
    for (let i = 0; i < letterData.length; i++) {
      const d = letterData[i];
      const k = Math.min(1, Math.max(0, (letters.u - d.from) / (d.g.to - d.from)));
      const on = k > 0;
      if (on !== d.on) { d.on = on; d.el.style.opacity = on ? '1' : ''; }
      if (!on) continue;
      if (k >= 1) { if (d.done) continue; d.done = true; d.el.style.transform = 'none'; continue; }
      d.done = false;
      const x = 0.08 * Math.max(0, d.xe) * (1 - k) * em;
      const y = yAt(d, k) * em;
      d.el.style.transform = `translate(${x.toFixed(2)}px, ${y.toFixed(2)}px) scale(${k.toFixed(4)})`;
    }
  };

  const pillWidth = () => Math.min(Math.max(window.innerWidth * (window.innerWidth < 640 ? 0.26 : 0.215), 96), 460);
  // the pill keeps its final width in layout and scales up from its centre while the two words slide
  // apart, so nothing re-lays-out while scrolling
  const midWords = [...line2.querySelectorAll(':scope > .split')];
  const pillOpen = { k: 0 };
  // "Path" arrives slanted like an italic and straightens once its letters have landed
  const pathWord = midWords[1].querySelector('.word');
  let pillW = 0, em = 100, parting = false, playing = false;
  const sizePill = () => {
    em = fs();
    pillW = pillWidth();
    pill.style.width = `${pillW}px`;
  };
  const applyPill = () => {
    const k = pillOpen.k;
    // closed: the two words sit 0.38em apart; open: 0.37em / 0.24em either side of the pill
    const shift = ((pillW + 0.61 * em - 0.38 * em) / 2) * (1 - k);
    midWords[0].style.transform = `translate(${shift.toFixed(2)}px, 0)`;
    midWords[1].style.transform = `translate(${(-shift).toFixed(2)}px, 0)`;
    pill.style.transform = `scale(${k.toFixed(4)})`;
    const p = k > 0.001 && k < 0.999;
    if (p !== parting) { parting = p; title.classList.toggle('is-parting', p); }
    syncVideo();
  };
  // the video only decodes while its pill is open and not covered by the Services stage
  function syncVideo() {
    const want = !reduced && pillOpen.k > 0.001 && !covered;
    if (want === playing) return;
    playing = want;
    if (want) video.play().catch(() => {});
    else video.pause();
  }
  sizePill();

  // the teal stage first wipes across the open pill (left to right), then the rect grows to full
  // screen with everything inside it scaling up from 0.3 + 0.7 * (rect width / stage width)
  const portal = { wipe: 0, t: 0 };
  let glide = null;
  // flow runs continuously with the scroll (props, haze); deck counts completed card steps
  const flow = { c: 0 };
  const deck = { s: 0 };
  let sculpture = null;
  const inner = services.querySelector('.services__inner');
  const PILL_R = 0;

  // pill position inside the stage, measured on refresh (the stage is sticky, so it never moves while stuck)
  let pillBox = null;
  let pinW = 1;
  const measurePill = () => {
    // layout offsets ignore transforms, so this is the pill's resting box at full size
    let x = 0, y = 0;
    for (let el = pill; el && el !== pin; el = el.offsetParent) { x += el.offsetLeft; y += el.offsetTop; }
    pinW = pin.clientWidth || 1;
    const pinH = pin.clientHeight || 1;
    pillBox = { top: y, left: x, right: pinW - x - pill.offsetWidth, bottom: pinH - y - pill.offsetHeight };
  };
  let covered = false, growing = false, masked = false;
  const setMask = (m) => { services.style.webkitMaskImage = m; services.style.maskImage = m; };
  const applyPortal = () => {
    // fully open: drop the clip (no extra render surface) and stop painting About underneath
    const full = portal.t >= 0.999 && portal.wipe >= 0.999;
    if (full !== covered) { covered = full; aboutLayer.classList.toggle('is-covered', full); syncVideo(); }
    if (portal.wipe <= 0.001) {
      services.classList.remove('is-open');
      return;
    }
    services.classList.add('is-open');
    if (!pillBox) measurePill();
    // the clip starts from the pill's resting box: never let a late glide leave them apart
    if (glide && glide.progress() < 1) glide.progress(1);
    const k = portal.t;
    // the content keeps its own layer for the whole opening (never toggled mid-motion)
    const g = !full;
    if (g !== growing) { growing = g; inner.classList.toggle('is-growing', g); }
    layoutCards();
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
      // card 0 rides in with the growth and lands on the centre slot as it completes; after that
      // every card moves only when the deck steps
      const u = -0.6 + 1.6 * portal.t + deck.s - i;
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
    if (sculpture) sculpture.setProgress(flow.c);
  };

  // ---- build the timeline (positions below are relative to the end of the lead-in) ----
  const master = gsap.timeline({ defaults: { ease: 'none' } });
  const tl = gsap.timeline({ defaults: { ease: 'none' } });

  tl.to(letters, { u: 60, duration: 60, onUpdate: renderLetters }, 0);

  // the line hooks and spikes while the hero's last bars clear (easing into its main speed), then
  // draws at one constant rate to its tail under the last line, just before the Services wipe
  const L = path.getTotalLength();
  gsap.set(path, { strokeDasharray: L, strokeDashoffset: L });
  tl.to(path, { strokeDashoffset: L * (1 - 0.145), duration: 10, ease: (t) => 1.705 * t - 0.705 * t * t }, 2)
    .to(path, { strokeDashoffset: 0, duration: 200 }, 12);

  // the pill scales open from its centre in step with the line while the words part
  tl.to(pillOpen, { k: 1, duration: 98, onUpdate: applyPill }, 62);

  // the video pill turns into the services stage, then opens to full screen
  const portalEase = CustomEase.create('svcPortal', '0.35,0.05,0.1,0.95');
  tl.to(portal, { wipe: 1, duration: 13, onUpdate: applyPortal }, 213);
  tl.to(portal, { t: 1, duration: 111, ease: portalEase, onUpdate: applyPortal }, 236);
  tl.fromTo(svcTitle, { opacity: 0 }, { opacity: 1, duration: 52, ease: 'power1.out' }, 256);
  tl.to(flow, { c: 1, duration: 590, onUpdate: layoutCards }, 236);

  // the flat teal veil clears in a diagonal sweep (top-left first) onto a darker base, then soft
  // cobalt haze drifts across it. Transform and opacity only, so nothing repaints.
  const veil = services.querySelector('.services__veil');
  const VEIL_A = (25 * Math.PI) / 180;
  const veilReach = () => 0.5 * (Math.cos(VEIL_A) * vp.w + Math.sin(VEIL_A) * vp.h) + 290;
  const sweep = { p: 0 };
  const applyVeil = () => {
    const t = (2 * sweep.p - 1) * veilReach();
    veil.style.transform = `translate(${(t * Math.cos(VEIL_A)).toFixed(1)}px, ${(t * Math.sin(VEIL_A)).toFixed(1)}px) rotate(25deg) scale(13.75)`;
  };
  tl.to(sweep, { p: 1, duration: 83, onUpdate: applyVeil }, 375);
  const [hzA, hzB, hzC] = services.querySelectorAll('.services__haze .hz');
  const X = (px) => () => (px / 1392) * vp.w;
  const Y = (px) => () => (px / 782) * vp.h;
  tl.fromTo(hzA, { x: X(1000), y: Y(60), opacity: 0, rotation: 0 }, { x: X(900), y: Y(80), opacity: 1, duration: 38 }, 440)
    .to(hzA, { x: X(560), y: Y(250), rotation: -6, duration: 39 }, 478)
    .to(hzA, { x: X(640), y: Y(230), rotation: -9, duration: 39 }, 517)
    .to(hzA, { x: X(450), y: Y(170), rotation: -12, duration: 39 }, 556)
    .to(hzA, { x: X(600), y: Y(60), rotation: 0, duration: 40 }, 595)
    .to(hzA, { x: X(650), y: Y(30), duration: 39 }, 635)
    .to(hzA, { opacity: 0, duration: 46 }, 674);
  tl.fromTo(hzB, { x: X(640), y: 0, opacity: 0 }, { opacity: 1, duration: 33 }, 680)
    .to(hzB, { x: X(600), duration: 77 }, 713)
    .to(hzB, { x: X(700), duration: 36 }, 790);
  tl.fromTo(hzC, { x: X(1180), y: Y(640), opacity: 0 }, { opacity: 0.9, duration: 52 }, 700)
    .to(hzC, { x: X(1080), y: Y(660), duration: 74 }, 752);
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
    onRefresh: (self) => {
      measureLetters(); renderLetters(); measurePill(); applyLift(); applyPill();
      // the deck rests on however many steps are already behind the scroll position
      gsap.killTweensOf(deck);
      deck.s = STEPS.filter((u) => self.scroll() > self.start + ((LEAD + u) * vp.h) / 100).length;
      applyPortal(); layoutCards(); applyVeil();
    },
  });

  // the block glides up 24.3vh as the pill starts opening. In the reference this runs on its own
  // clock (it keeps easing in while the scroll is paused), so it is fired here, not scrubbed.
  glide = gsap.to(lift, { k: 1, duration: 2.7, ease: 'power3.out', delay: 0.08, paused: true, onUpdate: applyLift });
  if (reduced) glide.progress(1);
  else {
    ScrollTrigger.create({
      trigger: section,
      start: () => st.start + ((LEAD + 62) * vp.h) / 100,
      onEnter: () => glide.play(),
      onLeaveBack: () => glide.reverse(),
    });
  }

  // the 3D scene (and three.js itself) loads once the intro has settled, in idle time;
  // this trigger is only a fallback for visitors who start scrolling straight away
  let warming = null;
  const warm = () => {
    if (!warming) {
      warming = loadSculpture().then(({ Sculpture }) => {
        sculpture = new Sculpture(services.querySelector('.services__gl'), services.querySelector('.services__gl--front'));
        sculpture.setProgress(flow.c);
        return sculpture.warm();
      }).catch((e) => console.warn('[services] 3D scene unavailable', e));
    }
    return warming;
  };
  ScrollTrigger.create({ trigger: section, start: 'top 200%', once: true, onEnter: warm });

  // card steps: each one is a 0.95 s power3.out move, whichever way the scroll crosses it
  const stepTo = (n) => gsap.to(deck, { s: n, duration: 0.95, ease: 'power3.out', overwrite: true, onUpdate: layoutCards });
  STEPS.forEach((unit, i) => ScrollTrigger.create({
    trigger: section,
    start: () => st.start + ((LEAD + unit) * vp.h) / 100,
    onEnter: () => stepTo(i + 1),
    onLeaveBack: () => stepTo(i),
  }));

  // the grid text reveals in two timed beats (like the reference, they finish even if scrolling
  // pauses): the first paragraph line by line with the labels as the letters land, then the second
  // paragraph and the founder during the glide. Scrolling back above a beat reverses it.
  const eyebrows = [...section.querySelectorAll('.about__grid .eyebrow')];
  const [p1, p2] = section.querySelectorAll('.about__copy p');
  const founderImg = section.querySelector('.founder__img');
  const founderText = section.querySelector('.founder__text');
  const beat1 = gsap.timeline({ paused: true });
  const beat2 = gsap.timeline({ paused: true });
  const buildBeats = () => {
    const progress = [beat1.progress(), beat2.progress()];
    beat1.clear(); beat2.clear();
    const lines1 = splitLines(p1, 'a-line');
    const lines2 = splitLines(p2, 'a-line');
    gsap.set([p1, p2], { opacity: 1 });
    const rise = { y: 10, opacity: 0 };
    const to = { y: 0, opacity: 1, ease: 'power2.out', duration: 0.6 };
    beat1.fromTo(eyebrows[0], rise, to, 0)
      .fromTo(lines1, rise, { ...to, stagger: 0.067 }, 0.03)
      .fromTo(eyebrows[1], rise, to, 0.27)
      .fromTo(pathWord, { skewX: -14 }, { skewX: 0, duration: 0.3, ease: 'power2.inOut' }, 0);
    beat2.fromTo(lines2, rise, { ...to, duration: 0.7, stagger: 0.067 }, 0)
      .fromTo(founderImg, rise, { ...to, duration: 0.7 }, 0.03)
      .fromTo(founderText, rise, { ...to, duration: 0.7 }, 0.17);
    beat1.progress(progress[0]); beat2.progress(progress[1]);
  };
  if (!reduced) {
    buildBeats();
    const beat = (tl, unit) => ScrollTrigger.create({
      trigger: section,
      start: () => `top+=${((LEAD + unit) * vp.h) / 100} top`,
      onEnter: () => tl.play(),
      onLeaveBack: () => tl.reverse(),
    });
    beat(beat1, 56);
    beat(beat2, 111);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(buildBeats);
  } else {
    gsap.set([...eyebrows, p1, p2, founderImg, founderText], { opacity: 1 });
  }

  // the About smoke loop only runs while the stage is on screen; the video starts buffering then
  ScrollTrigger.create({
    trigger: section, start: 'top bottom', end: 'bottom top', toggleClass: { targets: section, className: 'is-live' },
    onEnter: () => { if (video.preload !== 'auto') video.preload = 'auto'; },
  });

  fitTitles();
  measureLetters();
  renderLetters();
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
      if (!reduced) buildBeats();
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
