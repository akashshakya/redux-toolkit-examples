// imported configurestore
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from './features/counter/counterSlice'

// created a store
export const store = configureStore({
    reducer : {
        counter : counterReducer,
    } //combining all reducers
})

// provide this store to react