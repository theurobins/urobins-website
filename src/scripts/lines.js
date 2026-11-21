// Wrap each rendered line of a paragraph in its own block span, so lines can reveal one by one.
// The original text is kept on the element, so it can be split again after a resize or font load.
export function splitLines(p, className = 'line') {
  const text = p.dataset.text || (p.dataset.text = p.textContent.trim());
  p.textContent = '';
  const words = text.split(/\s+/).map((w, i) => {
    if (i) p.appendChild(document.createTextNode(' '));
    const s = document.createElement('span');
    s.textContent = w;
    return p.appendChild(s);
  });
  const lines = [];
  let top = null;
  words.forEach((w) => {
    if (w.offsetTop !== top) { top = w.offsetTop; lines.push([]); }
    lines[lines.length - 1].push(w.textContent);
  });
  p.textContent = '';
  return lines.map((l) => {
    const s = document.createElement('span');
    s.className = className;
    s.textContent = l.join(' ');
    return p.appendChild(s);
  });
}
