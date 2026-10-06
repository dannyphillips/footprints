import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { PARK_COUNT, parkSlugs } from "../data/parks";
import { readVisited, toggleSlug, VISITED_STORAGE_KEY, writeVisited } from "../lib/visits";

type VisitsContextValue = {
  count: number;
  total: number;
  isVisited: (slug: string) => boolean;
  toggle: (slug: string) => void;
  clear: () => void;
};

const VisitsContext = createContext<VisitsContextValue | null>(null);

export function VisitsProvider({ children }: { children: ReactNode }) {
  const [visited, setVisited] = useState<string[]>(() => readVisited(localStorage, parkSlugs));

  useEffect(() => {
    writeVisited(localStorage, visited);
  }, [visited]);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key !== VISITED_STORAGE_KEY) return;
      setVisited(readVisited(localStorage, parkSlugs));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const toggle = useCallback((slug: string) => {
    setVisited((current) => toggleSlug(current, slug, parkSlugs));
  }, []);

  const clear = useCallback(() => {
    setVisited([]);
  }, []);

  const visitedSet = useMemo(() => new Set(visited), [visited]);

  const value = useMemo<VisitsContextValue>(
    () => ({
      count: visited.length,
      total: PARK_COUNT,
      isVisited: (slug) => visitedSet.has(slug),
      toggle,
      clear,
    }),
    [visited.length, visitedSet, toggle, clear],
  );

  return <VisitsContext.Provider value={value}>{children}</VisitsContext.Provider>;
}

export function useVisits(): VisitsContextValue {
  const value = useContext(VisitsContext);
  if (!value) throw new Error("useVisits must be used within VisitsProvider");
  return value;
}
