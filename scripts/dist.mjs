// Writes the deployable copy of the site to dist/ (Firebase's public folder): every file a visitor can
// fetch, with the stylesheets minified and the HTML comments stripped, so the deployed files carry none
// of the notes in the sources. Runs last in `npm run build`; the sources stay readable and are what
// `npm run serve` shows. Everything here is rebuilt from scratch on each run.
import { readFileSync, writeFileSync, readdirSync, mkdirSync, copyFileSync, rmSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';
import { transformSync } from 'esbuild';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'dist');
// source, tooling and docs: never deployed
const SKIP = new Set(['dist', 'src', 'scripts', 'content', 'node_modules', '.git', '.gitignore', '.vscode',
  'package.json', 'package-lock.json', 'README.md', 'DEVELOPMENT.md', '.DS_Store', 'firebase-debug.log']);

const minifyCss = (css) => transformSync(css, { loader: 'css', minify: true, legalComments: 'none' }).code.trim();
// drops each comment along with the line it leaves empty; inline <style> blocks are minified too
const stripHtml = (html) => html
  .replace(/^[ \t]*<!--[\s\S]*?-->[ \t]*\r?\n/gm, '')
  .replace(/<!--[\s\S]*?-->/g, '')
  .replace(/(<style[^>]*>)([\s\S]*?)(<\/style>)/g, (m, open, css, close) => open + minifyCss(css) + close);

rmSync(OUT, { recursive: true, force: true });
let count = 0;
const walk = (dir) => {
  for (const d of readdirSync(dir, { withFileTypes: true })) {
    if (SKIP.has(d.name)) continue;
    const src = join(dir, d.name);
    const dest = join(OUT, relative(ROOT, src));
    if (d.isDirectory()) { walk(src); continue; }
    mkdirSync(dirname(dest), { recursive: true });
    if (d.name.endsWith('.css')) writeFileSync(dest, minifyCss(readFileSync(src, 'utf8')));
    else if (d.name.endsWith('.html')) writeFileSync(dest, stripHtml(readFileSync(src, 'utf8')));
    else copyFileSync(src, dest);
    count++;
  }
};
walk(ROOT);
console.log(`dist: ${count} files`);
