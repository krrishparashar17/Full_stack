import { Link, useParams } from "react-router-dom";
import { workouts } from "../data/workouts";

export default function WorkoutDetails() {
  const { id } = useParams();
  const workout = workouts.find((w) => w.id === id);

  if (!workout) {
    return (
      <div className="container">
        <div className="details-card">
          <h2>Workout Not Found ❌</h2>
          <p className="muted">This workout does not exist.</p>
          <Link to="/" className="btn">
            Go Back Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <div className="details-header">
        <div>
          <h1>{workout.title}</h1>
          <p className="muted">{workout.focus}</p>
        </div>

        <Link to="/" className="btn-outline">
          ← Back
        </Link>
      </div>

      <div className="details-grid">
        <div className="details-card">
          <h3>Workout Info</h3>

          <div className="detail-row">
            <span className="detail-key">Level</span>
            <span className="detail-value">{workout.level}</span>
          </div>

          <div className="detail-row">
            <span className="detail-key">Time</span>
            <span className="detail-value">{workout.time}</span>
          </div>

          <div className="detail-row">
            <span className="detail-key">Total Exercises</span>
            <span className="detail-value">{workout.exercises.length}</span>
          </div>

          <p className="desc" style={{ marginTop: "14px" }}>
            {workout.description}
          </p>
        </div>

        <div className="details-card">
          <h3>Exercise Plan</h3>

          <div className="table">
            <div className="table-head">
              <span>Exercise</span>
              <span>Sets</span>
              <span>Reps</span>
            </div>

            {workout.exercises.map((ex, index) => (
              <div key={index} className="table-row">
                <span>{ex.name}</span>
                <span>{ex.sets}</span>
                <span>{ex.reps}</span>
              </div>
            ))}
          </div>

          <div className="note">
            <strong>Note:</strong> Warm up properly and maintain correct form.
          </div>
        </div>
      </div>
    </div>
  );
}
