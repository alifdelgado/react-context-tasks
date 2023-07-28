import { Route, Routes } from "react-router-dom";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<TaskList />} />
      <Route path="/add" element={<TaskForm />} />
    </Routes>
  );
};

export default Router;
