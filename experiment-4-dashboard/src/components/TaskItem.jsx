import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function TaskItem({ task }) {
  const { dispatch } = useContext(AppContext);

  return (
    <div className={`task ${task.completed ? "done" : ""}`}>
      <div className="task-left">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => dispatch({ type: "TOGGLE_TASK", payload: task.id })}
        />
        <span>{task.title}</span>
      </div>

      <button
        className="btn danger"
        onClick={() => dispatch({ type: "DELETE_TASK", payload: task.id })}
      >
        Delete
      </button>
    </div>
  );
}
