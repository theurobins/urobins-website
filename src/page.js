// Service pages and the 404 page (bundled to js/page.js): the nav, the floating call button, entrance
// reveals, the footer marquee and the WebMCP tools. No GSAP or Lenis here; these pages scroll natively
// and stay light.
import { PHONE, isPhone } from './breakpoints.js';
import { registerAgentTools } from './agent-tools.js';

const root = document.documentElement;
root.classList.add('js');
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
// tools for AI agents in the browser (WebMCP), where the browser supports them
registerAgentTools();

// ---------- nav ----------
// on phones the menu is a full-screen sheet, as on the home page: focus moves into it, the page and the
// call button behind it go inert and hold still, and Escape or a link closes it
const nav = document.getElementById('nav');
const toggle = document.getElementById('nav-toggle');
const book = document.getElementById('book');
const behind = [document.querySelector('main'), document.querySelector('body > footer'), book];
const setMenu = (open) => {
  nav.classList.toggle('is-open', open);
  toggle.setAttribute('aria-expanded', String(open));
  const sheet = open && isPhone();
  behind.forEach((el) => { if (el) el.inert = sheet; });
  root.classList.toggle('is-menu', sheet);
  if (sheet) nav.querySelector('.nav__menu a').focus({ preventScroll: true });
};
toggle.addEventListener('click', () => setMenu(!nav.classList.contains('is-open')));
nav.querySelectorAll('.nav__menu a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
window.matchMedia(PHONE).addEventListener('change', () => {
  if (nav.classList.contains('is-open')) setMenu(false);
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape' || !nav.classList.contains('is-open')) return;
  setMenu(false);
  toggle.focus();
});

// the bar slides away while reading down and returns on any upward scroll, or when focus enters it
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (!nav.classList.contains('is-open')) {
    if (y > 80 && y > lastY + 1) nav.classList.add('is-hidden');
    else if (y <= 80 || y < lastY - 2) nav.classList.remove('is-hidden');
  }
  lastY = y;
}, { passive: true });
nav.addEventListener('focusin', () => nav.classList.remove('is-hidden'));

// ---------- floating call button ----------
// shows once most of the hero is behind the visitor and leaves for good once the footer's own CTA
// comes up (as on the home page), so it never sits on the footer
const hero = document.querySelector('.page-hero');
const cta = document.querySelector('.contact__cta');
if (book && hero && cta) {
  let pastHero = false, atFooter = false;
  const set = () => book.classList.toggle('is-on', pastHero && !atFooter);
  new IntersectionObserver(([e]) => {
    pastHero = e.intersectionRatio < 0.3 && e.boundingClientRect.top < 0;
    set();
  }, { threshold: [0, 0.3, 1] }).observe(hero);
  new IntersectionObserver(([e]) => {
    atFooter = e.isIntersecting || e.boundingClientRect.top < 0;
    set();
  }, { rootMargin: '0px 0px -15% 0px' }).observe(cta);
}

// ---------- footer marquee: only runs while on screen ----------
const contact = document.querySelector('.contact');
if (contact) {
  new IntersectionObserver(([e]) => contact.classList.toggle('is-live', e.isIntersecting)).observe(contact);
}

// ---------- entrance reveals ----------
const items = document.querySelectorAll('[data-rv]');
if (reduced || !('IntersectionObserver' in window)) {
  items.forEach((el) => el.classList.add('is-in'));
} else {
  const io = new IntersectionObserver((entries) => entries.forEach((e) => {
    if (!e.isIntersecting) return;
    e.target.classList.add('is-in');
    io.unobserve(e.target);
  }), { rootMargin: '0px 0px -8% 0px' });
  items.forEach((el) => io.observe(el));
}
