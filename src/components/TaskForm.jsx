import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import Boards from "../components/Boards";

function TaskForm() {
  const navigate = useNavigate();
  const { state, dispatch } = useTaskContext();
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [created, setCreated] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!state.selectedBoard) return;

    dispatch({
      type: "ADD_TASK",
      payload: {
        id: Date.now(),
        name: taskName,
        description,
        created,
      },
    });

    navigate("/");
  }

  return (
    <div className="bg-black text-white w-full h-screen font-family p-8">
      <button
        className="rounded-xl border border-yellow py-2 px-4 ml-2"
        onClick={() => navigate("/")}
      >
        Sweet Home
      </button>
      <div className="flex flex-col gap-4 mt-6">
        <h2 className="text-3xl text-blue mb-4 text-center">
          Create Your Task
        </h2>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <Boards />
          <div>
            <label htmlFor="task">Enter Task</label>
            <input
              name="task"
              type="text"
              placeholder="Enter task name"
              className="w-full p-2 rounded-xl border border-gray-600  text-white mt-1"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="description">Add Description</label>
            <textarea
              name="description"
              className="rounded-xl w-full border border-gray-600 mt-1 resize-none"
              placeholder="Add additional description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date">Created</label>
            <input
              type="date"
              className="opacity-60 block mt-1"
              value={created}
              onChange={(e) => setCreated(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="rounded-xl border border-blue mt-6 w-full bg-black hover:bg-blue text-white py-2 cursor-pointer"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
