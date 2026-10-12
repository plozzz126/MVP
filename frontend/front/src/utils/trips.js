export function filterTrips(trips, query, category) {
  const normalizedQuery = query
    .trim()
    .toLocaleLowerCase("ru")
    .replace(/\s+/g, " ");
  return trips.filter(
    (trip) =>
      [trip.title, trip.country, trip.city, trip.description].some((value) =>
        value.toLocaleLowerCase("ru").includes(normalizedQuery),
      ) &&
      (category === "all" || trip.category === category),
  );
}
export function sortTrips(trips, sort) {
  const copy = [...trips];
  if (sort === "days-asc") copy.sort((a, b) => a.days - b.days);
  if (sort === "days-desc") copy.sort((a, b) => b.days - a.days);
  if (sort === "budget-asc") copy.sort((a, b) => a.budget - b.budget);
  if (sort === "budget-desc") copy.sort((a, b) => b.budget - a.budget);
  if (sort === "title")
    copy.sort((a, b) => a.title.localeCompare(b.title, "ru"));
  if (sort === "date")
    copy.sort((a, b) => a.startDate.localeCompare(b.startDate));
  return copy;
}
export function formatDate(date) {
  return new Intl.DateTimeFormat("ru-RU", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T00:00:00Z`));
}
export function formatDays(days) {
  const lastTwo = days % 100;
  const last = days % 10;
  const word =
    lastTwo >= 11 && lastTwo <= 14
      ? "дней"
      : last === 1
        ? "день"
        : last >= 2 && last <= 4
          ? "дня"
          : "дней";
  return `${days} ${word}`;
}
export function formatBudget(budget) {
  return `${budget.toLocaleString("ru-RU")} ₸`;
}
