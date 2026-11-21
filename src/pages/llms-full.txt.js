// /llms-full.txt: every page's copy as one Markdown file
import { llmsFull } from '../lib/text.mjs';
export const GET = () => new Response(llmsFull(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
