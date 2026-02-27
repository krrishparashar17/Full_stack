import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function Analytics() {
  const tasks = useSelector(
    state => state.tasks.tasks
  );

  const stats = useMemo(() => {
    const total = tasks.length;
    const completed =
      tasks.filter(t => t.completed).length;

    return {
      total,
      completed,
      pending: total - completed,
    };
  }, [tasks]);

  return (
    <div className="page">
      <h1>Analytics</h1>
      <p>Total: {stats.total}</p>
      <p>Completed: {stats.completed}</p>
      <p>Pending: {stats.pending}</p>
    </div>
  );
}