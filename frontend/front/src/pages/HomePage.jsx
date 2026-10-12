import { Link } from "react-router-dom";
import TripList from "../components/TripList";
import { trips } from "../data/trips";
import { sortTrips } from "../utils/trips";
export default function HomePage() {
  const featured = sortTrips(trips, "date").slice(0, 3);
  return (
    <>
      <section className="hero">
        <div className="hero-copy">
          <p className="eyebrow">Меньше суеты. Больше впечатлений.</p>
          <h1>
            Хорошая поездка
            <br />
            начинается <em>с плана.</em>
          </h1>
          <p>
            Направления, вылеты и события по дням — в одном месте. Освободи
            голову для самого путешествия.
          </p>
          <Link className="button" to="/trips">
            Выбрать путешествие <span aria-hidden="true">↗</span>
          </Link>
          <span className="hero-note">
            От выходных в горах до большого приключения
          </span>
        </div>
        <div className="hero-visual">
          <img
            src="/illustrations/mountains.svg"
            alt="Горы, солнце и извилистая тропа"
          />
          <div className="hero-label">
            <span className="eyebrow">Твой следующий маршрут</span>
            <strong>Мир ждёт. План уже рядом.</strong>
          </div>
          <div className="travel-stamp" aria-hidden="true">
            LET’S
            <br />
            GO ↗
          </div>
        </div>
      </section>
      <section className="feature-strip" aria-label="Возможности планировщика">
        <div>
          <span aria-hidden="true">01</span>
          <h2>Выбери направление</h2>
          <p>Найди поездку по стране, бюджету и формату отдыха.</p>
        </div>
        <div>
          <span aria-hidden="true">02</span>
          <h2>Посмотри план</h2>
          <p>Все события по дням и время вылета перед глазами.</p>
        </div>
        <div>
          <span aria-hidden="true">03</span>
          <h2>Отправляйся в путь</h2>
          <p>Возвращайся к расписанию, когда оно понадобится.</p>
        </div>
      </section>
      <section>
        <div className="section-heading">
          <div>
            <p className="eyebrow">Идеи для следующей поездки</p>
            <h2>Ближайшие путешествия</h2>
          </div>
          <Link className="text-link" to="/trips">
            Все путешествия →
          </Link>
        </div>
        <TripList trips={featured} />
      </section>
    </>
  );
}
