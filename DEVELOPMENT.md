# Development

Scroll-driven agency site built with GSAP + ScrollTrigger, Lenis smooth scrolling, and Three.js.
Everything is bundled locally, so the site has no runtime CDN dependencies (fonts load from
Google Fonts). There are two bundles: `js/app.js` (site code, GSAP, Lenis) loads with the page,
and `js/sculpture.js` (Three.js and the Services scene) is fetched in idle time after the intro.

## Run it

```bash
npm install        # once
npm run build      # bundles src/ -> js/app.js + js/sculpture.js
npm run serve      # http://localhost:8080
```

Opening `index.html` directly from disk also works, but a local server is recommended so the
video and fonts behave like production. Use `npm run watch` while editing `src/` (it rebuilds
`js/app.js`; run `npm run build:3d` after editing `src/sculpture.js`).

## Structure

| Path | What it is |
| --- | --- |
| `index.html` | All markup and copy |
| `css/style.css` | Design tokens, layout, responsive rules |
| `src/main.js` | Lenis + ScrollTrigger setup, hero stage, nav, anchors, intro, render loop |
| `src/viewport.js` | Cached CSS viewport size (what `100vh` resolves to), so phone toolbars can't shift the scroll maths |
| `src/preloader.js` | Canvas preloader (spotlights, desk figure, silhouettes, 1% to 99% counter, zoom hand-off) |
| `src/hero-gl.js` | WebGL ribbed-glass gradient (orange to lavender) that also paints the stepped funnel bars of transition 1 |
| `src/funnel.js` | Stepped-bar geometry for transition 1 (the hero funnel) |
| `src/story.js` | About + Services sticky stage: 3D letter assembly, line draw, video pill split, portal into Services, curved card carousel |
| `src/sculpture.js` | Three.js cel-shaded cobalt props (orbit rings, laptop, phone, gear, papers…) and white flakes for the Services stage. Two canvases share one scene: props near the camera draw above the cards. Built as its own bundle |
| `src/metrics.js` | `$11.2 Billion` counter and the striped bar charts |
| `src/team.js` | Transition 2 (a page-attached stepped funnel drawn on one overlay canvas) and the team reveal/counters |
| `src/lines.js` | Splits a paragraph into rendered lines for line-by-line reveals |
| `assets/` | Team portraits, founder avatar, About video loop (MP4 + WebM) and poster, Services dust texture |

## Scroll lengths

Each stage is a tall section with a `position: sticky` inner frame; its timeline is scrubbed by scroll.
A few moments run on their own clock once reached, as they do in the reference: the About block's
glide and its text reveals, and the Metrics reveal.

- Hero + transition 1: `.hero { height: 300vh; margin-bottom: -226.5vh }`. The hero overlaps the
  About stage, which pins underneath it from 73.5vh of scroll, so the stepped funnel opens straight
  onto About. Timeline in `main.js` (1 unit = 1vh).
- About + Services: `.story { height: 1096vh }`; timeline units in `story.js` are vh of scroll.
  The first `LEAD` (116) units idle while the hero funnel plays over the stage; `STORY_MARKS` sets
  where the About/Services nav links land.
- Metrics: `.metrics { height: 100vh; margin-top: -128vh }` with a sticky frame. It slides up over
  the story's closing black hold (transparent until it reveals), so it pins the moment the Services
  fade completes; the reveal then plays in place on its own clock (about 3 s).
- Transition 2 + Team: `.team` scrolls normally (no pin). While its top scrolls in, `team.js` draws the
  transition on a fixed canvas: black below Metrics for 472px of scroll (at a 782px-tall viewport),
  then a stepped edge climbing to the top over 169px with a funnel of bars that rides up with the
  page, narrows and is gone by 882px. The team reveal is time-based, fired when the title is mid-screen.
- Below 981px wide, Metrics scrolls normally (no sticky frame).

## Replacing placeholder content

- **Team photos:** replace `assets/team/team-1.jpg` … `team-4.jpg` (4:5 crops work best; the 1st
  and 3rd cards show a square crop, the 2nd and 4th a 313:400 crop, both centred slightly high)
  and `assets/team/founder.jpg` (square).
  The current images are rendered placeholders shot "through reeded glass".
- **Names, roles, counters:** in `index.html` under `.team__grid` and `.founder`.
  Counter targets are the `data-count` attributes.
- **About video:** replace `assets/video/about-loop.mp4` / `.webm` and `about-poster.jpg`.
- **Contact details:** the footer's `.contact__list` in `index.html` (general, support, phone/WhatsApp).
- **Metrics:** values and bar heights live on each `.stat` (`data-count`, `--h` from 0 to 1).

## Keeping it smooth

- Only `transform`, `opacity` and `clip-path` change while scrolling; nothing reads layout per frame
  (sizes are measured on refresh/resize and cached).
- Lenis drives the scroll (`lerp: 0.06`) from GSAP's ticker; every ScrollTrigger scrubs with
  `scrub: true`, so there is one smoothing stage, not two.
- WebGL canvases only render while they can be seen: the hero stops once its funnel has collapsed,
  and the Services scene stops before the portal opens and under the closing black fade.
- Counters are locked to their final width (the serif's digits are proportional), so the text
  beside them never shifts.
- Blur-in reveals clear their `filter` when they finish.

## Accessibility and motion

- Split headings keep a readable `aria-label`; decorative canvases are `aria-hidden`.
- With `prefers-reduced-motion`, the preloader is skipped quickly, Lenis is disabled, and the
  counters and reveals render in their final state.
