import { createSlice } from "@reduxjs/toolkit";

/*
  Student Productivity Dashboard
  Developed by: Krrish
  Guided by: Pritam Sir
*/

const initialState = {
  tasks: [
    {
      id: 1,
      title: "Complete React Experiment 4 Dashboard",
      completed: true,
    },
    {
      id: 2,
      title: "Implement Redux Toolkit for Experiment 5",
      completed: true,
    },
    {
      id: 3,
      title: "Prepare Full Stack Development Assignment",
      completed: false,
    },
    {
      id: 4,
      title: "Study useMemo Optimization Concepts",
      completed: true,
    },
    {
      id: 5,
      title: "Submit Experiment 5 before Deadline",
      completed: true,
    },
  ],
};

const taskSlice = createSlice({
  name: "tasks",
  initialState,

  reducers: {
    // ✅ Add New Task
    addTask: (state, action) => {
      if (!action.payload.trim()) return;

      state.tasks.unshift({
        id: Date.now(),
        title: action.payload,
        completed: false,
      });
    },

    // ✅ Toggle Task Completion
    toggleTask: (state, action) => {
      const task = state.tasks.find(
        (t) => t.id === action.payload
      );

      if (task) {
        task.completed = !task.completed;
      }
    },

    // ✅ Delete Task
    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter(
        (t) => t.id !== action.payload
      );
    },

    // ✅ Clear Completed Tasks
    clearCompleted: (state) => {
      state.tasks = state.tasks.filter(
        (t) => !t.completed
      );
    },
  },
});

export const {
  addTask,
  toggleTask,
  deleteTask,
  clearCompleted,
} = taskSlice.actions;

export default taskSlice.reducer;