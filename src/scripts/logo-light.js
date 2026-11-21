// Torch lighting for the desktop loading screen's logo. The lamps are the only light: in the dark the
// logo is a faint glass rim, and it turns to a plain, near-white metal (mark and word alike) wherever,
// and as much as, a beam reaches it, so a beam can light half a piece or part of the word.
// Each lamp lights its own copy of the artwork through a CSS mask in the logo's own space (one light
// spans mark and word): a conic gradient centred on the lamp for the beam (full on its axis, a little
// less towards its edge, then a soft fringe just past the drawn beam's edge), times a radial falloff
// with distance from the lamp. The two lit copies stack, so two lights add like screens. Each lamp
// also leaves:
// - a bevel on the edges that face the lamp inside its lit copy (the logo less a copy of itself
//   nudged away from the light), catching it like a machined chamfer;
// - a glint, a third copy in near-white under the same mask and a narrow streak where the lamp's
//   mirror image falls: near-vertical, leaning a little towards the lamp;
// - a shadow on the wall behind, drawn by the canvas scene: the logo's silhouette, blurred once into a
//   sprite per part, projected away from the lamp, longer the bigger (closer) the lamp and the more
//   it grazes, and as dark as that lamp's light on the part.
// Units are the logo SVG's (its 430x120 viewBox, which is also its CSS box). Lamps arrive as
// { x, y, ang, half, power, size }: position, beam axis and half-angle (radians), 0-1 power, and the
// lamp's diameter. A frame rewrites only four gradient masks and, per lamp, one nudge (each only when
// it changes), on copies that paint into the logo's own layer (see the CSS); it
// reads no layout and draws the shadows with drawImage alone.
import gsap from 'gsap';

const DEG = Math.PI / 180;
const C = [210, 60];                       // the artwork's centre
const BOX = [430, 120];
const PART_XF = { mark: [0, 5, 0.3636], word: [150, 27, 0.3064] };
// a beam's profile across its angle: CORE at half - IN, none past half + OUT. The fringe reaches a
// little past the drawn beam's crisp edge, as a lamp's light spills just beyond its cone
const IN = 0.5 * DEG, OUT = 7 * DEG, CORE = 0.88;
const RING = [0, 0.5, 1, 1.2, 1.4, 1.6, 1.8, 2];  // where the profile is sampled (see cone())
const FALL = 2.2;                          // the falloff's radius, in lamp-to-logo distances
const RAD = [[0, 1], [0.6, 1], [0.7, 0.9], [0.8, 0.8], [0.9, 0.72], [1, 0.65]];
// the glint's streak across its width: a hot core in a soft skirt
const BAND = [[0, 0], [0.22, 0.05], [0.38, 0.25], [0.46, 0.7], [0.5, 1], [0.54, 0.7], [0.62, 0.25], [0.78, 0.05], [1, 0]];
const BAND_W = 62;                         // the glint's half-width
const GLINT = 0.95;
const RIM = 1.9;                           // the bevel's width
const NS = 'http://www.w3.org/2000/svg';
// shadows: blur and padding of the silhouettes (logo units), their resolution, and the three passes
// that stretch each shadow away from its lamp (its penumbra grows with distance from the logo)
const BLUR = 5.5, PAD = 19, SPX = 1.6;
const PASSES = [[0.85, 0.4], [1, 0.36], [1.15, 0.3]];
const SHADOW = 0.5;

const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const table = (t, x) => {
  if (x <= t[0][0]) return t[0][1];
  for (let i = 1; i < t.length; i++) if (x <= t[i][0]) {
    const [x0, y0] = t[i - 1], [x1, y1] = t[i];
    return x1 === x0 ? y1 : y0 + ((y1 - y0) * (x - x0)) / (x1 - x0);
  }
  return t[t.length - 1][1];
};
const PROBE = [[0, 0], [215, 0], [430, 0], [0, 60], [215, 60], [430, 60], [0, 120], [215, 120], [430, 120]];
const DARK = 'linear-gradient(transparent, transparent)';
const f1 = (v) => (Math.round(v * 10) / 10).toString();
const a3 = (v) => `rgba(0,0,0,${Math.round(clamp(v, 0, 1) * 1000) / 1000})`;

// the beam's profile as [angle off the axis, light] samples: a gentle dip from the axis to its edge,
// then a smoothstep fringe. The conic gradient interpolates between the same samples the shadows read
function cone(half) {
  const e = Math.max(half - IN, 0.5 * DEG);
  return RING.map((r) => {
    if (r <= 1) return [e * r, 1 - (1 - CORE) * r * r];
    const u = r - 1;
    return [e + u * (IN + OUT), CORE * (1 - u * u * (3 - 2 * u))];
  });
}

export function createLogoLight(el) {
  const box = el.querySelector('.preloader__logo');
  const glass = box.querySelector('.ldr-glass');
  const defs = glass.querySelector('defs');
  const node = (tag, attrs, parent) => {
    const n = document.createElementNS(NS, tag);
    for (const k in attrs) n.setAttribute(k, attrs[k]);
    if (parent) parent.appendChild(n);
    return n;
  };
  // a fresh copy of the artwork (mark and word), every use painted one way
  const art = (from, fill) => {
    const g = document.createElementNS(NS, 'g');
    for (const part of ['.mark', '.word']) g.appendChild(from.querySelector(`:scope > ${part}`).cloneNode(true));
    if (fill) paint(g, fill);
    return g;
  };
  const paint = (g, fill) => g.querySelectorAll('use').forEach((u) => { u.style.fill = fill; u.style.stroke = 'none'; });
  // the shadows read the glass's own pieces: take them before the copies below add more
  const glassPieces = [...glass.querySelectorAll(':scope > .mark .piece')];

  // the lit copies, then the glints, one of each per lamp: copies of the glass artwork without its defs
  const layer = (kind) => {
    const c = glass.cloneNode(true);
    c.querySelector('defs').remove();
    c.setAttribute('class', `ldr-layer ldr-${kind}`);
    box.appendChild(c);
    return c;
  };
  const lamps = [0, 1].map((i) => {
    const L = { lit: layer('lit'), cache: ['', ''], x: 0, y: 0, ang: 0, p: 0, R: 1, prof: cone(0), nudgeAt: '' };
    // the bevel's mask: the artwork, less itself nudged away from the lamp
    const mask = node('mask', { id: `ldrRim${i}`, maskUnits: 'userSpaceOnUse', x: -60, y: -60, width: 550, height: 240 }, defs);
    mask.appendChild(art(glass, '#fff'));
    L.nudge = mask.appendChild(art(glass, '#000'));
    // into the lit copy, over its plain fill (the CSS): the bevel
    const c = L.lit;
    const rim = art(c, 'rgba(255,255,255,0.9)');
    rim.setAttribute('mask', `url(#ldrRim${i})`);
    c.appendChild(rim);
    return L;
  });
  lamps.forEach((L) => { L.shine = layer('shine'); });
  // every piece in every copy, copy by copy, for the assembly tweens
  const pieces = [...box.querySelectorAll('.piece')];
  const wordClip = glass.querySelector('#wordClip rect');
  const mask = (node, i, L, s) => {
    if (L.cache[i] === s) return;
    L.cache[i] = s;
    node.style.webkitMaskImage = s;
    node.style.maskImage = s;
  };

  // one lamp's light at a point, from the same samples its mask is drawn with
  function light(L, x, y) {
    if (L.p <= 0.005) return 0;
    const dx = x - L.x, dy = y - L.y;
    let d = Math.atan2(dy, dx) - L.ang;
    d = Math.abs(Math.atan2(Math.sin(d), Math.cos(d)));
    return L.p * table(L.prof, d) * table(RAD, Math.hypot(dx, dy) / L.R);
  }

  function update(list) {
    lamps.forEach((L, i) => {
      const src = list[i];
      L.p = src ? clamp(src.power, 0, 1) : 0;
      if (L.p > 0.005) {
        L.x = src.x; L.y = src.y; L.ang = src.ang;
        L.prof = cone(Math.min(src.half, 70 * DEG));
        L.R = FALL * Math.max(40, Math.hypot(C[0] - src.x, C[1] - src.y));
      }
      // a lamp whose light misses the logo leaves its copies dark, and their masks still
      if (L.p <= 0.005 || Math.max(...PROBE.map(([px, py]) => light(L, px, py))) < 0.004) {
        mask(L.lit, 0, L, DARK);
        mask(L.shine, 1, L, DARK);
        return;
      }
      const { x, y, ang } = src;
      const at = `at ${f1(x)}px ${f1(y)}px`;
      // the beam: CSS conics start at the top and turn clockwise, so the axis sits at 180deg from
      // a start half a turn back
      const st = [];
      for (let k = L.prof.length - 1; k >= 0; k--) st.push(`${a3(L.p * L.prof[k][1])} ${(180 - L.prof[k][0] / DEG).toFixed(2)}deg`);
      for (let k = 1; k < L.prof.length; k++) st.push(`${a3(L.p * L.prof[k][1])} ${(180 + L.prof[k][0] / DEG).toFixed(2)}deg`);
      const beam = `conic-gradient(from ${(ang / DEG - 90).toFixed(2)}deg ${at}, ${st.join(', ')})`;
      const fall = `radial-gradient(circle ${f1(L.R)}px ${at}, ${RAD.map(([o, v]) => `${a3(v)} ${f1(o * L.R)}px`).join(', ')})`;
      mask(L.lit, 0, L, `${beam}, ${fall}`);
      // the glint: where the lamp's mirror image sits on the logo, between the logo's centre and the
      // lamp; a lamp closer to the camera (bigger) pulls it in towards the centre. A band square to
      // the light through that point, laid along the light's direction as CSS measures it
      const k = clamp(0.3 * Math.sqrt(60 / Math.max(10, src.size)), 0.18, 0.42);
      const gx = clamp(C[0] + (x - C[0]) * k, 12, 408), gy = clamp(C[1] + (y - C[1]) * k, 14, 106);
      // the bevel on the edges facing the lamp
      const ld = Math.hypot(x - C[0], y - C[1]) || 1;
      const nudge = `translate(${(((C[0] - x) / ld) * RIM).toFixed(2)} ${(((C[1] - y) / ld) * RIM).toFixed(2)})`;
      if (nudge !== L.nudgeAt) { L.nudgeAt = nudge; L.nudge.setAttribute('transform', nudge); }
      // the streak stands near-vertical, leaning a little towards the lamp
      let wx = gx - x, wy = gy - y;
      let wl = Math.hypot(wx, wy) || 1;
      wx = 0.7 * (Math.sign(wx) || 1) + 0.3 * (wx / wl); wy = 0.3 * (wy / wl);
      wl = Math.hypot(wx, wy) || 1;
      wx /= wl; wy /= wl;
      const span = Math.abs(BOX[0] * wx) + Math.abs(BOX[1] * wy);
      const t = (gx - BOX[0] / 2) * wx + (gy - BOX[1] / 2) * wy + span / 2;
      const band = `linear-gradient(${(Math.atan2(wx, -wy) / DEG).toFixed(2)}deg, ${BAND.map(([o, v]) => `${a3(GLINT * v)} ${f1(t + (o - 0.5) * 2 * BAND_W)}px`).join(', ')})`;
      mask(L.shine, 1, L, `${band}, ${beam}, ${fall}`);
    });
  }

  // ---- shadows: a blurred silhouette per part, built once ----
  const markD = [...glass.querySelectorAll('defs [id^="ldr-p"]')].map((p) => p.getAttribute('d'));
  const wordD = document.querySelector('#logo-word path').getAttribute('d');
  const parts = [...markD.map((d, i) => ({ d, xf: PART_XF.mark, el: glassPieces[i] })), { d: wordD, xf: PART_XF.word, word: true }];
  parts.forEach((pt) => {
    const [tx, ty, ps] = pt.xf;
    const bb = (pt.el || glass.querySelector(':scope > .word use')).getBBox();
    pt.x0 = tx + bb.x * ps - PAD; pt.y0 = ty + bb.y * ps - PAD;
    pt.w = bb.width * ps + 2 * PAD; pt.h = bb.height * ps + 2 * PAD;
    pt.cx = tx + (bb.x + bb.width / 2) * ps; pt.cy = ty + (bb.y + bb.height / 2) * ps;
    const c = document.createElement('canvas');
    c.width = Math.ceil(pt.w * SPX); c.height = Math.ceil(pt.h * SPX);
    const x = c.getContext('2d');
    // the shape itself is drawn off the canvas, so only its blurred shadow lands on it
    const off = c.width + 200;
    x.shadowColor = '#04040f';
    x.shadowBlur = BLUR * SPX * 2;
    x.shadowOffsetX = off;
    x.setTransform(SPX * ps, 0, 0, SPX * ps, SPX * (tx - pt.x0) - off, SPX * (ty - pt.y0));
    x.fill(new Path2D(pt.d), 'evenodd');
    pt.spr = c;
  });

  // draw on a context already in logo units; fade scales them all (the logo's own opacity)
  function shadows(ctx, list, fade = 1) {
    if (fade <= 0.01) return;
    const clipW = +wordClip.getAttribute('width');
    const keep = ctx.globalAlpha;
    lamps.forEach((L, i) => {
      const src = list[i];
      if (!src || L.p <= 0.01) return;
      // the projection's stretch: bigger lamps are closer to the logo and throw longer shadows
      const kS = clamp(0.04 * Math.pow(src.size / 60, 0.8), 0.01, 0.12);
      for (const pt of parts) {
        let ox = 0, oy = 0, op = 1;
        if (pt.el) {
          op = +gsap.getProperty(pt.el, 'opacity');
          ox = +gsap.getProperty(pt.el, 'x') * pt.xf[2]; oy = +gsap.getProperty(pt.el, 'y') * pt.xf[2];
        }
        const a = SHADOW * fade * op * light(L, pt.cx + ox, pt.cy + oy);
        if (a < 0.01) continue;
        let sw = pt.spr.width;
        if (pt.word) {
          sw = Math.min(sw, (140 + clipW - pt.x0) * SPX);
          if (sw <= 1) continue;
        }
        // never more than about a mark's width away, and a long shadow is a fainter one: its edge
        // spreads as it leaves the logo
        const reach = Math.hypot(pt.cx - L.x, pt.cy - L.y);
        const k = Math.min(kS, 60 / Math.max(1, reach));
        const fall = a / (1 + (k * reach) / 26);
        for (const [f, pa] of PASSES) {
          const m = 1 + k * f;
          ctx.globalAlpha = fall * pa;
          ctx.drawImage(pt.spr, 0, 0, sw, pt.spr.height,
            m * (pt.x0 + ox) + (1 - m) * L.x, m * (pt.y0 + oy) + (1 - m) * L.y, (m * sw) / SPX, m * pt.h);
        }
      }
    });
    ctx.globalAlpha = keep;
  }

  return { pieces, wordClip, update, shadows };
}
