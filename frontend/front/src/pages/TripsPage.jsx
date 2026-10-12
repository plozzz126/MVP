import { useState } from "react";
import TripList from "../components/TripList";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";
import SortSelect from "../components/SortSelect";
import { categories, trips } from "../data/trips";
import { filterTrips, sortTrips } from "../utils/trips";

export default function TripsPage() {
  // State остаётся в странице. Панель передаёт изменения через props.
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const visible = sortTrips(filterTrips(trips, query, category), sort);
  function resetFilters() {
    setQuery("");
    setCategory("all");
    setSort("default");
  }
  return (
    <section>
      <div className="page-heading">
        <p className="eyebrow">Открой новые места</p>
        <h1>Путешествия</h1>
        <p>Выбери направление и посмотри, как может выглядеть твоя поездка.</p>
      </div>
      <div className="toolbar">
        <SearchBar value={query} onChange={setQuery} />
        <CategoryFilter
          categories={categories}
          value={category}
          onChange={setCategory}
        />
        <SortSelect value={sort} onChange={setSort} />
        <button className="button secondary" onClick={resetFilters}>
          Сбросить
        </button>
      </div>
      <div className="results-row">
        <p role="status" aria-live="polite">
          Найдено путешествий: <strong>{visible.length}</strong>
        </p>
        <span className="muted small">
          Учебная подборка · бюджеты ориентировочные
        </span>
      </div>
      <TripList trips={visible} />
    </section>
  );
}
