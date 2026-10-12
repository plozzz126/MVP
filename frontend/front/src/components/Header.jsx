import { Link, NavLink } from "react-router-dom";
export default function Header() {
  const linkClass = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";
  return (
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="logo">
          <span className="logo-symbol" aria-hidden="true">
            ↗
          </span>
          Travel Planner<span className="logo-dot">.</span>
        </Link>
        <nav aria-label="Основная навигация">
          <NavLink to="/" end className={linkClass}>
            Главная
          </NavLink>
          <NavLink to="/trips" className={linkClass}>
            Путешествия
          </NavLink>
          <NavLink to="/favorites" className={linkClass}>
            Избранное
          </NavLink>
          <NavLink to="/about" className={linkClass}>
            О проекте
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
