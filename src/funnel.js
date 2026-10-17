// Stepped "venetian blind" funnel shared by both section transitions.
// Bars hang below an edge `top`, narrowing into an inverted triangle.
// q = 0: full funnel, q = 1: every bar has collapsed.
export const BAR_COUNT = 18;

export function funnelRects(q, W, H, top, out = []) {
  const n = BAR_COUNT;
  const span = H * 0.8 * (1 - 0.42 * q);
  const pitch = span / n;
  for (let i = 0; i < n; i++) {
    const t = i / (n - 1);
    const base = 0.975 - t * 0.8;
    const w = Math.max(0, base - q * 1.02) * W;
    const h = Math.max(0, pitch * (0.84 - t * 0.66) * (1 - 0.35 * q));
    const r = out[i] || (out[i] = { x: 0, y: 0, w: 0, h: 0 });
    r.w = w;
    r.h = w > 0 ? h : 0;
    r.x = (W - w) / 2;
    r.y = top + i * pitch + 2;
  }
  return out;
}
