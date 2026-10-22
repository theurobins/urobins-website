# Development

Scroll-driven agency site built with GSAP + ScrollTrigger and Lenis smooth scrolling, plus six static
service pages for search. The home page's code is bundled locally into one script (`js/app.js`), the
service pages share a 2 KB one (`js/page.js`), and the fonts are self-hosted, so the site has no
runtime CDN dependencies.

## Run it

```bash
npm install        # once
npm run build      # writes the service pages, their Markdown twins, 404.html, sitemap.xml, the llms
                   # files, the agent skill and src/site-facts.js from content/site.mjs, bundles
                   # src/ -> js/app.js + js/page.js, then stamps every page's CSS/JS links with a
                   # content hash (?v=...), then writes the deployable copy to dist/ (see below).
                   # firebase.json runs this before every deploy
npm run serve      # http://localhost:8080, the readable sources
npm run serve:dist # http://localhost:8080, exactly what deploys (run the build first)
```

`npm run build:js` and `npm run build:pages` run the two halves on their own. Opening `index.html`
directly from disk mostly works (the service pages use root paths, so they need the server), but a local server is recommended so the
video and fonts behave like production (browsers refuse `@font-face` files from `file://`). Use
`npm run watch` while editing `src/`.

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | All markup and copy. The logo lives here as two `<symbol>`s (`#logo-mark`, `#logo-word`, traced from the brand PNG) reused with `<use>`; recolour it with CSS `fill` |
| `css/style.css` | Design tokens, layout, responsive rules. One palette: near-black `--ink`, white type, the logo's blue (`--brand`, lifted to `--brand-2` on dark), `--card` gradient for every card |
| `src/main.js` | Lenis + ScrollTrigger setup, hero stage, nav, floating call button, magnetic buttons, anchors, intro, render loop |
| `src/torch.js` | The nav logo: solid white at rest; a cursor on or near it (full within 70px of its box, none past 240px) or a tap beside it on touch lights it like a torch: the side away from the light cools to silver, the edges facing it catch a white rim, a glint runs square to the light and a shadow falls on the glass away from it, and a faint pool of light (`.nav__pool`, its own layer, moved by transform) shows on the bar. Drawn with SVG masks and `<use>` copies (never a CSS filter); its ticker only runs while the light is moving |
| `src/breakpoints.js` | The phone media query (`PHONE`: up to 760px wide, or a touch screen at most 500px tall, so a phone in landscape stays a phone) and its complements (`NOT_PHONE`, `TABLET`, `DESKTOP`, `PHONE_LAND`); every script imports these and the CSS phone blocks repeat the same condition lists |
| `src/latch.js` | A scroll threshold with hysteresis: fires forward once the scroll passes a line and only undoes once it is a dead band back above it (used for the About text beats) |
| `src/reveal.js` | Entrance reveals: headings marked up as `.line > .line__in` slide out of line masks, paragraphs rise line by line, blocks rise in sequence |
| `src/viewport.js` | Cached CSS viewport size (what `100vh` resolves to), so phone toolbars can't shift the scroll maths |
| `src/preloader.js` | Loading screen (desktop and tablets), after the reference film: a hard close-up on the right lamp pulls back to reveal an indigo stage; the right giant rises and opens its eyes, the left lamp ignites with sparks, both beams swing onto the logo at the centre (assembling as faint glass in the dark and lit by the beams, see `logo-light.js`), the giants lean in, blink, settle, and the camera dives into the crossing beams; the hero's glass then fades in from the same light colour (`WASH`, passed to the shader's `uHand`). Canvas scene as a pure function of time in a 1600×900 design space, with the logo as DOM mapped into that space, so nothing is ever painted behind it. Keyframe tables are in reference seconds, stretched by `TS`. On phones (`PHONE` in `breakpoints.js`, either way up) it hands over to `preloader-mobile.js` |
| `src/preloader-mobile.js` | The phones' loading screen, a portrait scene of its own: a torch catches at the top edge, its beam searches the wall while the logo assembles, then rises onto the logo, opens to take it in and a softer counter-beam crosses from below; the exit dives into the same `WASH` colour as desktop. Beams are sprites built once (one dithered `getImageData` at start-up), so a frame is a fill and a few `drawImage`s |
| `src/logo-light.js` | Torch lighting for the loader logo, shared by both scenes. In the dark the logo is a faint glass rim; each lamp lights its own copy of the artwork through a CSS mask in the logo's units (a conic gradient for the beam, a radial one for distance), so a beam's edge can light half a piece or part of the word and two lamps add. Each lamp also leaves a glint (a band square to its light, on the side facing it) and a soft shadow on the wall away from it (blurred sprites built once, projected with `drawImage`). Masks are rewritten only when they change; no CSS filter or drop-shadow touches the logo (Safari draws a rectangle) |
| `src/hero-gl.js` | WebGL ribbed-glass gradient (electric blue to violet) that also paints the stepped funnel bars of transition 1 |
| `src/funnel.js` | Stepped-bar geometry for transition 1 (the hero funnel) |
| `src/story.js` | About stage: 3D letter assembly, line draw, video pill, text beats, then the pill becomes a portal that grows to full screen with the Impact header inside it |
| `src/path-sample.js` | Points along SVG paths without per-call `getPointAtLength` walks: `samplePath` (the About line, sampled once per command) and `pathLookup` (a table in plain maths for loops that move something along a path every frame) |
| `src/ease.js` | A cubic-bezier ease (the portal's grow curve), in place of the CustomEase plugin |
| `src/metrics.js` | Impact bento: card reveal, count-ups, the uptime card's striped chart; the tag icons loop in CSS while the section is on screen |
| `src/process.js` | "How we work": a pinned stage whose column of four stages scrolls up (each resting centred while the others dim) beside a tilted, parallaxing wall of CSS project mockups (wireframes built from `data-kind`) |
| `src/capabilities.js` | "What we build": four cards with vector scenes (product scene with phone, browser and goal widget; tech orbit with deploy status; automation pipeline a deal card travels; growth chart with keyword rankings). Loops only run while on screen; the orbit turns are CSS animations. Phones get a numbered index instead (see below) |
| `src/guard.js` | A deterrent on every page (both page scripts call it): the context menu, the developer-tools, view-source and save-page shortcuts, and dragging media out are swallowed; `style.css` also turns off iOS's long-press "Save Image". It only raises the bar (browser menus and `view-source:` still work) and is off on localhost so development and screenshot tests keep their tools |
| `src/lines.js` | Splits a paragraph into rendered lines for line-by-line reveals |
| `content/site.mjs` | Copy and facts for the service pages, sitemap, `llms.txt` and `llms-full.txt`: the six services (title, meta description, hero, offer cards, reasons, steps, tools, FAQ, related services), the contact details and the five commitments |
| `scripts/build-pages.mjs` | Writes `<slug>/index.html` and its Markdown twin `<slug>/index.md` for each service, `index.md` (the home page's twin), `404.html`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, the agent skill in `.well-known/agent-skills/` and `src/site-facts.js` from `content/site.mjs`, with each page's JSON-LD (Organization, WebSite, WebPage, Service, BreadcrumbList, FAQPage). The logo and icon `<symbol>`s are copied from `index.html`, so their path data lives in one place. Generated files are committed (Firebase deploys the folder as is): edit the content file, never the output |
| `web-development/` … `cloud-devops/` | The generated service pages (folder + `index.html`, so URLs end in a slash) |
| `css/page.css` | Service pages and 404 only, loaded after `style.css` (whose tokens, nav, pills, section heads, FAQ and footer they reuse): the CSS ribbed-glass hero, offer cards, reasons, steps, commitments, tools, FAQ, related index and the reveal states |
| `src/page.js` | The service pages' script (bundled to `js/page.js`): the phone menu sheet (same behaviour as the home page), nav hide on scroll, the floating call button, reveals and the marquee pause. No GSAP or Lenis |
| `robots.txt`, `sitemap.xml`, `llms.txt`, `llms-full.txt`, `site.webmanifest`, `favicon.ico` | Crawl and discovery files. `robots.txt` allows everyone, names the AI search and assistant crawlers explicitly and declares Content Signals (`search`, `ai-input` and `ai-train` all `yes`, in both groups: a named crawler reads only its own group); `llms.txt` is the summary AI assistants read, `llms-full.txt` every page's copy as Markdown |
| `index.md`, `<slug>/index.md` | Markdown twins of the pages, generated, for agents that ask for `Accept: text/markdown` (see below). Firebase serves them as `text/markdown` with a `rel="canonical"` Link header pointing at the HTML page, so search engines never treat them as duplicates |
| `.well-known/agent-skills/` | An Agent Skills discovery index (`index.json`, with the SHA-256 digest of the skill) and one skill, `urobins-project-inquiry/SKILL.md`: how an AI agent should recommend Urobins and send a project inquiry for its user, with their approval |
| `src/agent-tools.js`, `src/site-facts.js` | WebMCP: four tools an AI agent in the visitor's browser can call (list the services, get the contact options, open a page or section, draft an inquiry as email/WhatsApp links the visitor sends themselves). Registered on load by both page scripts when `document.modelContext` (or the older `navigator.modelContext`) exists; nothing happens elsewhere. `site-facts.js` is generated from the content file |
| `assets/og/` | 1200x630 share images (home and one per service), referenced by `og:image`. Rendered once from an HTML template in the site's fonts and glass; a new service needs its own `<slug>.jpg` |
| `assets/` | Team portraits (`team-1-sm.webp` is the About founder chip's small copy), About video loop (MP4 + WebM) and poster, About smoke texture, logo SVGs (`assets/logo/`: mark, full logo in black and white, favicon; `icon-192/512.png` and
`apple-touch-icon.png` for the manifest and home screens, `icon-512.png` also being the logo in the
structured data), fonts (`assets/fonts/`: Instrument Serif and Inter Tight, latin and latin-ext woff2 from Google Fonts, under the OFL in `assets/fonts/OFL.txt`; the `@font-face` rules open `style.css`) |

## Scroll lengths

Each pinned stage is a tall section with a `position: sticky` inner frame; its timeline is scrubbed
by scroll. The About text beats run on their own clock once reached.

- Hero + transition 1: `.hero { height: 300vh; margin-bottom: -230.5vh }`. The hero overlaps the
  About stage, which pins underneath it from 69.5vh of scroll, so the stepped funnel opens straight
  onto About. Timeline in `main.js` (1 unit = 1vh).
- About + portal: `.story { height: 588vh }` = `TOTAL + 100` with `TOTAL = 488` in `story.js`
  (timeline units are vh of scroll). The first `LEAD` (116) units idle while the hero funnel plays
  over the stage; the portal wipes at 205, grows to full screen by 315, and the stage holds it until
  it unpins at 488. `STORY_MARKS` sets where the About nav link lands.
- Impact: `.metrics { margin-top: -57vh }`, so its cards slide up over the open portal's lower half
  while the stage is still pinned; there is never a blank viewport between the two.
- Process: `.process { height: 440vh }` with a sticky frame; one scrubbed timeline drives the stage
  column (30% rest / 42% travel / 28% rest per step), the dimming, the progress rail and the two
  mockup columns. Below 981px it unpins and stacks.
- Capabilities, Team, Contact: normal flow; their reveals play once, when they scroll into view.

## Phones (`PHONE` in breakpoints.js, either way up)

Phones get their own composition, not the desktop squeezed. A phone is up to 760px wide, or a touch
screen at most 500px tall, so a phone turned to landscape (844x390, 932x430) stays a phone and a
rotation never crosses the breakpoint; a laptop or desktop with a mouse never matches it. The scripts
mostly decide once at start-up (`isPhone()`); the About line, the Process wall and the Services index
also follow a window resized across it. Turning a phone over keeps the reader's place: `main.js`
scrolls back to the same share of the section they were in, since landscape pages are far shorter. The CSS lives in the phone blocks at the end of `style.css`,
plus a landscape block (`PHONE_LAND`) that lays the stages out side by side: the About title left
with the copy right and its own line (`LANDSCAPE_LINE`), Impact as a two-column ledger, each Process
step's title beside its copy, the team in one row of four, the FAQ beside the resources, and a menu
sheet with its links in two columns. Tablets (761-980px, taller than 500px) keep the desktop layout,
unpinned.

- **Loader:** the searchlight scene in `preloader-mobile.js`, with the same torch-lit logo.
- **Nav:** the menu opens as a full-screen ink sheet with large serif links (01-04) that rise in one
  after another, low in thumb reach; the page behind it is inert and held still (until the intro
  hands over, closing it leaves scrolling to the intro), and widening past the phone layout closes
  it. The bar clears the notch's safe-area insets in landscape. The logo flashes its torch on a tap
  beside it.
- **Hero:** a larger serif title; the two CTAs side by side as 52px buttons.
- **About:** title in the upper third, then the blue line on its own portrait path (`PORTRAIT_LINE`
  in a 390x250 viewBox, fitted by CSS to the gap between the title and the copy), then one paragraph
  and the founder chip, clear of the call button. The copy reveals in one beat once the block has
  glided into place. Scroll lengths and the portal hand-off are the desktop ones, except that the
  title fades as the portal grows (its first letter would otherwise trail beside the header), the
  header lines fade up as they rise, and the eyebrow and lede hold hidden until their own rise.
- **Impact:** no cards: the five commitments as a ledger (icon, label, 01-05 index, the counting
  number, one line of copy) on a sheet that slides up over the open portal; each row's hairline
  draws in as it arrives, the uptime row keeps a small sparkline, and one full-width CTA closes it.
- **How we work:** no mockup wall (never built); a vertical timeline whose rail fills with a reading
  line at 60% of the screen. A step lights when the line reaches its node and only dims 48px back
  above it.
- **What we build:** no scenes and no loops: a numbered index (01-04), one row open at a time (an
  accordion: `h3 > button[aria-expanded]`), each showing the copy, a tiny sketch of its desktop scene
  drawn once by CSS transitions, and chips. No carousel.
- **Team:** a 2x2 portrait grid, the second column set 48px lower.
- **Contact:** hairline rows with 46px+ tap targets, a full-width CTA, larger FAQ toggles, and the
  footer logo across most of the width.
- **Book a call:** a 48px round button with a chat glyph (44px in landscape; the label stays for
  screen readers), clear of the home indicator. It steps aside while Impact's CTA or the Services
  rows (whose +/- toggles share its column) are on screen.

## Replacing placeholder content

- **Team:** `assets/team/team-1.webp` … `team-4.webp` (4:5 crops, 800x1000, saved as WebP at about
  quality 80: roughly half the size of a JPEG; keep new photos in WebP too). The About founder chip
  shows `team-1-sm.webp`, a 160x200 copy of the founder's portrait: replace both together. The
  current images are rendered placeholders shot "through reeded glass"; every portrait gets the same
  blue duotone in CSS, so mixed photo styles still read as one set. Names, roles and the focus line
  live in `index.html` under `.team__grid`.
- **About video:** replace `assets/video/about-loop.mp4` / `.webm` and `about-poster.webp`. The loop
  is turned to the site's blue with a CSS `hue-rotate` on `.about__video video`; remove that filter if
  the replacement is already on-palette.
- **Contact details:** the footer's `.contact__list` in `index.html`, the `#book` WhatsApp link at
  the bottom of the page and the JSON-LD in its `<head>`; for the service pages, 404 and llms files,
  `SITE` in `content/site.mjs` (then `npm run build:pages`).
- **Impact:** each `.card`'s number is a `.count` with `data-count`, `data-decimals`, `data-prefix`,
  `data-suffix` (add `data-static` to show a small number without counting). The copy is written as
  commitments (targets and cadences), not past results: keep it that way until there are real case
  numbers to cite.
- **Process mockups:** each `.mock` has a `data-kind` (`dash`, `phone`, `site`, `table`, `shop`,
  `crm`), an accent `--acc` and a label. They are CSS wireframes standing in for real case studies:
  to show real work, put an `<img>` inside the `.mock` (it fills the card) and drop the `data-kind`.
- **Capabilities:** copy lives in each `.cap`; the scene is built by `capabilities.js` from
  `data-cap` (`apps`, `dev`, `crm`, `seo`). The tech badges are the `TECH` list, the keyword rows the
  `RANKS` list in that file.

## Keeping it smooth

- Only `transform`, `opacity` and `clip-path` change while scrolling; nothing reads layout per frame
  (sizes are measured on refresh/resize and cached).
- Lenis drives the scroll (`lerp: 0.085`) from GSAP's ticker; every ScrollTrigger scrubs with
  `scrub: true`, so there is one smoothing stage, not two.
- Moments that run on their own clock once reached (the About text beats) go through `latch.js`:
  they fire once the scroll passes their line and only undo once it is 12vh back above it, so a slow
  scroll resting near a line never plays them back and forth. Everything else is scrubbed.
- The hero WebGL canvas only renders while it can be seen and drops to 30 fps at rest.
- Loops (tag icons, product scene, tech orbit, pipeline, growth chart, footer marquee) are paused
  whenever their section is off screen, CSS ones included: the deploy pulse, the scroll hint (once it
  has faded out) and the About smoke (only once the stage has pinned; until then it sits under the
  hero glass) stop with them.
- Prefer compositor-only loops: the tech orbit and Impact's tag icons are CSS animations of whole
  elements (an `<svg>` itself, not shapes inside it: those re-lay the svg out every frame in
  Chromium). Things that must move along a path read a `pathLookup` table, and text written by a loop
  is only touched when it changes.
- Never sample a long SVG path with `getPointAtLength` in a loop: each call walks the path from its
  start. The About line is sampled once per command (`samplePath`) and cached across refreshes; it
  used to cost ~200ms per pass, four passes during the loader.
- The pinned Process stage gives each step its own layer (`will-change: opacity`, desktop only), so
  dimming them never repaints the serif column, and skips style writes whose value hasn't changed.
- Load: the fonts are preloaded from `assets/fonts/` (no render-blocking third-party stylesheet), the
  About video is `preload="none"` until the hero intro has played (or the stage is reached), and the
  founder chip uses a small copy of its portrait.
- The loader logo's light is gradients and masks only: a CSS filter or drop-shadow there stalled
  WebKit for 350-590ms at the hand-off to the hero.
- Counters are locked to their final width (the serif's digits are proportional), so the text
  beside them never shifts.

## Service pages, SEO and AI discovery

- **Where things rank from.** Each service has its own page, title, description, H1 and FAQ aimed at
  one cluster of searches (`/web-development/`: "web development company in India"; `/mobile-app-development/`:
  "app development company"; `/crm-development/`, `/seo-services/`, `/digital-marketing/`,
  `/cloud-devops/`). The home page targets the brand and the broad "web and app development agency"
  terms and links to every service page from the Services cards, the footer and the FAQ.
- **Editing copy.** Change `content/site.mjs`, bump `SITE.updated` (it becomes the sitemap's
  `<lastmod>`), run `npm run build:pages`. Keep copy as capabilities and commitments, never invented
  results, clients or reviews; name tools and platforms only if the team really uses them.
- **Adding a service.** Add an entry to `SERVICES` (copy an existing one), add its share image as
  `assets/og/<slug>.jpg`, add it to the home page's Services cards, footer list and JSON-LD
  `hasOfferCatalog` in `index.html`, add a canonical `Link` header for its `index.md` in `firebase.json`,
  then rebuild. The sitemap, llms files, Markdown twins, agent skill, WebMCP tools, footers and related
  lists pick it up automatically.
- **Home page structured data** is hand-written in `index.html`'s `<head>`. Its FAQ entries must match
  the visible FAQ in the footer word for word (and `HOME.faqs` in the content file, which feeds
  `llms-full.txt`).
- **After deploying:** submit `https://urobins.com/sitemap.xml` in Google Search Console and Bing
  Webmaster Tools, and request indexing for each service page. `www.urobins.com` should redirect to
  `urobins.com` (Firebase custom domain redirect or a Cloudflare redirect rule); it does not serve the
  site on its own.
- **Cloudflare's managed robots.txt** (AI Crawl Control) prepends its own rules to ours and can block
  AI crawlers; leave it off or set to allow, or AI assistants cannot read the site to recommend it.
- **Markdown for agents.** Cloudflare's own Markdown conversion needs a paid plan, so on the free
  plan a Transform Rule does it: Rules > Transform Rules > URL Rewrite, filter
  `any(http.request.headers["accept"][*] contains "text/markdown") and ends_with(http.request.uri.path, "/")`,
  path rewritten (dynamic) to `concat(http.request.uri.path, "index.md")`. A request for `/seo-services/`
  with `Accept: text/markdown` then gets `/seo-services/index.md`; browsers never send that header.
  Check with `curl -H "Accept: text/markdown" https://urobins.com/`.
- **Agent discovery.** The homepage sends `Link` headers (from `firebase.json`) to `llms.txt`, its
  Markdown twin and the agent skills index. The site deliberately publishes no API catalog, OAuth or
  OIDC metadata, auth.md, MCP or A2A cards, Web Bot Auth keys or DNS-AID records: there is no API,
  login, agent or bot behind them, and empty or invented metadata would only mislead agents. Revisit
  if the agency ever ships one (an AI quote assistant, a client portal).
- **Deploy contents.** `firebase.json` (one folder up) deploys `dist/`, which `scripts/dist.mjs` (the
  last build step, git-ignored) fills from the project: everything except `src/`, `scripts/`,
  `content/`, the package files, these two Markdown docs and the dotfiles (`.git`, `.gitignore`,
  `.vscode`), so `.well-known/` and the pages' `index.md` twins go out. On the way the stylesheets are
  minified and the HTML loses its comments (inline `<style>` blocks are minified too), so the notes in
  the sources never ship; JS is already minified by esbuild. Edit the sources, never `dist/`. A new
  service page needs its own canonical `Link` header entry in `firebase.json` for its `index.md`. It also sets cache and security headers: fonts,
  CSS and JS for a year (the CSS and JS links carry a content hash from `scripts/stamp-assets.mjs`, so a
  changed file gets a new URL), images and video for a week, pages revalidated on every visit (Firebase's
  CDN keeps them until the next deploy). Its `predeploy` hook runs `npm run build`, so a deploy can
  never ship a page pointing at an old bundle. In Cloudflare, Caching > Browser Cache TTL should be
  "Respect Existing Headers", or Cloudflare raises the pages' and text files' lifetimes to its own.

## Accessibility and motion

- Headings split into whole-word lines (`.line > .line__in`) need no label: their text reads in order.
  Only the About title, split into letters, keeps an `aria-label` with the letters `aria-hidden`.
  Decorative canvases and scenes are `aria-hidden`.
- Landmarks: a skip link to `#main`, the header, `main`, the footer (`.contact`, outside `main`, so it
  is the page's contentinfo) and the call button in its own labelled `aside`. The desktop Process
  heading is visually hidden rather than `display: none`, so the stages keep their heading. Impact's
  card labels and the team names are `h3`s.
- Small type on ink stays above 4.5:1 (the phone team roles use the lifted `#8f8dff`, not `--brand-2`).
  The pages pass axe-core (WCAG 2.2 AA + best practices) on desktop and phone.
- With `prefers-reduced-motion`, the preloader is skipped quickly, Lenis is disabled, and the
  counters, reveals and loops render in their final state.
