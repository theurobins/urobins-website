import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';
import { runPreloader } from './preloader.js';
import { HeroGL } from './hero-gl.js';
import { funnelRects } from './funnel.js';
import { initStory } from './story.js';
import { initMetrics } from './metrics.js';
import { initTeam } from './team.js';

gsap.registerPlugin(ScrollTrigger);
// mobile toolbars resize the viewport height constantly; don't recompute every trigger for that
ScrollTrigger.config({ ignoreMobileResize: true });

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
window.scrollTo(0, 0);

// ---------- smooth scroll ----------
let lenis = null;
if (!reduced) {
  // lerp smoothing: every frame eases toward the target scroll, so wheel bursts never restart an animation
  lenis = new Lenis({ lerp: 0.085, smoothWheel: true, wheelMultiplier: 0.95, touchMultiplier: 1.4 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((time) => lenis.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
  lenis.stop();
}
const scrollY = () => (lenis ? lenis.scroll : window.scrollY);

// ---------- hero + transition 1 ----------
const heroSection = document.querySelector('.hero');
const heroContent = document.querySelector('.hero__content');
const hero = new HeroGL(document.querySelector('.hero__gl'));

const hs = { y: 0, bottom: 1, q: 0, smix: 0 };
const auto = { mix: 0 };
const rects = [];
let vw = window.innerWidth, vh = window.innerHeight;

const applyHero = () => {
  heroContent.style.transform = `translate3d(0, ${(hs.y * vh).toFixed(2)}px, 0)`;
  hero.state.heroBottom = hs.bottom;
  hero.state.mix = Math.max(auto.mix, hs.smix);
  hero.setBars(hs.bottom < 1.02 ? funnelRects(hs.q, vw, vh, hs.bottom * vh, rects) : []);
};

const heroTl = gsap.timeline({ defaults: { ease: 'none' }, onUpdate: applyHero });
heroTl
  .to(hs, { smix: 1, duration: 34 }, 0)
  .to(hs, { y: -0.8, duration: 40 }, 0)
  .to(hs, { bottom: 0.26, duration: 18, ease: 'power1.inOut' }, 34)
  .to(hs, { q: 0.15, duration: 18 }, 34)
  .to(hs, { q: 0.55, duration: 22 }, 52)
  .to(hs, { y: -1.2, bottom: -0.03, duration: 26, ease: 'power1.in' }, 74)
  .to(hs, { q: 1, duration: 26 }, 74);

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
const onScrollNav = () => {
  const y = scrollY();
  if (nav.classList.contains('is-open')) { lastY = y; return; }
  if (y > 140 && y > lastY + 2) nav.classList.add('is-hidden');
  else if (y < lastY - 2 || y <= 140) nav.classList.remove('is-hidden');
  lastY = y;
};
if (lenis) lenis.on('scroll', onScrollNav);
else window.addEventListener('scroll', onScrollNav, { passive: true });

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
const introTargets = {
  logo: document.querySelector('.nav__logo'),
  menu: document.querySelector('.nav__menu'),
  menuLinks: document.querySelectorAll('.nav__menu a'),
  right: document.querySelector('.nav__right'),
  words: document.querySelectorAll('.hero__title .w'),
  sub: document.querySelector('.hero__sub'),
  cta: document.querySelector('.hero__cta'),
};

function heroIntro() {
  heroLive = true;
  const t = introTargets;
  const tl = gsap.timeline({
    onComplete: () => {
      if (desktopNav) gsap.set(t.menu, { clearProps: 'clipPath' });
    },
  });
  tl.to(hero.state, { reveal: 1, duration: 0.8, ease: 'power2.out' }, 0)
    .to(hero.state, { warp: 0, duration: 2.2, ease: 'power3.inOut' }, 0.1)
    .to(t.logo, { opacity: 1, scale: 1, duration: 0.8, ease: 'power3.out' }, 0.9)
    .to(t.right, { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out' }, 1.05)
    .to(t.words, { opacity: 1, filter: 'blur(0px)', yPercent: 0, duration: 1.2, stagger: 0.09, ease: 'power3.out' }, 1.1)
    .to(t.sub, { opacity: 1, y: 0, filter: 'blur(0px)', duration: 1.0, ease: 'power3.out' }, 1.6)
    .to(t.cta, { opacity: 1, y: 0, duration: 0.9, ease: 'power3.out' }, 1.8)
    .add(() => {
      document.body.classList.remove('is-loading');
      if (lenis) lenis.start();
    }, 1.4)
    .to(auto, { mix: 1, duration: 7, ease: 'sine.inOut', onUpdate: applyHero }, 2.8);
  if (desktopNav) {
    tl.fromTo(t.menu, { opacity: 1, clipPath: 'inset(0% 50% 0% 50% round 9px)' }, { clipPath: 'inset(0% 0% 0% 0% round 9px)', duration: 1.1, ease: 'power3.inOut' }, 0.95)
      .to(t.menuLinks, { opacity: 1, y: 0, duration: 0.6, stagger: 0.07, ease: 'power2.out' }, 1.25);
  }
}

if (reduced) {
  heroLive = true;
  hero.state.reveal = 1;
  hero.state.warp = 0;
  auto.mix = 1;
  applyHero();
  runPreloader({
    el: document.getElementById('preloader'),
    reduced: true,
    onDone: () => document.body.classList.remove('is-loading'),
  });
} else {
  const t = introTargets;
  gsap.set(t.logo, { opacity: 0, scale: 0.7 });
  gsap.set(t.right, { opacity: 0, x: 24 });
  gsap.set(t.words, { opacity: 0, filter: 'blur(14px)', yPercent: 35 });
  gsap.set(t.sub, { opacity: 0, y: 18, filter: 'blur(6px)' });
  gsap.set(t.cta, { opacity: 0, y: 18 });
  if (desktopNav) {
    gsap.set(t.menu, { clipPath: 'inset(0% 50% 0% 50% round 9px)' });
    gsap.set(t.menuLinks, { opacity: 0, y: 6 });
  }
  runPreloader({
    el: document.getElementById('preloader'),
    reduced: false,
    onReveal: heroIntro,
  });
}
