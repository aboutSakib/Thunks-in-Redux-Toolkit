export const getAllTodos = async () => {
  try {
    const res = await fetch(`http://localhost:5000/todos`);
    const data = await res.json();
    return data;
  } catch (error) {}
};

export const createTodo = async (newTodo) => {
  return fetch(`http://localhost:5000/todos`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(newTodo),
  });
};

export const removeTodo = async (todoId) => {
  return fetch(`http://localhost:5000/todos/${todoId}`, {
    method: "DELETE",
  });
};
