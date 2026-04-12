import { useEffect } from "react";
import { useLocation } from "wouter";

/**
 * Resets window scroll on client-side navigation so landing pages (e.g. /supern) start at the top.
 */
export function ScrollToTop() {
  const [location] = useLocation();

  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  useEffect(() => {
    // Primary scroll containers (Safari / older WebKit)
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    // Run again after layout / any hash scroll so we win over late browser adjustments
    const id = requestAnimationFrame(() => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    });

    return () => cancelAnimationFrame(id);
  }, [location]);

  return null;
}
