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

// Transition 1 (hero): bars sit centred in fixed 0.046H slots below the stepped hero edge.
// Width and height share one factor f = (1 - (i + phi) / D)^2, which gives the curved funnel;
// D shrinks as the edge rises, g scales the whole funnel away as it scrolls off.
export function heroFunnel(edgeY, phi, D, g, outPx, W, H, out = []) {
  const P = 0.046 * H;
  let i = 0;
  for (let y = edgeY; y < H + outPx && i < BAR_COUNT; y += P, i++) {
    const f = Math.pow(Math.max(0, 1 - (i + phi) / D), 2) * g;
    const r = out[i] || (out[i] = { x: 0, y: 0, w: 0, h: 0 });
    r.w = 0.95 * W * f;
    r.h = 0.041 * H * f;
    if (r.h < 0.75) { r.w = 0; r.h = 0; }
    r.x = (W - r.w) / 2;
    r.y = y + P / 2 - r.h / 2 - outPx;
  }
  for (; i < BAR_COUNT; i++) if (out[i]) { out[i].w = 0; out[i].h = 0; }
  return out;
}
