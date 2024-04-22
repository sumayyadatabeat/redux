import { createSlice } from "@reduxjs/toolkit";


export const todoSlice=createSlice({
    name:"todo",
    initialState:["sleeping"],
    reducers:{
        addTodo:(state,action)=>{
            state.push(action.payload)
        }
    }

})

export const {addTodo}=todoSlice.actions

export default todoSlice.reducer;