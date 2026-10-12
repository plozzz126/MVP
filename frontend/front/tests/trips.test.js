import test from "node:test";
import assert from "node:assert/strict";
import { trips, categories, getTripById } from "../src/data/trips.js";
import {
  filterTrips,
  sortTrips,
  formatDays,
  formatDate,
} from "../src/utils/trips.js";

test("10 поездок с уникальными числовыми ID и событиями в пределах поездки", () => {
  assert.equal(trips.length, 10);
  assert.equal(new Set(trips.map((trip) => trip.id)).size, 10);
  assert.deepEqual(categories, ["Город", "Море", "Горы", "Природа"]);
  for (const trip of trips) {
    assert.ok(Number.isInteger(trip.id));
    assert.ok(trip.days > 0 && trip.budget > 0);
    assert.equal(trip.departure.date, trip.startDate);
    for (const event of trip.events)
      assert.ok(event.day >= 1 && event.day <= trip.days);
  }
});
test("поиск ID из URL, неизвестные и нечисловые ID", () => {
  assert.equal(getTripById("1").title, "Путешествие в Париж");
  for (const id of ["999", "abc", "", " ", "-1", "1.5", "1e0", undefined])
    assert.equal(getTripById(id), undefined);
});
test("поиск не зависит от регистра и лишних пробелов, использует разные поля", () => {
  assert.deepEqual(
    filterTrips(trips, "  ПАРИЖ  ", "all").map((trip) => trip.id),
    [1],
  );
  assert.deepEqual(
    filterTrips(trips, "  отдых   в   дубае  ", "all").map((trip) => trip.id),
    [2],
  );
  assert.deepEqual(
    filterTrips(trips, "Казахстан", "all").map((trip) => trip.id),
    [5],
  );
  assert.deepEqual(
    filterTrips(trips, "Убуд", "all").map((trip) => trip.id),
    [7],
  );
  assert.deepEqual(
    filterTrips(trips, "заведомо несуществующий запрос", "all"),
    [],
  );
  assert.equal(filterTrips(trips, "  ", "all").length, 10);
});
test("поиск, фильтр и сортировка работают вместе", () => {
  const result = sortTrips(
    filterTrips(trips, "прогулки", "Город"),
    "budget-asc",
  );
  assert.deepEqual(
    result.map((trip) => trip.id),
    [6, 4, 1],
  );
  assert.deepEqual(filterTrips(trips, "Париж", "Море"), []);
});
test("все сортировки сохраняют исходный массив и порядок по умолчанию", () => {
  const original = trips.map((trip) => trip.id);
  const frozen = Object.freeze([...trips]);
  for (const sort of [
    "days-asc",
    "days-desc",
    "budget-asc",
    "budget-desc",
    "date",
    "title",
  ]) {
    const result = sortTrips(frozen, sort);
    assert.equal(result.length, 10);
    if (sort === "days-asc") assert.equal(result[0].id, 5);
    if (sort === "days-desc") assert.equal(result[0].id, 3);
    if (sort === "budget-asc") assert.equal(result[0].id, 5);
    if (sort === "budget-desc") assert.equal(result[0].id, 9);
    if (sort === "date") assert.equal(result[0].id, 5);
    if (sort === "title") assert.equal(result[0].id, 5);
    assert.deepEqual(
      trips.map((trip) => trip.id),
      original,
    );
  }
  assert.deepEqual(
    sortTrips(trips, "default").map((trip) => trip.id),
    original,
  );
});
test("русские окончания дней и дата без сдвига часового пояса", () => {
  assert.deepEqual([1, 2, 5, 11, 21, 24].map(formatDays), [
    "1 день",
    "2 дня",
    "5 дней",
    "11 дней",
    "21 день",
    "24 дня",
  ]);
  assert.match(formatDate("2026-11-02"), /2 ноября 2026/);
});
