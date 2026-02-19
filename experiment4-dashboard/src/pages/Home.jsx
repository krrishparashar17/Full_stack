import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Home() {
  const { analytics } = useContext(AppContext);

  return (
    <div className="page">
      <h1>Dashboard Home</h1>
      <p className="muted">
        This project uses React Router + useContext + useReducer + useMemo.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Total Tasks</h3>
          <p className="big">{analytics.total}</p>
        </div>
        <div className="card">
          <h3>Completed</h3>
          <p className="big">{analytics.completed}</p>
        </div>
        <div className="card">
          <h3>Pending</h3>
          <p className="big">{analytics.pending}</p>
        </div>
      </div>
    </div>
  );
}
