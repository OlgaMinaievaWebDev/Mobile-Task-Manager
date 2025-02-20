import { useTaskContext } from "../context/TaskContext";

function TaskList() {
  const { state } = useTaskContext();

  return (
    <div className="px-8">
      {state.tasks.map((task) => (
        <div
          key={task.id}
          className="p-3 mb-2 bg-lightblue text-black rounded-3xl h-25 flex flex-col justify-center shadow-lg"
        >
          <h3 className="text-lg font-bold">{task.name}</h3>
          <p className="text-sm text-gray-400">Board: {task.board}</p>{" "}
          {/* ✅ Show board name */}
          <p className="text-sm opacity-60">Created: {task.created || "N/A"}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
