import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Resets window scroll on client-side navigation.
 * Preserves in-page hash targets (e.g. /contact#agriculture-quote).
 */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const id = hash.slice(1);
      const scrollToHash = () => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };
      if (scrollToHash()) return;
      const t = window.setTimeout(scrollToHash, 50);
      return () => clearTimeout(t);
    }

    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const id = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => cancelAnimationFrame(id);
  }, [location]);

  return null;
}
