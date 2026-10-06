import type { Park } from "../data/parks";
import { useVisits } from "../visits/VisitsProvider";

export function VisitButton({ park, large = false }: { park: Park; large?: boolean }) {
  const { isVisited, toggle } = useVisits();
  const visited = isVisited(park.slug);

  return (
    <button
      type="button"
      className={large ? "visit-button visit-button-large" : "visit-button"}
      aria-pressed={visited}
      aria-label={visited ? `Mark ${park.name} as not visited` : `Mark ${park.name} as visited`}
      onClick={() => toggle(park.slug)}
    >
      {visited ? "Visited" : "Mark visited"}
    </button>
  );
}
