---
title: "Core Web Vitals Explained for Business Owners | Urobins"
heading: "Core Web Vitals, explained for business owners"
description: "LCP, INP and CLS in plain words, the scores Google wants, the usual causes of slow pages and the questions to ask your developer."
published: 2026-11-21
category: Web development
takeaways:
  - "Core Web Vitals measure loading (LCP, 2.5 s or less), responsiveness (INP, 200 ms or less) and visual stability (CLS, 0.1 or less)."
  - "Google judges them on real visits at the 75th percentile; the lab score in PageSpeed Insights is a diagnostic, not the verdict."
  - "Big images, heavy JavaScript and third-party tags cause most failures."
  - "They are a tie-breaker in rankings; relevance and content matter far more."
faqs:
  - q: "What are good Core Web Vitals scores?"
    a: "Largest Contentful Paint of 2.5 seconds or less, Interaction to Next Paint of 200 milliseconds or less, and Cumulative Layout Shift of 0.1 or less, measured at the 75th percentile of real visits."
  - q: "Do Core Web Vitals affect Google rankings?"
    a: "They are part of Google's page experience signals, but relevance and content matter far more. Good scores help most when competing pages are otherwise similar, and they reduce the visitors you lose to slow, jumpy pages."
  - q: "Why is my PageSpeed Insights score different from Search Console?"
    a: "Search Console uses field data from real Chrome users over 28 days. The PageSpeed score at the top is lab data from one simulated visit. Trust the field data when there is enough of it."
  - q: "What replaced First Input Delay?"
    a: "Interaction to Next Paint (INP) replaced First Input Delay as a Core Web Vital in March 2024. INP measures how quickly a page responds to every tap, click and key press during a visit, not only the first."
---

Core Web Vitals are Google’s measures of how a page feels to use: how quickly the main content appears, how quickly the page responds when someone taps, and whether things jump around while it loads. They show up in PageSpeed Insights and in Search Console, usually as red, orange or green. This is what they mean and what to do about them, without the jargon.

## The three numbers

| Metric | What it measures | Good |
| --- | --- | --- |
| **LCP**, Largest Contentful Paint | How long until the biggest thing on screen, usually the hero image or headline, has loaded | 2.5 seconds or less |
| **INP**, Interaction to Next Paint | How long the page takes to respond visibly after a tap, click or key press | 200 milliseconds or less |
| **CLS**, Cumulative Layout Shift | How much the content jumps around while loading | 0.1 or less |

Google judges each one at the 75th percentile of real visits: at least three out of four visits should hit the “good” mark. INP replaced an older metric, First Input Delay, in March 2024, so older articles may still mention FID.

## Field data and lab data

PageSpeed Insights shows two kinds of results, and they often disagree:

- **Field data** comes from real Chrome users visiting your site over the last 28 days. This is what Google uses, and what the Core Web Vitals report in Search Console shows. New or low-traffic sites often have none yet.
- **Lab data** is one simulated visit by a test browser. It is useful for finding problems, but it is not what your visitors experience.

If your field data is green and the lab score is not, your visitors are probably fine. If there is no field data yet, the lab data is the best guide you have.

## Do they affect rankings?

They are part of Google’s page experience signals. Relevance and content still matter far more: a fast page that does not answer the search will not rank. But when pages are otherwise similar, experience can be the tie-breaker, and slow, jumpy pages lose visitors whatever Google thinks of them.

## What usually causes problems

**Slow LCP**
- Huge hero images: serve them compressed, in WebP or AVIF, at the size they are shown, and let the browser fetch them early.
- A slow server or no CDN.
- Stylesheets, scripts and web fonts that block the page from showing anything until they load.

**Poor INP**
- Too much JavaScript running at once, often from page builders, sliders and animation libraries.
- Third-party tags: chat widgets, trackers, heatmaps and ad scripts all compete for the same processor.
- Work that could wait until later, done the moment someone taps.

**High CLS**
- Images and videos without set dimensions, so the page reflows when they arrive.
- Banners, cookie bars and ads injected above existing content.
- Web fonts that swap in late with different sizes.

## What we learned on our own site

Our home page uses WebGL, real 3D graphics, for its glass hero. On a normal laptop or phone it is smooth. But PageSpeed Insights measured 21 seconds of blocking time on desktop. The test browser has no graphics chip, so it was drawing every frame of the 3D scene on the processor.

Visitors never saw that problem, but the scores did, and so might any crawler using a similar headless browser. The fix was to detect when a page is drawn without a graphics chip and show a lightweight CSS version of the hero instead, with lower-resolution loading animations. Visitors with a graphics chip still see the full version. The lesson: test the way the testers test, and give heavy features a fallback.

## Questions to ask your developer

1. What are our field-data scores for LCP, INP and CLS on mobile, and which pages fail?
2. What is the largest element on our key pages, and how big is it?
3. Which third-party scripts load on every page, and does each one still earn its place?
4. Do all images have set dimensions and modern formats?
5. Is the site served from a CDN, with caching set up?

Run [PageSpeed Insights](https://pagespeed.web.dev/) on your home page and your most important page, on mobile, and compare the answers.

If the numbers are red and you want them green, our [web development](/web-development/) team builds with performance budgets from the first commit, and our [SEO services](/seo-services/) include Core Web Vitals fixes on existing sites.
