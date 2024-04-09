import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo", 
    initialState: {
       todos: ["Hello world", "How are you"]
    },
    reducers: {
        addTodo: (state, action) => {
           state.todos.push(action.payload)
        },
        removeTodo: (state, action) => {
          state.todos = state.todos.filter((_, index)=> index !== action.payload)
        },
        updateTodo: (state, action) => {
           console.log(action.payload[1])
           state.todos[action.payload[0]] = action.payload[1]
        },
    }
    
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions;
export default todoSlice.reducer