// The pages' structured data (JSON-LD), built from content/site.mjs so the facts, the FAQ and the
// visible copy can never drift apart.
// Every builder takes the page's own dateModified (src/lib/pages.mjs lastmodOf), never a site-wide date.
import { SITE, HOME, SERVICES, ABOUT, CONTACT, PORTFOLIO, BLOG } from '../../content/site.mjs';
import { ORG, WEBSITE, FOUNDER, abs, pageUrl, workUrl, postUrl, isoDate } from './text.mjs';

const phoneLd = SITE.phone.replace(' ', '-');
const logo = {
  '@type': 'ImageObject',
  '@id': `${SITE.origin}/#logo`,
  url: abs('/assets/logo/icon-512.png'),
  width: 512,
  height: 512,
  caption: SITE.name,
};
const postal = (o) => ({
  '@type': 'PostalAddress',
  ...(o.street && { streetAddress: o.street }),
  addressLocality: o.locality || o.city,
  addressRegion: o.region,
  ...(o.postalCode && { postalCode: o.postalCode }),
  addressCountry: o.country,
});
const head = SITE.offices.find((o) => o.kind === 'head');
const regional = SITE.offices.filter((o) => o.kind === 'regional');
// the Organization's address is the registered head office (Bengaluru)
const address = postal(head);
// the regional office as a local business of its own: this is the one the Google Business Profile
// describes, so its name (the plain brand name, as on the profile), address and phone must match it
const departments = regional.map((o) => ({
  '@type': 'ProfessionalService',
  '@id': `${SITE.origin}/#office-${o.city.toLowerCase()}`,
  name: SITE.name,
  description: `${SITE.name}'s ${o.label.toLowerCase()} in ${[o.locality, o.city].filter(Boolean).join(', ')}, ${o.region}.`,
  url: `${SITE.origin}/`,
  image: abs('/assets/logo/icon-512.png'),
  telephone: SITE.phone.replace(' ', '-'),
  email: SITE.email,
  address: postal(o),
  parentOrganization: { '@id': `${SITE.origin}/#organization` },
}));
const areaServed = [
  ...SITE.offices.flatMap((o) => [o.city, o.locality].filter(Boolean)).map((name) => ({ '@type': 'City', name })),
  { '@type': 'Country', name: 'India' },
  { '@type': 'Place', name: 'Worldwide' },
];
const faqLd = (url, faqs) => ({
  '@type': 'FAQPage',
  '@id': `${url}#faq`,
  mainEntity: faqs.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

const organization = {
  '@type': 'Organization',
  '@id': ORG,
  name: SITE.name,
  alternateName: SITE.alternateNames,
  url: `${SITE.origin}/`,
  logo,
  image: { '@id': `${SITE.origin}/#logo` },
  description: SITE.summary,
  slogan: SITE.slogan,
  email: SITE.email,
  telephone: phoneLd,
  address,
  department: departments,
  areaServed,
  founder: { '@id': `${SITE.origin}/#founder` },
  knowsAbout: SITE.knowsAbout,
  contactPoint: [
    {
      '@type': 'ContactPoint',
      contactType: 'sales',
      email: SITE.email,
      telephone: phoneLd,
      areaServed: ['IN', 'Worldwide'],
      availableLanguage: ['English'],
    },
    {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: SITE.support,
      availableLanguage: ['English'],
    },
  ],
  sameAs: SITE.social.map(([, h]) => h),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Urobins services',
    itemListElement: SERVICES.map((s) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', '@id': `${pageUrl(s)}#service`, name: s.name, url: pageUrl(s) },
    })),
  },
};

// the service pages carry a short reference to the same organization (same @id)
const orgRef = {
  '@type': 'Organization',
  '@id': ORG,
  name: SITE.name,
  alternateName: SITE.alternateNames,
  url: `${SITE.origin}/`,
  logo: abs('/assets/logo/icon-512.png'),
  email: SITE.email,
  telephone: phoneLd,
  address,
  sameAs: SITE.social.map(([, h]) => h),
};

const founder = {
  '@type': 'Person',
  '@id': FOUNDER,
  name: SITE.founder.name,
  jobTitle: SITE.founder.role,
  worksFor: { '@id': ORG },
  url: abs('/about/'),
};

const websiteRef = { '@type': 'WebSite', '@id': WEBSITE, url: `${SITE.origin}/`, name: SITE.name, publisher: { '@id': ORG } };

// crumbs: [[name, path], ...] after Home
const breadcrumb = (url, crumbs) => ({
  '@type': 'BreadcrumbList',
  '@id': `${url}#breadcrumb`,
  itemListElement: [['Home', '/'], ...crumbs].map(([name, path], i) => ({ '@type': 'ListItem', position: i + 1, name, item: abs(path) })),
});

// the WebPage node shared by About, Contact, Portfolio, the case studies and the blog
const webPage = (type, url, title, description, date, image, extra = {}) => ({
  '@type': type,
  '@id': `${url}#webpage`,
  url,
  name: title,
  description,
  inLanguage: 'en',
  isPartOf: { '@id': WEBSITE },
  breadcrumb: { '@id': `${url}#breadcrumb` },
  primaryImageOfPage: { '@type': 'ImageObject', url: abs(image), width: 1200, height: 630 },
  dateModified: date,
  ...extra,
});

export function aboutLd(date) {
  const url = abs('/about/');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      orgRef,
      websiteRef,
      webPage('AboutPage', url, ABOUT.title, ABOUT.description, date, '/assets/og/home.jpg', { about: { '@id': ORG }, mainEntity: { '@id': ORG } }),
      founder,
      breadcrumb(url, [['About', '/about/']]),
    ],
  };
}

export function contactLd(date) {
  const url = abs('/contact/');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      orgRef,
      websiteRef,
      webPage('ContactPage', url, CONTACT.title, CONTACT.description, date, '/assets/og/home.jpg', { about: { '@id': ORG } }),
      breadcrumb(url, [['Contact', '/contact/']]),
      faqLd(url, CONTACT.faqs),
    ],
  };
}

export function portfolioLd(work, date) {
  const url = abs('/portfolio/');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      orgRef,
      websiteRef,
      webPage('CollectionPage', url, PORTFOLIO.title, PORTFOLIO.description, date, '/assets/og/work-urobins.jpg', {
        mainEntity: {
          '@type': 'ItemList',
          itemListElement: work.map((w, i) => ({ '@type': 'ListItem', position: i + 1, name: w.name, url: workUrl(w) })),
        },
      }),
      breadcrumb(url, [['Portfolio', '/portfolio/']]),
    ],
  };
}

export function workLd(w, date) {
  const url = workUrl(w);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      orgRef,
      websiteRef,
      webPage('WebPage', url, w.title, w.description, date, `/assets/og/work-${w.shot}.jpg`, { about: { '@id': `${url}#work` }, mainEntity: { '@id': `${url}#work` } }),
      {
        '@type': 'CreativeWork',
        '@id': `${url}#work`,
        name: w.name,
        description: w.summary,
        url: w.url,
        genre: w.kind,
        dateCreated: w.year,
        creator: { '@id': ORG },
        image: abs(`/assets/og/work-${w.shot}.jpg`),
        keywords: w.stack.join(', '),
      },
      breadcrumb(url, [['Portfolio', '/portfolio/'], [w.name, `/portfolio/${w.slug}/`]]),
    ],
  };
}

export function blogLd(posts, date) {
  const url = abs('/blog/');
  return {
    '@context': 'https://schema.org',
    '@graph': [
      orgRef,
      websiteRef,
      webPage('CollectionPage', url, BLOG.title, BLOG.description, date, '/assets/og/home.jpg', { mainEntity: { '@id': `${url}#blog` } }),
      {
        '@type': 'Blog',
        '@id': `${url}#blog`,
        name: `${SITE.name} blog`,
        url,
        publisher: { '@id': ORG },
        blogPost: posts.map((p) => ({ '@type': 'BlogPosting', '@id': `${postUrl(p)}#post`, headline: p.data.heading, url: postUrl(p), datePublished: isoDate(p.data.published) })),
      },
      breadcrumb(url, [['Blog', '/blog/']]),
    ],
  };
}

export function postLd(p, date) {
  const url = postUrl(p);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      orgRef,
      websiteRef,
      founder,
      webPage('WebPage', url, p.data.title, p.data.description, date, '/assets/og/home.jpg', { mainEntity: { '@id': `${url}#post` } }),
      {
        '@type': 'BlogPosting',
        '@id': `${url}#post`,
        headline: p.data.heading,
        description: p.data.description,
        url,
        mainEntityOfPage: { '@id': `${url}#webpage` },
        image: abs('/assets/og/home.jpg'),
        datePublished: isoDate(p.data.published),
        dateModified: date,
        author: { '@id': FOUNDER },
        publisher: { '@id': ORG },
        isPartOf: { '@id': `${abs('/blog/')}#blog` },
        articleSection: p.data.category,
        ...(p.data.takeaways.length && { abstract: p.data.takeaways.join(' ') }),
        inLanguage: 'en',
        wordCount: p.body.split(/\s+/).filter(Boolean).length,
      },
      breadcrumb(url, [['Blog', '/blog/'], [p.data.heading, `/blog/${p.id}/`]]),
      ...(p.data.faqs.length ? [faqLd(url, p.data.faqs.map(({ q, a }) => [q, a]))] : []),
    ],
  };
}

export function homeLd(date) {
  const url = `${SITE.origin}/`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      organization,
      {
        '@type': 'WebSite',
        '@id': WEBSITE,
        url,
        name: SITE.name,
        alternateName: SITE.siteAlternateNames,
        description: SITE.tagline,
        publisher: { '@id': ORG },
        inLanguage: 'en',
      },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: HOME.title,
        description: HOME.description,
        isPartOf: { '@id': WEBSITE },
        about: { '@id': ORG },
        primaryImageOfPage: { '@type': 'ImageObject', url: abs('/assets/og/home.jpg'), width: 1200, height: 630 },
        inLanguage: 'en',
        dateModified: date,
      },
      founder,
      faqLd(url, HOME.faqs),
    ],
  };
}

export function serviceLd(s, date) {
  const url = pageUrl(s);
  return {
    '@context': 'https://schema.org',
    '@graph': [
      orgRef,
      { '@type': 'WebSite', '@id': WEBSITE, url: `${SITE.origin}/`, name: SITE.name, publisher: { '@id': ORG } },
      {
        '@type': 'WebPage',
        '@id': `${url}#webpage`,
        url,
        name: s.title,
        description: s.description,
        inLanguage: 'en',
        isPartOf: { '@id': WEBSITE },
        about: { '@id': `${url}#service` },
        mainEntity: { '@id': `${url}#service` },
        breadcrumb: { '@id': `${url}#breadcrumb` },
        primaryImageOfPage: { '@type': 'ImageObject', url: abs(`/assets/og/${s.slug}.jpg`), width: 1200, height: 630 },
        dateModified: date,
      },
      {
        '@type': 'Service',
        '@id': `${url}#service`,
        name: s.name,
        serviceType: s.serviceType,
        description: s.lede,
        url,
        provider: { '@id': ORG },
        areaServed,
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: `${s.name} services`,
          itemListElement: s.offer.items.map(([n, d]) => ({ '@type': 'Offer', itemOffered: { '@type': 'Service', name: n, description: d } })),
        },
      },
      {
        '@type': 'BreadcrumbList',
        '@id': `${url}#breadcrumb`,
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE.origin}/` },
          { '@type': 'ListItem', position: 2, name: s.name, item: url },
        ],
      },
      faqLd(url, s.faqs),
    ],
  };
}
