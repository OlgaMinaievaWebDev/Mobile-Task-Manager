import { useState } from "react";
import TaskList from "./TaskList";
import Boards from "./Boards";
import { useTaskContext } from "../context/TaskContext";

function Filters() {
  const { state } = useTaskContext();
  const [selectedTab, setSelectedTab] = useState("tasks"); // ✅ Use one state instead of two

  return (
    <>
      <div className="flex justify-between p-8">
        {/* Tasks Tab */}
        <div className="flex items-center gap-1.5">
          <button
            className={`rounded-full w-10 h-10 p-2 border border-white ${
              selectedTab === "tasks" ? "bg-blue text-white border-none" : ""
            }`}
          >
            {state.tasks.length} {/* ✅ Dynamic task count */}
          </button>
          <p
            onClick={() => setSelectedTab("tasks")} // ✅ Use single state
            className={`text-2xl cursor-pointer ${
              selectedTab === "tasks" ? "text-yellow" : ""
            }`}
          >
            Tasks
          </p>
        </div>

        {/* Boards Tab */}
        <div className="flex items-center gap-1.5">
          <button
            className={`rounded-full w-10 h-10 p-2 border border-white ${
              selectedTab === "boards" ? "bg-blue text-white border-none" : ""
            }`}
          >
            {state.boards.length} {/* ✅ Dynamic board count */}
          </button>
          <p
            onClick={() => setSelectedTab("boards")} // ✅ Use single state
            className={`text-2xl cursor-pointer ${
              selectedTab === "boards" ? "text-yellow" : ""
            }`}
          >
            Boards
          </p>
        </div>
      </div>

      {/* ✅ Show Tasks if "Tasks" tab is active */}
      {selectedTab === "tasks" && (
        <>
          {state.tasks.length === 0 ? (
            <p className="text-center text-gray-400">You have 0 tasks</p>
          ) : (
            <TaskList />
          )}
        </>
      )}

      {/* ✅ Show Boards if "Boards" tab is active */}
      {selectedTab === "boards" && (
        <>
          {state.boards.length === 0 ? (
            <p className="text-center text-gray-400">You have 0 boards</p>
          ) : (
            <Boards />
          )}
        </>
      )}
    </>
  );
}

export default Filters;
