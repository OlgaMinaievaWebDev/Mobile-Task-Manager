import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div className="bg-black font-family text-white w-full h-screen">
      <div className="flex flex-col p-3 gap-3">
        <h1 className="text-6xl text-blue ">Good Morning</h1>
        <div className="flex justify-between">
          <div>
            <p className="text-lg">Today's Monday</p>
            <p className="text-sm opacity-50">Feb 12, 2025</p>
          </div>
          <div>
            <p className="text-lg text-right">75% Done</p>
            <p className="text-sm opacity-50">Completed Tasks</p>
          </div>
        </div>
        <div className="flex justify-between">
          <button className="text-black bg-white hover:bg-blue-800 focus:ring-3 focus:outline-none focus:ring-blue-300 rounded-full text-sm p-2.5 text-center inline-flex items-center me-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            12
          </button>
          <button onClick={() => navigate("/task/1")}>Task</button>
          <button onClick={() => navigate("/boards")}>Boards</button>
        </div>
        <div className="h-1 bg-white w-full"></div>
        <div className="flex justify-between">
          <button>Boards</button>
          <div>
            <button>Active</button>
            <button>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
