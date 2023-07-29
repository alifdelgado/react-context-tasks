import { createContext, useContext, useReducer, useState } from "react";
import { appReducer } from "./AppReducer";

const initialState = [
  {
    id: 1,
    title: "delectus aut autem",
    description: "Cillum proident sint elit cupidatat adipisicing.",
    completed: false,
  },
  {
    id: 2,
    title: "quis ut nam facilis et officia qui",
    description: "Laboris voluptate ipsum eiusmod quis.",
    completed: false,
  },
  {
    id: 3,
    title: "fugiat veniam minus",
    description:
      "Excepteur velit fugiat ad enim quis incididunt ex duis Lorem amet.",
    completed: false,
  },
  {
    id: 4,
    title: "et porro tempora",
    description:
      "Dolore enim do anim nulla nisi pariatur minim labore amet elit Lorem velit in deserunt.",
    completed: true,
  },
  {
    id: 5,
    title: "laboriosam mollitia et enim",
    description:
      "Cupidatat in dolor eiusmod magna in eu anim tempor id nulla ullamco.",
    completed: false,
  },
];

export const TaskContext = createContext();

export const useTask = () => {
  const context = useContext(TaskContext);

  if (!context) throw new Error("useTasks must be used within a TaskProvider");

  return context;
};

export const TaskProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const saveTask = (task) => {
    dispatch({ type: "ADD_TASK", payload: task });
  };

  const deleteTask = () => {
    dispatch({ type: "DELETE_TASK" });
  };

  return (
    <TaskContext.Provider value={{ deleteTask, saveTask, state }}>
      {children}
    </TaskContext.Provider>
  );
};
