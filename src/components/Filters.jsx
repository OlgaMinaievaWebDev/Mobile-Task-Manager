import { useState } from "react";
import TaskList from "./TaskList";
import { useTaskContext } from "../context/TaskContext";
import { FaCheck, FaTrash, FaEye, FaEyeSlash } from "react-icons/fa"; // Import icons

function Filters() {
  const { state, dispatch } = useTaskContext();
  const [selectedTab, setSelectedTab] = useState("tasks");

  const handleDeleteBoard = (board) => {
    if (
      window.confirm(
        `Are you sure you want to delete board "${board}" and all its tasks?`
      )
    ) {
      dispatch({ type: "DELETE_BOARD", payload: board });
    }
  };

  const showAllTasks = () => {
    dispatch({ type: "SHOW_ALL_TASKS" });
  };

  const toggleBoardVisibility = (board) => {
    dispatch({ type: "TOGGLE_BOARD_VISIBILITY", payload: board });
  };

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
            <>
            
              {state.boards.map((board) => {
                const taskCount = state.tasks.filter(
                  (task) => task.board === board
                ).length;
                const isVisible = state.visibleBoards.includes(board);

                return (
                  <div
                    key={board}
                    className="p-3 mb-4 bg-yellow-100 text-gray-800 rounded-3xl flex flex-col justify-center shadow-lg"
                  >
                    <div className="flex justify-between items-center">
                      <p className="font-bold text-xl">{board}</p>
                      <p className="text-sm">{taskCount} Active Tasks</p>
                    </div>
                    <div className="flex justify-end gap-2 mt-2">
                      <button
                        onClick={() => handleDeleteBoard(board)}
                        className="text-white bg-red-500 px-3 py-1 rounded-lg hover:bg-red-600 transition-colors flex items-center gap-1"
                      >
                        <FaTrash /> Delete Board
                      </button>
                      <button
                        onClick={() => toggleBoardVisibility(board)}
                        className="text-white bg-blue-500 px-3 py-1 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-1"
                      >
                        {isVisible ? <FaEyeSlash /> : <FaEye />}
                        {isVisible ? "Hide Tasks" : "Show Tasks"}
                      </button>
                    </div>
                    {/* Show tasks if the board is visible */}
                    {isVisible && (
                      <div className="mt-4 max-h-64 overflow-y-auto">
                        {state.tasks
                          .filter((task) => task.board === board)
                          .map((task) => (
                            <div
                              key={task.id}
                              className={`p-3 mb-2 rounded-lg ${
                                task.done ? "bg-green-500" : "bg-gray-700"
                              } text-white flex justify-between items-center`}
                            >
                              <span className="flex-1">{task.name}</span>
                              <div className="flex gap-2">
                                <button
                                  onClick={() =>
                                    dispatch({
                                      type: "TASK_COMPLETE",
                                      payload: task.id,
                                    })
                                  }
                                  className="p-1 rounded-full hover:bg-white/10 transition-colors"
                                >
                                  <FaCheck />
                                </button>
                                <button
                                  onClick={() =>
                                    dispatch({
                                      type: "DELETE_TASK",
                                      payload: task.id,
                                    })
                                  }
                                  className="p-1 rounded-full hover:bg-white/10 transition-colors"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </div>
                          ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </>
          )}
        </div>
      )}
    </>
  );
}

export default Filters;
