import { useEffect } from 'react';
import { SITE_ORIGIN } from '@/const';

interface StructuredDataProps {
  data: Record<string, any>;
}

/**
 * Component to inject structured data (JSON-LD) into the page
 */
export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}

/**
 * Organization structured data for Terra Preta Organics
 */
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Terra Preta Organics',
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/logo.png`,
  description:
    'Organic nitrogen (SuperN), biological soil amendments (Terra Revive), and related organic fertility for prairie agriculture and land restoration. Based in Sundre, Alberta, serving producers across Canada.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sundre',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Alberta',
    },
    {
      '@type': 'Country',
      name: 'Canada',
    },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    email: 'chris@terrapreta.ca',
    telephone: '+1-403-921-6291',
    availableLanguage: 'English',
  },
  sameAs: [
    'https://www.linkedin.com/company/terra-preta-organics',
    'https://www.instagram.com/terrapretaorganics',
  ],
};

/**
 * WebSite JSON-LD for sitename in search and entity clarity
 */
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Terra Preta Organics',
  url: SITE_ORIGIN,
  description:
    'Organic fertilizers and soil amendments for Canadian agriculture — SuperN, Terra Revive, and related products.',
  inLanguage: 'en-CA',
  publisher: {
    '@type': 'Organization',
    name: 'Terra Preta Organics',
    url: SITE_ORIGIN,
  },
};

/**
 * Product structured data for Terra Revive
 */
export const productSchema = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'Terra Revive',
  description: 'A pelleted soil amendment that rebuilds biology, structure, and nutrient cycling so native species establish without synthetics. Applied at 1,500 to 2,000 lb per acre.',
  brand: {
    '@type': 'Brand',
    name: 'Terra Preta Organics',
  },
  image: `${SITE_ORIGIN}/pellets-in-hand.jpg`,
  category: 'Soil Amendment',
  offers: {
    '@type': 'AggregateOffer',
    priceCurrency: 'CAD',
    lowPrice: '1.50',
    highPrice: '1.75',
    offerCount: '2',
    offers: [
      {
        '@type': 'Offer',
        name: 'Bulk Totes',
        price: '1.50',
        priceCurrency: 'CAD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '1.50',
          priceCurrency: 'CAD',
          unitText: 'lb',
        },
        availability: 'https://schema.org/InStock',
        deliveryLeadTime: {
          '@type': 'QuantitativeValue',
          minValue: 36,
          maxValue: 48,
          unitCode: 'HUR',
        },
      },
      {
        '@type': 'Offer',
        name: '50 lb Bags',
        price: '1.75',
        priceCurrency: 'CAD',
        priceSpecification: {
          '@type': 'UnitPriceSpecification',
          price: '1.75',
          priceCurrency: 'CAD',
          unitText: 'lb',
        },
        availability: 'https://schema.org/InStock',
        deliveryLeadTime: {
          '@type': 'QuantitativeValue',
          minValue: 36,
          maxValue: 48,
          unitCode: 'HUR',
        },
      },
    ],
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    reviewCount: '3',
  },
};

/**
 * Local Business structured data
 */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': SITE_ORIGIN,
  name: 'Terra Preta Organics',
  description:
    'Organic fertilizers and biological soil amendments for prairie producers — SuperN, Terra Revive, and related products. Sundre, Alberta.',
  url: SITE_ORIGIN,
  telephone: '+1-403-921-6291',
  email: 'chris@terrapreta.ca',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Sundre',
    addressRegion: 'AB',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.7994,
    longitude: -114.6397,
  },
  areaServed: [
    {
      '@type': 'State',
      name: 'Alberta',
    },
  ],
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '08:00',
    closes: '17:00',
  },
};

/**
 * Service structured data for reclamation services
 */
export const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Soil Reclamation Services',
  provider: {
    '@type': 'Organization',
    name: 'Terra Preta Organics',
  },
  areaServed: {
    '@type': 'State',
    name: 'Alberta',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Reclamation Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Oil and Gas Reclamation',
          description: 'Restore soil function on wellsites and access roads',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Municipal and Utilities',
          description: 'Rebuild stockpiled topsoil and establish vegetation',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Contractor Support',
          description: 'Spec-grade products and on-site support',
        },
      },
    ],
  },
};

/**
 * Case Study Article schema generator
 */
export function createCaseStudySchema(caseStudy: {
  title: string;
  date: string;
  image: string;
  resultsSummary: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: caseStudy.title,
    image: `${SITE_ORIGIN}${caseStudy.image}`,
    datePublished: caseStudy.date,
    author: {
      '@type': 'Organization',
      name: 'Terra Preta Organics',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Terra Preta Organics',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/logo.png`,
      },
    },
    description: caseStudy.resultsSummary,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_ORIGIN}/evidence/case-studies/${caseStudy.slug}`,
    },
  };
}

/**
 * Blog Post Article schema generator
 */
export function createBlogPostSchema(post: {
  title: string;
  date: string;
  image?: string;
  excerpt: string;
  author: string;
  slug: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    image: post.image ? `${SITE_ORIGIN}${post.image}` : undefined,
    datePublished: post.date,
    author: {
      '@type': 'Person',
      name: post.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Terra Preta Organics',
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_ORIGIN}/logo.png`,
      },
    },
    description: post.excerpt,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_ORIGIN}/blog/${post.slug}`,
    },
  };
}

/**
 * Breadcrumb List schema generator
 */
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_ORIGIN}${item.url}`,
    })),
  };
}

