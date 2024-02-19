import { configureStore } from "@reduxjs/toolkit";
import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { createZustandSlice } from "./slices/zustandSlice";
import { zustandSlice } from "@/interfaces/zustandSlice";
import statesReducer from '@/lib/slices/statesSlice'
import tipsReducer from '@/lib/slices/tipsSlice'

export const store = configureStore({
    reducer: {
        statesNode: statesReducer,
        tips: tipsReducer
    },
})
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


export const zustandStore = create<zustandSlice>()(
    persist(
      (...a) => ({
        ...createZustandSlice(...a),
      }),
      { name: '@connectly' },
    ),
  )