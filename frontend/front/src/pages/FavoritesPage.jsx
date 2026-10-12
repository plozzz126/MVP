import { Link } from "react-router-dom";
export default function FavoritesPage() {
  return (
    <section>
      <div className="page-heading">
        <p className="eyebrow">Твои любимые направления</p>
        <h1>Избранное</h1>
        <p>Место для путешествий, к которым хочется вернуться.</p>
      </div>
      <div className="empty">
        <span className="empty-symbol" aria-hidden="true">
          ♡
        </span>
        <h2>Сохранение поездок — следующий шаг</h2>
        <p>
          Добавление в избранное появится во второй части разработки. Пока можно
          посмотреть направления и изучить планы поездок.
        </p>
        <Link className="button" to="/trips">
          Посмотреть путешествия
        </Link>
      </div>
    </section>
  );
}
