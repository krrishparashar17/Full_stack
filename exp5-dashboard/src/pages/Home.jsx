import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function Home() {
  const tasks = useSelector(state => state.tasks.tasks);

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;

    return {
      total,
      completed,
      pending: total - completed,
    };
  }, [tasks]);

  return (
    <div className="page">
      <h1>🎓 Student Productivity Dashboard</h1>

      <div className="info-card">
        <h3>Student Name: <span>Krrish</span></h3>
        <h3>Course: Full Stack Development</h3>
        <h3>Mentor: <span>Pritam Sir</span></h3>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Total Tasks</h3>
          <p className="big">{stats.total}</p>
        </div>

        <div className="card">
          <h3>Completed</h3>
          <p className="big">{stats.completed}</p>
        </div>

        <div className="card">
          <h3>Pending</h3>
          <p className="big">{stats.pending}</p>
        </div>
      </div>
    </div>
  );
}