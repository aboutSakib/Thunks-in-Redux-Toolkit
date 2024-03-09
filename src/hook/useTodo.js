import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { createTodo, getAllTodos, removeTodo } from "../services/todos/index";

export const useTodo = () => {
  const client = useQueryClient();
  const { data, isError, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
  });

  const useCreateTodoMutation = useMutation({
    mutationFn: createTodo,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  const useRemoveTodoMutation = useMutation({
    mutationFn: removeTodo,
    onSuccess: () => {
      client.invalidateQueries({ queryKey: ["todos"] });
    },
  });

  return {
    data,
    isLoading,
    isError,
    error,
    useCreateTodoMutation,
    useRemoveTodoMutation,
  };
};
