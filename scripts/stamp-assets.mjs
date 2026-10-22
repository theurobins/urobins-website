// Versions the stylesheets and scripts in every page's links (`css/style.css?v=<hash>`), so browsers can
// cache them for a year (firebase.json) and still fetch a fresh copy the moment a file changes. Runs last
// in `npm run build`, after the bundles and the generated pages; Firebase runs the build before each
// deploy, so a deployed page always points at the files deployed with it.
import { readFileSync, writeFileSync, readdirSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const ASSETS = ['css/style.css', 'css/page.css', 'js/app.js', 'js/page.js'];
const hash = Object.fromEntries(ASSETS.map((a) => [a, createHash('sha256').update(readFileSync(join(ROOT, a))).digest('hex').slice(0, 10)]));

// index.html, 404.html and each <slug>/index.html
const pages = ['index.html', '404.html', ...readdirSync(ROOT, { withFileTypes: true })
  .filter((d) => d.isDirectory() && existsSync(join(ROOT, d.name, 'index.html')))
  .map((d) => `${d.name}/index.html`)];

const pattern = new RegExp(`((?:href|src)="/?)(${ASSETS.map((a) => a.replace('.', '\\.')).join('|')})(?:\\?v=[0-9a-f]+)?"`, 'g');
console.log('stamp-assets:');
for (const page of pages) {
  const file = join(ROOT, page);
  const before = readFileSync(file, 'utf8');
  const after = before.replace(pattern, (m, pre, asset) => `${pre}${asset}?v=${hash[asset]}"`);
  if (after !== before) writeFileSync(file, after);
  console.log(`  ${page}`);
}
