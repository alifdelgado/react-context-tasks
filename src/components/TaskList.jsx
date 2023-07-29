import { useTask } from "../context/TaskContext";
import { FaCheckDouble, FaPenAlt } from "react-icons/fa";

const TaskList = () => {
  const { state } = useTask();

  return (
    <div className="grid grid-cols-3 gap-2 mt-10">
      {state.map((task) => (
        <div
          className={`flex flex-col justify-center p-4  text-white rounded ${
            task.completed ? "bg-cyan-600" : "shadow bg-cyan-500"
          }`}
          key={task.id}
        >
          {!task.completed ? (
            <button className="relative w-8 text-green-700 -right-full -top-3">
              <FaPenAlt />
            </button>
          ) : (
            <button className="relative w-4 text-indigo-700 -right-full -top-3">
              <FaCheckDouble />
            </button>
          )}
          <h1 className="mb-2 font-bold underline">{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
