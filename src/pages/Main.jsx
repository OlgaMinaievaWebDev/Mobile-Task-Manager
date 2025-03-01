import { useNavigate } from "react-router-dom";
import { useTaskContext } from "../context/TaskContext";
import Filters from "../components/Filters";

function Main() {
  const navigate = useNavigate();
  const { state, dispatch } = useTaskContext();
  const date = new Date();
  const hours = date.getHours();
  const today = date.toLocaleDateString();
  const weekday = date.toLocaleString("en-US", { weekday: "long" });

  // Calculate completed tasks percentage
  const totalTasks = state.tasks.length;
  const completedTasks = state.tasks.filter((task) => task.done).length;
  const completionPercentage =
    totalTasks > 0 ? Math.round((completedTasks / totalTasks) * 100) : 0;

  const handleDeleteAll = () => {
  if (window.confirm("Are you sure you want to delete all tasks?")) {
    dispatch({ type: "DELETE_ALL" });
  }
};
  return (
    <div className="bg-black font-family text-white w-full h-screen md:max-w-md mx-auto md:rounded-3xl md:shadow-lg md:h-auto md:mt-4 relative pb-20">
      <div className="flex flex-col p-8 gap-3">
        <h1 className="text-6xl text-blue mb-3">
          Good{" "}
          {hours < 5
            ? "Night"
            : hours < 11
            ? "Morning"
            : hours < 18
            ? "Afternoon"
            : "Evening"}
        </h1>
        <div className="flex justify-between">
          <div>
            <p className="text-lg">Today&apos;s {weekday} </p>
            <p className="text-sm opacity-50">{today}</p>
          </div>
          <div>
            <p className="text-lg text-right">{completionPercentage}% Done</p>
            <p className="text-sm opacity-50">Completed Tasks</p>
          </div>
        </div>

        {/*Delete all tasks button*/}
        {state.tasks.length > 0 && (
          <button
            onClick={handleDeleteAll}
            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4"
          >
            Delete All Tasks
          </button>
        )}

        {/* Fixed Button for Mobile, Inside Container for Medium Screens */}
        <button
          onClick={() => navigate("/addTask")}
          className="fixed bottom-20 right-8 bg-blue text-lg text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg md:absolute md:bottom-8 md:right-8"
        >
          +
        </button>
      </div>
      <Filters />
    </div>
  );
}

export default Main;
