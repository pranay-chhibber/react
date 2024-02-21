import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos : [{id:1  , text: "Hello World!"}],
    
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        //@ state access the current initial state(abhi kya situation hai uski)
        //@ koi value aaaye kaise remove uske liye id vagera saari aciton se milengi 
        addTodo: (state,action) =>{
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },
        removeTodo: (state,action) =>{
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo , updateTodo} = todoSlice.actions

export default todoSlice.reducer