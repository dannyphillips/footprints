import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { getPark, parkTitle, posterUrl } from "../data/parks";
import { useVisits } from "../visits/VisitsProvider";
import { VisitButton } from "./VisitButton";

export function ParkDetail() {
  const { slug = "" } = useParams();
  const park = getPark(slug);
  const { count, total } = useVisits();

  useEffect(() => {
    document.title = park ? `${parkTitle(park)} · Footprints` : "Park not found · Footprints";
    return () => {
      document.title = "Footprints — National Parks";
    };
  }, [park]);

  if (!park) {
    return (
      <div className="detail">
        <Link to="/" className="back-link">
          All parks
        </Link>
        <h1>That park is not in the set of 59.</h1>
      </div>
    );
  }

  return (
    <article className="detail">
      <Link to="/" className="back-link">
        All parks
      </Link>
      <div className="detail-layout">
        <figure className="detail-poster">
          <img src={posterUrl(park.slug)} alt={`${parkTitle(park)} poster`} width={800} height={1063} />
        </figure>
        <div className="detail-copy">
          <p className="eyebrow">{park.state}</p>
          <h1>{parkTitle(park)}</h1>
          <p className="detail-progress">
            {count} of {total} parks visited
          </p>
          <VisitButton park={park} large />
        </div>
      </div>
    </article>
  );
}
