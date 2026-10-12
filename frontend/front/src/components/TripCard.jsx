import { Link } from "react-router-dom";
import { formatBudget, formatDate, formatDays } from "../utils/trips";

export default function TripCard({
  id,
  title,
  country,
  city,
  category,
  days,
  budget,
  startDate,
  description,
  scene,
}) {
  return (
    <article className="trip-card">
      <div className={`trip-art ${scene}`} aria-hidden="true">
        <img src={`/illustrations/${scene}.svg`} alt="" loading="lazy" />
        <span className="category-tag">{category}</span>
        <span className="art-city">{city}</span>
      </div>
      <div className="card-body">
        <p className="eyebrow">
          {country} · {formatDays(days)}
        </p>
        <h3>{title}</h3>
        <p className="card-description">{description}</p>
        <p className="card-date">Начало: {formatDate(startDate)}</p>
        <div className="card-bottom">
          <div>
            <span className="muted small">Планируемый бюджет</span>
            <strong>{formatBudget(budget)}</strong>
          </div>
          <Link
            to={`/trips/${id}`}
            className="card-link"
            aria-label={`Подробнее: ${title}`}
          >
            Подробнее <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
