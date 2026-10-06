import { Link } from "react-router-dom";

export function NotFound() {
  return (
    <div className="detail">
      <h1>Page not found</h1>
      <Link to="/" className="back-link">
        Back to the parks
      </Link>
    </div>
  );
}
