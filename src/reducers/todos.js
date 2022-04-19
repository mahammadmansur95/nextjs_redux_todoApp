import React from "react";
import {
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_ALL,
  DELETE_TODO,
  UPDATE_TODO,
} from "../actions/actionTypes";

const initialState = {
  todos: [],
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;

      return {
        todos: [...state.todos, { content, completed: false, id }],
      };
    }

    case TOGGLE_TODO: {
      const { id } = action.payload;
      //to update any item in state use map fun and update value
      const todos = state.todos.map((obj) =>
        obj.id === id ? { ...obj, completed: !obj.completed } : obj
      );
      return { todos };
    }

    case CLEAR_ALL: {
      return {
        todos: [],
      };
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      const todos = state.todos.filter((obj) => obj.id !== id);
      return { todos };
    }

    case UPDATE_TODO: {
      const { id, value } = action.payload;
      //this is another way of updating the item in state
      const todo = state.todos.filter((obj) => obj.id === id);
      const todos = state.todos.filter((obj) => obj.id !== id);
      todo.content = value;
      return {
        todos: [...todos, todo],
      };
    }

    default: {
      return state;
    }
  }
};

export default todos;
