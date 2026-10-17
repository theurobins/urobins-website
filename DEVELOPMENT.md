# Development

Scroll-driven agency site built with GSAP + ScrollTrigger, Lenis smooth scrolling, and Three.js.
Everything is bundled locally into `js/app.js`, so the site has no runtime CDN dependencies
(fonts load from Google Fonts).

## Run it

```bash
npm install        # once
npm run build      # bundles src/ -> js/app.js
npm run serve      # http://localhost:8080
```

Opening `index.html` directly from disk also works, but a local server is recommended so the
video and fonts behave like production. Use `npm run watch` while editing `src/`.

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | All markup and copy |
| `css/style.css` | Design tokens, layout, responsive rules |
| `src/main.js` | Lenis + ScrollTrigger setup, hero stage, nav, anchors, intro |
| `src/preloader.js` | Canvas preloader (spotlights, desk figure, silhouettes, 1% to 99% counter, zoom hand-off) |
| `src/hero-gl.js` | WebGL ribbed-glass gradient (orange to lavender) that also paints the stepped funnel bars of transition 1 |
| `src/funnel.js` | Shared geometry for both stepped-bar transitions |
| `src/story.js` | About + Services sticky stage: 3D letter assembly, line draw, video pill split, portal into Services, curved card carousel |
| `src/sculpture.js` | Three.js metallic sculpture, panels and specks behind the service cards |
| `src/metrics.js` | `$11.2 Billion` counter and the striped bar charts |
| `src/team.js` | Transition 2 (black bars into white) and team reveal/counters |
| `assets/` | Team portraits, founder avatar, About video loop (MP4 + WebM) and poster |

## Scroll lengths

Each stage is a tall section with a `position: sticky` inner frame; its timeline is scrubbed by scroll.

- Hero + transition 1: `.hero { height: 300vh }` (timeline in `main.js`)
- About + Services: `.story { height: 980vh }`; timeline units in `story.js` are vh of scroll
  (`STORY_MARKS` sets where the About/Services nav links land)
- Transition 2: `.team__shift { height: 170vh }`

## Replacing placeholder content

- **Team photos:** replace `assets/team/team-1.jpg` … `team-4.jpg` (4:5 crops work best; cards
  show a square crop centred slightly high) and `assets/team/founder.jpg` (square).
  The current images are rendered placeholders shot "through reeded glass".
- **Names, roles, counters:** in `index.html` under `.team__grid` and `.founder`.
  Counter targets are the `data-count` attributes.
- **About video:** replace `assets/video/about-loop.mp4` / `.webm` and `about-poster.jpg`.
- **Contact details:** the footer's `.contact__list` in `index.html` (general, support, phone/WhatsApp).
- **Metrics:** values and bar heights live on each `.stat` (`data-count`, `--h` from 0 to 1).

## Accessibility and motion

- Split headings keep a readable `aria-label`; decorative canvases are `aria-hidden`.
- With `prefers-reduced-motion`, the preloader is skipped quickly, Lenis is disabled, and the
  counters and reveals render in their final state.
