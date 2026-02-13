import { workouts } from "../data/workouts";

export default function Schedule() {
  const plan = [
    { day: "Monday", workout: "push" },
    { day: "Tuesday", workout: "pull" },
    { day: "Wednesday", workout: "abs" },
    { day: "Thursday", workout: "legs" },
    { day: "Friday", workout: "push" },
    { day: "Saturday", workout: "pull" },
    { day: "Sunday", workout: "Rest Day" }
  ];

  const getWorkoutTitle = (id) => {
    const w = workouts.find((x) => x.id === id);
    return w ? w.title : id;
  };

  return (
    <div className="container">
      <div className="details-header">
        <div>
          <h1>Weekly Schedule</h1>
          <p className="muted">
            A simple workout schedule for students (easy to follow).
          </p>
        </div>
      </div>

      <div className="details-grid">
        <div className="details-card">
          <h3>Rules</h3>

          <div className="note">
            <strong>Tip:</strong> If you feel tired, take rest. Recovery is part of
            training.
          </div>

          <div style={{ marginTop: "14px" }} className="muted">
            <p>• Warm-up: 5-10 minutes before workout</p>
            <p>• Drink water during workout</p>
            <p>• Sleep: minimum 7 hours</p>
          </div>
        </div>

        <div className="details-card">
          <h3>7-Day Plan</h3>

          <div className="table">
            <div className="table-head">
              <span>Day</span>
              <span style={{ gridColumn: "span 2" }}>Workout</span>
            </div>

            {plan.map((p, index) => (
              <div
                key={index}
                className="table-row"
                style={{ gridTemplateColumns: "1fr 2fr" }}
              >
                <span>{p.day}</span>
                <span>
                  {p.workout === "Rest Day" ? "Rest Day 💤" : getWorkoutTitle(p.workout)}
                </span>
              </div>
            ))}
          </div>

          <p className="muted" style={{ marginTop: "14px" }}>
            You can change the schedule based on your college timings.
          </p>
        </div>
      </div>
    </div>
  );
}
