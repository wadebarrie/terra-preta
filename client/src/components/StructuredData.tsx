import { useEffect } from "react";
import { SITE_ORIGIN } from "@/const";

interface StructuredDataProps {
  data: Record<string, unknown>;
}

/**
 * Component to inject structured data (JSON-LD) into the page
 */
export function StructuredData({ data }: StructuredDataProps) {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.text = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, [data]);

  return null;
}

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Terra Preta Organics",
  url: SITE_ORIGIN,
  logo: `${SITE_ORIGIN}/logo.png`,
  description:
    "SuperN for prairie crops and SuperN-Revive for disturbed land, made in Sundre, Alberta.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sundre",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  areaServed: [
    { "@type": "State", name: "Alberta" },
    { "@type": "Country", name: "Canada" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    email: "info@terrapreta.ca",
    availableLanguage: "English",
  },
  sameAs: [
    "https://www.linkedin.com/company/terra-preta-organics",
    "https://www.instagram.com/terrapretaorganics",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Terra Preta Organics",
  url: SITE_ORIGIN,
  description:
    "SuperN for prairie crops and SuperN-Revive for disturbed land, made in Sundre, Alberta. Request a quote.",
  inLanguage: "en-CA",
  publisher: {
    "@type": "Organization",
    name: "Terra Preta Organics",
    url: SITE_ORIGIN,
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": SITE_ORIGIN,
  name: "Terra Preta Organics",
  description:
    "SuperN for prairie crops and SuperN-Revive for disturbed land, made in Sundre, Alberta.",
  url: SITE_ORIGIN,
  email: "info@terrapreta.ca",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Sundre",
    addressRegion: "AB",
    addressCountry: "CA",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.7994,
    longitude: -114.6397,
  },
  areaServed: [{ "@type": "State", name: "Alberta" }],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    opens: "08:00",
    closes: "17:00",
  },
};
