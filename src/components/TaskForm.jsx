import { useState } from "react";
import { FaTasks } from "react-icons/fa";
import { useTask } from "../context/TaskContext";

const TaskForm = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
  });
  const { saveTask } = useTask();
  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTask(task);
  };

  return (
    <div className="w-3/4 p-5 mx-auto mt-10">
      <form
        className="flex flex-col w-full p-4 space-y-3 bg-gray-700 rounded shadow"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col">
          <label className="text-xl font-bold text-left text-white">
            Title
          </label>
          <input
            type="text"
            name="title"
            className="p-2 text-gray-700 rounded focus:outline-none"
            placeholder="Title"
            onChange={handleChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="text-xl font-bold text-left text-white">
            Description
          </label>
          <textarea
            name="description"
            className="p-2 text-gray-700 rounded focus:outline-none"
            placeholder="Description"
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="flex flex-col">
          <button
            type="submit"
            className="flex items-center justify-center gap-2 p-2 text-white bg-indigo-700 rounded shadow"
          >
            <FaTasks />
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default TaskForm;
