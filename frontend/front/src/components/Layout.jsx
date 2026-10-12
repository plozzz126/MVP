import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="app">
      <a href="#main-content" className="skip-link">
        К содержимому
      </a>
      <Header />

      <main className="content" id="main-content">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
