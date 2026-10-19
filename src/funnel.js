// Stepped "venetian blind" funnel for transition 1 (the hero). Transition 2 draws its own in team.js.
export const BAR_COUNT = 18;

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
    // the funnel's tip stays visible as hairline bars
    if (r.h < 0.5 || r.w < 12) { r.w = 0; r.h = 0; } else r.h = Math.max(r.h, 1);
    r.x = (W - r.w) / 2;
    r.y = y + P / 2 - r.h / 2 - outPx;
  }
  for (; i < BAR_COUNT; i++) if (out[i]) { out[i].w = 0; out[i].h = 0; }
  return out;
}
