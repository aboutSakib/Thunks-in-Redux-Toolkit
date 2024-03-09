import { useState } from "react";
import { useTodo } from "./../hook/useTodo";

const Todos = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const {
    data,
    isLoading,
    isError,
    error,
    useCreateTodoMutation,
    useRemoveTodoMutation,
  } = useTodo();

  const submitHandler = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: todoTitle,
    };
    useCreateTodoMutation.mutate(newTodo);
  };

  const removeHandler = (todoId) => {
    console.log(todoId, "id founded");
    useRemoveTodoMutation.mutate(todoId);
  };
  return (
    <div>
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
            <button onClick={() => removeHandler(todo.id)}>Remove todo</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;
