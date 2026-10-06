import { Link, Outlet } from "react-router-dom";
import { useVisits } from "../visits/VisitsProvider";

export function Layout() {
  const { count, total } = useVisits();
  const percent = total === 0 ? 0 : Math.round((count / total) * 100);

  return (
    <div className="app">
      <header className="topbar">
        <div className="topbar-inner">
          <div className="brand-row">
            <Link to="/" className="brand">
              Footprints
            </Link>
            <p className="tally">
              <span className="tally-count">{count}</span>
              <span> of {total}</span>
            </p>
          </div>
          <div
            className="progress"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={total}
            aria-valuenow={count}
            aria-label={`${count} of ${total} parks visited`}
          >
            <span className="progress-fill" style={{ width: `${percent}%` }} />
          </div>
        </div>
      </header>
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
