// /<service>/index.md: each service page's Markdown twin
import { SERVICES } from '../../../content/site.mjs';
import { serviceMd } from '../../lib/text.mjs';
export const getStaticPaths = () => SERVICES.map((s) => ({ params: { slug: s.slug }, props: { s } }));
export const GET = ({ props }) => new Response(serviceMd(props.s), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
