export default function SearchBar({ value, onChange }) {
  return (
    <label className="field search-field">
      <span>Поиск путешествия</span>
      <input
        type="search"
        placeholder="Название, страна или город…"
        value={value}
        onChange={(event) => onChange(event.target.value)}
      />
    </label>
  );
}
