import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="logo">
          Krrish<span>WorkoutPlan</span>
        </Link>

        <nav className="nav-links">
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
            Home
          </NavLink>

          <NavLink
            to="/schedule"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Schedule
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
