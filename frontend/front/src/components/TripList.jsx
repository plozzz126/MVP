import TripCard from "./TripCard";
export default function TripList({ trips }) {
  if (trips.length === 0)
    return (
      <div className="empty" role="status">
        <span className="empty-symbol" aria-hidden="true">
          ⌕
        </span>
        <h2>Путешествия не найдены</h2>
        <p>
          Попробуй другой запрос или сбрось фильтры, чтобы увидеть все поездки.
        </p>
      </div>
    );
  return (
    <div className="trip-grid">
      {trips.map((trip) => (
        <TripCard key={trip.id} {...trip} />
      ))}
    </div>
  );
}
