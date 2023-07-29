import { Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { TaskProvider } from "./context/TaskContext";

const Router = () => {
  return (
    <TaskProvider>
      <Routes>
        <Route path="/" element={<TaskList />} />
        <Route path="/add" element={<TaskForm />} />
      </Routes>
    </TaskProvider>
  );
};

export default Router;
