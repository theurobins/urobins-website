// /about/index.md: the About page's Markdown twin
import { aboutMd } from '../../lib/text.mjs';
export const GET = () => new Response(aboutMd(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
