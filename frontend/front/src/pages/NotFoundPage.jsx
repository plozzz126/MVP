import { Link } from "react-router-dom";
export default function NotFoundPage() {
  return (
    <section className="empty">
      <p className="error-code">404</p>
      <h1>Страница не найдена</h1>
      <p>
        Кажется, этот маршрут ещё не проложен. Вернись на главную и выбери
        направление.
      </p>
      <Link className="button" to="/">
        Вернуться на главную
      </Link>
    </section>
  );
}
