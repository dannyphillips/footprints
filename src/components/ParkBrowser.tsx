import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { parks, posterUrl } from "../data/parks";
import { useVisits } from "../visits/VisitsProvider";
import { VisitButton } from "./VisitButton";

type Filter = "all" | "remaining" | "visited";
type View = "grid" | "list";

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "remaining", label: "Not visited" },
  { id: "visited", label: "Visited" },
];

export function ParkBrowser() {
  const { isVisited, count, total, clear } = useVisits();
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<Filter>("all");
  const [view, setView] = useState<View>("grid");

  const visible = useMemo(() => {
    const needle = query.trim().toLowerCase();
    return parks.filter((park) => {
      const visited = isVisited(park.slug);
      if (filter === "visited" && !visited) return false;
      if (filter === "remaining" && visited) return false;
      if (!needle) return true;
      const haystack = `${park.name} ${park.state} ${park.slug.replaceAll("_", " ")}`.toLowerCase();
      return haystack.includes(needle);
    });
  }, [filter, isVisited, query]);

  const remaining = total - count;

  return (
    <div className="browser">
      <p className="lede">
        {count === total
          ? "All 59 national parks visited."
          : `A log for all 59 U.S. national parks. ${remaining} still to go.`}
      </p>

      <div className="toolbar">
        <label className="search">
          <span className="visually-hidden">Search parks</span>
          <input
            type="search"
            value={query}
            placeholder="Search parks or states"
            onChange={(event) => setQuery(event.target.value)}
          />
        </label>

        <div className="toolbar-row">
          <div className="segment" role="radiogroup" aria-label="Filter parks">
            {filters.map((item) => (
              <button
                key={item.id}
                type="button"
                role="radio"
                aria-checked={filter === item.id}
                className="segment-button"
                onClick={() => setFilter(item.id)}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="segment" role="radiogroup" aria-label="Park layout">
            <button
              type="button"
              role="radio"
              aria-checked={view === "grid"}
              className="segment-button"
              onClick={() => setView("grid")}
            >
              Grid
            </button>
            <button
              type="button"
              role="radio"
              aria-checked={view === "list"}
              className="segment-button"
              onClick={() => setView("list")}
            >
              List
            </button>
          </div>
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="empty">No parks match that search.</p>
      ) : (
        <ul className={view === "grid" ? "park-grid" : "park-list"}>
          {visible.map((park) => {
            const visited = isVisited(park.slug);
            return (
              <li key={park.slug} className={visited ? "park-card is-visited" : "park-card"}>
                <Link to={`/parks/${park.slug}`} className="park-link">
                  <span className="poster-frame">
                    <img
                      src={posterUrl(park.slug)}
                      alt=""
                      width={800}
                      height={1063}
                      loading="lazy"
                      decoding="async"
                    />
                    {visited ? <span className="seal">Visited</span> : null}
                  </span>
                  <span className="park-copy">
                    <span className="park-name">{park.name}</span>
                    <span className="park-state">{park.state}</span>
                  </span>
                </Link>
                <VisitButton park={park} />
              </li>
            );
          })}
        </ul>
      )}

      {count > 0 ? (
        <p className="clear-row">
          <button
            type="button"
            className="text-button"
            onClick={() => {
              if (window.confirm("Clear all visited parks on this device?")) clear();
            }}
          >
            Clear visited parks
          </button>
        </p>
      ) : null}
    </div>
  );
}
