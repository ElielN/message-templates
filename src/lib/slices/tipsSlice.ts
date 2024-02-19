import { createSlice } from "@reduxjs/toolkit";

const tipsSlice = createSlice({
    name: 'tips',
    initialState: {
        tipsEnabled: true
    },
    reducers: {
        toggleTips: (state) => {
            state.tipsEnabled = !state.tipsEnabled
        }
    }
})

export const { toggleTips } = tipsSlice.actions

export default tipsSlice.reducer