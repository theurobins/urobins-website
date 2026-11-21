// /sitemap.xml: the home page and every service page, dated by SITE.updated
import { sitemap } from '../lib/text.mjs';
export const GET = () => new Response(sitemap(), { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
