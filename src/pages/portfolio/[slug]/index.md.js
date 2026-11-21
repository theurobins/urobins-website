// /portfolio/<slug>/index.md: each case study's Markdown twin
import { WORK } from '../../../../content/work.mjs';
import { workMd } from '../../../lib/text.mjs';
export const getStaticPaths = () => WORK.map((w) => ({ params: { slug: w.slug }, props: { w } }));
export const GET = ({ props }) => new Response(workMd(props.w), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
