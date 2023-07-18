import { create } from "zustand";

interface useStreamModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
};

export const useStoreModel = create<useStreamModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false } ),
}));

