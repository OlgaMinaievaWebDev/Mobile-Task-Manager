import { useEffect, useReducer, createContext, useContext } from "react";
const TaskContext = createContext();

const initialState = {
  tasks: JSON.parse(localStorage.getItem("tasks")) || [],
  boards: JSON.parse(localStorage.getItem("boards")) || [],
  selectedBoard: localStorage.getItem("selectedBoard") || "",
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    case "ADD_BOARD":
      return { ...state, boards: [...state.boards, action.payload] };
    case "SET_SELECTED_BOARD":
      return { ...state, selectedBoard: action.payload };
    case "TASK_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload ? { ...task, done: !task.done } : task
        ),
      };
    case "DELETE_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
      };
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(state.tasks));
    localStorage.setItem("boards", JSON.stringify(state.boards));
  localStorage.setItem("selectedBoard", state.selectedBoard); 
  }, [state.tasks, state.boards, state.selectedBoard]);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  return useContext(TaskContext);
}
