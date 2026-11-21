// /llms.txt: the summary AI assistants read (https://llmstxt.org)
import { llms } from '../lib/text.mjs';
import { getPosts } from '../lib/pages.mjs';
export const GET = async () => new Response(llms(await getPosts()), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
