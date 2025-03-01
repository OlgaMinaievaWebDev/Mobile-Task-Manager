import { useTaskContext } from "../context/TaskContext";

import {
  FaRegCircle,
  FaRegCheckCircle,
  FaEdit,
  FaTrash,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function TaskList() {
  const { state, dispatch } = useTaskContext();
  const navigate = useNavigate();

  // Function to handle task deletion
  const handleDeleteTask = (id) => {
    dispatch({ type: "DELETE_TASK", payload: id });
  };

  return (
    <div className="px-8 py-4 max-h-96 overflow-y-auto">
      {state.tasks.map((task) => (
        <div
          key={task.id}
          className={`p-3 mb-2 ${
            task.done ? "bg-green-300" : "bg-lightblue"
          } text-black rounded-3xl flex flex-col justify-center shadow-lg`}
        >
          <h3 className="text-lg font-bold">{task.name}</h3>
          <p className="text-sm text-gray-600">Board: {task.board}</p>
          <p className="text-sm text-gray-600">
            Created: {task.created || "N/A"}
          </p>
          <div className="flex justify-end gap-3 mt-2">
            {/* Toggle task completion */}
            <button
              onClick={() =>
                dispatch({ type: "TASK_COMPLETE", payload: task.id })
              }
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              {task.done ? (
                <FaRegCheckCircle size={20} />
              ) : (
                <FaRegCircle size={20} />
              )}
            </button>

            {/* Edit task */}
            <button
              onClick={() => navigate(`/task/${task.id}`)}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
            >
              <FaEdit size={20} />
            </button>

            {/* Delete task */}
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="p-1 rounded-full hover:bg-white/10 transition-colors"
            >
             <FaTrash size={20} />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
