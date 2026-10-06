import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { PARK_COUNT, parkTitle, parks, posterUrl } from "./parks";

const postersDir = path.resolve(process.cwd(), "static/posters");

describe("park catalog", () => {
  const posterFiles = readdirSync(postersDir)
    .filter((name) => name.endsWith(".jpg"))
    .sort();

  it("tracks 59 national parks", () => {
    expect(PARK_COUNT).toBe(59);
    expect(parks).toHaveLength(59);
    expect(new Set(parks.map((park) => park.slug)).size).toBe(59);
  });

  it("uses every poster in static/posters", () => {
    expect(posterFiles).toEqual(parks.map((park) => `${park.slug}.jpg`).sort());
    for (const park of parks) {
      expect(posterUrl(park.slug)).toBe(`/posters/${park.slug}.jpg`);
    }
  });

  it("keeps posters.json pointed at the local artwork", () => {
    const json = JSON.parse(
      readFileSync(path.resolve(process.cwd(), "static/posters.json"), "utf8"),
    ) as {
      posters: Record<string, { id: number; name: string; poster: string }>;
    };

    expect(Object.keys(json.posters).sort()).toEqual(parks.map((park) => park.slug).sort());
    for (const park of parks) {
      const entry = json.posters[park.slug];
      expect(entry.name).toBe(park.slug);
      expect(entry.poster).toBe(posterUrl(park.slug));
    }
  });

  it("names American Samoa with its official title", () => {
    const park = parks.find((item) => item.slug === "american_samoa");
    expect(park).toBeDefined();
    expect(parkTitle(park!)).toBe("National Park of American Samoa");
  });
});
