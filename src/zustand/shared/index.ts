import { create } from "zustand";

interface ISharedStore {
  isOpen: boolean;
  setIsOpen: (value: boolean) => void;
}

export const useShardStore = create<ISharedStore>((set) => ({
  isOpen: false,
  setIsOpen: (value: boolean) => set({ isOpen: value }),
}));
