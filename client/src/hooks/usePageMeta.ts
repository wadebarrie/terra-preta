import { useEffect } from "react";

function getOrCreateMeta(attr: "name" | "property", key: string) {
  let el = document.querySelector(`meta[${attr}="${key}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  return el;
}

function getOrCreateCanonicalLink(): HTMLLinkElement {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  return el;
}

/**
 * Sets document title, meta description, canonical URL, Open Graph, and Twitter Card tags for SPA routes.
 * @param canonicalUrl Full canonical URL (e.g. https://terrapreta.ca/supern) — used for og:url and link[rel=canonical]
 */
export function usePageMeta(
  title: string,
  description?: string,
  canonicalUrl?: string,
) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let descEl = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const prevDesc = descEl?.getAttribute("content") ?? null;

    if (description) {
      descEl = descEl ?? (getOrCreateMeta("name", "description") as HTMLMetaElement);
      descEl.setAttribute("content", description);
    }

    const canonicalEl = getOrCreateCanonicalLink();
    if (canonicalUrl) {
      canonicalEl.setAttribute("href", canonicalUrl);
    }

    const ogTitle = getOrCreateMeta("property", "og:title");
    ogTitle.setAttribute("content", title);

    if (description) {
      const ogDesc = getOrCreateMeta("property", "og:description");
      ogDesc.setAttribute("content", description);
    }

    if (canonicalUrl) {
      const ogUrlEl = getOrCreateMeta("property", "og:url");
      ogUrlEl.setAttribute("content", canonicalUrl);
    }

    const twTitle = getOrCreateMeta("name", "twitter:title");
    twTitle.setAttribute("content", title);

    if (description) {
      const twDesc = getOrCreateMeta("name", "twitter:description");
      twDesc.setAttribute("content", description);
    }

    if (canonicalUrl) {
      const twUrl = getOrCreateMeta("name", "twitter:url");
      twUrl.setAttribute("content", canonicalUrl);
    }

    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) {
        descEl.setAttribute("content", prevDesc);
      }
      /* Canonical / OG / Twitter are left for the next route’s usePageMeta to overwrite */
    };
  }, [title, description, canonicalUrl]);
}
