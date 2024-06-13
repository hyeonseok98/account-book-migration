import { create } from "zustand";

const selectedMonthStore = create((set) => ({
  selectedMonth:
    parseInt(localStorage.getItem("selectedMonth"), 10) ||
    new Date().getMonth() + 1,

  setSelectedMonth: (selectedMonth) => set({ selectedMonth }),
}));

export default selectedMonthStore;
