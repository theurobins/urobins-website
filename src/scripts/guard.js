// Deterrent against casual copying: no context menu, no image/video dragging, and the usual
// developer-tools, view-source and save-page shortcuts swallowed. Anything a browser renders can still
// be read by someone determined (browser menus, view-source: URLs, curl), so this only raises the bar.
// Off on localhost so development and the Playwright captures keep their tools.
const LOCAL = /^(localhost|127\.0\.0\.1|\[::1\]|0\.0\.0\.0)$/.test(location.hostname);

// e.code, not e.key: on a Mac, Option changes e.key (Option+I is "ˆ")
const blocked = (e) => {
  if (e.key === 'F12') return true;
  const mod = e.ctrlKey || e.metaKey;
  if (!mod) return false;
  const k = e.code;
  // Chrome/Edge/Firefox on Windows and Linux: Ctrl+Shift+I/J/C/K; on a Mac: Cmd+Option+I/J/C/U
  if ((e.shiftKey || e.altKey) && (k === 'KeyI' || k === 'KeyJ' || k === 'KeyC' || k === 'KeyK')) return true;
  // view source (Ctrl+U, Cmd+Option+U) and save page (Ctrl/Cmd+S)
  return k === 'KeyU' || k === 'KeyS';
};

export function initGuard() {
  if (LOCAL) return;
  const stop = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  window.addEventListener('contextmenu', stop, true);
  window.addEventListener('keydown', (e) => { if (blocked(e)) stop(e); }, true);
  window.addEventListener('dragstart', (e) => {
    if (e.target instanceof Element && e.target.closest('img, video, canvas, svg')) stop(e);
  }, true);
}
