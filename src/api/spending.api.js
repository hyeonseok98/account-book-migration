import axios from "axios";

const SPENDING_BASE_URL = "https://jade-voracious-newsboy.glitch.me";

const spendingClient = axios.create({
  baseURL: SPENDING_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// Read
export const getSpendings = async () => {
  const response = await spendingClient.get("/spendings");
  return response.data;
};

// Create
export const createSpending = async (spending) => {
  const response = await spendingClient.post("/spendings", spending);
  return response.data;
};

// Update
export const updateSpending = async (id, newSpending) => {
  const response = await spendingClient.put(`/spendings/${id}`, newSpending);
  return response.data;
};

// Delete
export const deleteSpending = async (id) => {
  const response = await spendingClient.delete(`/spendings/${id}`);
  return response.data;
};
