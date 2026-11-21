// /sitemap.xml: every indexable page, each dated by its own last real change (src/lib/pages.mjs)
import { sitemap } from '../lib/text.mjs';
import { pages } from '../lib/pages.mjs';
export const GET = async () => new Response(sitemap(await pages()), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
