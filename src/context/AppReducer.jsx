export const appReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [...state, action.payload];
    case "DELETE_TASK":
      return state.filter((task) => task.id !== action.payload);
    case "UPDATE_TASK":
      return state.map((task) => {
        const updateTask = action.payload;
        if (task.id === updateTask.id) {
          task.title = updateTask.title;
          task.description = updateTask.description;
          task.completed = updateTask.completed;
        }
        return task;
      });
  }
};
