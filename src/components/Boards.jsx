import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

function Boards() {
  const { state, dispatch } = useTaskContext();
  const [selectedBoard, setSelectedBoard] = useState("");
  const [newBoard, setNewBoard] = useState("");

  function addNewBoard() {
    dispatch({ type: "ADD_NEW_BOARD", payload: newBoard });
  }

  return (
    <div>
      <label htmlFor="boards">Select Board</label>
      <select
        value={selectedBoard}
        onChange={(e) => {
          setSelectedBoard(e.target.value);
          setNewBoard(""); // Reset new board input if selecting existing one
        }}
        className="w-full p-2 rounded-xl border border-gray-600 text-white"
        required
      >
        <option value="" disabled>
          -- Choose Board --
        </option>
        {state.boards.map((board) => (
          <option key={board} value={board}>
            {board}
          </option>
        ))}
        <option value="new">Create New</option>
      </select>
      {selectedBoard === "new" && (
        <input
          type="text"
          placeholder="Enter new board name"
          className="w-full p-2 mt-2 rounded-xl border border-gray-600 text-white"
          value={newBoard}
          onChange={(e) => setNewBoard(e.target.value)}
          required
        />
      )}
    </div>
  );
}

export default Boards;
