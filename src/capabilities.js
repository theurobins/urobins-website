// What we build: four capability cards, each with a small vector scene (a product scene with a
// phone, a browser and a goal widget; a tech orbit with a deploy status; an automation pipeline a
// deal card travels along; a growth chart with keyword rankings). The cards rise in as the section
// arrives; the loops only run while the section is on screen. Phones get a numbered index instead.
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { revealRise } from './reveal.js';
import { pathLookup } from './path-sample.js';
import { PHONE, isPhone } from './breakpoints.js';

// loops rewrite counters every frame: only touch the DOM when the text actually changes
const setText = (el, v) => { v = String(v); if (el.textContent !== v) el.textContent = v; };
const lines = (ws) => ws.map((w) => `<s style="--w:${w}"></s>`).join('');
const TECH = [
  ['JS', '#f7df1e', '#111', 0], ['TS', '#3178c6', '#fff', 60], ['<span class="atom"></span>', '#20232a', '#61dafb', 120],
  ['Node', '#2f9e44', '#fff', 180], ['AWS', '#ff9900', '#111', 240], ['PG', '#336791', '#fff', 300],
  ['Next', '#111', '#fff', 30], ['W', '#21759b', '#fff', 110], ['Dock', '#0db7ed', '#fff', 190], ['Figma', '#1e1e1e', '#f24e1e', 270],
];
const CHART_H = [42, 58, 50, 74, 90, 108, 122, 152, 178];
const RANKS = [['crm for startups', 14, 1], ['cloud migration partner', 9, 2], ['mobile app agency', 22, 3]];

const scenes = {
  apps: () => `<div class="scene scene--apps">
    <div class="browser"><div class="browser__bar"><i></i><i></i><i></i><s style="--w:.42"></s></div>
      <div class="browser__body"><u style="--w:.74"></u><u style="--w:.52"></u>${lines([0.64, 0.48])}<b class="browser__cta"></b><div class="browser__cards"><div></div><div></div><div></div></div></div></div>
    <div class="widget"><div class="widget__ring"><svg viewBox="0 0 48 48" aria-hidden="true"><circle class="ring__bg" cx="24" cy="24" r="20"/><circle class="ring__fg" cx="24" cy="24" r="20"/></svg><em class="ring__pct">0%</em></div>
      <div class="widget__text"><span>Daily goal</span><strong><span class="goal__n">0</span>/15 tasks</strong><b></b></div></div>
    <div class="phone2"><div class="phone2__screen">
      <div class="map"><i class="map__blob map__blob--a"></i><i class="map__blob map__blob--b"></i><i class="map__blob map__blob--c"></i>
        <svg class="map__route" viewBox="0 0 220 460" aria-hidden="true"><path class="map__path" d="M44 372 C 70 300, 170 300, 132 220 S 60 110, 160 72"/><circle class="map__dot" r="7"/></svg></div>
      <div class="ride"><i></i><div class="ride__text"><strong>Order #4821</strong><span>On the way</span></div><div class="ride__time"><strong><span class="ride__min">12</span> min</strong><span>2.4 km</span></div></div>
      <div class="route"><div class="route__stops"><i></i><i></i></div><div class="route__text"><span><small>From</small>Sector 18, Noida</span><span><small>To</small>Connaught Place</span></div></div>
      <div class="phone2__actions"><b></b><b></b><em>•••• 1234</em></div>
    </div></div>
    <div class="toast"><i>✓</i><div><strong>Payment received</strong><s style="--w:.5"></s></div></div>
  </div>`,
  dev: () => {
    const badges = (ring, items) => items.map(([t, bg, fg, a]) => `<div class="orbit__arm" style="--a:${a}deg;--d:${ring}"><div class="orbit__badge" style="--bg:${bg};--fg:${fg}">${t}</div></div>`).join('');
    return `<div class="orbit"><div class="orbit__ring" style="--d:var(--r1)">${badges('var(--r1)', TECH.slice(0, 6))}</div>` +
      `<div class="orbit__ring orbit__ring--2" style="--d:var(--r2)">${badges('var(--r2)', TECH.slice(6))}</div>` +
      `<div class="orbit__core"><svg viewBox="0 0 340 303" aria-hidden="true"><use href="#logo-mark"/></svg></div>` +
      `<div class="deploy"><span class="deploy__step"><i></i>Build</span><span class="deploy__step"><i></i>Test</span><span class="deploy__step"><i></i>Deploy</span></div></div>`;
  },
  crm: () => {
    const d = 'M46 120 C 100 120, 100 52, 154 52 S 208 188, 262 188 S 316 120, 374 120';
    const nodes = [[46, 120, 'M-6 -3h12M-6 3h8', 'New lead', 1], [154, 52, 'M-5 0l4 4 7-8', 'Qualified', -1], [262, 188, 'M0 -6v12M-6 0h12', 'Proposal', 1], [374, 120, 'M-6 4l4-8 4 5 4-6', 'Won', 1]];
    return `<svg class="pipe" viewBox="0 0 420 240" aria-hidden="true"><path class="pipe__path" d="${d}"/><path class="pipe__dots" d="${d}"/>` +
      nodes.map(([x, y, ic, label, side]) => `<g class="pipe__node" transform="translate(${x} ${y})"><circle r="18"/><path class="pipe__ic" d="${ic}"/></g><text class="pipe__tag" x="${x}" y="${y + (side > 0 ? 42 : -30)}" text-anchor="middle">${label}</text>`).join('') +
      `<g class="deal"><rect class="deal__card" x="-30" y="-17" width="60" height="34" rx="9"/><circle class="deal__avatar" cx="-15" cy="0" r="7"/><rect class="deal__line" x="-3" y="-7" width="24" height="4" rx="2"/><rect class="deal__line deal__line--2" x="-3" y="2" width="16" height="4" rx="2"/></g>` +
      `<g class="won" transform="translate(374 120)"><rect x="-34" y="-50" width="68" height="26" rx="13"/><text x="0" y="-32" text-anchor="middle">Deal won</text></g></svg>`;
  },
  seo: () => {
    const pts = CHART_H.map((h, i) => [43 + i * 44, 200 - h]);
    const line = 'M' + pts.map((p) => p.join(' ')).join(' L ');
    const area = line + ` L ${pts[pts.length - 1][0]} 200 L ${pts[0][0]} 200 Z`;
    return `<div class="scene scene--seo"><svg class="chart" viewBox="0 0 420 240" aria-hidden="true"><defs><linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4b48ff" stop-opacity=".45"/><stop offset="1" stop-color="#4b48ff" stop-opacity="0"/></linearGradient></defs>` +
      `<g class="chart__grid">${[200, 150, 100, 50].map((y) => `<line x1="24" x2="408" y1="${y}" y2="${y}"/>`).join('')}</g>` +
      `<g class="chart__bars">${CHART_H.map((h, i) => `<rect x="${30 + i * 44}" y="${200 - h}" width="26" height="${h}" rx="4"/>`).join('')}</g>` +
      `<path class="chart__area" d="${area}"/><path class="chart__line" d="${line}"/>` +
      `<g class="chart__end" transform="translate(${pts[8][0]} ${pts[8][1]})"><circle r="6"/><circle class="chart__halo" r="12"/></g>` +
      `<g class="chart__label" transform="translate(${pts[8][0] - 118} ${pts[8][1] - 54})"><rect width="118" height="30" rx="15"/><text x="59" y="20" text-anchor="middle">Organic traffic</text></g></svg>` +
      `<div class="ranks"><p class="ranks__hd">Keyword rankings</p>${RANKS.map(([k, a, b]) => `<div class="ranks__row"><span>${k}</span><b>#<em class="rk" data-from="${a}" data-to="${b}">${a}</em><i></i></b></div>`).join('')}</div></div>`;
  },
};

// Phones get an index instead of the cards: numbered rows that open one at a time onto the copy, a
// tiny static sketch of the desktop scene (drawn by CSS transitions when the row opens) and chips.
// No scenes and no loops run there.
const INDEX = {
  apps: { sketch: 'route', chips: ['iOS', 'Android', 'Web', 'Payments', 'Live tracking'] },
  dev: { steps: ['Build', 'Test', 'Deploy'], chips: ['React', 'Next.js', 'Node', 'TypeScript', 'AWS', 'Postgres', 'Docker'] },
  crm: { steps: ['New lead', 'Qualified', 'Proposal', 'Won'], chips: ['Sales', 'Support', 'Billing', 'Integrations'] },
  seo: { sketch: 'bars', chips: ['Technical SEO', 'Content', 'Paid acquisition', 'Revenue reporting'] },
};
const sketches = {
  route: () => `<svg class="cap__route" viewBox="0 0 320 56" aria-hidden="true">${['class="bg"', 'pathLength="1"'].map((a) => `<path ${a} d="M10 44 C 70 44, 72 12, 132 14 S 196 46, 250 36 S 296 12, 306 12"/>`).join('')}<circle cx="10" cy="44" r="4"/><circle class="cap__pin" cx="306" cy="12" r="6"/></svg>`,
  bars: () => `<div class="cap__bars" aria-hidden="true">${CHART_H.map((h, i) => `<i style="--h:${(h / 178).toFixed(3)};--i:${i}"></i>`).join('')}</div>`,
};

function buildIndex(section, cards) {
  section.classList.add('caps--index');
  const items = cards.map((card, i) => {
    const data = INDEX[card.dataset.cap] || { chips: [] };
    const tag = card.querySelector('.tag'), title = card.querySelector('.cap__title'), text = card.querySelector('.cap__text');
    const ic = tag ? tag.querySelector('.tag__ic').outerHTML : '';
    const kind = tag ? tag.textContent.trim() : '';
    const n = String(i + 1).padStart(2, '0');
    card.querySelector('.cap__visual').remove();
    tag && tag.remove();
    // the accordion pattern: the heading keeps its level and wraps the button
    title.innerHTML = `<button class="cap__head" type="button" id="cap-h-${n}" aria-expanded="false" aria-controls="cap-p-${n}">` +
      `<span class="cap__num">${n}</span><span class="cap__name"><span class="cap__kind">${ic}${kind}</span><span class="cap__label">${title.innerHTML}</span></span>` +
      `<span class="cap__plus" aria-hidden="true"></span></button>`;
    const panel = document.createElement('div');
    panel.className = 'cap__panel';
    panel.id = `cap-p-${n}`;
    panel.setAttribute('role', 'region');
    panel.setAttribute('aria-labelledby', `cap-h-${n}`);
    const steps = data.steps ? `<ol class="cap__steps" aria-hidden="true">${data.steps.map((s, k) => `<li style="--i:${k}"><i></i>${s}</li>`).join('')}</ol>` : '';
    panel.innerHTML = `<div class="cap__inner"></div>`;
    const inner = panel.firstChild;
    inner.append(text);
    inner.insertAdjacentHTML('beforeend', (data.sketch ? sketches[data.sketch]() : steps) +
      `<ul class="cap__chips">${data.chips.map((c) => `<li>${c}</li>`).join('')}</ul>`);
    title.after(panel);
    return { card, btn: title.querySelector('button') };
  });

  // one row open at a time; the page below changes height, so the triggers under it are measured
  // again once the rows have settled. A row closing above the tapped one would pull it up from under
  // the finger, so the scroll follows the tapped header through the 0.7s change and it stays put
  let rt = 0, hold = null;
  const open = (item) => {
    const top0 = item.btn.getBoundingClientRect().top;
    items.forEach((it) => {
      const on = it === item && !it.card.classList.contains('is-open');
      it.card.classList.toggle('is-open', on);
      it.btn.setAttribute('aria-expanded', String(on));
      // closed rows leave the accessibility tree (inert) as they fold
      it.card.querySelector('.cap__panel').inert = !on;
    });
    if (hold) gsap.ticker.remove(hold);
    const until = performance.now() + 800;
    hold = () => {
      const d = item.btn.getBoundingClientRect().top - top0;
      if (Math.abs(d) >= 0.5) window.scrollBy(0, d);
      if (performance.now() > until) { gsap.ticker.remove(hold); hold = null; }
    };
    gsap.ticker.add(hold);
    clearTimeout(rt);
    rt = setTimeout(() => ScrollTrigger.refresh(), 760);
  };
  items.forEach((it) => it.btn.addEventListener('click', () => open(it)));
  // the first row starts open, so the index shows what a row holds
  items.forEach((it, i) => { it.card.querySelector('.cap__panel').inert = i > 0; });
  items[0].card.classList.add('is-open');
  items[0].btn.setAttribute('aria-expanded', 'true');
}

export function initCapabilities({ reduced }) {
  const section = document.querySelector('.caps');
  if (!section) return { resize() { } };
  const cards = [...section.querySelectorAll('.cap')];
  if (isPhone()) {
    buildIndex(section, cards);
    revealRise(cards, { trigger: section.querySelector('.caps__grid'), start: 'top 86%', y: 24, stagger: 0.08 });
    return { resize() { } };
  }
  cards.forEach((c) => { c.querySelector('.cap__visual').innerHTML = (scenes[c.dataset.cap] || (() => ''))(); });
  revealRise(cards, { trigger: section, start: 'top 72%', stagger: 0.12 });
  // a window narrowed to a phone swaps to the index for good: the scenes and their loops go with it
  const loops = [];
  let live = null;
  const narrow = window.matchMedia(PHONE);
  const toIndex = () => {
    if (!narrow.matches) return;
    narrow.removeEventListener('change', toIndex);
    loops.forEach((l) => l.kill());
    loops.length = 0;
    if (live) live.kill();
    section.classList.remove('is-live');
    buildIndex(section, cards);
  };
  narrow.addEventListener('change', toIndex);
  const q = (s) => section.querySelector(s);
  const qa = (s) => [...section.querySelectorAll(s)];
  if (reduced) {
    // rest states
    q('.ring__fg') && gsap.set(q('.ring__fg'), { strokeDashoffset: 125.66 * 0.25 });
    q('.ring__pct') && (q('.ring__pct').textContent = '75%');
    q('.goal__n') && (q('.goal__n').textContent = '11');
    qa('.rk').forEach((e) => { e.textContent = e.dataset.to; });
    qa('.deploy__step').forEach((s) => s.classList.add('is-done'));
    gsap.set(q('.toast'), { opacity: 1 });
    return { resize() { } };
  }

  // --- product scene: the goal ring fills, the courier rides the route while the time counts down,
  // a payment toast drops in now and then ---
  const ring = q('.ring__fg'), pct = q('.ring__pct'), goalN = q('.goal__n');
  if (ring) {
    const C = 125.66, o = { p: 0 };
    gsap.set(ring, { strokeDasharray: C, strokeDashoffset: C });
    loops.push(gsap.timeline({ repeat: -1, repeatDelay: 2.6 })
      .to(o, {
        p: 1, duration: 1.8, ease: 'power3.out', onUpdate: () => {
          ring.style.strokeDashoffset = (C * (1 - 0.75 * o.p)).toFixed(2);
          setText(pct, `${Math.round(75 * o.p)}%`);
          setText(goalN, Math.round(11 * o.p));
        }
      }, 0.4)
      .to(o, {
        p: 0, duration: 0.5, ease: 'power2.in', onUpdate: () => {
          ring.style.strokeDashoffset = (C * (1 - 0.75 * o.p)).toFixed(2);
          setText(pct, `${Math.round(75 * o.p)}%`);
          setText(goalN, Math.round(11 * o.p));
        }
      }, 5.2));
  }
  const routePath = q('.map__path'), dot = q('.map__dot'), min = q('.ride__min');
  if (routePath) {
    const L = routePath.getTotalLength(), o = { p: 0 }, at = pathLookup(routePath);
    let cx = '', cy = '';
    gsap.set(routePath, { strokeDasharray: L, strokeDashoffset: L });
    loops.push(gsap.timeline({ repeat: -1, repeatDelay: 1.2 })
      .to(routePath, { strokeDashoffset: 0, duration: 1.4, ease: 'power2.inOut' }, 0)
      .to(o, {
        p: 1, duration: 7.5, ease: 'sine.inOut', onUpdate: () => {
          const pt = at(o.p), x = pt.x.toFixed(1), y = pt.y.toFixed(1);
          if (x !== cx) dot.setAttribute('cx', cx = x);
          if (y !== cy) dot.setAttribute('cy', cy = y);
          setText(min, Math.max(1, Math.round(12 - 11 * o.p)));
        }
      }, 0.6)
      .to(routePath, { strokeDashoffset: -L, duration: 0.9, ease: 'power2.in' }, 8.2)
      .set(routePath, { strokeDashoffset: L }));
  }
  const toast = q('.toast');
  if (toast) loops.push(gsap.timeline({ repeat: -1, repeatDelay: 4.4 })
    .fromTo(toast, { x: 40, y: -10, opacity: 0, scale: 0.9 }, { x: 0, y: 0, opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.6)' }, 2.2)
    .to(toast, { x: 24, opacity: 0, duration: 0.5, ease: 'power2.in' }, 5.2));

  // --- tech orbit: the rings turn and the badges counter-turn to stay upright as CSS animations
  // (compositor-only, run while .is-live); the deploy status cycles build -> test -> deploy ---
  const steps = qa('.deploy__step');
  if (steps.length) {
    const set = (i, state) => steps[i].classList.remove('is-on', 'is-done') || (state && steps[i].classList.add(state));
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.2 });
    steps.forEach((s, i) => {
      tl.call(() => set(i, 'is-on'), null, i * 1.5 + 0.3).call(() => set(i, 'is-done'), null, i * 1.5 + 1.5);
    });
    tl.call(() => steps.forEach((_, i) => set(i, null)), null, steps.length * 1.5 + 2.1);
    loops.push(tl);
  }

  // --- pipeline: a deal card travels node to node, each node pulsing as it arrives; "Deal won" pops at the end ---
  const pipe = q('.pipe__path'), deal = q('.deal'), won = q('.won');
  const nodes = qa('.pipe__node');
  if (pipe && deal) {
    const at = pathLookup(pipe);
    const stops = [0, 0.333, 0.667, 1];
    const o = { p: 0 };
    let last = '';
    const place = () => {
      const pt = at(o.p), tr = `translate(${pt.x.toFixed(1)} ${pt.y.toFixed(1) - 30})`;
      if (tr !== last) deal.setAttribute('transform', last = tr);
    };
    place();
    gsap.set(won, { opacity: 0, scale: 0.6, transformOrigin: '50% 100%' });
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1.6 });
    for (let i = 1; i < stops.length; i++) {
      tl.to(o, { p: stops[i], duration: 1.1, ease: 'power2.inOut', onUpdate: place }, i * 1.9 - 0.6)
        .to(nodes[i], { scale: 1.16, transformOrigin: '50% 50%', duration: 0.3, yoyo: true, repeat: 1, ease: 'sine.inOut' }, i * 1.9 + 0.5);
    }
    tl.to(won, { opacity: 1, scale: 1, duration: 0.5, ease: 'back.out(2)' }, stops.length * 1.9 - 0.4)
      .to([won, deal], { opacity: 0, duration: 0.5, ease: 'power2.in' }, stops.length * 1.9 + 1.4)
      .set(o, { p: 0, onUpdate: place })
      .set(deal, { opacity: 1 })
      .set(won, { scale: 0.6 });
    loops.push(tl);
  }

  // --- growth chart draws itself while the rankings climb, holds, and starts over ---
  const chart = q('.chart');
  if (chart) {
    const bars = chart.querySelectorAll('.chart__bars rect');
    const line = chart.querySelector('.chart__line'), area = chart.querySelector('.chart__area');
    const end = chart.querySelector('.chart__end'), label = chart.querySelector('.chart__label'), halo = chart.querySelector('.chart__halo');
    const ranks = qa('.rk');
    const L = line.getTotalLength ? line.getTotalLength() : 600;
    gsap.set(line, { strokeDasharray: L, strokeDashoffset: L });
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 2.8 });
    tl.fromTo(bars, { scaleY: 0, transformOrigin: '50% 100%' }, { scaleY: 1, duration: 0.9, stagger: 0.07, ease: 'power3.out' }, 0)
      .fromTo(line, { strokeDashoffset: L }, { strokeDashoffset: 0, duration: 1.6, ease: 'power2.inOut' }, 0.3)
      .fromTo(area, { opacity: 0 }, { opacity: 1, duration: 1.2, ease: 'power2.out' }, 1.0)
      .fromTo(end, { scale: 0, transformOrigin: '50% 50%' }, { scale: 1, duration: 0.5, ease: 'back.out(2)' }, 1.8)
      .fromTo(label, { scale: 0.6, opacity: 0, transformOrigin: '100% 100%' }, { scale: 1, opacity: 1, duration: 0.6, ease: 'back.out(1.8)' }, 2.0)
      .fromTo(halo, { scale: 0.4, opacity: 0.8, transformOrigin: '50% 50%' }, { scale: 2.2, opacity: 0, duration: 1.2, ease: 'power2.out', repeat: 1 }, 2.0);
    ranks.forEach((el, i) => {
      const from = +el.dataset.from, to = +el.dataset.to, o = { v: from };
      tl.to(o, { v: to, duration: 1.6, ease: 'power3.inOut', onUpdate: () => setText(el, Math.round(o.v)) }, 0.5 + i * 0.25);
    });
    tl.to([bars, line, area, end, label], { opacity: 0, duration: 0.5, ease: 'power2.in' }, 5.4)
      .set([bars, line, area, end, label], { opacity: 1 })
      .call(() => ranks.forEach((el) => { el.textContent = el.dataset.from; }));
    loops.push(tl);
  }

  loops.forEach((l) => l.pause());
  live = ScrollTrigger.create({
    trigger: section, start: 'top bottom', end: 'bottom top',
    toggleClass: { targets: section, className: 'is-live' },
    onToggle: (self) => loops.forEach((l) => (self.isActive ? l.play() : l.pause())),
  });
  return { resize() { } };
}
