import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="logo">📊 Exp5 Dashboard</div>

      <nav className="links">
        <NavLink to="/" end className="navlink">
          Home
        </NavLink>

        <NavLink to="/projects" className="navlink">
          Projects
        </NavLink>

        <NavLink to="/analytics" className="navlink">
          Analytics
        </NavLink>

        <NavLink to="/reports" className="navlink">
          Reports
        </NavLink>
      </nav>

      <ThemeToggle />
    </header>
  );
}