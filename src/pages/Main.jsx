import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div className="bg-bg">
      <div>
        <h1>Good Morning</h1>
        <div>
          <p>Todays Monday</p>
          <p>Feb 12, 2025</p>
        </div>
        <div>
          <p>75% Done</p>
          <p>Completed Tasks</p>
        </div>
        <div>
          <button onClick={() => navigate("/task/1")}>View Task</button>

          <button onClick={() => navigate("/boards")}>Boards</button>

          <button>Active</button>
          <button>Done</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
