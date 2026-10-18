import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CustomEase } from 'gsap/CustomEase';
import Lenis from 'lenis';
import { runPreloader } from './preloader.js';
import { HeroGL } from './hero-gl.js';
import { heroFunnel } from './funnel.js';
import { initStory } from './story.js';
import { initMetrics } from './metrics.js';
import { initTeam } from './team.js';

gsap.registerPlugin(ScrollTrigger, CustomEase);
// mobile toolbars resize the viewport height constantly; don't recompute every trigger for that
ScrollTrigger.config({ ignoreMobileResize: true });
CustomEase.create('menuOpen', '0.45,0,0.15,1');

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
document.documentElement.classList.add('js');
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

// ---------- smooth scroll ----------
let lenis = null;
if (!reduced) {
  // lerp smoothing: each frame eases toward the target scroll, with the reference's long soft tail
  lenis = new Lenis({ lerp: 0.06, smoothWheel: true, wheelMultiplier: 0.95, touchMultiplier: 1.4 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
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

const hs = { y: 0, e: 0, out: 0 };
const auto = { mix: 0 };
const rects = [];
let vw = window.innerWidth, vh = window.innerHeight;
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
    if (ec <= 5 * P) edgeY = 5 * P;
    else { edgeY = P * Math.floor(ec / P); phi = (edgeY + P - ec) / P; }
  }
  hero.state.heroBottom = (edgeY - hs.out * vh) / vh;
  if (hs.e > 0) {
    const D = 15.25 + 33 * (1 - smooth01(0.3, 0.8, hs.e));
    const g = 1 - Math.pow(Math.min(1, hs.out / 0.33), 3);
    hero.setBars(heroFunnel(edgeY, phi, D, g, hs.out * vh, vw, vh, rects));
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
  onRefresh: (self) => { heroEnd = self.end + vh; },
});
applyHero();

// orange -> lavender: plays on its own after the intro, or as soon as the visitor scrolls
const colorTween = gsap.to(auto, { mix: 1, duration: 2.6, ease: 'power4.out', paused: true, onUpdate: applyHero });
const startColor = () => { if (!colorTween.isActive() && colorTween.progress() === 0) colorTween.play(); };

// ---------- other stages ----------
const story = initStory({ reduced, smooth: !!lenis });
const metrics = initMetrics({ reduced });
const team = initTeam({ reduced });

// ---------- nav ----------
const nav = document.getElementById('nav');
const toggle = document.getElementById('nav-toggle');
toggle.addEventListener('click', () => {
  const open = !nav.classList.contains('is-open');
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
});
let lastY = 0;
const onScroll = () => {
  const y = scrollY();
  if (y > 2) startColor();
  if (nav.classList.contains('is-open')) { lastY = y; return; }
  // the nav slides away the moment scrolling starts and returns on any upward scroll
  if (y > 2 && y > lastY + 0.5) nav.classList.add('is-hidden');
  else if (y <= 2 || y < lastY - 2) nav.classList.remove('is-hidden');
  lastY = y;
};
if (lenis) lenis.on('scroll', onScroll);
else window.addEventListener('scroll', onScroll, { passive: true });

// ---------- anchors ----------
const anchorY = (hash) => {
  if (hash === '#top') return 0;
  if (hash === '#about') return story.anchor('about');
  if (hash === '#services') return story.anchor('services');
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
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  if (lenis) {
    const dist = Math.abs(y - scrollY());
    lenis.scrollTo(y, { duration: Math.min(2.6, 0.9 + dist / (vh * 8)) });
  } else {
    window.scrollTo({ top: y, behavior: reduced ? 'auto' : 'smooth' });
  }
});

// ---------- render loop ----------
let heroLive = false; // the preloader covers the hero until it hands over
gsap.ticker.add((time) => {
  const y = scrollY();
  if (heroLive && y < heroEnd) hero.render(time);
  story.tick(time, y);
});

// ---------- resize ----------
let rt = 0;
const coarse = window.matchMedia('(pointer: coarse)').matches;
window.addEventListener('resize', () => {
  // on touch devices only a width change is a real resize; height changes are the URL bar
  if (coarse && window.innerWidth === vw) return;
  clearTimeout(rt);
  rt = setTimeout(() => {
    vw = window.innerWidth; vh = window.innerHeight;
    hero.resize();
    if (heroLive && hero.state.hyp === 0) hero.state.pitch = hero.restPitch;
    story.resize();
    metrics.resize();
    team.resize();
    applyHero();
    ScrollTrigger.refresh();
  }, 120);
});
if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());

// ---------- intro ----------
const desktopNav = window.matchMedia('(min-width: 981px)').matches;
const logo = document.querySelector('.nav__logo');
// wrap the logo letters so they can step in one by one
[...logo.childNodes].forEach((n) => {
  if (n.nodeType !== 3) return;
  const frag = document.createDocumentFragment();
  for (const ch of n.textContent) {
    const s = document.createElement('span');
    s.className = 'nav__logo-ch';
    s.textContent = ch;
    frag.appendChild(s);
  }
  n.replaceWith(frag);
});
const T = {
  logo,
  logoParts: logo.querySelectorAll('.logo-u, .nav__logo-ch'),
  menu: document.querySelector('.nav__menu'),
  menuLinks: [...document.querySelectorAll('.nav__menu a')],
  cta: document.querySelector('.nav__cta'),
  toggle: document.querySelector('.nav__toggle'),
  words: document.querySelectorAll('.hero__title .w'),
  sub: document.querySelector('.hero__sub'),
  heroCta: document.querySelector('.hero__cta'),
};
let menuFull = 0;

function heroIntro() {
  heroLive = true;
  if (desktopNav) {
    // measure the open menu now that the fonts are in
    const w = T.menu.style.width;
    T.menu.style.width = 'auto';
    menuFull = T.menu.offsetWidth;
    T.menu.style.width = w;
  }
  const tl = gsap.timeline();
  // pill pop: grow straight through to a small overshoot, then settle
  const pop = (el, at, ov, dur, origin) => {
    tl.set(el, { scale: 0, opacity: 1, transformOrigin: origin }, at)
      .to(el, { keyframes: [{ scale: ov, duration: dur, ease: 'none' }, { scale: 1, duration: 0.23, ease: 'sine.inOut' }] }, at);
  };

  // glass: dark red hand-off, a peach flash, then an X of ribs zooming out to straight ribs
  tl.set(hero.state, { reveal: 0.15, pitch: 1400, hyp: 12, flash: 0 }, 0)
    .to(hero.state, { reveal: 1, duration: 0.03, ease: 'none' }, 0.22)
    .set(hero.state, { flash: 1 }, 0.24)
    .to(hero.state, { flash: 0, duration: 0.5, ease: 'power3.out' }, 0.25)
    .to(hero.state, { pitch: () => hero.restPitch, duration: 0.75, ease: 'expo.out' }, 0.17)
    .to(hero.state, {
      keyframes: [{ hyp: 0.64, duration: 0.15 }, { hyp: 0.08, duration: 0.18 }, { hyp: -0.12, duration: 0.22 }, { hyp: 0, duration: 0.4 }],
      ease: 'sine.inOut',
    }, 0.12);

  pop(T.logo, 1.0, 1.08, 0.32, '8px -16px');
  tl.to(T.logoParts, { opacity: 1, duration: 0.15, stagger: 0.07 }, 1.12);
  if (desktopNav) {
    pop(T.menu, 1.22, 1.06, 0.23, '50% 50%');
    tl.to(T.menu, { width: menuFull, duration: 0.93, ease: 'menuOpen' }, 1.69)
      .to(T.menuLinks.slice(1), { opacity: 1, y: 0, duration: 0.3, ease: 'power2.out', stagger: 0.15 }, 1.95)
      .add(() => gsap.set(T.menu, { clearProps: 'width,overflow,justifyContent' }), 2.7);
  }
  pop(T.cta, 1.35, 1.09, 0.3, '50% 50%');
  if (!desktopNav) pop(T.toggle, 1.4, 1.08, 0.3, '50% 50%');

  tl.to(T.words, { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.8, ease: 'power2.out', stagger: 0.13 }, 1.59)
    .to(T.sub, { opacity: 1, filter: 'blur(0px)', y: 0, duration: 0.8, ease: 'power2.out' }, 2.32);
  pop(T.heroCta, 2.72, 1.06, 0.35, '50% 50%');
  tl.add(() => {
    document.body.classList.remove('is-loading');
    if (lenis) lenis.start();
  }, 2.9)
    .add(startColor, 4.37);
}

if (reduced) {
  heroLive = true;
  Object.assign(hero.state, { reveal: 1, hyp: 0, flash: 0, pitch: hero.restPitch });
  auto.mix = 1;
  applyHero();
  runPreloader({
    el: document.getElementById('preloader'),
    reduced: true,
    onDone: () => document.body.classList.remove('is-loading'),
  });
} else {
  gsap.set([T.logo, T.cta, T.heroCta], { scale: 0 });
  if (!desktopNav) gsap.set(T.toggle, { scale: 0 });
  gsap.set(T.logoParts, { opacity: 0 });
  gsap.set(T.words, { opacity: 0, filter: 'blur(8px)', y: 14 });
  gsap.set(T.sub, { opacity: 0, filter: 'blur(4px)', y: 6 });
  if (desktopNav) {
    // the menu opens from a lone "About" pill
    gsap.set(T.menu, { xPercent: -50, x: 0, scale: 0 });
    const aboutW = T.menuLinks[0].offsetWidth + 16;
    gsap.set(T.menu, { width: aboutW, overflow: 'hidden', justifyContent: 'flex-start' });
    gsap.set(T.menuLinks.slice(1), { opacity: 0, y: 6 });
  }
  runPreloader({
    el: document.getElementById('preloader'),
    reduced: false,
    onReveal: heroIntro,
  });
}
