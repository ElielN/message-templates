import { activeTabActionType, changeTextActionType, nodeStatesType, nodeTextStatesType, toggleNodeActionType } from "@/interfaces/statesSlice";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const statesSlice = createSlice({
    name: 'states',
    initialState: {
        nodes: {
            headerNode: {
                active: false,
                fileType: 'image',
                file: '',
            },
            bodyNode: {
                active: true,
                text: '',
            },
            footerNode: {
                active: false,
                text: '',
            },
            buttonsNode: {
                active: false,
                buttons: [
                    { text: '' }
                ],
            }
        },
        activeTab: {
            tab: '',
            headerTitle: 'Create a Campaign'
        }
    },
    reducers: {
        toggleNode: (state, action: PayloadAction<toggleNodeActionType>) => {
            state.nodes[action.payload as keyof nodeStatesType].active = !state.nodes[action.payload as keyof nodeStatesType].active
        },
        changeText: (state, action: PayloadAction<{node: changeTextActionType, value: string}>) => {
            state.nodes[action.payload.node as keyof nodeTextStatesType].text = action.payload.value
        },
        changeHeaderImage: (state, action: PayloadAction<string>) => {
            state.nodes.headerNode.file = action.payload
        },
        changeButtonText: (state, action: PayloadAction<{idx: number, value: string}>) => {
            state.nodes.buttonsNode.buttons[action.payload.idx].text = action.payload.value
        },
        addButton: (state) => {
            const obj = { text: '' }
            state.nodes.buttonsNode.buttons.push(obj)
        },
        deleteButton: (state, action: PayloadAction<number>) => {
            const array = state.nodes.buttonsNode.buttons.filter((b, idx) => idx !== action.payload);
            state.nodes.buttonsNode.buttons = array
        },
        deleteNode: (state) => {
            state.nodes = {
                headerNode: {
                    active: false,
                    fileType: 'image',
                    file: '',
                },
                bodyNode: {
                    active: true,
                    text: '',
                },
                footerNode: {
                    active: false,
                    text: '',
                },
                buttonsNode: {
                    active: false,
                    buttons: [],
                }
            }
        },
        changeTab: (state, action: PayloadAction<activeTabActionType>) => {
            state.activeTab.tab = action.payload
        }
    }
})

export const { toggleNode, changeText, changeHeaderImage, changeTab, deleteNode, addButton, deleteButton, changeButtonText } = statesSlice.actions

export default statesSlice.reducer