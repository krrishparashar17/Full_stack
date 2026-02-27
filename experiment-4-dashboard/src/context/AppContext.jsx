import React, { createContext, useMemo, useReducer, useState } from "react";
import { appReducer, initialState } from "../reducer/appReducer";

export const AppContext = createContext();

export default function AppProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const [state, dispatch] = useReducer(appReducer, initialState);

  const toggleTheme = () => {
    setTheme((p) => (p === "light" ? "dark" : "light"));
  };

  const analytics = useMemo(() => {
    const total = state.tasks.length;
    const completed = state.tasks.filter((t) => t.completed).length;
    const pending = total - completed;
    const rate = total === 0 ? 0 : Math.round((completed / total) * 100);

    return { total, completed, pending, rate };
  }, [state.tasks]);

  return (
    <AppContext.Provider
      value={{
        theme,
        toggleTheme,
        tasks: state.tasks,
        dispatch,
        analytics,
      }}
    >
      <div className={`app ${theme}`}>{children}</div>
    </AppContext.Provider>
  );
}
