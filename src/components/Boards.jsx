import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function Boards() {
  const { state, dispatch } = useTaskContext();
  const [newBoard, setNewBoard] = useState("");

  function handleBoardSelection(e) {
    dispatch({ type: "SET_SELECTED_BOARD", payload: e.target.value });
  }

  function addNewBoard() {
    if (!newBoard.trim()) return;
    dispatch({ type: "ADD_BOARD", payload: newBoard });
     dispatch({ type: "SET_SELECTED_BOARD", payload: newBoard }); 
    setNewBoard(""); // Reset input after adding the board
  }

  return (
    <div>
      <label htmlFor="boards">Select Board</label>
      <select
        value={state.selectedBoard}
        onChange={handleBoardSelection}
        className="w-full p-2 rounded-xl border border-gray-600 text-white"
        required
      >
        <option value="" disabled>
          -- Choose Board --
        </option>
        {state.boards.length > 0 ? (
          state.boards.map((board, index) => (
            <option key={index} value={board}>
              {board}
            </option>
          ))
        ) : (
          <option value="" disabled>
            No Boards available
          </option>
        )}
        <option value="new">Create New</option>
      </select>

      {state.selectedBoard === "new" && (
        <div>
          <input
            type="text"
            placeholder="Enter new board name"
            className="w-full p-2 mt-2 rounded-xl border border-gray-600 text-white"
            value={newBoard}
            onChange={(e) => setNewBoard(e.target.value)}
            required
          />
          <button
            onClick={addNewBoard}
            className="text-white px-4 py-2 rounded-lg mt-2 border border-blue"
          >
            Add Board
          </button>
        </div>
      )}
    </div>
  );
}

export default Boards;
