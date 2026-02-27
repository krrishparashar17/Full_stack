import React, { useContext, useState } from "react";
import { AppContext } from "../context/AppContext";
import TaskItem from "../components/TaskItem";

export default function Projects() {
  const { tasks, dispatch } = useContext(AppContext);
  const [text, setText] = useState("");

  const addTask = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    dispatch({ type: "ADD_TASK", payload: text.trim() });
    setText("");
  };

  return (
    <div className="page">
      <h1>Projects / Tasks</h1>

      <form className="form" onSubmit={addTask}>
        <input
          className="input"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Enter a task..."
        />
        <button className="btn primary">Add</button>
        <button
          type="button"
          className="btn secondary"
          onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}
        >
          Clear Completed
        </button>
      </form>

      <div className="list">
        {tasks.map((t) => (
          <TaskItem key={t.id} task={t} />
        ))}
      </div>
    </div>
  );
}
