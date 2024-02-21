import { nodeStatesType } from "./statesSlice"

interface messageType extends nodeStatesType {
    id: string
}

export type zustandSlice = {
    messages: Array<messageType>
    saveMessage: (message: nodeStatesType) => void
}