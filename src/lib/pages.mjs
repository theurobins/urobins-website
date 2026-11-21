// Every indexable page with the content it is built from, for sitemap.xml and the pages' dateModified.
// A page's date (lastmod.mjs) changes only when these inputs change. Kept apart from text.mjs because
// it reads the blog collection (astro:content), which astro.config.mjs cannot import.
import { getCollection } from 'astro:content';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { SITE, HOME, SERVICES, ABOUT, CONTACT, PORTFOLIO, BLOG } from '../../content/site.mjs';
import { WORK } from '../../content/work.mjs';
import { lastmod } from './lastmod.mjs';

// newest first
export async function getPosts() {
  const posts = await getCollection('blog');
  return posts.sort((a, b) => b.data.published - a.data.published || a.id.localeCompare(b.id));
}

// the home page's copy lives in its own markup as well as in content/site.mjs
const homeSource = () => readFileSync(join(process.cwd(), 'src', 'pages', 'index.astro'), 'utf8');

export async function pages() {
  const posts = await getPosts();
  const list = [
    ['/', [SITE, HOME, homeSource()]],
    ...SERVICES.map((s) => [`/${s.slug}/`, [s]]),
    ['/about/', [ABOUT, SITE.founder, SITE.offices, SITE.commitments, HOME.process]],
    ['/portfolio/', [PORTFOLIO, WORK.map((w) => [w.slug, w.name, w.kind, w.industry, w.summary])]],
    ...WORK.map((w) => [`/portfolio/${w.slug}/`, [w]]),
    ['/blog/', [BLOG, posts.map((p) => [p.id, p.data.heading, p.data.description, p.data.published])]],
    ...posts.map((p) => [`/blog/${p.id}/`, [p.data, p.body]]),
    ['/contact/', [CONTACT, SITE.email, SITE.support, SITE.phone, SITE.offices, SITE.social]],
  ];
  return list.map(([path, inputs]) => ({ path, lastmod: lastmod(path, inputs) }));
}

export async function lastmodOf(path) {
  return (await pages()).find((p) => p.path === path).lastmod;
}

// the newest date across the site (llms-full.txt's "Last updated")
export async function siteUpdated() {
  return (await pages()).map((p) => p.lastmod).sort().at(-1);
}
