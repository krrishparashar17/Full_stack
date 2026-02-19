import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <button className="btn secondary" onClick={toggleTheme}>
      {theme === "light" ? "🌙 Dark" : "☀️ Light"}
    </button>
  );
}
