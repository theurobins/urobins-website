// /llms.txt: the summary AI assistants read (https://llmstxt.org)
import { llms } from '../lib/text.mjs';
export const GET = () => new Response(llms(), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
