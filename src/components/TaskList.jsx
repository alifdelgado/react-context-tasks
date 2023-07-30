import { Link } from "react-router-dom";
import { useTask } from "../context/TaskContext";
import { FaCheckDouble, FaPenAlt, FaTrashAlt } from "react-icons/fa";

const TaskList = () => {
  const { deleteTask, state } = useTask();

  return (
    <div className="grid grid-cols-3 gap-2 mt-10">
      {state.map((task) => (
        <div
          key={task.id}
          className={`flex flex-col justify-center p-4  text-white rounded ${
            task.completed ? "bg-cyan-600" : "shadow bg-cyan-500"
          }`}
        >
          {!task.completed ? (
            <Link
              to={`/edit/${task.id}`}
              className="relative w-4 text-green-700 -right-full -top-3"
            >
              <FaPenAlt />
            </Link>
          ) : (
            <div className="relative flex w-8 -right-40 -top-3">
              <span
                className="w-4 text-indigo-700"
                title="This task is complete"
              >
                <FaCheckDouble />
              </span>
              <button
                className="w-4 text-red-700"
                onClick={() => deleteTask(task.id)}
              >
                <FaTrashAlt />
              </button>
            </div>
          )}
          <div className="flex flex-col h-full">
            <h1 className="mb-2 font-bold underline">{task.title}</h1>
            <p>{task.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
