import { useState } from "react";
import TaskList from "./TaskList";
import Boards from "./Boards";
import { useTaskContext } from "../context/TaskContext";

function Filters() {
  const { state } = useTaskContext();
  const [selectedTab, setSelectedTab] = useState("tasks");

  return (
    <>
      <div className="flex justify-between p-8 ">
        {/* Tasks Tab */}
        <div className="flex items-center gap-1.5">
          <button
            className={`rounded-full w-10 h-10 p-2 border border-white ${
              selectedTab === "tasks"
                ? "bg-lightblue text-black border-none"
                : ""
            }`}
          >
            {state.tasks.length} {/* Dynamic task count */}
          </button>
          <p
            onClick={() => setSelectedTab("tasks")}
            className={`text-2xl cursor-pointer ${
              selectedTab === "tasks" ? "text-lightblue" : ""
            }`}
          >
            Tasks
          </p>
        </div>

        {/* Boards Tab */}
        <div className="flex items-center gap-1.5">
          <button
            className={`rounded-full w-10 h-10 p-2 border border-white ${
              selectedTab === "boards" ? "bg-yellow text-black border-none" : ""
            }`}
          >
            {state.boards.length} {/* Dynamic board count */}
          </button>
          <p
            onClick={() => setSelectedTab("boards")}
            className={`text-2xl cursor-pointer ${
              selectedTab === "boards" ? "text-yellow" : ""
            }`}
          >
            Boards
          </p>
        </div>
      </div>

      {/* Show Tasks if "Tasks" tab is active */}
      {selectedTab === "tasks" && (
        <>
          {state.tasks.length === 0 ? (
            <p className="text-center text-gray-400">You have 0 tasks</p>
          ) : (
            <TaskList />
          )}
        </>
      )}

      {/* Show Boards if "Boards" tab is active */}
      {selectedTab === "boards" && (
        <div className="px-8 md:py-4">
          {state.boards.length === 0 ? (
            <p className="text-center text-gray-400">You have 0 boards</p>
          ) : (
            state.boards.map((board) => {
              const taskCount = state.tasks.filter(
                (task) => task.board === board
              ).length;

              return (
                <div
                  key={board}
                  className="p-3 mb-2 bg-yellow text-black rounded-3xl h-25 flex flex-col justify-center shadow-lg"
                >
                  <p className="font-bold mt-2">{board}</p>
                  <p>{taskCount} Active Tasks</p>
                  {/* Add a delete board button */}
                  <div className="flex justify-end gap-2">
                    <button className="text-white bg-red-500 px-3 py-1 rounded-lg mt-2 mb-2 ">
                      Delete Board
                    </button>
                    {/* Add a show all tasks button */}
                    <button className="text-black px-3 py-1 rounded-lg mt-2 mb-2 bg-lightblue">
                      Show Tasks
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      )}
    </>
  );
}

export default Filters;
