export const initialState = {
  tasks: [
    { id: 1, title: "React Router Setup", completed: true },
    { id: 2, title: "useContext + useReducer", completed: false },
    { id: 3, title: "useMemo Analytics Page", completed: false },
  ],
};

export function appReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [
          { id: Date.now(), title: action.payload, completed: false },
          ...state.tasks,
        ],
      };

    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        ),
      };

    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.id !== action.payload),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        tasks: state.tasks.filter((t) => !t.completed),
      };

    default:
      return state;
  }
}
