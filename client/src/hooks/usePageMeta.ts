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

/**
 * Sets document title, meta description, and Open Graph tags for SPA routes (Google Ads, SEO).
 */
export function usePageMeta(title: string, description?: string) {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    let descEl = document.querySelector('meta[name="description"]');
    const prevDesc = descEl?.getAttribute("content") ?? null;

    if (description) {
      descEl = descEl ?? getOrCreateMeta("name", "description");
      descEl.setAttribute("content", description);
    }

    const ogTitle = getOrCreateMeta("property", "og:title");
    ogTitle.setAttribute("content", title);

    if (description) {
      const ogDesc = getOrCreateMeta("property", "og:description");
      ogDesc.setAttribute("content", description);
    }

    return () => {
      document.title = prevTitle;
      if (descEl && prevDesc !== null) {
        descEl.setAttribute("content", prevDesc);
      }
    };
  }, [title, description]);
}
