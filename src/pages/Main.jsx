import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";
import Filters from "../components/Filters";

function Main() {
  const navigate = useNavigate();
  const date = new Date();
  const hours = date.getHours();
  const today = date.toLocaleDateString();
  const weekday = date.toLocaleString("en-US", { weekday: "long" });

  return (
    <div className="bg-black font-family text-white w-full h-screen md:max-w-md mx-auto md:rounded-3xl md:shadow-lg md:h-auto">
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
            <p className="text-lg text-right">% Done</p>
            <p className="text-sm opacity-50">Completed Tasks</p>
          </div>
        </div>

        <button
          onClick={() => navigate("/addTask")}
          className="fixed bottom-8 right-8 bg-blue text-lg text-white w-16 h-16 rounded-full flex items-center justify-center shadow-lg md:fixed md:top-6 md:right-50"
        >
          +
        </button>
      </div>
      <Filters />
    </div>
  );
}
export default Main;
