import { useTaskContext } from "../context/TaskContext";

function TaskList() {
  const { state } = useTaskContext();
  return (
    <div>
      {state.tasks.map((task) => (
        <div key={task.id}>
          <p>{task.name}</p>;<p>{task.created}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
