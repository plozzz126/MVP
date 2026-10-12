export default function SortSelect({ value, onChange }) {
  return (
    <label className="field">
      <span>Сортировка</span>
      <select value={value} onChange={(event) => onChange(event.target.value)}>
        <option value="default">По умолчанию</option>
        <option value="date">По дате поездки</option>
        <option value="days-asc">Сначала короткие</option>
        <option value="days-desc">Сначала длинные</option>
        <option value="budget-asc">Сначала дешевле</option>
        <option value="budget-desc">Сначала дороже</option>
        <option value="title">По названию</option>
      </select>
    </label>
  );
}
