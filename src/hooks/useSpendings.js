import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  createSpending,
  deleteSpending,
  getSpendings,
  updateSpending,
} from "../api/spending.api";

// Read
export const useSpendings = () => {
  return useQuery({
    queryKey: ["spendings"],
    queryFn: getSpendings,
  });
};

// Create
export const useCreateSpending = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: createSpending,
    onSuccess: () => {
      queryClient.invalidateQueries(["spendings"]);
    },
  });
};

// Update
export const useUpdateSpending = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, newSpending }) => updateSpending(id, newSpending),
    onSuccess: () => {
      queryClient.invalidateQueries(["spendings"]);
    },
  });
};

// Delete
export const useDeleteSpending = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteSpending,
    onSuccess: () => {
      queryClient.invalidateQueries(["spendings"]);
    },
  });
};
