import { configureStore } from "@reduxjs/toolkit";
import movableSlice from "./movableSlice";


export const appStore = configureStore({
    reducer: {
        move: movableSlice
    }
})
