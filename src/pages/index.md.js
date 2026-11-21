// /index.md: the home page's Markdown twin, for agents that ask for text/markdown
import { homeMd } from '../lib/text.mjs';
export const GET = () => new Response(homeMd(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
