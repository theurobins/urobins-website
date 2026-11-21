// /portfolio/index.md: the Portfolio page's Markdown twin
import { portfolioMd } from '../../lib/text.mjs';
export const GET = () => new Response(portfolioMd(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
