import { Link, useParams } from "react-router-dom";
import { getTripById } from "../data/trips";
import { formatBudget, formatDate, formatDays } from "../utils/trips";

export default function TripDetailsPage() {
  const { tripId } = useParams();
  const trip = getTripById(tripId);
  if (!trip)
    return (
      <section className="empty">
        <p className="eyebrow">Такой поездки нет</p>
        <h1>Путешествие не найдено</h1>
        <p>Проверь адрес или выбери другое путешествие из списка.</p>
        <Link className="button" to="/trips">
          К путешествиям
        </Link>
      </section>
    );
  return (
    <section>
      <Link className="back-link" to="/trips">
        ← Назад к путешествиям
      </Link>
      <div className="detail-hero">
        <div>
          <p className="eyebrow">
            {trip.country} · {trip.city} · {trip.category}
          </p>
          <h1>{trip.title}</h1>
          <p>{trip.description}</p>
          <span className="muted small">Путешествие № {trip.id}</span>
        </div>
        <div className={`detail-art trip-art ${trip.scene}`}>
          <img
            src={`/illustrations/${trip.scene}.svg`}
            alt={`Иллюстрация: ${trip.category.toLowerCase()}`}
          />
          <span className="art-city" aria-hidden="true">
            {trip.city}
          </span>
        </div>
      </div>
      <div className="trip-facts">
        <div>
          <span>Начало поездки</span>
          <strong>{formatDate(trip.startDate)}</strong>
        </div>
        <div>
          <span>Продолжительность</span>
          <strong>{formatDays(trip.days)}</strong>
        </div>
        <div>
          <span>Планируемый бюджет</span>
          <strong>{formatBudget(trip.budget)}</strong>
        </div>
      </div>
      <div className="plan-layout">
        <div className="plan">
          <p className="eyebrow">Всё по порядку</p>
          <h2>План путешествия</h2>
          <p className="muted">
            События указаны по местному времени места посещения. Дни без событий
            оставлены свободными.
          </p>
          <ol className="timeline">
            {[...trip.events]
              .sort((a, b) => a.day - b.day || a.time.localeCompare(b.time))
              .map((event) => (
                <li key={`${event.day}-${event.time}-${event.title}`}>
                  <div className="day-marker">{event.day}</div>
                  <div>
                    <span className="eyebrow">
                      День {event.day} · {event.time}
                    </span>
                    <h3>{event.title}</h3>
                    <p className="muted">{event.place}</p>
                  </div>
                </li>
              ))}
          </ol>
        </div>
        <aside className="flight-panel">
          <span className="flight-icon" aria-hidden="true">
            ✈
          </span>
          <h2>Не пропусти вылет</h2>
          <p className="flight-route">
            {trip.departure.from} <span aria-hidden="true">→</span>{" "}
            {trip.departure.to}
          </p>
          <dl>
            <div>
              <dt>Дата</dt>
              <dd>{formatDate(trip.departure.date)}</dd>
            </div>
            <div>
              <dt>Время вылета</dt>
              <dd>{trip.departure.time}</dd>
            </div>
            <div>
              <dt>Часовой пояс вылета</dt>
              <dd>{trip.departure.timezone}</dd>
            </div>
          </dl>
          <p className="small muted">
            Вылет и бюджет — учебные данные. Автоматические уведомления появятся
            на следующем этапе.
          </p>
        </aside>
      </div>
    </section>
  );
}
