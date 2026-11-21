// /blog/index.md: the Blog page's Markdown twin
import { blogMd } from '../../lib/text.mjs';
import { getPosts } from '../../lib/pages.mjs';
export const GET = async () => new Response(blogMd(await getPosts()), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
