export const VISITED_STORAGE_KEY = "footprints.visited";

type VisitStorage = Pick<Storage, "getItem" | "setItem">;

export function parseVisited(raw: string | null, valid: ReadonlySet<string>): string[] {
  if (!raw) return [];

  try {
    const parsed: unknown = JSON.parse(raw);
    if (!Array.isArray(parsed)) return [];

    const slugs = parsed.filter(
      (item): item is string => typeof item === "string" && valid.has(item),
    );
    return [...new Set(slugs)];
  } catch {
    return [];
  }
}

export function toggleSlug(
  current: readonly string[],
  slug: string,
  valid: ReadonlySet<string>,
): string[] {
  if (!valid.has(slug)) return [...current];
  return current.includes(slug) ? current.filter((item) => item !== slug) : [...current, slug];
}

export function readVisited(storage: VisitStorage, valid: ReadonlySet<string>): string[] {
  return parseVisited(storage.getItem(VISITED_STORAGE_KEY), valid);
}

export function writeVisited(storage: VisitStorage, slugs: readonly string[]): void {
  storage.setItem(VISITED_STORAGE_KEY, JSON.stringify(slugs));
}
