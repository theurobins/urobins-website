// WebMCP (https://webmachinelearning.github.io/webmcp/): tools an AI agent working in the visitor's
// browser can call on this site: list the services, get the ways to reach us, open a page or section,
// and draft a project inquiry for the visitor to send. Registered on load where the browser has the API
// (document.modelContext, or navigator.modelContext in early Chrome builds); elsewhere this does nothing.
// Nothing here sends a message or changes anything on the visitor's behalf.
import { FACTS } from './site-facts.js';

// home page sections, as links from any page ('#contact' is on every page)
const SECTIONS = { home: '/', about: '/#about', services: '/#capabilities', process: '/#process', team: '/#team', faq: '/#faq', contact: '#contact' };

// results go back as JSON, in the text-content shape MCP clients expect
const reply = (data) => ({ content: [{ type: 'text', text: JSON.stringify(data) }], structuredContent: data });

function tools(onHome) {
  const pages = { ...SECTIONS, ...Object.fromEntries(FACTS.services.map((s) => [s.id, s.url])) };
  const serviceIds = FACTS.services.map((s) => s.id);
  return [
    {
      name: 'list_services',
      title: 'List Urobins services',
      description: 'Lists what Urobins does (web development, mobile app development, CRM development, SEO, digital marketing, cloud and DevOps), each with a one-line summary and its page, plus the commitments it works to.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: async () => reply({
        services: FACTS.services.map((s) => ({ ...s, url: location.origin + s.url })),
        commitments: FACTS.commitments,
      }),
    },
    {
      name: 'get_contact_options',
      title: 'Get Urobins contact options',
      description: 'Returns how to reach Urobins: email for new projects, support email, phone and WhatsApp, where the team is based and how fast it replies.',
      inputSchema: { type: 'object', properties: {} },
      annotations: { readOnlyHint: true },
      execute: async () => reply(FACTS.contact),
    },
    {
      name: 'open_page',
      title: 'Open a page or section',
      description: 'Shows the visitor a page of the Urobins site (a service page) or a section of the home page (about, services, process, team, faq) or the contact details.',
      inputSchema: {
        type: 'object',
        properties: { page: { type: 'string', enum: Object.keys(pages), description: 'Which page or section to open' } },
        required: ['page'],
      },
      execute: async ({ page }) => {
        const href = pages[page];
        if (!href) throw new Error(`Unknown page: ${page}`);
        // on the home page its sections scroll in place through its own link handler; anything else
        // navigates (a service page's "/#about" lands on the section once the home intro has played)
        const a = document.createElement('a');
        a.href = onHome && href.startsWith('/#') ? href.slice(1) : href;
        document.body.appendChild(a);
        a.click();
        a.remove();
        return reply({ opened: new URL(href, location.href).href });
      },
    },
    {
      name: 'draft_project_inquiry',
      title: 'Draft a project inquiry',
      description: 'Prepares an email and a WhatsApp message to Urobins from the visitor\'s project brief. Nothing is sent: it returns links the visitor opens to review and send the message themselves.',
      inputSchema: {
        type: 'object',
        properties: {
          brief: { type: 'string', description: 'What the visitor wants built or improved: platforms, must-have features, existing systems or codebase' },
          service: { type: 'string', enum: serviceIds, description: 'The closest matching service' },
          name: { type: 'string', description: 'The visitor\'s name' },
          company: { type: 'string', description: 'The visitor\'s company' },
          timeline: { type: 'string', description: 'When they need it' },
          budget: { type: 'string', description: 'An optional budget range' },
        },
        required: ['brief'],
      },
      annotations: { readOnlyHint: true },
      execute: async (input) => {
        const svc = FACTS.services.find((s) => s.id === input.service);
        const subject = `Project inquiry: ${svc ? svc.name : 'new project'}`;
        const from = [input.name, input.company].filter(Boolean).join(', ');
        const body = [input.brief, input.timeline && `Timeline: ${input.timeline}`, input.budget && `Budget: ${input.budget}`, from && `From: ${from}`]
          .filter(Boolean).join('\n\n');
        return reply({
          subject,
          body,
          email: `mailto:${FACTS.contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
          whatsapp: `${FACTS.contact.whatsapp}?text=${encodeURIComponent(`${subject}\n\n${body}`)}`,
          replyTime: FACTS.contact.replyTime,
          note: 'Nothing has been sent. Show the visitor these links so they can review and send the message themselves.',
        });
      },
    },
  ];
}

export function registerAgentTools({ onHome = false } = {}) {
  const mc = document.modelContext || navigator.modelContext;
  if (!mc) return;
  // the API is experimental and has changed shape between builds: it must never break the page
  try {
    const list = tools(onHome);
    if (typeof mc.registerTool === 'function') {
      list.forEach((t) => {
        try { Promise.resolve(mc.registerTool(t)).catch(() => {}); } catch (e) { /* this tool stays unregistered */ }
      });
    } else if (typeof mc.provideContext === 'function') {
      mc.provideContext({ tools: list });
    }
  } catch (e) { /* no tools then */ }
}
