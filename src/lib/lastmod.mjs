// Real "last edited" dates for sitemap.xml <lastmod> and each page's dateModified.
// content/lastmod.json keeps, per page path, a hash of the content the page is built from and the date
// that hash last changed. A build that finds the same hash keeps the old date; a changed hash gets
// today's date (India time) and is written back. So a date only moves when that page's copy changes,
// never because the site was rebuilt or a stylesheet changed. Keep content/lastmod.json with the
// sources (deleting it resets every page to the next build's date).
// `npm run dev` previews a changed page with today's date but never writes the file; `npm run build` does.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';

// the build runs from the project folder (npm sets it), so the path does not depend on where Astro
// bundles this module
const FILE = join(process.cwd(), 'content', 'lastmod.json');

const today = () => new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Kolkata', year: 'numeric', month: '2-digit', day: '2-digit' }).format(new Date());

// read on every call, never cached: Astro may bundle this module into more than one chunk, and each copy
// must see what the others wrote
const read = () => (existsSync(FILE) ? JSON.parse(readFileSync(FILE, 'utf8')) : {});

export function lastmod(path, inputs) {
  const hash = createHash('sha256').update(JSON.stringify(inputs)).digest('hex').slice(0, 16);
  const db = read();
  if (db[path]?.hash === hash) return db[path].date;
  const date = today();
  if (import.meta.env.DEV) return date;
  db[path] = { date, hash };
  const sorted = Object.fromEntries(Object.entries(db).sort(([a], [b]) => a.localeCompare(b)));
  writeFileSync(FILE, `${JSON.stringify(sorted, null, 2)}\n`);
  return date;
}
