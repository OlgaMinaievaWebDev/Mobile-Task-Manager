import { Link } from "react-router-dom";

function Main() {
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
          <Link to="/task/1">Task</Link>
          <p>12 Tasks</p>
          <Link to="/boards">Boards</Link>
          <p>3 Boards</p>
          <button>Active</button>
          <button>Done</button>
        </div>
      </div>
    </div>
  );
}

export default Main;
