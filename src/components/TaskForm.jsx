import { useNavigate } from "react-router-dom";

function TaskForm() {
  const navigate = useNavigate();
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

        <form className="flex flex-col gap-4">
          <label>Select Board</label>
          <select>
            <option value="" disabled>
              --Choose Board--
            </option>
            <option value="new">Create New</option>
          </select>
          <div>
            <label htmlFor="task name">Enter Task </label>
            <input
              type="text"
              placeholder="Enter task name"
              className="w-full p-2 rounded-xl border border-gray-600  text-white mt-1"
              required
            />
          </div>
          <div>
            <label htmlFor="description">Add Description</label>
            <textarea
              className="rounded-xl w-full border border-gray-600 mt-1 resize-none"
              placeholder="Add additional description"
              required
            />
          </div>
          <div>
            <label htmlFor="date">Created</label>
            <input type="date" className="opacity-60 block mt-1" />
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
