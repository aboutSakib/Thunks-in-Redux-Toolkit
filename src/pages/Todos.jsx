import React, { useState } from "react";
import {
  useCreateTodoMutation,
  useGetAllTodosQuery,
  useRemoveTodoMutation,
} from "../store/features/appSlice";

const Todos = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const { data, error, isError, isLoading } = useGetAllTodosQuery();

  const [makeTodo] = useCreateTodoMutation();
  const [deleteTodo] = useRemoveTodoMutation();

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      title: todoTitle,
    };
    makeTodo(newTodo);
    setTodoTitle("");
  };

  const removeHandler = (todoId) => {
    console.log(todoId, "id founded,,");
    deleteTodo(todoId);
  };

  return (
    <div className="todos">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => setTodoTitle(e.target.value)}
        />
        <button type="submit">Create Todo</button>
      </form>
      <h2>All Todos</h2>
      {isLoading && <p>Loading......</p>}
      {isError && <h3>{error.message}</h3>}
      <ul>
        {data?.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={() => removeHandler(todo.id)}>Remove Todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
