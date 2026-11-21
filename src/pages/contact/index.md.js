// /contact/index.md: the Contact page's Markdown twin
import { contactPageMd } from '../../lib/text.mjs';
export const GET = () => new Response(contactPageMd(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
