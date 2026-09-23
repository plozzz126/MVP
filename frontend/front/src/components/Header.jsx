import { NavLink } from "react-router-dom";

export default function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="header">
      <div className="logo">Travel Planner</div>

      <nav>
        <NavLink to="/" end className={linkClass}>
          Главная
        </NavLink>

        <NavLink to="/trips" className={linkClass}>
          Путешествия
        </NavLink>

        <NavLink to="/favorites" className={linkClass}>
          Избранное
        </NavLink>
      </nav>
    </header>
  );
}