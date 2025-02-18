import { createContext, useContext, useReducer } from "react";

const TaskContext = createContext();

const initialState = {
  tasks: [],
  boards: ["Personal", "Work", "ToDo", "Family", "Hobby"], //Default Boards
};

function taskReducer(state, action) {
  switch (action.type) {
    case "ADD_TASK":
      return { ...state, tasks: [...state.tasks, action.payload] };
    default:
      return state;
  }
}

export function TaskProvider({ children }) {
  const [state, dispatch] = useReducer(taskReducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
export function useTaskContext() {
  return useContext(TaskContext);
}
