// /.well-known/agent-skills/index.json: the Agent Skills discovery index, with the skill's SHA-256 digest
import { skillIndex } from '../../../lib/text.mjs';
export const GET = () => new Response(skillIndex(), { headers: { 'Content-Type': 'application/json' } });
