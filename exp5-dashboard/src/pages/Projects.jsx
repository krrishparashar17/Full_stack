import { useSelector, useDispatch } from "react-redux";
import { addTask } from "../redux/slices/taskSlice";
import { useState } from "react";
import TaskItem from "../components/TaskItem";

export default function Projects() {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();
  const [text, setText] = useState("");

  const add = e => {
    e.preventDefault();
    dispatch(addTask(text));
    setText("");
  };

  return (
    <div className="page">
      <h1>Projects</h1>

      <form onSubmit={add}>
        <input
          value={text}
          onChange={e => setText(e.target.value)}
        />
        <button>Add</button>
      </form>

      {tasks.map(t => (
        <TaskItem key={t.id} task={t} />
      ))}
    </div>
  );
}