import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import Boards from "./components/Boards.jsx";
import TaskDetails from "./pages/TaskDetails.jsx";
import TaskForm from "./components/TaskForm.jsx";
import { TaskProvider } from "./context/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TaskProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/boards" element={<Boards />} />
          <Route path="/task/:id" element={<TaskDetails />} />
          <Route path="/addTask" element={<TaskForm />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  </StrictMode>
);
