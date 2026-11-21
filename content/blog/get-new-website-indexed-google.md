---
title: "How to Get a New Website Indexed by Google | Urobins"
heading: "How to get a new website indexed by Google"
description: "A practical checklist for getting a new website indexed by Google, and what each Search Console status means, including “Page with redirect”."
published: 2026-11-21
category: SEO
takeaways:
  - "Indexing comes before ranking: Google must be able to fetch a page, be allowed to index it, and decide it is worth keeping."
  - "Check robots.txt and noindex first, give every page one canonical address, and submit an XML sitemap in Search Console and Bing Webmaster Tools."
  - "“Page with redirect” for your http:// and www. addresses is normal and needs no fix."
  - "New sites are often indexed within days to a few weeks, but there is no guaranteed timeline."
faqs:
  - q: "How long does it take Google to index a new website?"
    a: "Often a few days to a few weeks after you submit a sitemap and request indexing in Search Console. There is no guaranteed timeline; internal links, useful content and links from other sites all help Google find and keep pages sooner."
  - q: "What does “Page with redirect” mean in Google Search Console?"
    a: "The URL redirects to another address, so Google indexes the destination instead. For the http:// and www. versions of a site that redirect to the main https address, this is exactly what should happen and needs no fix."
  - q: "What does “Crawled – currently not indexed” mean?"
    a: "Google fetched the page but chose not to index it for now, usually because it looks thin or too similar to other pages. Make the page more useful and distinct, link to it from relevant pages, and request indexing again."
  - q: "Do I need to submit my site to Bing as well as Google?"
    a: "Yes. Bing Webmaster Tools takes a few minutes to set up, can import your Search Console settings, and Bing's index also feeds other search engines and AI assistants."
---

A website that is not in Google’s index cannot appear in search, however good it is. Indexing comes before ranking: first Google has to find your pages, fetch them and decide to keep them. This checklist covers everything we check when launching a site, in order.

## 1. Make sure Google is allowed in

- **robots.txt** must not block the pages. Open `yoursite.com/robots.txt` and look for a `Disallow: /` under `User-agent: *`, a common leftover from a staging site.
- **No `noindex`.** Check the page source for `<meta name="robots" content="noindex">` and ask your developer whether the server sends an `X-Robots-Tag: noindex` header.
- **Pages return a 200 status.** Not a redirect, not a login wall, not an error.

## 2. Give every page one address

The same page can often be reached at `http://`, `https://`, with `www.` and without it. Pick one version, redirect the others to it with a permanent (301) redirect, and add a canonical tag to each page that points at its preferred address:

```html
<link rel="canonical" href="https://example.com/services/">
```

**About “Page with redirect” in Search Console:** if the URLs listed there are your `http://` or `www.` versions, that is exactly what should happen. Those addresses redirect to the real page, so Google indexes the real page instead. There is nothing to fix, and starting a validation for them changes nothing.

## 3. Submit a sitemap

An XML sitemap lists the pages you want indexed. Include only the final, canonical, indexable addresses: no redirects, no `noindex` pages, no 404s. Give each page a `lastmod` date that changes only when the page really changes. Google learns to ignore dates that change on every build. List the sitemap in robots.txt with a `Sitemap:` line as well.

## 4. Verify the site with Google and Bing

In [Google Search Console](https://search.google.com/search-console), a **Domain property** (verified through DNS) covers every version of your site at once. Submit the sitemap under **Sitemaps**. Do the same in [Bing Webmaster Tools](https://www.bing.com/webmasters): Bing’s index also feeds other search engines and assistants, and it can import your Search Console setup in a few clicks.

## 5. Ask for your key pages to be crawled

Paste each important URL into **URL Inspection**, click **Test live URL** to confirm Google can fetch it, then **Request indexing**. There is a daily limit, so start with the home page and your main service or product pages. For Bing and Yandex, IndexNow notifies them whenever a page changes; if you use Cloudflare, switching on **Crawler Hints** does this automatically.

## 6. Link every page from somewhere

Google finds most pages by following links. Every page should be reachable from your navigation, footer or another page. A page that nothing links to, an orphan page, may never be crawled even if it is in the sitemap.

## 7. Make each page worth keeping

Google does not index everything it crawls. Pages that are thin, near-duplicates of other pages or mostly boilerplate are often left out. Give each page a clear purpose, its own title and heading, and enough useful content to answer the question it targets.

## Reading the Pages report

Search Console’s **Pages** report explains why a URL is not indexed. The statuses you will see most on a new site:

- **Discovered – currently not indexed:** Google knows the URL but has not fetched it yet. Common on new sites; better internal links and time usually solve it.
- **Crawled – currently not indexed:** Google fetched it and chose not to index it for now. Improve the content and make it more distinct from your other pages.
- **Page with redirect:** the URL redirects elsewhere. Normal for `http://` and `www.` versions.
- **Alternate page with proper canonical tag:** a duplicate correctly pointing at the main version. Normal.
- **Duplicate without user-selected canonical:** Google found duplicates and you have not said which one is the main version. Add canonical tags.
- **Excluded by ‘noindex’ tag:** a page you, or a plugin, told Google not to index. Fine if intended.
- **Not found (404):** links point to pages that no longer exist. Redirect them or fix the links.

## How long it takes

On a new site, the first pages are often indexed within days to a few weeks of requesting it. There is no guaranteed timeline. Being indexed is also not the same as ranking: if your pages are indexed but a search for your brand name still shows a different word, read [why Google corrects new brand names](/blog/google-did-you-mean-new-brand-name/).

Want a second pair of eyes? A [technical SEO audit](/seo-services/) covers all of the above and more, and our developers can make the fixes for you.
