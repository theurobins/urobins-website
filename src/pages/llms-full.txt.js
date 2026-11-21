// /llms-full.txt: every page's copy as one Markdown file
import { llmsFull } from '../lib/text.mjs';
import { getPosts, siteUpdated } from '../lib/pages.mjs';
export const GET = async () => new Response(llmsFull(await getPosts(), await siteUpdated()), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
