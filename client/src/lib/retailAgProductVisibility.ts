import organiphosContent from "@content/pages/organiphos.json";
import supernContent from "@content/pages/supern.json";

function pathFromHref(href: string): string {
  const noHash = href.split("#")[0] ?? "";
  const noQuery = noHash.split("?")[0] ?? "";
  if (noQuery.startsWith("http://") || noQuery.startsWith("https://")) {
    try {
      const p = new URL(noQuery).pathname.replace(/\/$/, "");
      return p || "/";
    } catch {
      return "/";
    }
  }
  const p = noQuery.replace(/\/$/, "");
  return p || "/";
}

/** SuperN and OrganiPhos product pages: `published: false` hides the page and in-app links. */
export function isRetailProductHrefPublished(href: string): boolean {
  const path = pathFromHref(href);
  if (path === "/supern") return supernContent.published !== false;
  if (path === "/organiphos") return organiphosContent.published !== false;
  return true;
}

export function filterByRetailProductHref<T extends { href: string }>(
  items: T[],
): T[] {
  return items.filter((item) => isRetailProductHrefPublished(item.href));
}
