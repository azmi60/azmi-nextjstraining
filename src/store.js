import create from "zustand";
import { persist } from "zustand/middleware";

export const useFavorites = create(
  persist((set) => {
    return {
      ids: [],
      add: (id) => set((state) => ({ ids: [...state.ids, id] })),
      remove: (id) =>
        set((state) => ({ ids: state.ids.filter((_id) => _id !== id) })),
    };
  })
);

