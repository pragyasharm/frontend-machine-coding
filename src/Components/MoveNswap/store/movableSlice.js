import { createSlice } from "@reduxjs/toolkit";


const movableSlice = createSlice({
    name: "move",
    initialState: {
        leftComponent: ["length","Height","weight","fat"],
        rightComponent: ["blue","black", "red"]
    },
    reducers: {
        moveRight: (state,action) => {
            state.leftComponent.push(state.rightComponent[action.payload])
            state.rightComponent.splice(action.payload, 1);  
        },
        moveLeft: (state, action) => {
            state.rightComponent.push(state.leftComponent[action.payload])
            state.leftComponent.splice(action.payload, 1);
        },
    }
})

export const {moveRight, moveLeft} = movableSlice.actions
export default movableSlice.reducer