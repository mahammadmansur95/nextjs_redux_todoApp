import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import { getTodosByVisibilityFilter } from "../reducers/selectors";
import  Todo from "./Todo";

const TodoList = () => {
  const { todos, visibilityFilter } = useSelector(state => state);
  console.log("visibilityFilter",visibilityFilter);
  const filterTodos = getTodosByVisibilityFilter(todos, visibilityFilter);

  return (
    <Box my={3}>
      {filterTodos.length ? filterTodos.map(todo => (
        <Todo key={`todo-${todo.id}`} todo={todo} />
      )) : <Box textAlign="center" my="4">No Todos Yay!</Box>}
    </Box>
  )
};

export default TodoList;