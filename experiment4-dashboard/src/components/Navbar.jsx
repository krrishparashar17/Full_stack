import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { AppContext } from "../context/AppContext";

export default function Navbar() {
  const { analytics } = useContext(AppContext);

  return (
    <div className="navbar">
      <div className="logo">📊 Exp4 Dashboard</div>

      <div className="links">
        <NavLink to="/" end className="link">
          Home
        </NavLink>
        <NavLink to="/projects" className="link">
          Projects
        </NavLink>
        <NavLink to="/analytics" className="link">
          Analytics
        </NavLink>
      </div>

      <div className="nav-right">
        <span className="pill">Tasks: {analytics.total}</span>
        <ThemeToggle />
      </div>
    </div>
  );
}
