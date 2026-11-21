// About stage: one sticky stage driven by a single scrubbed timeline. The headline assembles letter
// by letter while a blue line draws through the stage, the video pill opens inside the title, the
// copy reveals in two beats, and finally the pill becomes a portal that grows to fill the screen
// with the next chapter's header (the Impact cards then slide up over it).
// Timeline units are "vh of scroll" inside the stage: LEAD idle units under the hero funnel, then
// TOTAL - LEAD of About.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { vp } from './viewport.js';
import { splitLines } from './lines.js';
import { latch } from './latch.js';
import { samplePath } from './path-sample.js';
import { cubicBezier } from './ease.js';
import { isPhone, PHONE_LAND } from './breakpoints.js';

// The stage pins under the hero from 69.5vh of scroll, so it idles for LEAD units while the
// hero's funnel plays over it; the blue line's hook and spike draw while the last bars collapse.
export const LEAD = 116;
// the portal is fully open at 315; the stage holds it while the Impact cards slide in over its
// lower half (they start 56vh before the stage unpins), so the hand-over never shows a blank screen
export const TOTAL = 372 + LEAD;
export const STORY_MARKS = { about: 125 + LEAD };

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

// phones: the line takes a portrait path through the gap between the title and the copy (the mobile
// CSS fits the SVG to that gap), entering from the left edge, looping once and leaving on the right
const PORTRAIT_LINE = 'M -12 24 C 40 34, 92 70, 132 112 C 168 150, 206 176, 248 172 C 292 168, 320 130, 306 100 ' +
  'C 294 74, 258 78, 254 108 C 250 146, 292 196, 342 212 C 364 219, 386 222, 404 222';
// phones in landscape: the title holds the left of the stage and the copy the right, so the line (over
// the whole stage, 844x390) enters low on the left, runs under the title, loops once in the gap
// between the two and leaves along the bottom under the founder
const LANDSCAPE_LINE = 'M -12 352 C 70 346, 150 318, 236 318 C 322 318, 372 346, 410 330 C 446 315, 452 278, 428 262 ' +
  'C 404 246, 380 270, 392 296 C 404 322, 452 336, 500 338 C 590 342, 690 350, 760 390 C 790 407, 830 412, 860 412';

export function initStory({ reduced, smooth }) {
  // decided once (only the line's shape follows a later crossing of the phone breakpoint)
  const mobile = isPhone();
  const section = document.querySelector('.story');
  const pin = section.querySelector('.story__pin');
  const title = section.querySelector('.about__title');
  const pill = section.querySelector('.about__video');
  const video = pill.querySelector('video');
  const portal = section.querySelector('.portal');
  const inner = portal.querySelector('.portal__inner');
  const headLines = [...portal.querySelectorAll('.line__in')];
  const headSoft = [...portal.querySelectorAll('.eyebrow, .section__lede')];
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
  const groups = [
    { chars: splitChars(line1.querySelector('.split')), from: 12, to: 59.5, ty: 59.5, c: (j) => -0.57 * Math.sin(Math.PI * j), tilt: 1.22, flat: 0.78, bend: 0.37 },
    { chars: splitChars(line2.querySelectorAll('.split')[0]), from: 19.5, to: 60, ty: 60, c: (j) => -0.28 * Math.sin(Math.PI * j), tilt: 0.32, flat: 0.9 },
    { chars: splitChars(line2.querySelectorAll('.split')[1]), from: 26.5, to: 59.5, ty: 63, c: (j) => 0.25 * Math.pow(1 - j, 3) - 0.45 * Math.sin(Math.PI * j), tilt: 0.95, flat: 0.85 },
    { chars: splitChars(line3.querySelector('.split')), from: 29.5, to: 60, ty: 60, line3: true },
  ];
  const letterData = [];
  groups.forEach((g) => g.chars.forEach((el) => letterData.push({ el, g, xe: 0, xw: 0, on: false, done: false })));
  let em = 100;
  const measureLetters = () => {
    em = fs();
    groups.forEach((g) => {
      let lo = Infinity, hi = -Infinity;
      g.chars.forEach((c) => { lo = Math.min(lo, c.offsetLeft); hi = Math.max(hi, c.offsetLeft + c.offsetWidth); });
      g.centre = (lo + hi) / 2;
      const first = g.chars[0], last = g.chars[g.chars.length - 1];
      g.hw = Math.max(0.5, ((last.offsetLeft + last.offsetWidth / 2) - (first.offsetLeft + first.offsetWidth / 2)) / 2 / em);
    });
    const wordCentre = new Map();
    letterData.forEach((d) => {
      const w = d.el.parentNode;
      if (wordCentre.has(w)) return;
      let lo = Infinity, hi = -Infinity;
      for (const c of w.children) { lo = Math.min(lo, c.offsetLeft); hi = Math.max(hi, c.offsetLeft + c.offsetWidth); }
      wordCentre.set(w, (lo + hi) / 2);
    });
    letterData.forEach((d) => {
      const c = d.el;
      d.xe = (c.offsetLeft + c.offsetWidth / 2 - d.g.centre) / em;
      d.xw = (c.offsetLeft + c.offsetWidth / 2 - wordCentre.get(c.parentNode)) / em;
      d.done = false;
    });
  };
  const letters = { u: 0 };
  // phones: the funnel's last bars leave an almost empty frame, so the letters start 10 units
  // (about 85px of scroll) sooner and the title is already arriving as they clear
  const EARLY = mobile ? 10 : 0;
  const renderLetters = () => {
    const u = letters.u + EARLY;
    for (let i = 0; i < letterData.length; i++) {
      const d = letterData[i], g = d.g;
      const k = Math.min(1, Math.max(0, (u - g.from) / (g.to - g.from)));
      const j = Math.min(1, Math.max(0, (u - g.from) / (g.ty - g.from)));
      const on = k > 0;
      if (on !== d.on) { d.on = on; d.el.style.opacity = on ? '1' : ''; }
      if (!on) continue;
      if (k >= 1 && j >= 1) { if (!d.done) { d.done = true; d.el.style.transform = 'none'; } continue; }
      d.done = false;
      let y;
      if (g.line3) {
        const xn = d.xe / g.hw;
        y = Math.max(0, 1 - k / 0.7) * (-0.578 * xn * xn + 0.237 * xn) + 0.15 * Math.sin(Math.PI * k) * (1 - 0.83 * xn * xn);
      } else {
        // the word rides a tilted line that flattens as it grows; "Clear" also arches (ends low)
        y = g.c(j) - d.xe * g.tilt * Math.max(0, 1 - k / g.flat);
        if (g.bend) y += g.bend * Math.min(1, Math.max(0, (0.9 - k) / 0.5)) * d.xw * d.xw;
      }
      d.el.style.transform = `translate(0px, ${(y * em).toFixed(2)}px) scale(${k.toFixed(4)})`;
    }
  };

  // ---- the pill keeps its final width in layout and scales up from its centre while the two words
  // slide apart, so nothing re-lays-out while scrolling ----
  // (a phone on its side sizes it by the title, which is sized by the height there)
  const pillWidth = () => Math.min(Math.max(window.matchMedia(PHONE_LAND).matches ? 2.7 * fs() : window.innerWidth * (mobile ? 0.32 : window.innerWidth < 640 ? 0.26 : 0.215), 96), 460);
  const midWords = [...line2.querySelectorAll(':scope > .split')];
  const pillOpen = { k: 0 };
  // "Path" arrives slanted like an italic and straightens once its letters have landed
  const pathWord = midWords[1].querySelector('.word');
  let pillW = 0, playing = false;
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
    syncVideo();
  };
  // the video only decodes while its pill is open (starting a little before, while it is still at
  // scale 0, so the first decode is not in the frame the glide starts) and not under the portal
  function syncVideo() {
    const want = !reduced && !covered && (pillOpen.k > 0.001 || letters.u > 50);
    if (want === playing) return;
    playing = want;
    if (want) video.play().catch(() => { });
    else video.pause();
  }
  sizePill();

  // ---- the portal: the pill's content first wipes (left to right, a 20deg slanted soft edge) to
  // the panel, then the rect grows to full screen with everything inside it scaling up from
  // 0.3 + 0.7 * (rect width / stage width) ----
  const port = { wipe: 0, t: 0 };
  let pillBox = null;
  let pinW = 1, pinH = 1;
  const measurePill = () => {
    // layout offsets ignore transforms, so this is the pill's resting box at full size
    let x = 0, y = 0;
    for (let el = pill; el && el !== pin; el = el.offsetParent) { x += el.offsetLeft; y += el.offsetTop; }
    pinW = pin.clientWidth || 1;
    pinH = pin.clientHeight || 1;
    pillBox = { top: y, left: x, right: pinW - x - pill.offsetWidth, bottom: pinH - y - pill.offsetHeight };
  };
  let covered = false, growing = false, masked = false;
  const setMask = (m) => { portal.style.webkitMaskImage = m; portal.style.maskImage = m; };
  // phones: the title's first letter sits just outside the growing rect's left edge late in the
  // opening, where a sliver of it would trail beside the header, so the title fades as the rect grows
  let titleOp = '';
  const fadeTitle = (k) => {
    const f = Math.min(1, Math.max(0, (k - 0.2) / 0.4));
    const o = mobile && f > 0 ? (1 - f * f * (3 - 2 * f)).toFixed(3) : '';
    if (o !== titleOp) title.style.opacity = titleOp = o;
  };
  const applyPortal = () => {
    // fully open: drop the clip (no extra render surface) and stop painting About underneath
    const full = port.t >= 0.999 && port.wipe >= 0.999;
    if (full !== covered) { covered = full; aboutLayer.classList.toggle('is-covered', full); syncVideo(); }
    fadeTitle(port.wipe > 0.001 ? port.t : 0);
    if (port.wipe <= 0.001) {
      portal.classList.remove('is-open');
      return;
    }
    portal.classList.add('is-open');
    if (!pillBox) measurePill();
    const k = port.t;
    // the content keeps its own layer for the whole opening (never toggled mid-motion)
    const g = !full;
    if (g !== growing) { growing = g; inner.classList.toggle('is-growing', g); }
    if (full) {
      portal.style.clipPath = 'none';
      inner.style.transform = '';
      return;
    }
    const pw = pinW - pillBox.left - pillBox.right;
    const top = pillBox.top * (1 - k);
    const left = pillBox.left * (1 - k);
    const right = pillBox.right * (1 - k);
    const bottom = pillBox.bottom * (1 - k);
    portal.style.clipPath = `inset(${top.toFixed(1)}px ${right.toFixed(1)}px ${bottom.toFixed(1)}px ${left.toFixed(1)}px)`;
    if (port.wipe < 0.999) {
      const pillH = pinH - pillBox.top - pillBox.bottom;
      const A = (70 * Math.PI) / 180, sA = Math.sin(A), cA = Math.cos(A);
      const soft = 26 / sA, half = 0.182 * pillH;
      const xe = pillBox.left - half + port.wipe * (pw + 2 * half + soft);
      const ym = pillBox.top + pillH / 2;
      const p = (xe - pinW / 2) * sA - (ym - pinH / 2) * cA + (pinW * sA + pinH * cA) / 2;
      setMask(`linear-gradient(70deg, #000 ${(p - 26).toFixed(1)}px, transparent ${p.toFixed(1)}px)`);
      masked = true;
    } else if (masked) {
      setMask('');
      masked = false;
    }
    const rectW = pinW - (pillBox.left + pillBox.right) * (1 - k);
    inner.style.transform = `scale(${(0.3 + 0.7 * (rectW / pinW)).toFixed(4)})`;
  };

  // ---- build the timeline (positions below are relative to the end of the lead-in) ----
  const master = gsap.timeline({ defaults: { ease: 'none' } });
  const tl = gsap.timeline({ defaults: { ease: 'none' } });

  tl.to(letters, { u: 64, duration: 64, onUpdate: () => { renderLetters(); syncVideo(); } }, 0);

  // the line hooks and spikes while the hero's last bars clear (easing into its main speed), then
  // draws at one constant rate to its tail under the last line, just before the portal opens.
  // With a non-scaling stroke the dash is laid out in screen pixels, so measure the on-screen length.
  // The line is drawn as SEG consecutive pieces of equal on-screen length: a dash change repaints
  // only the piece being drawn, not a viewport-sized path every frame.
  // the line's shape follows the layout it is measured in (the phone CSS fits the SVG to the copy's
  // gap), so a window narrowed to a phone, or widened past one, gets the right line
  const lineSvg = path.ownerSVGElement;
  const SHAPES = {
    wide: [lineSvg.getAttribute('viewBox'), path.getAttribute('d')],
    portrait: ['0 0 390 250', PORTRAIT_LINE],
    land: ['0 0 844 390', LANDSCAPE_LINE],
  };
  let shape = 'wide';
  const shapeLine = () => {
    const m = window.matchMedia(PHONE_LAND).matches ? 'land' : isPhone() ? 'portrait' : 'wide';
    if (m === shape) return;
    shape = m;
    lineSvg.setAttribute('viewBox', SHAPES[m][0]);
    path.setAttribute('d', SHAPES[m][1]);
    pts = null;
  };
  const lineDraw = { f: 0 };
  const SEG = 10, SAMPLES = 1200;
  const segs = Array.from({ length: SEG }, () => {
    const el = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    lineSvg.appendChild(el);
    return { el, S: 0, L: 1, last: '' };
  });
  path.style.visibility = 'hidden';
  let lineLen = 1;
  const applyLine = () => {
    const D = lineDraw.f * lineLen;
    for (const s of segs) {
      const v = (s.L + 2 - Math.min(s.L, Math.max(0, D - s.S))).toFixed(1);
      if (v !== s.last) { s.last = v; s.el.style.strokeDashoffset = v; }
    }
  };
  // the samples are in viewBox units, so they never change: take them once per shape (refreshes only
  // redo the on-screen lengths)
  let pts = null;
  const measureLine = () => {
    shapeLine();
    const box = lineSvg.viewBox.baseVal;
    const sx = lineSvg.clientWidth / box.width, sy = lineSvg.clientHeight / box.height;
    if (!pts) {
      pts = samplePath(path, SAMPLES);
      if (!pts) {
        const Lu = path.getTotalLength();
        pts = Array.from({ length: SAMPLES + 1 }, (_, i) => path.getPointAtLength((Lu * i) / SAMPLES));
      }
    }
    const cum = [0];
    for (let i = 1; i <= SAMPLES; i++) cum.push(cum[i - 1] + Math.hypot((pts[i].x - pts[i - 1].x) * sx, (pts[i].y - pts[i - 1].y) * sy));
    lineLen = cum[SAMPLES];
    let a = 0;
    segs.forEach((s, k) => {
      let b = a;
      const end = ((k + 1) * lineLen) / SEG;
      while (b < SAMPLES && (k === SEG - 1 || cum[b] < end)) b++;
      s.S = cum[a];
      s.L = Math.max(0.01, cum[b] - cum[a]);
      s.el.setAttribute('d', 'M' + pts.slice(a, b + 1).map((p) => `${p.x.toFixed(2)} ${p.y.toFixed(2)}`).join(' L'));
      s.el.style.strokeDasharray = `${(s.L + 2).toFixed(1)} ${(s.L + 2).toFixed(1)}`;
      s.last = '';
      a = b;
    });
    applyLine();
  };
  measureLine();
  // the hook's tip shows as a short stub first, then the hook and spike draw
  tl.to(lineDraw, { f: 0.021, duration: 0.6, ease: 'none', onUpdate: applyLine }, 0)
    .to(lineDraw, { f: 0.145, duration: 7, ease: (t) => 1.79 * t - 0.79 * t * t, onUpdate: applyLine }, 5)
    .to(lineDraw, { f: 1, duration: 190, onUpdate: applyLine }, 12);

  // the pill scales open from its centre in step with the line while the words part; the block
  // glides up 24.3vh as it starts, scrubbed with the scroll
  tl.to(pillOpen, { k: 1, duration: 98, onUpdate: applyPill }, 62);
  tl.to(lift, { k: 1, duration: 44, ease: 'power2.inOut', onUpdate: applyLift }, 62);

  // the video pill turns into the next chapter's panel, then opens to full screen while its
  // header slides up out of its line masks
  const portalEase = cubicBezier(0.35, 0.05, 0.1, 0.95);
  tl.to(port, { wipe: 1, duration: 13, onUpdate: applyPortal }, 205);
  tl.to(port, { t: 1, duration: 90, ease: portalEase, onUpdate: applyPortal }, 225);
  tl.fromTo(headLines, { yPercent: 108, rotate: 2.2, transformOrigin: '0% 100%' }, { yPercent: 0, rotate: 0, duration: 46, ease: 'power3.out', stagger: 6 }, 262);
  // phones place the header high, where the portal's edge crosses its first line: the tilted lines'
  // glyph tops would show as fragments mid-rise, so each line also fades up as it rises. A staggered
  // fromTo only writes a line's from-state once that line starts, so the later lines are put there
  // up front (and again after a refresh that lands before the rise), or they show at rest meanwhile
  // (the eyebrow and lede likewise, since the phone portal reaches the lede before it starts)
  const HEAD_FROM = { yPercent: 108, rotate: 2.2, transformOrigin: '0% 100%', opacity: 0 };
  const HEAD_AT = 262;
  const SOFT_FROM = { opacity: 0, y: 14 }, SOFT_AT = 272;
  if (mobile) {
    gsap.set(headLines, HEAD_FROM);
    gsap.set(headSoft, SOFT_FROM);
    tl.fromTo(headLines, { opacity: 0 }, { opacity: 1, duration: 22, ease: 'power2.in', stagger: 6 }, HEAD_AT);
  }
  tl.fromTo(headSoft, { ...SOFT_FROM }, { opacity: 1, y: 0, duration: 40, ease: 'power2.out', stagger: 8 }, SOFT_AT);
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
    onRefreshInit: () => { sizePill(); },
    // measure once layout has settled, never in the middle of a scrub
    onRefresh: () => {
      measureLine(); measureLetters(); renderLetters(); measurePill(); applyLift(); applyPill(); applyPortal();
      if (mobile && tl.time() < HEAD_AT) gsap.set(headLines, HEAD_FROM);
      if (mobile && tl.time() < SOFT_AT) gsap.set(headSoft, SOFT_FROM);
    },
  });

  // the grid text reveals in two timed beats (they finish even if scrolling pauses): the first
  // paragraph line by line with the labels as the letters land, then the second paragraph and the
  // founder during the glide. Scrolling back well above a beat reverses it.
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
    if (mobile) {
      // phones: the copy sits low in the frame and is still below the fold while the letters land,
      // so it all reveals in the second beat, once the block has glided into place
      beat1.fromTo(pathWord, { skewX: -14 }, { skewX: 0, duration: 0.3, ease: 'power2.inOut' }, 0);
      beat2.fromTo(eyebrows[0], rise, { ...to, duration: 0.7 }, 0)
        .fromTo(lines1, rise, { ...to, duration: 0.7, stagger: 0.067 }, 0.06)
        .fromTo(founderImg, rise, { ...to, duration: 0.7 }, 0.3)
        .fromTo(founderText, rise, { ...to, duration: 0.7 }, 0.42);
      beat1.progress(progress[0]); beat2.progress(progress[1]);
      return;
    }
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
    const beat = (btl, unit) => latch({
      at: () => st.start + ((LEAD + unit) * vp.h) / 100,
      back: () => 0.12 * vp.h,
      forward: () => btl.play(),
      backward: () => btl.reverse(),
      init: (past) => btl.progress(past ? 1 : 0),
    });
    beat(beat1, 56);
    beat(beat2, mobile ? 100 : 111);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(buildBeats);
  } else {
    gsap.set([...eyebrows, p1, p2, founderImg, founderText], { opacity: 1 });
  }

  // the stage's moving parts keep their layers from the start (is-live), but the smoke only drifts
  // once the stage has pinned (is-shown): until then it sits under the opaque hero glass
  const buffer = () => { if (video.preload !== 'auto') video.preload = 'auto'; };
  ScrollTrigger.create({ trigger: section, start: 'top bottom', end: 'bottom top', toggleClass: { targets: section, className: 'is-live' } });
  ScrollTrigger.create({
    trigger: section, start: 'top top', end: 'bottom top', toggleClass: { targets: section, className: 'is-shown' },
    onEnter: buffer,
  });

  measureLetters();
  renderLetters();
  applyPill();
  applyLift();
  measurePill();
  applyPortal();

  return {
    st,
    // the video buffers once the hero intro is over, not alongside the fonts the loader waits on
    buffer,
    anchor(name) {
      const units = STORY_MARKS[name];
      return st.start + (st.end - st.start) * (units / TOTAL);
    },
    resize() {
      measureLine();
      if (!reduced) buildBeats();
      sizePill();
      applyPill();
      applyPortal();
    },
  };
}
