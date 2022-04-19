import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import { toggleTodo, deleteTodo,updateTodo } from "../actions/actions";
import { useDispatch } from "react-redux";
import styles from "../../styles/Home.module.css";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const [value, setValue] = useState(todo.content);
  const [update, setUpdate] = useState({});
  const [cheked, setCheked] = useState(false);

  const handleCheked = () => {
    dispatch(toggleTodo(todo.id));
  };

  useEffect(() => {
    setCheked(todo.completed);
  }, [todo]);

  const handleEdit = () => {
    setUpdate({ id: todo.id, isUpdate: true });
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    setValue(value);
    setUpdate({ ...update, isUpdate: false });
    dispatch(updateTodo(todo.id,value));
    console.log(update);
  };

  return (
    <Box mb={1} p={2} className={styles.filter}>
      {update.isUpdate ? (
        <>
          <div>
            <TextField key={update.id} value={value} onChange={handleChange} />
          </div>
          <div>
            <Button onClick={handleUpdate}>Update</Button>
          </div>
        </>
      ) : (
        <>
          <div style={{ display: "flex", alignItems: "center" }}>
            {todo.completed ? (
              <Checkbox onChange={handleCheked} defaultChecked></Checkbox>
            ) : (
              <Checkbox onChange={handleCheked}></Checkbox>
            )}
            {cheked ? (
              <Typography className={styles.strike}>{value}</Typography>
            ) : (
              <Typography>{value}</Typography>
            )}
          </div>
          <div style={{ display: "flex" }}>
            <Button onClick={() => dispatch(deleteTodo(todo.id))}>
              Delete
            </Button>
            <Button onClick={handleEdit}>Edit</Button>
          </div>
        </>
      )}
    </Box>
  );
};

export default Todo;
