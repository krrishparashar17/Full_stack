import { useDispatch } from "react-redux";
import {
  toggleTask,
  deleteTask,
} from "../redux/slices/taskSlice";

export default function TaskItem({ task }) {
  const dispatch = useDispatch();

  return (
    <div className="task">
      <span
        onClick={() =>
          dispatch(toggleTask(task.id))
        }
      >
        {task.title}
      </span>

      <button
        onClick={() =>
          dispatch(deleteTask(task.id))
        }
      >
        Delete
      </button>
    </div>
  );
}