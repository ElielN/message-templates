import { nodeStatesType } from "./statesSlice"

export type zustandSlice = {
    messages: Array<nodeStatesType>
    saveMessage: (message: nodeStatesType) => void
}