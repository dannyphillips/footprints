export type Park = {
  slug: string;
  name: string;
  state: string;
};

export const parks = [
  { slug: "acadia", name: "Acadia", state: "Maine" },
  { slug: "american_samoa", name: "American Samoa", state: "American Samoa" },
  { slug: "arches", name: "Arches", state: "Utah" },
  { slug: "badlands", name: "Badlands", state: "South Dakota" },
  { slug: "big_bend", name: "Big Bend", state: "Texas" },
  { slug: "biscayne", name: "Biscayne", state: "Florida" },
  { slug: "black_canyon_of_the_gunnison", name: "Black Canyon of the Gunnison", state: "Colorado" },
  { slug: "bryce_canyon", name: "Bryce Canyon", state: "Utah" },
  { slug: "canyonlands", name: "Canyonlands", state: "Utah" },
  { slug: "capitol_reef", name: "Capitol Reef", state: "Utah" },
  { slug: "carlsbad_caverns", name: "Carlsbad Caverns", state: "New Mexico" },
  { slug: "channel_islands", name: "Channel Islands", state: "California" },
  { slug: "congaree", name: "Congaree", state: "South Carolina" },
  { slug: "crater_lake", name: "Crater Lake", state: "Oregon" },
  { slug: "cuyahoga_valley", name: "Cuyahoga Valley", state: "Ohio" },
  { slug: "death_valley", name: "Death Valley", state: "California & Nevada" },
  { slug: "denali", name: "Denali", state: "Alaska" },
  { slug: "dry_tortugas", name: "Dry Tortugas", state: "Florida" },
  { slug: "everglades", name: "Everglades", state: "Florida" },
  { slug: "gates_of_the_arctic", name: "Gates of the Arctic", state: "Alaska" },
  { slug: "glacier", name: "Glacier", state: "Montana" },
  { slug: "glacier_bay", name: "Glacier Bay", state: "Alaska" },
  { slug: "grand_canyon", name: "Grand Canyon", state: "Arizona" },
  { slug: "grand_teton", name: "Grand Teton", state: "Wyoming" },
  { slug: "great_basin", name: "Great Basin", state: "Nevada" },
  { slug: "great_sand_dunes", name: "Great Sand Dunes", state: "Colorado" },
  { slug: "great_smoky_mountains", name: "Great Smoky Mountains", state: "North Carolina & Tennessee" },
  { slug: "guadalupe_mountains", name: "Guadalupe Mountains", state: "Texas" },
  { slug: "haleakala", name: "Haleakalā", state: "Hawaii" },
  { slug: "hawaii_volcanoes", name: "Hawaiʻi Volcanoes", state: "Hawaii" },
  { slug: "hot_springs", name: "Hot Springs", state: "Arkansas" },
  { slug: "isle_royale", name: "Isle Royale", state: "Michigan" },
  { slug: "joshua_tree", name: "Joshua Tree", state: "California" },
  { slug: "katmai", name: "Katmai", state: "Alaska" },
  { slug: "kenai_fjords", name: "Kenai Fjords", state: "Alaska" },
  { slug: "kings_canyon", name: "Kings Canyon", state: "California" },
  { slug: "kobuk_valley", name: "Kobuk Valley", state: "Alaska" },
  { slug: "lake_clark", name: "Lake Clark", state: "Alaska" },
  { slug: "lassen_volcanic", name: "Lassen Volcanic", state: "California" },
  { slug: "mammoth_cave", name: "Mammoth Cave", state: "Kentucky" },
  { slug: "mesa_verde", name: "Mesa Verde", state: "Colorado" },
  { slug: "mount_rainier", name: "Mount Rainier", state: "Washington" },
  { slug: "north_cascades", name: "North Cascades", state: "Washington" },
  { slug: "olympic", name: "Olympic", state: "Washington" },
  { slug: "petrified_forest", name: "Petrified Forest", state: "Arizona" },
  { slug: "pinnacles", name: "Pinnacles", state: "California" },
  { slug: "redwood", name: "Redwood", state: "California" },
  { slug: "rocky_mountain", name: "Rocky Mountain", state: "Colorado" },
  { slug: "saguaro", name: "Saguaro", state: "Arizona" },
  { slug: "sequoia", name: "Sequoia", state: "California" },
  { slug: "shenandoah", name: "Shenandoah", state: "Virginia" },
  { slug: "theodore_roosevelt", name: "Theodore Roosevelt", state: "North Dakota" },
  { slug: "virgin_islands", name: "Virgin Islands", state: "U.S. Virgin Islands" },
  { slug: "voyageurs", name: "Voyageurs", state: "Minnesota" },
  { slug: "wind_cave", name: "Wind Cave", state: "South Dakota" },
  { slug: "wrangell_st_elias", name: "Wrangell–St. Elias", state: "Alaska" },
  { slug: "yellowstone", name: "Yellowstone", state: "Wyoming, Montana & Idaho" },
  { slug: "yosemite", name: "Yosemite", state: "California" },
  { slug: "zion", name: "Zion", state: "Utah" },
] as const satisfies readonly Park[];

export const PARK_COUNT = 59;

export const parkSlugs: ReadonlySet<string> = new Set(parks.map((park) => park.slug));

const parksBySlug = new Map<string, Park>(parks.map((park) => [park.slug, park]));

export function getPark(slug: string): Park | undefined {
  return parksBySlug.get(slug);
}

export function posterUrl(slug: string): string {
  return `/posters/${slug}.jpg`;
}

export function parkTitle(park: Park): string {
  if (park.slug === "american_samoa") return "National Park of American Samoa";
  return `${park.name} National Park`;
}
