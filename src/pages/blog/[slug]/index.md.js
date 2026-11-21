// /blog/<slug>/index.md: each post's Markdown twin (its own Markdown source, with a byline)
import { postMd } from '../../../lib/text.mjs';
import { getPosts } from '../../../lib/pages.mjs';
export const getStaticPaths = async () => (await getPosts()).map((p) => ({ params: { slug: p.id }, props: { p } }));
export const GET = ({ props }) => new Response(postMd(props.p), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
