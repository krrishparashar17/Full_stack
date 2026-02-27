import { useSelector } from "react-redux";
import { useMemo } from "react";

export default function Reports() {
  const tasks = useSelector(
    state => state.tasks.tasks
  );

  const report = useMemo(() => {
    const total = tasks.length;
    const completed =
      tasks.filter(t => t.completed).length;

    const efficiency =
      total === 0
        ? 0
        : Math.round((completed / total) * 100);

    let status = "Needs Improvement";

    if (efficiency > 70)
      status = "Excellent Performance";
    else if (efficiency > 40)
      status = "Good Progress";

    return { efficiency, status };
  }, [tasks]);

  return (
    <div className="page">
      <h1>📈 Performance Report</h1>

      <div className="card">
        <h2>Completion Rate</h2>
        <p className="big">{report.efficiency}%</p>
      </div>

      <div className="card">
        <h2>Performance Status</h2>
        <p>{report.status}</p>
      </div>

      <div className="card">
        <h3>Instructor Review</h3>
        <p>
          Student performance monitored under
          guidance of <b>Pritam Sir</b>.
        </p>
      </div>
    </div>
  );
}