/** Normalize Decap `list` fields (often `{ bullet: "..." }`) and plain string arrays. */
export function cmsStringList(items: unknown): string[] {
  if (!Array.isArray(items)) return [];
  return items
    .map((item) => {
      if (typeof item === "string") return item;
      if (item && typeof item === "object") {
        const o = item as Record<string, string>;
        return o.paragraph ?? o.bullet ?? o.line ?? o.text ?? o.item ?? "";
      }
      return "";
    })
    .filter((s) => s.length > 0);
}
