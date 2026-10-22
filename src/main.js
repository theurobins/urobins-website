import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { runPreloader, WASH } from './preloader.js';
import { HeroGL } from './hero-gl.js';
import { heroFunnel } from './funnel.js';
import { initStory } from './story.js';
import { initMetrics } from './metrics.js';
import { initProcess } from './process.js';
import { initCapabilities } from './capabilities.js';
import { initTorch } from './torch.js';
import { revealLines, revealText, revealRise, resplitTexts, setReduced, LINE_FROM } from './reveal.js';
import { splitLines } from './lines.js';
import { vp, measureViewport } from './viewport.js';
import { PHONE, isPhone } from './breakpoints.js';

gsap.registerPlugin(ScrollTrigger);
// mobile toolbars resize the viewport height constantly; don't recompute every trigger for that.
// Window resizes go through the debounced handler below (canvases first, then one refresh).
// no refresh on 'load': no box depends on image sizes, and it would land at a random point in the
// preloader; fonts.ready refreshes below
ScrollTrigger.config({ ignoreMobileResize: true, autoRefreshEvents: 'visibilitychange,DOMContentLoaded' });

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
setReduced(reduced);
document.documentElement.classList.add('js');
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

// ---------- smooth scroll ----------
let lenis = null;
if (!reduced) {
  // lerp smoothing: each frame eases toward the target scroll. 0.085 keeps a soft tail without the
  // long lag that made a change of direction read as the page changing its mind.
  // touch keeps native momentum scrolling
  lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 1 });
  lenis.on('scroll', ScrollTrigger.update);
  // step Lenis on the frame's rAF timestamp (sub-ms, vsync-aligned) rather than the ticker's whole-ms
  // clock read mid-callback, which makes its easing wobble from frame to frame
  gsap.ticker.add((time, dt, frame, ts) => lenis.raf(typeof ts === 'number' ? ts : performance.now()));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}
const scrollY = () => (lenis ? lenis.scroll : window.scrollY);

// ---------- hero + transition 1 ----------
// 1 timeline unit = 1vh of scroll. Content and glass ride up 1:1 for 73.5vh, then hold while the
// bottom edge rises in 0.046vh-high slots (stepping with the scroll) to a 5-slot hold, the funnel
// narrows, and finally everything scrolls off together.
const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero__content');
const hero = new HeroGL(document.querySelector('.hero__gl'));
hero.render(0); // first draw (program link, buffers) while the preloader still covers it

const hs = { y: 0, e: 0, out: 0 };
const auto = { mix: 0 };
const rects = [];
let vw = vp.w, vh = vp.h;
// funnel phase advance while the stage scrolls off (bars vanish bottom-up), measured from the reference
const PH = [[0, 0], [0.08, 0.27], [0.14, 0.63], [0.196, 1.28], [0.238, 2.36], [0.274, 3.98], [0.3, 7], [0.33, 15]];
const phaseOut = (o) => {
  if (o <= 0) return 0;
  for (let i = 1; i < PH.length; i++) {
    if (o <= PH[i][0]) { const [a0, b0] = PH[i - 1], [a1, b1] = PH[i]; return b0 + ((o - a0) / (a1 - a0)) * (b1 - b0); }
  }
  return 15;
};
const smooth01 = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };

const applyHero = () => {
  const P = 0.046 * vh;
  const shift = (-hs.y + hs.out) * vh;
  heroContent.style.transform = `translate3d(0, ${(-shift).toFixed(2)}px, 0)`;
  hero.state.shift = shift;
  hero.state.mix = auto.mix;
  let edgeY = vh, phi = 0;
  if (hs.e > 0) {
    const ec = vh - hs.e * vh;
    // while the edge holds at 5 slots the funnel keeps narrowing a little
    if (ec <= 5 * P) { edgeY = 5 * P; phi = 0.22 * smooth01(0, 3.3 * P, 5 * P - ec); }
    else { edgeY = P * Math.floor(ec / P); phi = (edgeY + P - ec) / P; }
  }
  hero.state.heroBottom = (edgeY - hs.out * vh) / vh;
  if (hs.e > 0) {
    const D = 15.25 + 33 * (1 - smooth01(0.3, 0.8, hs.e));
    // on the way out the funnel collapses from the bottom up (its phase runs on), top bar last
    const phiOut = phaseOut(hs.out);
    hero.setBars(heroFunnel(edgeY, phi + phiOut, D, 1, hs.out * vh, vw, vh, rects));
  } else {
    hero.setBars([]);
  }
};

const heroTl = gsap.timeline({ defaults: { ease: 'none' }, onUpdate: applyHero });
heroTl
  .to(hs, { y: -0.735, duration: 73.5 }, 0)
  .to(hs, { e: 0.92, duration: 92 }, 73.5)
  .to(hs, { out: 0.33, duration: 33 }, 165.5)
  .set({}, {}, 200);

// cached on refresh so the render loop never forces a layout read
let heroEnd = Infinity;
ScrollTrigger.create({
  trigger: heroSection,
  start: 'top top',
  end: 'bottom bottom',
  animation: heroTl,
  scrub: true,
  onRefresh: (self) => { heroEnd = self.end; },
});
applyHero();

// electric -> violet: plays on its own a while after the intro, or as soon as the visitor scrolls
const colorTween = gsap.to(auto, { mix: 1, duration: 3.2, ease: 'power3.inOut', paused: true, onUpdate: applyHero });
const startColor = () => { if (!colorTween.isActive() && colorTween.progress() === 0) colorTween.play(); };

// ---------- other stages ----------
const story = initStory({ reduced, smooth: !!lenis });
const metrics = initMetrics({ reduced });
const process = initProcess({ reduced });
const caps = initCapabilities({ reduced });
document.querySelectorAll('.rv').forEach((el) => revealLines(el));
document.querySelectorAll('.rv-text').forEach((p) => revealText(p));
revealRise('.member', { trigger: '.team__grid', start: 'top 82%', stagger: 0.1 });

// ---------- nav, floating call button, magnetic buttons ----------
const nav = document.getElementById('nav');
const navBar = nav.querySelector('.nav__bar');
const toggle = document.getElementById('nav-toggle');
const book = document.getElementById('book');
const torch = initTorch({ reduced });
// on phones the menu is a full-screen sheet, so it behaves as one: focus moves into it, the page and
// the call button behind it go inert and stop scrolling, and Escape closes it and hands focus back
// to the toggle
const behind = [document.querySelector('main'), book];
let locked = false;
// Lenis stays stopped until the intro hands the page over, so closing a sheet opened during the intro
// leaves it to the intro to start it
let scrollReady = false;
const setMenu = (open) => {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  const sheet = open && isPhone();
  behind.forEach((el) => { if (el) el.inert = sheet; });
  if (sheet !== locked) {
    locked = sheet;
    document.documentElement.classList.toggle('is-menu', sheet);
    if (lenis && (sheet || scrollReady)) lenis[sheet ? 'stop' : 'start']();
  }
  if (sheet) nav.querySelector('.nav__menu a').focus({ preventScroll: true });
};
toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
// widening past the phone layout hides the toggle, so an open sheet closes rather than leaving the
// page inert and unscrollable with no way out
window.matchMedia(PHONE).addEventListener('change', () => {
  if (nav.classList.contains('is-open')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || !nav.classList.contains('is-open')) return;
  setMenu(false);
  toggle.focus();
});
// the scroll hint's loop stops once it has faded out (is-idle), instead of running unseen all visit
const hint = document.querySelector('.hero__scroll');
hint.addEventListener('transitionend', () => hint.classList.toggle('is-idle', document.body.classList.contains('is-scrolled')));
let lastY = 0;
const onScroll = () => {
  const y = scrollY();
  if (y > 2) startColor();
  document.body.classList.toggle('is-scrolled', y > 40);
  if (y <= 40) hint.classList.remove('is-idle');
  if (nav.classList.contains('is-open')) { lastY = y; return; }
  // the nav slides away once the hero starts moving and returns on any upward scroll
  if (y > 60 && y > lastY + 1) nav.classList.add('is-hidden');
  else if (y <= 60 || y < lastY - 2) nav.classList.remove('is-hidden');
  lastY = y;
};
if (lenis) lenis.on('scroll', onScroll);
else window.addEventListener('scroll', onScroll, { passive: true });
// "Book a call" shows once the hero is behind the visitor and leaves before the footer's own CTA
ScrollTrigger.create({
  trigger: heroSection, start: () => 0.7 * vp.h, endTrigger: '.contact', end: 'top 85%',
  toggleClass: { targets: book, className: 'is-on' },
});
// phones: the round call button steps aside while it would sit on Impact's full-width CTA or on the
// Services rows' +/- toggles, which share its column
gsap.matchMedia().add(PHONE, () => {
  const over = new Set();
  const sts = [['.metrics__cta', 'bottom top'], ['.caps__grid', 'bottom 88%']].map(([sel, end]) => {
    const el = document.querySelector(sel);
    return el && ScrollTrigger.create({
      trigger: el, start: 'top bottom', end,
      onToggle: (self) => {
        if (self.isActive) over.add(el); else over.delete(el);
        book.classList.toggle('is-aside', over.size > 0);
      },
    });
  });
  return () => { sts.forEach((st) => st && st.kill()); book.classList.remove('is-aside'); };
});
// the footer's marquee only runs while it is on screen
ScrollTrigger.create({ trigger: '.contact', start: 'top bottom', end: 'bottom top', toggleClass: { targets: '.contact', className: 'is-live' } });
if (!reduced && window.matchMedia('(pointer: fine)').matches) {
  document.querySelectorAll('[data-magnet]').forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      gsap.to(el, { x: (e.clientX - r.left - r.width / 2) * 0.26, y: (e.clientY - r.top - r.height / 2) * 0.26, duration: 0.6, ease: 'power3.out', overwrite: 'auto' });
    });
    el.addEventListener('mouseleave', () => gsap.to(el, { x: 0, y: 0, duration: 0.9, ease: 'elastic.out(1, 0.45)', overwrite: 'auto' }));
  });
}

// ---------- anchors ----------
const anchorY = (hash) => {
  if (hash === '#top') return 0;
  if (hash === '#about') return story.anchor('about');
  const el = document.querySelector(hash);
  return el ? el.getBoundingClientRect().top + scrollY() : null;
};
document.addEventListener('click', (e) => {
  const a = e.target.closest('a[href^="#"]');
  if (!a) return;
  const hash = a.getAttribute('href');
  if (hash.length < 2) return;
  const y = anchorY(hash);
  if (y == null) return;
  e.preventDefault();
  if (nav.classList.contains('is-open')) setMenu(false);
  if (lenis) {
    const dist = Math.abs(y - scrollY());
    lenis.scrollTo(y, { duration: Math.min(2.6, 0.9 + dist / (vh * 8)) });
  } else {
    window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
  }
});

// ---------- render loop ----------
let heroLive = false; // the preloader covers the hero until it hands over
let heroSettled = false; // the intro's rib animation is over
let heroFinal = false, heroY = -1, heroT = 0;
gsap.ticker.add((time) => {
  const y = scrollY();
  if (heroLive) {
    // once the funnel has fully collapsed the canvas is empty: draw that frame once, then idle
    if (y < heroEnd && heroTl.progress() < 1) {
      // at rest only the glass's slow drift moves (<0.1px a frame): 30 fps is plenty there and
      // leaves the GPU free for whatever starts next
      if (y !== heroY || !heroSettled || colorTween.isActive() || time - heroT >= 1 / 30) {
        hero.render(time);
        heroY = y; heroT = time;
      }
      heroFinal = false;
    } else if (!heroFinal) { hero.render(time); heroFinal = true; }
  }
});

// ---------- intro ----------
const T = {
  lines: document.querySelectorAll('.hero__title .line__in, .hero__eyebrow .line__in'),
  sub: document.querySelector('.hero__sub'),
  ctas: [...document.querySelectorAll('.hero__actions .pill')],
  hint,
};
let subLines = [];
let introDone = false, introStarted = false;

// ---------- resize ----------
let rt = 0;
const coarse = window.matchMedia('(pointer: coarse)').matches;
// a phone turning over swaps the layout and the page's length (portrait is far longer), so the raw
// scroll would land in another section: keep the reader's place as their share of the section they
// were in. Section boxes are cached on refresh (sticky pins leave the sections themselves static), and
// the place is taken from the last scroll before the turn, since the browser may clamp it after
const stops = [...document.querySelectorAll('main > section, main > footer')];
let edges = [], settledY = 0, turning = false, place = null;
const pageTop = (el) => { let y = 0; for (; el; el = el.offsetParent) y += el.offsetTop; return y; };
ScrollTrigger.addEventListener('refresh', () => {
  edges = stops.map(pageTop);
  edges.push(document.documentElement.scrollHeight);
});
const placeAt = (y) => {
  for (let i = edges.length - 2; i >= 0; i--) {
    if (y >= edges[i]) return { i, f: Math.min(1, (y - edges[i]) / Math.max(1, edges[i + 1] - edges[i])) };
  }
  return null;
};
if (coarse) {
  const track = () => { if (!turning) settledY = scrollY(); };
  if (lenis) lenis.on('scroll', track);
  else window.addEventListener('scroll', track, { passive: true });
}
window.addEventListener('resize', () => {
  // on touch devices only a width change is a real resize; height changes are the URL bar
  if (coarse && window.innerWidth === vw) return;
  if (coarse && !turning) { turning = true; place = placeAt(settledY); }
  clearTimeout(rt);
  rt = setTimeout(() => {
    measureViewport();
    vw = vp.w; vh = vp.h;
    hero.resize();
    if (introDone) hero.state.pitch = hero.restPitch;
    if (introDone || reduced) subLines = splitLines(T.sub, 'hl');
    resplitTexts();
    story.resize();
    metrics.resize();
    process.resize();
    caps.resize();
    torch.resize();
    applyHero();
    ScrollTrigger.refresh();
    if (turning) {
      turning = false;
      if (place && place.i + 1 < edges.length) {
        const y = Math.round(edges[place.i] + place.f * (edges[place.i + 1] - edges[place.i]));
        if (lenis) { lenis.resize(); lenis.scrollTo(y, { immediate: true, force: true }); }
        else window.scrollTo(0, y);
        settledY = y;
      }
      place = null;
    }
  }, 120);
});
if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(() => {
    // line breaks move when the web font lands: split the revealed paragraphs again before they play
    resplitTexts();
    if (!introStarted) {
      subLines = splitLines(T.sub, 'hl');
      if (!reduced) gsap.set(subLines, { opacity: 0, y: 12 });
    }
    ScrollTrigger.refresh();
  });
}

function heroIntro() {
  introStarted = true;
  const tl = gsap.timeline();
  tl.add(() => { heroLive = true; }, 0);
  // pill pop: grow linearly to full size, ease into a small overshoot, then settle
  const pop = (el, at, ov, origin) => {
    tl.set(el, { scale: 0, opacity: 1, transformOrigin: origin }, at)
      .to(el, { keyframes: [{ scale: 1, duration: 0.3, ease: 'none' }, { scale: ov, duration: 0.1, ease: 'sine.out' }, { scale: 1, duration: 0.22, ease: 'sine.inOut' }] }, at);
  };
  // the glass fades in from the light the preloader's dive ended on, while its ribs focus from wide
  // to fine and a faint hourglass curvature relaxes to straight ribs: one slow, continuous settle
  tl.set(hero.state, { reveal: 0, hyp: 0.55, flash: 0, lg: 30, fan: 0, pitch: () => hero.restPitch * 2.4 }, 0)
    .add(() => { hero.state.hand = WASH; }, 0)
    .to(hero.state, { reveal: 1, duration: 1.15, ease: 'power2.inOut' }, 0.05)
    .to(hero.state, { hyp: 0, duration: 2.6, ease: 'power3.inOut' }, 0.05)
    .to(hero.state, { pitch: () => hero.restPitch, duration: 2.8, ease: 'power3.out', onComplete: () => { heroSettled = true; introDone = true; } }, 0.05);
  tl.to(navBar, { opacity: 1, y: 0, duration: 1.0, ease: 'power3.out', clearProps: 'transform' }, 0.5);
  // headline lines slide up out of their masks, then the copy rises line by line
  tl.to(T.lines, { yPercent: 0, rotate: 0, duration: 1.4, ease: 'expo.out', stagger: 0.14, clearProps: 'willChange' }, 0.7)
    .to(subLines, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out', stagger: 0.07 }, 1.4);
  T.ctas.forEach((el, i) => pop(el, 1.75 + i * 0.12, 1.06, '50% 50%'));
  tl.to(T.hint, { opacity: 1, duration: 0.8 }, 2.4);
  tl.add(() => {
    document.body.classList.remove('is-loading');
    scrollReady = true;
    if (lenis && !locked) lenis.start();
  }, 1.9)
    // hand the pills back to CSS once they have settled
    .add(() => { gsap.set(T.ctas, { clearProps: 'transform' }); story.buffer(); }, 2.7)
    .add(startColor, 4.6);
}

if (reduced) {
  heroLive = true;
  introDone = true;
  introStarted = true;
  Object.assign(hero.state, { reveal: 1, hyp: 0, flash: 0, lg: 30, fan: 0, pitch: hero.restPitch });
  auto.mix = 1;
  applyHero();
  subLines = splitLines(T.sub, 'hl');
  runPreloader({
    el: document.getElementById('preloader'),
    reduced: true,
    onDone: () => document.body.classList.remove('is-loading'),
  });
} else {
  gsap.set(T.lines, { ...LINE_FROM, willChange: 'transform' });
  subLines = splitLines(T.sub, 'hl');
  gsap.set(subLines, { opacity: 0, y: 12 });
  gsap.set(T.ctas, { scale: 0 });
  gsap.set(T.hint, { opacity: 0 });
  gsap.set(navBar, { opacity: 0, y: -18 });
  runPreloader({
    el: document.getElementById('preloader'),
    reduced: false,
    onReveal: heroIntro,
  });
}
