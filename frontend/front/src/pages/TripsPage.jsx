import { Link } from "react-router-dom";

const trips = [
  {
    id: 1,
    title: "Путешествие в Париж",
    country: "Франция",
    duration: "5 дней",
  },
  {
    id: 2,
    title: "Отдых в Дубае",
    country: "ОАЭ",
    duration: "7 дней",
  },
  {
    id: 3,
    title: "Путешествие в Токио",
    country: "Япония",
    duration: "10 дней",
  },
  {
    id: 4,
    title: "Каникулы в Стамбуле",
    country: "Турция",
    duration: "4 дня",
  },
];

export default function TripsPage() {
  return (
    <section>
      <h1>Путешествия</h1>

      <p>Выберите путешествие, чтобы посмотреть подробную информацию.</p>

      <ul className="trip-list">
        {trips.map((trip) => (
          <li key={trip.id} className="trip-card">
            <h2>{trip.title}</h2>

            <p>Страна: {trip.country}</p>
            <p>Продолжительность: {trip.duration}</p>

            <Link to={`/trips/${trip.id}`}>
              Подробнее
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}