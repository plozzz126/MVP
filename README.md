# Travel Planner

Travel Planner — Frontend MVP для планирования путешествий.

Приложение предназначено для пользователей, которые хотят просматривать свои путешествия и получать информацию о каждом из них.

## Страницы приложения

* `/` — главная страница
* `/trips` — список путешествий
* `/trips/:tripId` — информация о конкретном путешествии
* `/about` — информация о приложении
* `*` — страница 404

## Технологии

* React
* Vite
* React Router
* JavaScript
* CSS

## Установка

```bash
npm install
```

## Запуск

```bash
npm run dev
```

После запуска приложение будет доступно по адресу, который покажет Vite в терминале.

## Структура проекта

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Footer.jsx
│   └── Layout.jsx
├── pages/
│   ├── HomePage.jsx
│   ├── TripsPage.jsx
│   ├── TripDetailsPage.jsx
│   ├── AboutPage.jsx
│   └── NotFoundPage.jsx
├── router.jsx
├── main.jsx
└── index.css
```


