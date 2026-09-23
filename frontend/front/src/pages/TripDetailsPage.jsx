import { useNavigate, useParams } from "react-router-dom";

export default function TripDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <section>
      <h1>Путешествие #{id}</h1>

      <p>
        Здесь будет подробная информация о выбранном путешествии.
      </p>

      <p>
        Номер путешествия из адреса: <strong>{id}</strong>
      </p>

      <button onClick={() => navigate(-1)}>
        ← Назад
      </button>
    </section>
  );
}