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
      // Find the task being deleted
      const deletedTask = state.tasks.find(
        (task) => task.id === action.payload
      );
      // Filter out the deleted task
      const updatedTasks = state.tasks.filter(
        (task) => task.id !== action.payload
      );
      // Check if the board associated with the deleted task has any remaining tasks
      const boardHasTasks = updatedTasks.some(
        (task) => task.board === deletedTask.board
      );
      // If the board has no tasks, remove it from the boards array
      const updatedBoards = boardHasTasks
        ? state.boards
        : state.boards.filter((board) => board !== deletedTask.board);
      return {
        ...state,
        tasks: updatedTasks,
        boards: updatedBoards,
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
