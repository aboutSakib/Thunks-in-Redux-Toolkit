// reducers/todoSlice.js
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initState = {
  loading: true,
  todos: [],
  error: "",
};

export const fetchTodos = createAsyncThunk("todos/fetchTodos", async () => {
  const response = await fetch(`http://localhost:5000/todos`);
  const todos = await response.json();
  return todos;
});

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async (todoObj) => {
    const res = await fetch(`http://localhost:5000/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todoObj),
    });
    const data = await res.json();
    return data;
  }
);

export const removeTodo = createAsyncThunk(
  "todos/removeTodo",
  async (todoID) => {
    await fetch(`http://localhost:5000/todos/${todoID}`, {
      method: "DELETE",
    });
    return todoID;
  }
);

export const todoSlice = createSlice({
  name: "todos",
  initialState: initState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.loading = false;
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createTodo.fulfilled, (state, action) => {
        state.todos.push(action.payload);
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
      });
  },
});
