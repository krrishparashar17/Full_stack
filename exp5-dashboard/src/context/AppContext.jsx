import { createContext, useState } from "react";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () =>
    setTheme(p => (p === "light" ? "dark" : "light"));

  return (
    <AppContext.Provider value={{ theme, toggleTheme }}>
      <div className={`app ${theme}`}>
        {children}
      </div>
    </AppContext.Provider>
  );
}