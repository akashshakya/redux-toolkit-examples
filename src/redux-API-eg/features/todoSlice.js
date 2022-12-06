import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const API_URL = "https://jsonplaceholder.typicode.com/todos";

export const todoSlice = createSlice({
    name : "todo",
    initialState : {
        data : []
    },
    reducers : {
        addTodo : (state, action) => {
            state.data.push(action.payload)
        },
        getTodo : (state, action) => {
            state.data = [action.payload]
        }
    }
});

export const getTodoAsync = (data) => async (dispatch) => {
    try {
        const response = await axios.get(`${API_URL}/${data}`);
        console.log(response)
        dispatch(getTodo(response.data))
    } catch (error) {
        throw new Error(error)
    }
}

export const addTodoAsync = (data) => async (dispatch) => {
    try {
        const response = await axios.post(API_URL, data)
        console.log(response)

        dispatch(addTodo(response.data))
    } catch (error) {
        throw new Error(error)
    }
}

export const {addTodo, getTodo} = todoSlice.actions

export const showTodoState = (state) => state.todo.data

export default todoSlice.reducer