import { useNavigate } from "react-router-dom";
import TaskList from "../components/TaskList";

function Main() {
  const navigate = useNavigate();
  const date = new Date();
  const hours = date.getHours();
  const today =
    date.getMonth() + 1 + "/" + date.getDate() + "/" + date.getFullYear();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = weekday[date.getDay()];
  const todayDay = new Date().toLocaleString("en-US", { weekday: "long" });
  return (
    <div className="bg-black font-family text-white w-full h-screen">
      <div className="flex flex-col p-8 gap-3">
        <h1 className="text-6xl text-blue mb-3">
          Good{" "}
          {hours < 5
            ? "Night"
            : hours < 11
            ? "Morning"
            : hours < 18
            ? "Afternoon"
            : hours < 22
            ? "Evening"
            : "Night"}
        </h1>
        <div className="flex justify-between">
          <div>
            <p className="text-lg">Today's {day} </p>
            <p className="text-sm opacity-50">{today}</p>
          </div>
          <div>
            <p className="text-lg text-right">75% Done</p>
            <p className="text-sm opacity-50">Completed Tasks</p>
          </div>
        </div>
        <div className="flex justify-between mt-5">
          <div>
            <button
              onClick={() => navigate("/task/1")}
              className="flex items-center text-white text-2xl"
            >
              <span className="border border-white rounded-2xl px-2 py-1 mr-2 text-sm">
                12
              </span>
              Task
            </button>
          </div>
          <div>
            <button
              onClick={() => navigate("/boards")}
              className="flex items-center text-white text-2xl"
            >
              <span className="border border-white rounded-2xl px-2 py-1 mr-2 text-sm">
                3
              </span>
              Boards
            </button>
          </div>
        </div>
        <div>
          <progress className="h-1 bg-white w-full" />
        </div>
        <div className="flex justify-between">
          <button>Boards</button>
          <div>
            <button>Active</button>
            <button>Done</button>
          </div>
        </div>
        <div className="flex justify-evenly gap-3">
          {weekday.map((day) => (
            <p
              key={day}
              className={
                day === todayDay ? "text-blue font-bold" : "text-gray-400"
              }
            >
              {day.slice(0, 3)}
            </p>
          ))}
        </div>
      </div>
      <TaskList />
      <button
        onClick={() => navigate("/addTask")}
        className="bg-blue text-lg text-white w-14 h-14 rounded-full flex items-center justify-center fixed bottom-28 right-8 shadow-lg"
      >
        +
      </button>
    </div>
  );
}

export default Main;
