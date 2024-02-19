import { nodeStatesType } from "@/interfaces/statesSlice";
import { zustandSlice } from "@/interfaces/zustandSlice";
import { StateCreator } from "zustand";

export const createZustandSlice: StateCreator<zustandSlice> = (set, get) => ({
    messages: [],
    saveMessage: (message: nodeStatesType) => {
        const messages = get().messages;
        messages.push(message);
        set({ messages })
    }
})