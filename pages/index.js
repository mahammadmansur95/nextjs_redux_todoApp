import Container from "@mui/material/Container";
import AddTodo from "../src/components/AddTodo";
import TodoList from "../src/components/TodoList";
import VisibilityFilter from "../src/components/VisibilityFilter";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Container maxWidth="sm">
      <div className={styles.main}>
        <div className={styles.app_container}>
          <AddTodo/>
          <VisibilityFilter/>
          <TodoList/>
        </div>
      </div>
    </Container>
  );
}
