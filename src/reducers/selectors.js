const filters = {
  ALL: "all",
  COMPLETED: "completed",
  INCOMPLETED: "incompleted",
};

export const getTodosByVisibilityFilter = (store, visibilityFiler) => {
  switch (visibilityFiler) {
    case filters.COMPLETED:
      return store.todos.filter((todo) => todo.completed);
    case filters.INCOMPLETED:
      return store.todos.filter((todo) => !todo.completed);
    default:
      return store.todos;
  }
};
