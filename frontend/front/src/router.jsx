import { createBrowserRouter } from "react-router-dom";

import Layout from "./components/Layout";

import HomePage from "./pages/HomePage";
import TripsPage from "./pages/TripsPage";
import TripDetailsPage from "./pages/TripDetailsPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "trips",
        element: <TripsPage />,
      },
      {
        path: "trips/:id",
        element: <TripDetailsPage />,
      },
      {
        path: "favorites",
        element: <FavoritesPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);