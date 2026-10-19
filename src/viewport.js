// The CSS viewport (what 100vh resolves to), measured once and on real resizes. Phones change
// window.innerHeight as the toolbar collapses while 100vh stays put; every stage sizes against 100vh,
// so scroll maths reads this instead of innerHeight to keep the two in step.
const probe = document.createElement('div');
probe.style.cssText = 'position:fixed;left:0;top:0;width:0;height:100vh;visibility:hidden;pointer-events:none';
document.documentElement.appendChild(probe);

export const vp = { w: 0, h: 0 };
export function measureViewport() {
  vp.w = window.innerWidth;
  vp.h = probe.offsetHeight || window.innerHeight;
}
measureViewport();
