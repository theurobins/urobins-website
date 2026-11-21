// Astro builds the site into dist/ as plain static HTML (no client framework), which Firebase deploys.
import { defineConfig } from 'astro/config';
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { siteFacts } from './src/lib/text.mjs';

// The home and service scripts share a small chunk (breakpoints, the guard, the WebMCP tools), which the
// browser would only find after downloading and parsing the page's script. A modulepreload in the head
// fetches it alongside.
function modulePreloads() {
  return {
    name: 'urobins-modulepreloads',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const out = fileURLToPath(dir);
        const pages = readdirSync(out, { recursive: true }).filter((f) => String(f).endsWith('.html'));
        for (const page of pages) {
          const file = join(out, page);
          let html = readFileSync(file, 'utf8');
          const links = new Set();
          for (const [, src] of html.matchAll(/<script type="module" src="(\/_astro\/[^"]+\.js)"/g)) {
            const js = readFileSync(join(out, src), 'utf8');
            for (const [, dep] of js.matchAll(/(?:^|[;}\s])import\s*(?:[\w${},\s*]+from\s*)?["']\.\/([^"']+\.js)["']/g)) links.add(`/_astro/${dep}`);
          }
          if (!links.size) continue;
          html = html.replace('</head>', `${[...links].map((h) => `<link rel="modulepreload" href="${h}">`).join('\n')}\n</head>`);
          writeFileSync(file, html);
        }
      },
    },
  };
}

// `import { FACTS } from 'virtual:site-facts'` (agent-tools.js): the WebMCP tools' facts, built from
// content/site.mjs at build time, so the bundle carries only the contact details and service list
function siteFactsModule() {
  const id = 'virtual:site-facts';
  return {
    name: 'urobins-site-facts',
    resolveId: (source) => (source === id ? `\0${id}` : undefined),
    load: (resolved) => (resolved === `\0${id}` ? siteFacts() : undefined),
  };
}

export default defineConfig({
  site: 'https://urobins.com',
  // every page is a folder with an index.html, so its URL ends in a slash (/web-development/)
  build: {
    format: 'directory',
    // the CSS ships inside each page: no render-blocking stylesheet request before first paint
    inlineStylesheets: 'always',
  },
  // keep the markup's whitespace exactly as written. Astro 7's default ('jsx') drops line breaks around
  // elements, which glues words to links that start a new source line ("development,custom CRM")
  compressHTML: false,
  devToolbar: { enabled: false },
  integrations: [modulePreloads()],
  vite: {
    plugins: [siteFactsModule()],
    build: {
      // fonts, images and video always get their own hashed file (cached for a year), never a data: URI
      assetsInlineLimit: 0,
    },
  },
});
