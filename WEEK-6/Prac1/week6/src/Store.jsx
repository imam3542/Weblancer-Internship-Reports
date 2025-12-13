import { create } from "zustand";

export const useCountStore = create((set) => ({
  count: 0,
  increase: () => set((s) => ({ count: s.count + 1 }))
}));
