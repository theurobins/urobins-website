// A CSS-style cubic-bezier ease: x(t) solved by Newton steps (bisection if the slope is flat), then
// y(t). Replaces CustomEase, which was bundled for this one curve.
export function cubicBezier(x1, y1, x2, y2) {
  const cx = 3 * x1, bx = 3 * (x2 - x1) - cx, ax = 1 - cx - bx;
  const cy = 3 * y1, by = 3 * (y2 - y1) - cy, ay = 1 - cy - by;
  const X = (t) => ((ax * t + bx) * t + cx) * t;
  const dX = (t) => (3 * ax * t + 2 * bx) * t + cx;
  return (x) => {
    if (x <= 0) return 0;
    if (x >= 1) return 1;
    let t = x;
    for (let i = 0; i < 8; i++) {
      const e = X(t) - x, s = dX(t);
      if (Math.abs(e) < 1e-7) break;
      if (Math.abs(s) < 1e-6) { t = -1; break; }
      t -= e / s;
    }
    if (t < 0 || t > 1) {
      let lo = 0, hi = 1;
      t = x;
      for (let i = 0; i < 40; i++) { if (X(t) < x) lo = t; else hi = t; t = (lo + hi) / 2; }
    }
    return ((ay * t + by) * t + cy) * t;
  };
}
