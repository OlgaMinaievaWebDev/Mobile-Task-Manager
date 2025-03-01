import { useTaskContext } from "../context/TaskContext";
import { FaRegCircle, FaRegCheckCircle, FaEdit, FaTrash } from "react-icons/fa";
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
          className={`p-3 mb-4 ${
            task.done ? "bg-green-100" : "bg-blue-100"
          } text-gray-800 rounded-3xl flex flex-col justify-center shadow-lg`}
        >
          <div className="flex justify-between items-center">
            <p className="font-bold text-xl">{task.name}</p>
            <p className="text-sm">{task.board}</p>
          </div>
          <p className="text-sm text-gray-600">
            Created: {task.created || "N/A"}
          </p>
          <div className="flex justify-end gap-2 mt-2">
            <button
              onClick={() =>
                dispatch({ type: "TASK_COMPLETE", payload: task.id })
              }
              className="text-gray-800 px-3 py-1 rounded-lg hover:bg-white/10 transition-colors flex items-center gap-1"
            >
              {task.done ? (
                <FaRegCheckCircle size={20} />
              ) : (
                <FaRegCircle size={20} />
              )}
              {task.done ? "Undo" : "Complete"}
            </button>
            <button
              onClick={() => navigate(`/task/${task.id}`)}
              className="text-white bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-1"
            >
              <FaEdit size={20} />
              Edit
            </button>
            <button
              onClick={() => handleDeleteTask(task.id)}
              className="text-white bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-1"
            >
              <FaTrash size={20} />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
