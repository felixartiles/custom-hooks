import React, { useReducer, useEffect } from "react";
import { TodoReducer } from "../reducer/todoReducer";

export const useTodo = () => {
  const initialState = [];

  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

  const [todos, dispatch] = useReducer(TodoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
 
  const handleNewTodo = (todo) => {
    const action = {
      type: "add ToDo",
      payload: todo,
    };
    dispatch(action);
  };
  const handleDeleteTodo = (id) => {
    dispatch({
      type: "delete ToDo",
      payload: id,
    });
  };
  const handleToggleTodo = (id) => {
    dispatch({
      type: "toggle ToDo",
      payload: id,
    });
  };
  return {
    todos,
    handleDeleteTodo,
    handleToggleTodo,
    handleNewTodo,
    todosCount: todos.length,
    pendingTodosCount: todos.filter(todo=> !todo.done).length,
  };
};
