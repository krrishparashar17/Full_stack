import React, { useContext, useMemo, useState } from "react";
import { AppContext } from "../context/AppContext";
import TaskItem from "../components/TaskItem";

export default function Analytics() {
  const { tasks, analytics } = useContext(AppContext);
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return tasks.filter((t) =>
      t.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [tasks, search]);

  return (
    <div className="page">
      <h1>Analytics Page (Experiment 4)</h1>

      <div className="grid">
        <div className="card">
          <h3>Completion Rate</h3>
          <p className="big">{analytics.rate}%</p>
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

      <input
        className="input"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search tasks..."
      />

      <div className="list">
        {filtered.length === 0 ? (
          <p className="muted">No tasks found.</p>
        ) : (
          filtered.map((t) => <TaskItem key={t.id} task={t} />)
        )}
      </div>
    </div>
  );
}
