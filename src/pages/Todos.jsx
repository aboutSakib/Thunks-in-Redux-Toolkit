import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTodo, fetchTodos, removeTodo } from "../store/reducers/todo";

const Todos = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const todoState = useSelector((storeState) => storeState.todoState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
    };
    dispatch(createTodo(newTodo));
    setTodoTitle("");
  };
 const removeHandler=(todoId)=>{
   dispatch(removeTodo(todoId))
 }
  return (
    <div className="todos">
      <form onSubmit={submitHandler}>
        <input
          type="text"
          value={todoTitle}
          onChange={(e) => {
            setTodoTitle(e.target.value);
          }}
        />
        <button type="submit">Create Todo</button>
      </form>
      <h1
        style={{
          textAlign: "center",
          color: "red",
          fontWeight: "bold",
          fontSize: "50px",
        }}
      >
        All Todos
      </h1>
      {todoState.loading && <p>Loading....</p>}
      {todoState.error && <h3>{todoState.error}</h3>}
      <ul>
        {todoState.todos.map((todo) => (
          <li key={todo.id}>
            <span>{todo.title}</span>
            <button onClick={()=>removeHandler(todo.id)}>Remove Todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
