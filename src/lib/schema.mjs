// The pages' structured data (JSON-LD), built from content/site.mjs so the facts, the FAQ and the
// visible copy can never drift apart.
import { SITE, HOME, SERVICES } from '../../content/site.mjs';
import { ORG, WEBSITE, abs, pageUrl } from './text.mjs';

const phoneLd = SITE.phone.replace(' ', '-');
const logo = {
  '@type': 'ImageObject',
  '@id': `${SITE.origin}/#logo`,
  url: abs('/assets/logo/icon-512.png'),
  width: 512,
  height: 512,
  caption: SITE.name,
};
// city-level addresses: the team works in both cities. No street address until there is a real office
const addresses = SITE.locations.map((l) => ({
  '@type': 'PostalAddress',
  addressLocality: l.city,
  addressRegion: l.region,
  addressCountry: l.country,
}));
const areaServed = [
  ...SITE.locations.map((l) => ({ '@type': 'City', name: l.city })),
  { '@type': 'Place', name: 'Delhi NCR' },
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
  address: addresses,
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
  address: addresses,
  sameAs: SITE.social.map(([, h]) => h),
};

export function homeLd() {
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
        dateModified: SITE.updated,
      },
      {
        '@type': 'Person',
        '@id': `${SITE.origin}/#founder`,
        name: SITE.founder.name,
        jobTitle: SITE.founder.role,
        worksFor: { '@id': ORG },
      },
      faqLd(url, HOME.faqs),
    ],
  };
}

export function serviceLd(s) {
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
        dateModified: SITE.updated,
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
