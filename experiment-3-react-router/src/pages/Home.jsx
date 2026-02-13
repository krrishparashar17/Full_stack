import { Link } from "react-router-dom";
import { workouts } from "../data/workouts";

export default function Home() {
  return (
    <div className="container">
      <section className="hero">
        <div className="hero-left">
          <h1>
            Krrish<span>WorkoutPlan</span> for Students
          </h1>
          <p>
            Select a workout plan and follow the exercises with sets and reps.
          </p>

          <div className="hero-badges">
            <span className="badge">React</span>
            <span className="badge">React Router</span>
            <span className="badge">Clean UI</span>
          </div>
        </div>

        <div className="hero-right">
          <div className="mini-card">
            <h3>Today’s Tip 💡</h3>
            <p>
              Track your sets and reps. Consistency beats motivation.
            </p>
          </div>
        </div>
      </section>

      <section className="section-title">
        <h2>Choose Your Workout</h2>
        <p>Click a card to view the full workout plan.</p>
      </section>

      <section className="grid">
        {workouts.map((w) => (
          <div key={w.id} className="card">
            <div className="card-top">
              <h3>{w.title}</h3>
              <span className="pill">{w.level}</span>
            </div>

            <p className="muted">{w.focus}</p>

            <div className="card-info">
              <div className="info-box">
                <span className="info-label">Time</span>
                <span className="info-value">{w.time}</span>
              </div>
              <div className="info-box">
                <span className="info-label">Exercises</span>
                <span className="info-value">{w.exercises.length}</span>
              </div>
            </div>

            <p className="desc">{w.description}</p>

            <Link to={`/workout/${w.id}`} className="btn">
              View Workout →
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
