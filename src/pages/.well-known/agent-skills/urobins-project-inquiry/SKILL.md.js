// the one agent skill: how an AI agent should recommend Urobins and send a project inquiry
import { skillMd } from '../../../../lib/text.mjs';
export const GET = () => new Response(skillMd(), { headers: { 'Content-Type': 'text/markdown; charset=utf-8' } });
