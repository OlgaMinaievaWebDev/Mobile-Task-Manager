import { useNavigate } from "react-router-dom";

function TaskForm() {
  const navigate = useNavigate();
  return (
    <div className="bg-black text-white w-full h-screen flex flex-col items-center">
      <button onClick={() => navigate("/")}>Sweet Home</button>
      <div className="bg-gray-800 p-6 rounded-lg w-80">
        <h2 className="text-2xl mb-4">Add Task</h2>
        <form>
          <label>Select Board</label>
          <select>
            <option value="" disabled>
              --Choose Board--
            </option>
            <option value="new">Create New</option>
          </select>

          <input
            type="text"
            placeholder="Enter task name"
            className="w-full p-2 rounded border border-gray-600 bg-gray-700 text-white"
            required
          />
          <p>Add Description</p>
          <textarea />
          <p>Created Date</p>
          <button
            type="submit"
            className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded"
          >
            Add Task
          </button>
        </form>
      </div>
    </div>
  );
}

export default TaskForm;
