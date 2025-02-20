import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";
import { FaRegCircle } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaDeleteLeft } from "react-icons/fa6";
import { FaEdit } from "react-icons/fa";

function TaskList() {
  const { state, dispatch } = useTaskContext();

  return (
    <div className="px-8">
      {state.tasks.map((task) => (
        <div
          key={task.id}
          className={`p-3 mb-2 ${
            task.done ? "bg-green-300" : "bg-lightblue"
          } text-black rounded-3xl h-25 flex flex-col justify-center shadow-lg`}
        >
          <h3 className="text-lg font-bold">{task.name}</h3>
          <p className="text-sm text-gray-400">Board: {task.board}</p>{" "}
          {/* ✅ Show board name */}
          <p className="text-sm opacity-60">Created: {task.created || "N/A"}</p>
          <div className="flex justify-end align-baseline gap-3">
            <button
              onClick={() =>
                dispatch({ type: "TASK_COMPLETE", payload: task.id })
              }
            >
              {task.done ? <FaRegCheckCircle /> : <FaRegCircle />}
            </button>
            <button>
              <FaEdit />
            </button>
            <button>
              <FaDeleteLeft />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
