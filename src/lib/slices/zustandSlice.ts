import { nodeStatesType } from "@/interfaces/statesSlice";
import { zustandSlice } from "@/interfaces/zustandSlice";
import { StateCreator } from "zustand";
import { v4 as uuidv4 } from 'uuid';
import { toast } from "react-toastify";

export const createZustandSlice: StateCreator<zustandSlice> = (set, get) => ({
    messages: [],
    saveMessage: (message: nodeStatesType) => {
        if (message.bodyNode.text.length === 0) {
            toast.error('Body message is required');
            return
        }
        const messages = get().messages;
        messages.push({ id: uuidv4(), ...message });
        set({ messages })
        toast.success('Message edited successfully!');
    }
})