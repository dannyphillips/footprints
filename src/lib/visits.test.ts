import { describe, expect, it } from "vitest";
import { parseVisited, readVisited, toggleSlug, VISITED_STORAGE_KEY, writeVisited } from "./visits";

const valid = new Set(["yosemite", "zion", "acadia"]);

describe("visited parks", () => {
  it("ignores corrupt, duplicate, and unknown entries", () => {
    expect(parseVisited(null, valid)).toEqual([]);
    expect(parseVisited("not-json", valid)).toEqual([]);
    expect(parseVisited('{"yosemite":true}', valid)).toEqual([]);
    expect(parseVisited('["yosemite","yosemite","missing",1]', valid)).toEqual(["yosemite"]);
  });

  it("toggles a known park and leaves unknown slugs alone", () => {
    expect(toggleSlug([], "yosemite", valid)).toEqual(["yosemite"]);
    expect(toggleSlug(["yosemite", "zion"], "yosemite", valid)).toEqual(["zion"]);
    expect(toggleSlug(["zion"], "not-a-park", valid)).toEqual(["zion"]);
  });

  it("persists through the storage key", () => {
    const saved = new Map<string, string>();
    const storage = {
      getItem: (key: string) => saved.get(key) ?? null,
      setItem: (key: string, value: string) => {
        saved.set(key, value);
      },
    };

    writeVisited(storage, ["acadia", "zion"]);
    expect(saved.get(VISITED_STORAGE_KEY)).toBe('["acadia","zion"]');
    expect(readVisited(storage, valid)).toEqual(["acadia", "zion"]);
  });
});
