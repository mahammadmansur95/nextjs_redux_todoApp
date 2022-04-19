import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useDispatch } from "react-redux";
import { addTodo } from "../actions/actions";
import NotesRoundedIcon from '@mui/icons-material/NotesRounded';
import InputAdornment from '@mui/material/InputAdornment';
import styles from '../../styles/Home.module.css';

const AddTodo = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.key == "Enter") {
      dispatch(addTodo(value));
      setValue("");
    }
  };

  return (
    <Box
      sx={{
        width: 500,
        maxWidth: "100%",
        display: "flex",
      }}
    >
      
      <TextField
        value={value}
        onChange={handleInputChange}
        onKeyUp={handleSubmit}
        // fullWidth
        // label="Add a new task"
        placeholder="Add a new task"
        className={styles.textfield}
        id="input"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <NotesRoundedIcon/>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default AddTodo;
