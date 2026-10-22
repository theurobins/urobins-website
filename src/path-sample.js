// Points at equal length steps along an SVG path. getPointAtLength walks the whole path from its
// start on every call (Blink and WebKit), so sampling a long path a thousand times stalled the
// loader for ~200ms a pass. Here each command is measured as its own short throwaway path, which
// keeps every sample cheap. Handles absolute M/L/C/S (all the site's paths); anything else returns
// null so the caller can fall back to the plain loop.
const NS = 'http://www.w3.org/2000/svg';
const ARITY = { M: 2, L: 2, C: 6, S: 4 };

// the path as cubic segments [x0, y0, x1, y1, x2, y2, x3, y3] (lines as straight cubics), or null
function cubics(d) {
  if (/[^MLCS\d\s,.+-]/.test(d)) return null;
  const out = [];
  let at = null, ctrl = null;
  for (const c of d.trim().match(/[MLCS][^MLCS]*/g) || []) {
    const cmd = c[0], k = ARITY[cmd];
    const v = c.slice(1).trim().split(/[\s,]+/).filter(Boolean).map(Number);
    if (!v.length || v.length % k) return null;
    for (let i = 0; i < v.length; i += k) {
      const a = v.slice(i, i + k);
      if (cmd === 'M' && i === 0) { at = a; ctrl = null; continue; }
      if (!at) return null;
      if (cmd === 'C') { out.push([...at, ...a]); ctrl = a.slice(2, 4); }
      else if (cmd === 'S') {
        // the smooth curve's first control point mirrors the previous one (or sits on the start)
        const c1 = ctrl ? [2 * at[0] - ctrl[0], 2 * at[1] - ctrl[1]] : at;
        out.push([...at, ...c1, ...a]);
        ctrl = a.slice(0, 2);
      } else { out.push([...at, ...at, ...a, ...a]); ctrl = null; }
      at = a.slice(-2);
    }
  }
  return out.length ? out : null;
}

export function samplePath(path, n) {
  const segs = cubics(path.getAttribute('d') || '');
  if (!segs) return null;
  const svg = path.ownerSVGElement;
  let acc = 0;
  const parts = segs.map((q) => {
    const el = svg.appendChild(document.createElementNS(NS, 'path'));
    el.setAttribute('d', `M ${q[0]} ${q[1]} C ${q.slice(2).join(' ')}`);
    const len = el.getTotalLength();
    const part = { el, s: acc, len };
    acc += len;
    return part;
  });
  const Lu = path.getTotalLength(), out = [];
  for (let i = 0, k = 0; i <= n; i++) {
    const l = (Lu * i) / n;
    while (k < parts.length - 1 && parts[k].s + parts[k].len < l) k++;
    const q = parts[k].el.getPointAtLength(Math.min(parts[k].len, Math.max(0, l - parts[k].s)));
    out.push({ x: q.x, y: q.y });
  }
  parts.forEach((q) => q.el.remove());
  return out;
}

// t (0..1 of the length) -> point, for loops that move something along a path every frame. The
// table is worked out in plain maths (dense points on each cubic, then equal steps along them), so
// it touches no DOM: measuring throwaway paths mid-scroll forced a style and layout pass.
export function pathLookup(path, n = 400) {
  let pts = null;
  const build = () => {
    const segs = cubics(path.getAttribute('d') || '');
    if (!segs) return [];
    const P = [], cum = [0], STEPS = 64;
    segs.forEach(([x0, y0, x1, y1, x2, y2, x3, y3], j) => {
      for (let i = j ? 1 : 0; i <= STEPS; i++) {
        const t = i / STEPS, u = 1 - t, a = u * u * u, b = 3 * u * u * t, c = 3 * u * t * t, e = t * t * t;
        const p = [a * x0 + b * x1 + c * x2 + e * x3, a * y0 + b * y1 + c * y2 + e * y3];
        if (P.length) cum.push(cum[cum.length - 1] + Math.hypot(p[0] - P[P.length - 1][0], p[1] - P[P.length - 1][1]));
        P.push(p);
      }
    });
    const L = cum[cum.length - 1], out = [];
    for (let i = 0, k = 0; i <= n; i++) {
      const l = (L * i) / n;
      while (k < cum.length - 2 && cum[k + 1] < l) k++;
      const f = cum[k + 1] > cum[k] ? (l - cum[k]) / (cum[k + 1] - cum[k]) : 0;
      out.push({ x: P[k][0] + (P[k + 1][0] - P[k][0]) * f, y: P[k][1] + (P[k + 1][1] - P[k][1]) * f });
    }
    return out;
  };
  return (t) => {
    if (!pts) pts = build();
    if (!pts.length) return path.getPointAtLength(path.getTotalLength() * t);
    const f = Math.min(n, Math.max(0, t * n)), i = Math.min(n - 1, f | 0), k = f - i;
    const a = pts[i], b = pts[i + 1];
    return { x: a.x + (b.x - a.x) * k, y: a.y + (b.y - a.y) * k };
  };
}
